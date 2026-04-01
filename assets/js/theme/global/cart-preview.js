import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';

export const CartPreviewEvents = {
    close: 'closed.fndtn.dropdown',
    open: 'opened.fndtn.dropdown',
};

export default function (secureBaseUrl, cartId) {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cartDropdown = $('#cart-preview-dropdown');
    const $cartLoading = $('<div class="loadingOverlay"></div>');

    const $body = $('body');

    if (window.ApplePaySession) {
        $cartDropdown.addClass('apple-pay-supported');
    }

    $body.on('cart-quantity-update', (event, quantity) => {
        $cart.attr('aria-label', (_, prevValue) => prevValue.replace(/\d+/, quantity));

        if (!quantity) {
            $cart.addClass('navUser-item--cart__hidden-s');
        } else {
            $cart.removeClass('navUser-item--cart__hidden-s');
        }

        $('.cart-quantity')
            .text(quantity)
            .toggleClass('countPill--positive', quantity > 0);
        if (utils.tools.storage.localStorageAvailable()) {
            localStorage.setItem('cart-quantity', quantity);
        }
    });

    function getTotal(){
        var cartPreviewDropdown = document.getElementById('cart-preview-dropdown');
        var totalElements = cartPreviewDropdown.querySelectorAll('.previewCartList .previewCartItem');
        var totalCost = 0;
        totalElements.forEach(element => {
            //console.log('new product found ------------------');

            var multiplier = 0;
            var orgPriceWrapper = element.querySelector('.previewCartItem-price').textContent;
            var orgPriceContent = element.querySelector('.previewCartItem-price span').textContent;
            //console.log('orgPriceContent:', orgPriceContent);

            var productPriceRemoveDollar = orgPriceContent.replace('$', '');
            var productPriceRemoveCommas = parseFloat(productPriceRemoveDollar.replace(',', '')).toFixed(2);
            //console.log('productPriceRemoveCommas:', productPriceRemoveCommas);

            orgPriceContent = productPriceRemoveCommas;
            //console.log(element.querySelector('.previewCartItem-price').textContent.trim());
            if(orgPriceWrapper.trim().indexOf('×') > -1) {
                multiplier = parseFloat(orgPriceWrapper.trim().split('×')[0]).toFixed(2);
                totalCost += parseFloat(orgPriceContent) * multiplier;
            }
            else{
                totalCost += parseFloat(orgPriceContent);
            }
        });
        //console.log('getTotal:', totalCost);
        if(totalCost > 0){
            // Update the cart total in the header
            var cartTotalElement = `<div class="cartTotalElement"><div class="label">Grand total:</div><div class="amount">$${totalCost.toFixed(2)}</div></div>`;
            var targetElement = cartPreviewDropdown.querySelector('.previewCartAction');
            //console.log('cartTotalElement: ', cartTotalElement);
            //console.log('targetElement: ', targetElement);
            if(targetElement && targetElement.querySelector('.cartTotalElement') === null){
                targetElement.insertAdjacentHTML('afterbegin', cartTotalElement);
            }
        }
    }

    $cart.on('click', event => {
        const options = {
            template: 'common/cart-preview',
        };

        // Redirect to full cart page
        //
        // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
        // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
        if (/Mobi/i.test(navigator.userAgent)) {
            return event.stopPropagation();
        }

        event.preventDefault();

        $cartDropdown
            .addClass(loadingClass)
            .html($cartLoading);
        $cartLoading
            .show();

        utils.api.cart.getContent(options, (err, response) => {
            $cartDropdown
                .removeClass(loadingClass)
                .html(response);
            $cartLoading
                .hide();
            getTotal();
        });


    });

    let quantity = 0;

    if (cartId) {
        // Get existing quantity from localStorage if found
        if (utils.tools.storage.localStorageAvailable()) {
            if (localStorage.getItem('cart-quantity')) {
                quantity = Number(localStorage.getItem('cart-quantity'));
                $body.trigger('cart-quantity-update', quantity);
            }
        }

        // Get updated cart quantity from the Cart API
        const cartQtyPromise = new Promise((resolve, reject) => {
            utils.api.cart.getCartQuantity({ baseUrl: secureBaseUrl, cartId }, (err, qty) => {
                if (err) {
                    // If this appears to be a 404 for the cart ID, set cart quantity to 0
                    if (err === 'Not Found') {
                        resolve(0);
                    } else {
                        reject(err);
                    }
                }
                resolve(qty);
            });
        });

        // If the Cart API gives us a different quantity number, update it
        cartQtyPromise.then(qty => {
            quantity = qty;
            $body.trigger('cart-quantity-update', quantity);
        });
    } else {
        $body.trigger('cart-quantity-update', quantity);
    }
}
