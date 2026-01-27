import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import modalFactory, { alertModal, showAlertModal } from '../global/modal';
// Removed invalid core-js setTimeout import; using native setTimeout

export default function ($scope, context) {

    const $form = $('form[data-cart-item-add]', $scope);
    const $cardId = context.cartId;
    var outofstock = false;
    
    //console.log("Bulk Add to Cart JS Loaded");
    //console.log("Context:", $cardId);
    //console.log("Scope:", $scope);
    var alertBoxAll = document.querySelectorAll('.alertBox-message');
    alertBoxAll.forEach(alertBox => {
        if(alertBox.textContent.toLowerCase().includes('out of stock')) {
            outofstock = true;
            document.querySelector('.product-data').classList.add('out-of-stock');
        }
    });

    if(document.querySelector('[data-product-option-change]') && document.querySelector('.productView-options input[type="radio"]') && outofstock !== true){

        /* Bulk Add to Cart Form */
        var currentProductOptions = document.querySelector('.productView-options');
        var dataProductOptionChange = document.querySelector('[data-product-option-change]');
        currentProductOptions.insertAdjacentHTML('afterend', `<div class="bulk-add-to-cart-action">
            <h4 class="bulk-add-to-cart-title">Bulk Add to Cart</h4>
            ${dataProductOptionChange.outerHTML}
            <div class="custom-add-to-cart-button">
                <button type="button" class="button button--primary" id="BulkaddToCart" onclick="bulkAddtoCartAction(event);">
                    Bulk Add to Cart
                </button>
            </div>
            <!--open custom modal-->
            <div class="modal-button-container" style="display:none;">
                <a class="button" href="#quickCheckoutModal" data-reveal-id="quickCheckoutModal">quickCheckoutModal</a>
            </div>
            <div id="quickCheckoutModal" class="modal modal--large" data-reveal>
                <a href="#" class="modal-close modal-close-reload" aria-label="{{lang 'common.close'}}" role="button">
                    <span aria-hidden="true">&#215;</span>
                </a>
                <div class="modal-content"></div>
                <div class="loadingOverlay"></div>
            </div>
        </div>`);

        var getWishlistBtn = document.querySelector('form.form-wishlist');
        if (getWishlistBtn) {
            var bulkAddtoCartButton = document.querySelector('#BulkaddToCart');
            // Move wishlist button next to bulk add to cart button, preserving events
            bulkAddtoCartButton.parentNode.insertBefore(getWishlistBtn, bulkAddtoCartButton.nextSibling);
        }

        document.querySelectorAll('.form-option-wrapper').forEach(formOptionWrapper => {
            formOptionWrapper.classList.add('loader');
        })

        var getOptionForm = document.querySelector('.bulk-add-to-cart-action');
        getOptionForm.classList.add('bulk-option-form');
        var allVariantIds = getOptionForm.querySelectorAll('input[type="radio"]');
        // Wait for all getVariantStock calls to complete, then log
        Promise.all(Array.from(allVariantIds).map(radio => getVariantStock(radio))).then(() => {
            //console.log('All variant stock loaded');
            getCartDetails();
        });
    }

    // Make increaseQuantity globally accessible for inline onclick handlers
    window.increaseQuantity = function(btn){
        var bulkQuantityInput = btn.closest('.bulk-add-to-cart-action').querySelector('.bulk-quantity-input');
        var currentQty = parseInt(bulkQuantityInput.value);
        var maxQty = parseInt(bulkQuantityInput.getAttribute('max'));
        if(currentQty < maxQty){
            bulkQuantityInput.value = currentQty + 1;
            bulkQuantityInput.closest('.form-option-wrapper').querySelector('.form-radio').classList.add('changed');
        }
    };

    window.decreaseQuantity = function(btn){
        var bulkQuantityInput = btn.closest('.bulk-add-to-cart-action').querySelector('.bulk-quantity-input');
        var currentQty = parseInt(bulkQuantityInput.value);
        var minQty = parseInt(bulkQuantityInput.getAttribute('min'));
        if(currentQty > minQty){
            bulkQuantityInput.value = currentQty - 1;
            bulkQuantityInput.closest('.form-option-wrapper').querySelector('.form-radio').classList.add('changed');
        }
    };

    window.bulkQuantityChangeHandler = function(input){
        var bulkQuantityInput = input;
        var currentQty = parseInt(bulkQuantityInput.value);
        var maxQty = parseInt(bulkQuantityInput.getAttribute('max'));
        if(currentQty > maxQty){
            bulkQuantityInput.value = maxQty;
            bulkQuantityInput.closest('.form-radio').classList.add('changed');
        }
    }

    function getVariantStock(radio){
        return new Promise((resolve) => {
            var variantId = radio.getAttribute('value');
            var variantName = radio.getAttribute('name');
            var productId = $('[name="product_id"]', $form).val();
            var formData = $form.serialize();
            formData += '&'+encodeURIComponent(variantName)+'=' + encodeURIComponent(variantId);

            utils.api.productAttributes.optionChange(productId, formData, (err, response) => {
                if (err) {
                    console.error("Error updating product attributes:", err);
                    resolve();
                } else {
                    //console.log(" utils.api.productAttributes.optionChange:", response);
                    var getVariantStock = response.data.stock;
                    if(getVariantStock === null){
                        getVariantStock = 0;
                    }
                    var getVariantSKU = response.data.sku;

                    /* Bulk AddtoCart Form */
                    bulkAddtoCartForm(radio);

                    /* setAttribute Stock and SKU */
                    document.querySelector('.bulk-option-form input[value="'+variantId+'"]').setAttribute('data-stock', getVariantStock);
                    document.querySelector('.bulk-option-form input[value="'+variantId+'"]').setAttribute('data-sku', getVariantSKU);

                    /* Variant Image id any */
                    if(response.data.image){
                        var imageUrl = response.data.image.data.replace('{:size}', '360w');
                        document.querySelector('.bulk-option-form input[value="'+variantId+'"]').setAttribute('data-image', imageUrl);
                        document.querySelector('.bulk-option-form input[value="'+variantId+'"]').setAttribute('data-image-alt', response.data.image.alt);
                    }

                    var getVariantLabel = document.querySelector('.bulk-option-form input[value="'+variantId+'"] ~ label .form-option-variant').textContent;

                    /* Update Variant Label and Stock Info */
                    document.querySelector('.bulk-option-form input[value="'+variantId+'"] ~ label .form-option-variant').innerHTML = 'Size: '+getVariantLabel + '<br> In stock: ' + getVariantStock + '';
                    document.querySelector('.bulk-option-form input[value="'+variantId+'"]').setAttribute('data-size', getVariantLabel );

                    /* setAttribute Stock Info */
                    document.querySelector('.bulk-option-form input[value="'+variantId+'"] ~ .bulk-add-to-cart-action .bulk-quantity-input').setAttribute('max', getVariantStock);
                    resolve();
                }
            });   
        });
    }

    function bulkAddtoCartForm(radio){
        //console.log("Bulk AddtoCart Form Function", radio);
        var formOptionWrapper = radio.closest('.form-option-wrapper');
        formOptionWrapper.insertAdjacentHTML('beforeend', `
            <div class="bulk-add-to-cart-action">
                <input type="text" class="bulk-quantity-input" name="bulk-quantity" value="0" min="0" onchange="bulkQuantityChangeHandler(this)" />
                <div class="bulk-quantity-controls">
                    <button type="button" class="decreaseQtyBtn" onclick="decreaseQuantity(this)">-</button>
                    <button type="button" class="increaseQtyBtn" onclick="increaseQuantity(this)">+</button>
                </div>
            </div>
        `);
    }

    window.bulkAddtoCartAction = function(event){
        
        var bulkOptionForm = Array.from(document.querySelectorAll('.bulk-option-form input[type="radio"]'));

        /* configure and Open Bulk Add to cart Modal */
        const quickCheckoutModalContent = document.querySelector('#quickCheckoutModal .modal-content');
        const quickCheckoutModalAnchor = document.querySelector('[data-reveal-id="quickCheckoutModal"]');
        var modelProductHTML = `
        <div class="modal-header">
            <h3>Bulk Add to Cart Summary</h3>
        </div>
        <div class="modal-body">
            <div class="modal-product-list">
            </div>
        </div>
        <div class="modal-footer">
            <button class="modal-close-reload button button--primary" data-close aria-label="Close modal" >Close</button>
        </div>
        `;

        // Reload page when modal is closed
        setTimeout(() => {
            const closeBtn = document.querySelectorAll('.modal-close-reload');
            closeBtn.forEach(closeBtn => {
                closeBtn.addEventListener('click', function() {
                    location.reload();
                });
            });
        }, 0);

        var requests = bulkOptionForm.map(radio => {
            var getVariantId = parseInt(radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('value'));
            var quantityToAdd = parseInt(radio.closest('.form-option-wrapper').querySelector('.bulk-quantity-input').value);
            var quantityAlreadyInCart = parseInt(radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-cart-qty')) || null;
            var getVariantSize = radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-size');
            
            //console.log("radio:", radio);
            var statusText = 'Adding Item';

            /* Check if product variant has changed or added to cart */
            if(quantityToAdd == 0){
                statusText = 'Removing Item';
            }
            else if(quantityAlreadyInCart !== null){
                statusText = 'Updating Item';
            }

            if(radio.classList.contains('changed')){
                var getVariantImage = radio.parentElement.querySelector('input[type="radio"]').getAttribute('data-image');
                if(getVariantImage == null || getVariantImage == undefined){
                    /* Get Bigcommerce Default Image */
                    //getVariantImage = document.querySelector('.productView-image[data-default-image-url]').getAttribute('data-default-image-url');
                    /* Get Main Product Image */
                    //getVariantImage = document.querySelector('.productView-thumbnails img').getAttribute('data-srcset').split('?c=1')[0];
                }
                var modelProductItemHTML = ``;
                modelProductItemHTML = `<div class="productItem loader" data-variant-id="${getVariantId}">
                    <div class="productImage" style="display:none;">
                        <img src="${getVariantImage}" alt="${radio.getAttribute('data-image-alt')}" />
                    </div>
                    <div class="productInfo">
                        <div class="productTitle">
                            ${document.querySelector('.productView-title').textContent}
                        </div>
                        <div class='productVariant'>
                            Size: ${getVariantSize}
                        </div>
                        <div class="productQuantity">
                            Quantity: ${quantityToAdd}
                        </div>
                        <div class="productVariantStatus button button--primary">
                            ${statusText}...
                        </div>
                    </div>
                </div>`;

                setTimeout(() => {
                    if(document.querySelector('#quickCheckoutModal .modal-product-list')){
                        document.querySelector('#quickCheckoutModal .modal-product-list').insertAdjacentHTML('beforeend', modelProductItemHTML);
                    }
                }, 500);
                //console.log("getVariantId:", getVariantId , " quantityToAdd:", quantityToAdd);
            }
            //console.log("modelProductHTML:", modelProductHTML);
            modelProductHTML += ``;
            quickCheckoutModalContent.innerHTML = modelProductHTML;
        });

        // Prepare requests to be executed sequentially
        
        var requests = bulkOptionForm.map(radio => {
            var quantityToAdd = parseInt(radio.closest('.form-option-wrapper').querySelector('.bulk-quantity-input').value);
            var getVariantId = parseInt(radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('value'));
            var getVariantSKU = radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-sku');
            var getVariantStock = parseInt(radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-stock'));
            var getCartItemId = 
            radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-cart-itemid');
            var getVariantSize = radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-size');

            var quantityAlreadyInCart = parseInt(radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-cart-qty')) || null;
            //console.log('Status Check: getVariantSKU:', getVariantSKU, 'getVariantSize: ', getVariantSize, 'getVariantId: ', getVariantId,'quantityAlreadyInCart:', quantityAlreadyInCart, 'getCartItemId:', getCartItemId , ' quantityToAdd:', quantityToAdd , ' getVariantStock:', getVariantStock);


            if(quantityToAdd > 0 && quantityToAdd > getVariantStock){
                // when quantity doesnt meet stock limit
                const tmp = document.createElement('DIV');
                tmp.innerHTML = '<h3>Item Exceeds stock</h3>';
                radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').classList.add('error');
                document.querySelector('.bulk-option-form').classList.add('exceeds-stock');
                return showAlertModal(tmp.textContent || tmp.innerText);
            }
            else if(quantityToAdd > 0 && quantityToAdd <= getVariantStock && quantityAlreadyInCart == null && getCartItemId == null){
                //console.log('Adding item to cart: getVariantSKU: ', getVariantSKU , 'getVariantId: ' , getVariantId, ' quantityToAdd:', quantityToAdd);
                quickCheckoutModalAnchor.click();

                return function() {
                    return $.get("/cart.php?action=add&product_id=" + getVariantId + "&qty=" + quantityToAdd + "&sku=" + getVariantSKU)
                        .done(function(data, status, xhr) {
                            //console.log('item complete with status ' + status);
                            removeLoaderfromModalItem(getVariantId);
                        })
                        .fail(function(xhr, status, error) {
                            //console.log('oh noes, error with status ' + status + ' and error: ');
                            console.error(error);
                        });
                };
            } else if(quantityToAdd <= getVariantStock && quantityAlreadyInCart !== null && getCartItemId !== null && quantityToAdd !== quantityAlreadyInCart){
                //console.log('Modify item to cart: getVariantSKU: ', getVariantSKU , 'getVariantId: ' , getVariantId, ' quantityToAdd:', quantityToAdd);
                // remove item and add again in cart with updated quanity in cart
                quickCheckoutModalAnchor.click();

                return function() {
                    return utils.api.cart.itemUpdate(getCartItemId, quantityToAdd, (err, response) => {
                        if (err) {
                            console.error('Error updating cart item:', err);
                        } else {
                            console.log('Cart item updated:', response.data.status);
                            removeLoaderfromModalItem(getVariantId);
                        }
                    });
                };
            }
            radio.classList.remove('changed')
             
        }).filter(Boolean);

        // Helper to run promises sequentially with 500ms delay between each
        function runSequentially(tasks) {
            return tasks.reduce((promise, task) => {
            return promise.then(() => {
                return task().then(() => new Promise(resolve => setTimeout(resolve, 500)));
            });
            }, Promise.resolve());
        }

        // Ensure each request returns a Promise
        runSequentially(requests.map(fn => () => Promise.resolve(fn()))).then(function() {
            console.log('All bulk add-to-cart requests completed.');
        });
        
    }

    function removeLoaderfromModalItem(variantId){
        if(document.querySelector('#quickCheckoutModal .modal-product-list .productItem[data-variant-id="'+variantId+'"]')){
            document.querySelector('#quickCheckoutModal .modal-product-list .productItem[data-variant-id="'+variantId+'"]').classList.remove('loader');

            var productVariantStatus = document.querySelector('#quickCheckoutModal .modal-product-list .productItem[data-variant-id="'+variantId+'"] .productVariantStatus');
            if(productVariantStatus.textContent.includes('Adding')){
                productVariantStatus.textContent = 'Item Added';
            }
            else if(productVariantStatus.textContent.includes('Updating')){
                productVariantStatus.textContent = 'Item Updated';
            }
            else if(productVariantStatus.textContent.includes('Removing')){
                productVariantStatus.textContent = 'Item Removed';
            }
        }

    }

    function getCartDetails(){
        return new Promise((resolve) => {
            /* Check if cart has this item, get qty */
            if($cardId){
                utils.api.cart.getCart({}, (err, response) => {
                    //console.log('utils.api.cart.getCart:',response.lineItems);

                    var getCartItems = response.lineItems.physicalItems;
                    getCartItems.forEach(item => {
                        var getCartSku = item.sku;
                        if(document.querySelector('.bulk-option-form input[data-sku="'+getCartSku+'"]')){
                            //console.log("Cart SKU:", item.sku, " Cart Item Qty:", item.quantity);
                            var getVariantInput = document.querySelector('.bulk-option-form input[data-sku="'+getCartSku+'"]');
                            getVariantInput.setAttribute('data-cart-qty', item.quantity);
                            //console.log(getVariantInput.parentElement.querySelector('input[name="bulk-quantity"]'));
                            getVariantInput.parentElement.querySelector('input[name="bulk-quantity"]').value = item.quantity;
                            getVariantInput.setAttribute('data-cart-itemid', item.id);
                        }
                        //document.querySelector('.bulk-option-form input[data-sku="14L762-7"]');
                    });
                    resolve();
                });
            }
            else{
                document.querySelectorAll('.form-option-wrapper.loader').forEach(formWrapper => {
                    formWrapper.classList.remove('loader');
                    b2b_button_relocation();
                });
            }
        }).then(() => {
            document.querySelectorAll('.form-option-wrapper.loader').forEach(formWrapper => {
                formWrapper.classList.remove('loader');
                b2b_button_relocation();
            });
        });
    }

}

function b2b_button_relocation() { 
    setTimeout(() => {
        var b2b_add_to_cart_quote_button = document.querySelector('.add-to-cart-buttons .b2b-add-to-quote');
        if (b2b_add_to_cart_quote_button) {
            var bulkAddtoCartButton = document.querySelector('#BulkaddToCart');
            // Move b2b add to list button next to bulk add to cart button, preserving events
            bulkAddtoCartButton.parentNode.insertBefore(b2b_add_to_cart_quote_button, bulkAddtoCartButton.nextSibling);
        }
        var b2b_add_to_cart_list_button = document.querySelector('.add-to-cart-buttons .b2b-add-to-list');
        if (b2b_add_to_cart_list_button) {
            var bulkAddtoCartButton = document.querySelector('#BulkaddToCart');
            // Move b2b add to list button next to bulk add to cart button, preserving events
            bulkAddtoCartButton.parentNode.insertBefore(b2b_add_to_cart_list_button, bulkAddtoCartButton.nextSibling);
        }
    }, 1000);
}