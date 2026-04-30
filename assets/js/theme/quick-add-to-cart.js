import utils from '@bigcommerce/stencil-utils';

export default class QuickAddToCart {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.fetchVariantsForAllCards();
    }

    fetchVariantsForAllCards() {
        // Wait for DOM to be ready, then fetch variants for all cards
        $(document).ready(() => {
            // First, check cart and update quantities
            // Add a delay to ensure cards are fully loaded
            this.updateQuantitiesFromCart();
            
            // Then fetch variants for all cards
            this.processAllCards();
            
            // Set up pagination listener
            this.setupPaginationListener();
        });
    }

    processAllCards() {
        document.querySelectorAll('.card[data-entity-id]').forEach(card => {
            const productId = card.dataset.entityId;
            
            // Use utils.api.productAttributes.optionChange to get product info
            const formData = '';
            if(!card.classList.contains('data-customized')){
                card.classList.add('data-customized');
                utils.api.productAttributes.optionChange(productId, formData, (err, response) => {
                    if (err) {
                        console.error('Error getting product attributes for product', productId, ':', err);
                        return;
                    }
                    
                    //console.log('Product attributes response for product', productId, ':', response);
                    
                    // Extract variant data from response
                    let allVariantData = '';
                    if (response && response.data && response.data.variants) {
                        allVariantData = response.data.variants;
                    } else if (response && response.variants) {
                        allVariantData = response.variants;
                    } else if (response && response.data) {
                        allVariantData = response.data;
                    }

                    let stockLevel = 0;
                    card.setAttribute('data-stock-level', stockLevel);
                    if (response && response.data && response.data.stock) {
                        stockLevel = response.data.stock;
                        card.setAttribute('data-stock-level', stockLevel);
                    }
                    
                    //console.log('All variants details for product', productId, ':', allVariantData);
                    
                    // Store variant data on the card
                    if (allVariantData) {
                        //card.setAttribute('data-variants', JSON.stringify(allVariantData));
                    }
                    
                    // Extract SKU from first variant
                    let sku = '';
                    if (allVariantData && allVariantData.length > 0) {
                        sku = allVariantData[0].sku || '';
                    } else if (response && response.data && response.data.sku) {
                        sku = response.data.sku;
                    } else if (response && response.sku) {
                        sku = response.sku;
                    }

                    let v3_variant_id = '';
                    if(allVariantData && allVariantData.v3_variant_id){
                        v3_variant_id = allVariantData.v3_variant_id;
                    }
                    
                    //console.log('Extracted SKU for product', productId, ':', sku);
                    //console.log('productId: ', productId);
                    //console.log('v3_variant_id: ', v3_variant_id);
                    card.querySelector('[data-test-info-type="brandName"]').append(' - ',sku);

                    // Store first variant SKU on the card
                    if (v3_variant_id) {
                        card.setAttribute('data-v3_variant_id', v3_variant_id);
                    }

                    // Store first variant SKU on the card
                    if (sku) {
                        card.setAttribute('data-first-variant-sku', sku);
                    }
                });
            }

        });
    }

    setupPaginationListener() {
        // Listen for pagination clicks
        $(document).on('click', '.pagination a, .pagination-link, .page-link, [data-pagination]', (e) => {
            console.log('Pagination clicked, waiting for new products to load...');
            
            // Store current product count to detect when new products load
            const currentProductCount = document.querySelectorAll('.card[data-entity-id]').length;
            console.log('Current product count:', currentProductCount);
            
            // Poll for new products to load
            let attempts = 0;
            const maxAttempts = 20; // 10 seconds max wait
            const checkInterval = setInterval(() => {
                attempts++;
                const newProductCount = document.querySelectorAll('.card[data-entity-id]').length;
                
                console.log(`Attempt ${attempts}: Product count is ${newProductCount}`);
                
                // Check if new products have loaded (count changed or page content updated)
                if (newProductCount !== currentProductCount || attempts > 5) {
                    console.log('New products detected or timeout reached, reinitializing quick-add-to-cart');
                    
                    // Clear the interval
                    clearInterval(checkInterval);
                    
                    // Wait a bit more for content to settle
                    setTimeout(() => {
                        this.updateQuantitiesFromCart();
                        this.processAllCards();
                        console.log('Quick-add-to-cart reinitialized after pagination');
                    }, 500);
                }
                
                // Stop after max attempts
                if (attempts >= maxAttempts) {
                    clearInterval(checkInterval);
                    console.log('Pagination timeout reached, proceeding with current products');
                    setTimeout(() => {
                        this.updateQuantitiesFromCart();
                        this.processAllCards();
                    }, 500);
                }
            }, 500); // Check every 500ms
        });

        // Also listen for AJAX pagination or infinite scroll
        const observer = new MutationObserver((mutations) => {
            let shouldReinit = false;
            
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    // Check if new product cards were added
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            if (node.classList && node.classList.contains('card')) {
                                shouldReinit = true;
                            } else if (node.querySelector && node.querySelector('.card')) {
                                shouldReinit = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldReinit) {
                console.log('New product cards detected via MutationObserver, reinitializing quick-add-to-cart');
                setTimeout(() => {
                    this.updateQuantitiesFromCart();
                    this.processAllCards();
                }, 500);
            }
        });

        // Start observing the product grid/container
        const productContainer = document.querySelector('.productGrid, .product-list, .category-products, [data-product-grid]');
        if (productContainer) {
            observer.observe(productContainer, {
                childList: true,
                subtree: true
            });
        }
    }

    async updateQuantitiesFromCart() {
        //console.log('QuickAddToCart: updateQuantitiesFromCart() called');
        return utils.api.cart.getCart({}, async (err, response) => {
            if (err) {
                console.error('Error getting cart:', err);
                return;
            }

            // Handle different response structures
            var getCartItems = [];
            if (response && response.lineItems && response.lineItems.physicalItems) {
                getCartItems = response.lineItems.physicalItems;
            } else if (response && Array.isArray(response)) {
                getCartItems = response;
            } else if (response && response.length > 0) {
                getCartItems = response;
            }

            console.log('getCartItems:', getCartItems);
            console.log('Cart response:', response);
            
            if (getCartItems.length === 0) {
                console.log('No items in cart');
                return;
            }
            
            // Process items sequentially with await
            for (const item of getCartItems) {
                console.log('Processing item:', item);

                const productId = item.productId;
                const quantity = item.quantity;

                if($(`.card[data-entity-id="${productId}"]`)){
                    const $card = $(`.card[data-entity-id="${productId}"]`);
                    await new Promise(resolve => {
                        $card.find('.quick-qty-input-field').val(quantity);
                        resolve(); // Ensure the value is set before continuing
                    });
                }
            }
            
            console.log('All quantities updated');
        });
    }

    bindEvents() {
        $(document).on('click', '.quick-increment-button', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const $button = $(e.target);
            const $card = $button.closest('.card');
            const productId = $card.data('entity-id');
            const $qtyInput = $card.find('.quick-qty-input-field');
            const $loader = $card.find('.quick-loader');
            const $incrementBtn = $card.find('.quick-increment-button');
            const $decrementBtn = $card.find('.quick-decrement-button');
            const getCurrentQty = parseInt($qtyInput.val()) || 0;
            
            //console.log('Product ID:', productId);
            //console.log('Current Qty:', getCurrentQty + 1);
            

            function enableLoader(){
                // Show loader and disable buttons/input
                $loader.show();
                $qtyInput.prop('disabled', true);
                $incrementBtn.prop('disabled', true);
                $decrementBtn.prop('disabled', true);     
            }
            function disableLoader(){
                // Hide loader and enable buttons/input
                $loader.hide();
                $qtyInput.prop('disabled', false);
                $incrementBtn.prop('disabled', false);
                $decrementBtn.prop('disabled', false);
            }

            enableLoader();
            
            // Get SKU using utils.api.productAttributes method
            const formData = {
                action: 'add',
                product_id: productId,
                qty: [getCurrentQty + 1]
            };
            
            utils.api.productAttributes.optionChange(productId, formData, (err, response) => {

                if (response.data.instock == false) {
                    console.error('Product is out of stock');
                    disableLoader();
                    return;
                }

                if (err) {
                    console.error('Error getting product attributes:', err);
                    return;
                }
                
                //console.log('Product attributes response:', response);
                
                // Extract all variant details from response
                let allVariantData = '';
                if (response && response.data && response.data.variants) {
                    allVariantData = response.data.variants;
                } else if (response && response.variants) {
                    allVariantData = response.variants;
                } else if (response && response.data) {
                    allVariantData = response.data;
                }
                
                //console.log('All variants details via SKU:', allVariantData);
                
                // Extract SKU from first variant
                let sku = '';
                if (allVariantData && allVariantData.length > 0) {
                    sku = allVariantData[0].sku || '';
                } else if (response && response.data && response.data.sku) {
                    sku = response.data.sku;
                } else if (response && response.sku) {
                    sku = response.sku;
                }
                
                console.log('Extracted SKU:', sku);
                
                // Add product to cart via GET request
                return $.get("/cart.php?action=add&product_id=" + productId + "&qty=1&sku=" + sku)
                    .done((data, status, xhr) => {
                        disableLoader();
                        // Increment the quantity
                        $qtyInput.val(getCurrentQty + 1);

                        console.log('Product added to cart with status ' + status);
                        // Update cart count in header
                        this.updateCartCount();
                        // Show success message
                        this.showSuccessMessage($card.find('.quick-add-to-cart'));
                    })
                    .fail((xhr, status, error) => {
                        console.error('Error adding to cart with status ' + status + ' and error:', error);
                    });
            });
        });

        // Decrement button click handler
        $(document).on('click', '.quick-decrement-button', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const $button = $(e.target);
            const $card = $button.closest('.card');
            const productId = $card.data('entity-id');
            const $qtyInput = $card.find('.quick-qty-input-field');
            const $loader = $card.find('.quick-loader');
            const $incrementBtn = $card.find('.quick-increment-button');
            const $decrementBtn = $card.find('.quick-decrement-button');
            const getCurrentQty = parseInt($qtyInput.val()) || 0;
            
            console.log('Product ID:', productId);
            console.log('Current Qty:', getCurrentQty);
            
            // Don't decrement if already at 0
            if (getCurrentQty <= 0) {
                return;
            }
            
            // Show loader and disable buttons/input
            $loader.show();
            $qtyInput.prop('disabled', true);
            $incrementBtn.prop('disabled', true);
            $decrementBtn.prop('disabled', true);
            
            // Check if product is in cart
            utils.api.cart.getCart({}, (err, response) => {

                if (err) {
                    console.error('Error getting cart:', err);
                    return;
                }
                
                
                // Check if response has physical items
                if (!response || !response.lineItems || !response.lineItems.physicalItems) {
                    console.log('Invalid cart response or no physical items in cart');
                    return;
                }
                
                // Check if product exists in cart - use physicalItems structure
                const cartItems = response.lineItems.physicalItems;
                const productInCart = cartItems.find(item => item.productId == productId);
                
                //console.log('Cart items:', cartItems);
                //console.log('Product in cart:', productInCart);
                
                if (!productInCart || productInCart.quantity <= 0) {
                    // Product not in cart, do nothing
                    console.log('Product not in cart, doing nothing');
                    return;
                }
                
                // Product is in cart, remove it and re-add with updated quantity
                const newQty = getCurrentQty - 1;
                
                console.log('Removing product from cart and re-adding with quantity:', newQty);
                
                // Remove product from cart using cart item ID
                utils.api.cart.itemRemove(productInCart.id, (removeErr, removeResponse) => {
                    if (removeErr) {
                        console.error('Error removing item from cart:', removeErr);
                        return;
                    }

                    // Hide loader and enable controls regardless of outcome
                    $loader.hide();
                    $qtyInput.prop('disabled', false);
                    $incrementBtn.prop('disabled', false);
                    $decrementBtn.prop('disabled', false);
                    
                    console.log('Item removed from cart');
                    
                    // Update quantity display
                    $qtyInput.val(newQty);
                    
                    if (newQty > 0) {
                        // Re-add product with new quantity
                        this.addProductToCart(productId, newQty, $card, $loader, $qtyInput, $incrementBtn, $decrementBtn);
                    } else {
                        // Quantity is 0, update cart count in header
                        this.updateCartCount();
                    }
                });
            });
        });
    }

    addProductToCart(productId, quantity, $card, $loader, $qtyInput, $incrementBtn, $decrementBtn) {
        // Get SKU using utils.api.productAttributes method
        const formData = {
            action: 'add',
            product_id: productId,
            qty: [quantity]
        };
        
        utils.api.productAttributes.optionChange(productId, formData, (err, response) => {
            // Hide loader and enable buttons/input
            $loader.hide();
            $qtyInput.prop('disabled', false);
            $incrementBtn.prop('disabled', false);
            $decrementBtn.prop('disabled', false);

             if (response.data.instock == false) {
                console.log('Product is out of stock');
            }
            
            if (err) {
                console.error('Error getting product attributes:', err);
                return;
            }
            
            // Extract SKU from response
            let sku = '';
            if (response && response.data && response.data.sku) {
                sku = response.data.sku;
            } else if (response && response.sku) {
                sku = response.sku;
            }
            
            console.log('Extracted SKU:', sku);
            
            // Add product to cart via GET request
            return $.get("/cart.php?action=add&product_id=" + productId + "&qty=" + quantity + "&sku=" + sku)
                .done((data, status, xhr) => {
                    console.log('Product added to cart with status ' + status);
                    // Update cart count in header
                    this.updateCartCount();
                    // Show success message
                    this.showSuccessMessage($card.find('.quick-add-to-cart'));
                })
                .fail((xhr, status, error) => {
                    console.error('Error adding to cart with status ' + status + ' and error:', error);
                });
        });
    }

    updateCartCount() {
        // Update cart count natively using BigCommerce's cart API
        utils.api.cart.getCart({}, (err, response) => {
            if (err) {
                console.error('Error getting cart for count update:', err);
                return;
            }
            
            // Calculate total quantity from cart items
            let totalQuantity = 0;
            if (response && Array.isArray(response)) {
                response.forEach(item => {
                    totalQuantity += item.quantity || 0;
                });
            }
            
            // Update cart count elements
            const $cartCount = $('.cart-count');
            if ($cartCount.length > 0) {
                $cartCount.text(totalQuantity);
            }
            
            // Also update any other cart count indicators
            $('[data-cart-quantity]').text(totalQuantity);
        });
    }

    showSuccessMessage($container) {
        const $message = $container.find('.quick-message');
        $message.removeClass('error').addClass('success').text('Added to cart');
        $message.show();
        
        setTimeout(() => {
            $message.fadeOut();
        }, 3000);
    }
}
