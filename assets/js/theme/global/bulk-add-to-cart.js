import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import modalFactory, { alertModal, showAlertModal } from '../global/modal';

export default function ($scope, context) {

    const $form = $('form[data-cart-item-add]', $scope);
    const $cardId = context.cartId;

    console.log("Bulk Add to Cart JS Loaded");
    console.log("Context:", $cardId);
    console.log("Scope:", $scope);

    if(document.querySelector('[data-product-option-change]') && document.querySelector('.productView-options input[type="radio"]')){

        /* Bulk Add to Cart Form */
        var currentProductOptions = document.querySelector('.productView-options');
        var dataProductOptionChange = document.querySelector('[data-product-option-change]');
        currentProductOptions.insertAdjacentHTML('afterend', `<div class="bulk-add-to-cart-action">
            <h3>Bulk Add to Cart</h3>
            ${dataProductOptionChange.outerHTML}
            <div class="custom-add-to-cart-button">
                <button type="button" class="button button--primary" id="form-action-addToCart" onclick="bulkAddtoCartAction(event);">
                    Bulk Add to Cart
                </button>
            </div>
            <!--open custom modal-->
            <div class="modal-button-container">
                <a class="button" href="#uniqueID" data-reveal-id="uniqueID">Show me the Modal</a>
            </div>
            <div id="uniqueID" class="modal modal--large" data-reveal>
                <a href="#" class="modal-close" aria-label="{{lang 'common.close'}}" role="button">
                    <span aria-hidden="true">&#215;</span>
                </a>
                <div class="modal-content"></div>
                <div class="loadingOverlay"></div>
            </div>
        </div>`);

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
        }
    };

    window.decreaseQuantity = function(btn){
        var bulkQuantityInput = btn.closest('.bulk-add-to-cart-action').querySelector('.bulk-quantity-input');
        var currentQty = parseInt(bulkQuantityInput.value);
        var minQty = parseInt(bulkQuantityInput.getAttribute('min'));
        if(currentQty > minQty){
            bulkQuantityInput.value = currentQty - 1;
        }
    };

    window.bulkQuantityChangeHandler = function(input){
        var bulkQuantityInput = input;
        var currentQty = parseInt(bulkQuantityInput.value);
        var maxQty = parseInt(bulkQuantityInput.getAttribute('max'));
        if(currentQty > maxQty){
            bulkQuantityInput.value = maxQty;
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
                    console.log(" utils.api.productAttributes.optionChange:", response);
                    var getVariantStock = response.data.stock;
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
        const uniqueIDModal = document.querySelector('[data-reveal-id="uniqueID"]');
        //uniqueIDModal.click();

        var requests = bulkOptionForm.map(radio => {
            var getVariantId = radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('value');
            var quantityToAdd = radio.closest('.form-option-wrapper').querySelector('.bulk-quantity-input').value;
            if(quantityToAdd > 0){
                console.log("getVariantId:", getVariantId , " quantityToAdd:", quantityToAdd);
            }
        });

        // Prepare requests to be executed sequentially
        
        var requests = bulkOptionForm.map(radio => {
            var getVariantId = radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('value');
            var quantityToAdd = radio.closest('.form-option-wrapper').querySelector('.bulk-quantity-input').value;
            var getVariantSKU = radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-sku');
            var getVariantStock = radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-stock');

            var quantityAlreadyInCart = radio.closest('.form-option-wrapper').querySelector('input[type="radio"]').getAttribute('data-cart-qty');

            console.log('getVariantSKU:', getVariantSKU,' quantityAlreadyInCart:', quantityAlreadyInCart, ' quantityToAdd:', quantityToAdd);
            /*
            if(quantityToAdd > 0 && quantityToAdd <= getVariantStock){
                return function() {
                    console.log("getVariantId:", getVariantId , getVariantSKU, "getVariantStock:"," quantityToAdd:", quantityToAdd, "getVariantSKU:", getVariantStock);
                    return $.get("/cart.php?action=add&product_id=" + getVariantId + "&qty=" + quantityToAdd + "&sku=" + getVariantSKU)
                        .done(function(data, status, xhr) {
                            console.log('item complete with status ' + status);
                        })
                        .fail(function(xhr, status, error) {
                            console.log('oh noes, error with status ' + status + ' and error: ');
                            console.error(error);
                        });
                };
            } else if(quantityToAdd == getVariantStock){
                // remove item and add again in cart with updated quanity in cart
            } else {
                
                // when quantity doesnt meet stock limit
                const tmp = document.createElement('DIV');
                tmp.innerHTML = '<h3>Item Exceeds stock</h3>';
                return showAlertModal(tmp.textContent || tmp.innerText);
            }*/
        }).filter(Boolean);

        // Helper to run promises sequentially
        function runSequentially(tasks) {
            return tasks.reduce((promise, task) => {
                return promise.then(() => task());
            }, Promise.resolve());
        }

        runSequentially(requests).then(function() {
            console.log('All bulk add-to-cart requests completed.');
            
        });
        
    }

    function getCartDetails(){
        return new Promise((resolve) => {
            /* Check if cart has this item, get qty */
            utils.api.cart.getCart({}, (err, response) => {
                // console.log('utils.api.cart.getCart:',response.lineItems);

                var getCartItems = response.lineItems.physicalItems;
                getCartItems.forEach(item => {
                    var getCartSku = item.sku;
                    if(document.querySelector('.bulk-option-form input[data-sku="'+getCartSku+'"]')){
                        console.log("Cart SKU:", item.sku, " Cart Item Qty:", item.quantity);
                        var getVariantInput = document.querySelector('.bulk-option-form input[data-sku="'+getCartSku+'"]');
                        getVariantInput.setAttribute('data-cart-qty', item.quantity);
                        console.log(getVariantInput.parentElement.querySelector('input[name="bulk-quantity"]'));
                        getVariantInput.parentElement.querySelector('input[name="bulk-quantity"]').value = item.quantity;
                    }
                    //document.querySelector('.bulk-option-form input[data-sku="14L762-7"]');
                });
                resolve();
            });
        }).then(() => {
            console.log('Cart details loaded');
            document.querySelectorAll('.form-option-wrapper.loader').forEach(formWrapper => {
                formWrapper.classList.remove('loader');
            });
        });
    }

}
