"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]');
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.setApplePaySupport();
    this.bindEvents();
  };
  _proto.setApplePaySupport = function setApplePaySupport() {
    if (window.ApplePaySession) {
      this.$cartPageContent.addClass('apple-pay-supported');
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!Number.isInteger(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _this3.$overlay.hide();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;
    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    if (this.$modal === null) {
      this.$modal = $('#modal');
    }
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var optionChangeHandler = function optionChangeHandler() {
        var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
        var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
        if ($productOptionsContainer.length && modalBodyReservedHeight) {
          $productOptionsContainer.css('height', modalBodyReservedHeight);
        }
      };
      if (_this4.$modal.hasClass('open')) {
        optionChangeHandler();
      } else {
        _this4.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__.ModalEvents.opened, optionChangeHandler);
      }
      var modalForm = _this4.$modal.find('form');
      var refreshContent = function refreshContent() {
        return _this4.refreshContent();
      };
      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }
      function _onSubmit() {
        _onSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                event.preventDefault();
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.postFormData(new FormData(this), function () {
                  modal.close();
                  refreshContent();
                });
              case 1:
                return _context.a(2);
            }
          }, _callee, this);
        }));
        return _onSubmit.apply(this, arguments);
      }
      modalForm.on('submit', onSubmit);
      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this4.$modal, context);
      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(err);
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages',
        additionalCheckoutButtons: 'cart/additional-checkout-buttons'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      _this5.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);
      $cartPageTitle.replaceWith(response.pageTitle);
      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      if (!quantity) {
        return window.location.reload();
      }
      _this5.bindEvents();
      _this5.$overlay.hide();
      $('body').trigger('cart-quantity-update', quantity);
      $("[data-cart-itemid='" + _this5.$activeCartItemId + "']", _this5.$cartContent).filter("[data-action='" + _this5.$activeCartItemBtnAction + "']").trigger('focus');
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on({
      focus: function onQtyFocus() {
        preVal = this.value;
      },
      change: function change(event) {
        var $target = $(event.currentTarget);
        event.preventDefault();

        // update cart quantity
        cartUpdateQtyTextChange($target, preVal);
      }
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(string, {
        icon: 'warning',
        showCancelButton: true,
        onConfirm: function onConfirm() {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId, productId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $couponContainer.attr('aria-hidden', false);
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $couponContainer.attr('aria-hidden', true);
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)($codeInput.data('error'));
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $certContainer.attr('aria-hidden', false);
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $certContainer.attr('aria-hidden', true);
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        var validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(_this8.context);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(validationDictionary.invalid_gift_certificate);
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(resp.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
    $('.cart-item-option-remove').on('click', function () {
      window.confirm(_this9.context.giftWrappingRemoveMessage);
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-shipping-estimator]'), shippingErrorMessages);
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }
      shippingEstimatorAlert.attr('role', 'alert');
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(err);
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };
    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }
    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/common/cart-item-details.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItemDetails)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  function CartItemDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__.optionChangeDecorator.call(_this, hasDefaultOptions);

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }
    return _this;
  }
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);
  var _proto = CartItemDetails.prototype;
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.modal-header-title');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('.modal-content').removeClass('hide-content');
  };
  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()($selectElement)) {
    statesArray.states.forEach(function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }
  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDQSx1S0FBQUEsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBTCxDQUFBLElBQUFBLENBQUEsQ0FBQU0sU0FBQSxZQUFBQyxTQUFBLEdBQUFQLENBQUEsR0FBQU8sU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQVYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUksQ0FBQSxNQUFBQyxDQUFBLEdBQUFYLENBQUEsUUFBQVksQ0FBQSxPQUFBQyxDQUFBLEtBQUFGLENBQUEsS0FBQWIsQ0FBQSxLQUFBZ0IsQ0FBQSxFQUFBcEIsQ0FBQSxFQUFBcUIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFOLENBQUEsRUFBQU0sQ0FBQSxDQUFBQyxJQUFBLENBQUF2QixDQUFBLE1BQUFzQixDQUFBLFdBQUFBLEVBQUFyQixDQUFBLEVBQUFDLENBQUEsV0FBQU0sQ0FBQSxHQUFBUCxDQUFBLEVBQUFRLENBQUEsTUFBQUcsQ0FBQSxHQUFBWixDQUFBLEVBQUFtQixDQUFBLENBQUFmLENBQUEsR0FBQUYsQ0FBQSxFQUFBbUIsQ0FBQSxnQkFBQUMsRUFBQXBCLENBQUEsRUFBQUUsQ0FBQSxTQUFBSyxDQUFBLEdBQUFQLENBQUEsRUFBQVUsQ0FBQSxHQUFBUixDQUFBLEVBQUFILENBQUEsT0FBQWlCLENBQUEsSUFBQUYsQ0FBQSxLQUFBVixDQUFBLElBQUFMLENBQUEsR0FBQWdCLENBQUEsQ0FBQU8sTUFBQSxFQUFBdkIsQ0FBQSxVQUFBSyxDQUFBLEVBQUFFLENBQUEsR0FBQVMsQ0FBQSxDQUFBaEIsQ0FBQSxHQUFBcUIsQ0FBQSxHQUFBSCxDQUFBLENBQUFGLENBQUEsRUFBQVEsQ0FBQSxHQUFBakIsQ0FBQSxLQUFBTixDQUFBLFFBQUFJLENBQUEsR0FBQW1CLENBQUEsS0FBQXJCLENBQUEsTUFBQVEsQ0FBQSxHQUFBSixDQUFBLEVBQUFDLENBQUEsR0FBQUQsQ0FBQSxZQUFBQyxDQUFBLFdBQUFELENBQUEsTUFBQUEsQ0FBQSxNQUFBUixDQUFBLElBQUFRLENBQUEsT0FBQWMsQ0FBQSxNQUFBaEIsQ0FBQSxHQUFBSixDQUFBLFFBQUFvQixDQUFBLEdBQUFkLENBQUEsUUFBQUMsQ0FBQSxNQUFBVSxDQUFBLENBQUFDLENBQUEsR0FBQWhCLENBQUEsRUFBQWUsQ0FBQSxDQUFBZixDQUFBLEdBQUFJLENBQUEsT0FBQWMsQ0FBQSxHQUFBRyxDQUFBLEtBQUFuQixDQUFBLEdBQUFKLENBQUEsUUFBQU0sQ0FBQSxNQUFBSixDQUFBLElBQUFBLENBQUEsR0FBQXFCLENBQUEsTUFBQWpCLENBQUEsTUFBQU4sQ0FBQSxFQUFBTSxDQUFBLE1BQUFKLENBQUEsRUFBQWUsQ0FBQSxDQUFBZixDQUFBLEdBQUFxQixDQUFBLEVBQUFoQixDQUFBLGNBQUFILENBQUEsSUFBQUosQ0FBQSxhQUFBbUIsQ0FBQSxRQUFBSCxDQUFBLE9BQUFkLENBQUEscUJBQUFFLENBQUEsRUFBQVcsQ0FBQSxFQUFBUSxDQUFBLFFBQUFULENBQUEsWUFBQVUsU0FBQSx1Q0FBQVIsQ0FBQSxVQUFBRCxDQUFBLElBQUFLLENBQUEsQ0FBQUwsQ0FBQSxFQUFBUSxDQUFBLEdBQUFoQixDQUFBLEdBQUFRLENBQUEsRUFBQUwsQ0FBQSxHQUFBYSxDQUFBLEdBQUF4QixDQUFBLEdBQUFRLENBQUEsT0FBQVQsQ0FBQSxHQUFBWSxDQUFBLE1BQUFNLENBQUEsS0FBQVYsQ0FBQSxLQUFBQyxDQUFBLEdBQUFBLENBQUEsUUFBQUEsQ0FBQSxTQUFBVSxDQUFBLENBQUFmLENBQUEsUUFBQWtCLENBQUEsQ0FBQWIsQ0FBQSxFQUFBRyxDQUFBLEtBQUFPLENBQUEsQ0FBQWYsQ0FBQSxHQUFBUSxDQUFBLEdBQUFPLENBQUEsQ0FBQUMsQ0FBQSxHQUFBUixDQUFBLGFBQUFJLENBQUEsTUFBQVIsQ0FBQSxRQUFBQyxDQUFBLEtBQUFILENBQUEsWUFBQUwsQ0FBQSxHQUFBTyxDQUFBLENBQUFGLENBQUEsV0FBQUwsQ0FBQSxHQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEVBQUFJLENBQUEsVUFBQWMsU0FBQSwyQ0FBQXpCLENBQUEsQ0FBQTJCLElBQUEsU0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxHQUFBWCxDQUFBLENBQUE0QixLQUFBLEVBQUFwQixDQUFBLFNBQUFBLENBQUEsb0JBQUFBLENBQUEsS0FBQVIsQ0FBQSxHQUFBTyxDQUFBLGVBQUFQLENBQUEsQ0FBQTBCLElBQUEsQ0FBQW5CLENBQUEsR0FBQUMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFjLFNBQUEsdUNBQUFwQixDQUFBLGdCQUFBRyxDQUFBLE9BQUFELENBQUEsR0FBQVIsQ0FBQSxjQUFBQyxDQUFBLElBQUFpQixDQUFBLEdBQUFDLENBQUEsQ0FBQWYsQ0FBQSxRQUFBUSxDQUFBLEdBQUFWLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsRUFBQWUsQ0FBQSxPQUFBRSxDQUFBLGtCQUFBcEIsQ0FBQSxJQUFBTyxDQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxNQUFBRyxDQUFBLEdBQUFYLENBQUEsY0FBQWUsQ0FBQSxtQkFBQWEsS0FBQSxFQUFBNUIsQ0FBQSxFQUFBMkIsSUFBQSxFQUFBVixDQUFBLFNBQUFoQixDQUFBLEVBQUFJLENBQUEsRUFBQUUsQ0FBQSxRQUFBSSxDQUFBLFFBQUFTLENBQUEsZ0JBQUFWLFVBQUEsY0FBQW1CLGtCQUFBLGNBQUFDLDJCQUFBLEtBQUE5QixDQUFBLEdBQUFZLE1BQUEsQ0FBQW1CLGNBQUEsTUFBQXZCLENBQUEsTUFBQUwsQ0FBQSxJQUFBSCxDQUFBLENBQUFBLENBQUEsSUFBQUcsQ0FBQSxTQUFBVyxtQkFBQSxDQUFBZCxDQUFBLE9BQUFHLENBQUEsaUNBQUFILENBQUEsR0FBQVcsQ0FBQSxHQUFBbUIsMEJBQUEsQ0FBQXJCLFNBQUEsR0FBQUMsU0FBQSxDQUFBRCxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLFlBQUFPLEVBQUFoQixDQUFBLFdBQUFhLE1BQUEsQ0FBQW9CLGNBQUEsR0FBQXBCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQWpDLENBQUEsRUFBQStCLDBCQUFBLEtBQUEvQixDQUFBLENBQUFrQyxTQUFBLEdBQUFILDBCQUFBLEVBQUFoQixtQkFBQSxDQUFBZixDQUFBLEVBQUFNLENBQUEseUJBQUFOLENBQUEsQ0FBQVUsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBWixDQUFBLFdBQUE4QixpQkFBQSxDQUFBcEIsU0FBQSxHQUFBcUIsMEJBQUEsRUFBQWhCLG1CQUFBLENBQUFILENBQUEsaUJBQUFtQiwwQkFBQSxHQUFBaEIsbUJBQUEsQ0FBQWdCLDBCQUFBLGlCQUFBRCxpQkFBQSxHQUFBQSxpQkFBQSxDQUFBSyxXQUFBLHdCQUFBcEIsbUJBQUEsQ0FBQWdCLDBCQUFBLEVBQUF6QixDQUFBLHdCQUFBUyxtQkFBQSxDQUFBSCxDQUFBLEdBQUFHLG1CQUFBLENBQUFILENBQUEsRUFBQU4sQ0FBQSxnQkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxFQUFBUixDQUFBLGlDQUFBVyxtQkFBQSxDQUFBSCxDQUFBLDhEQUFBd0IsWUFBQSxZQUFBQSxhQUFBLGFBQUFDLENBQUEsRUFBQTdCLENBQUEsRUFBQThCLENBQUEsRUFBQXRCLENBQUE7QUFBQSxTQUFBRCxvQkFBQWYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxRQUFBTyxDQUFBLEdBQUFLLE1BQUEsQ0FBQTBCLGNBQUEsUUFBQS9CLENBQUEsdUJBQUFSLENBQUEsSUFBQVEsQ0FBQSxRQUFBTyxtQkFBQSxZQUFBeUIsbUJBQUF4QyxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBLGFBQUFLLEVBQUFKLENBQUEsRUFBQUUsQ0FBQSxJQUFBVyxtQkFBQSxDQUFBZixDQUFBLEVBQUFFLENBQUEsWUFBQUYsQ0FBQSxnQkFBQXlDLE9BQUEsQ0FBQXZDLENBQUEsRUFBQUUsQ0FBQSxFQUFBSixDQUFBLFNBQUFFLENBQUEsR0FBQU0sQ0FBQSxHQUFBQSxDQUFBLENBQUFSLENBQUEsRUFBQUUsQ0FBQSxJQUFBMkIsS0FBQSxFQUFBekIsQ0FBQSxFQUFBc0MsVUFBQSxHQUFBekMsQ0FBQSxFQUFBMEMsWUFBQSxHQUFBMUMsQ0FBQSxFQUFBMkMsUUFBQSxHQUFBM0MsQ0FBQSxNQUFBRCxDQUFBLENBQUFFLENBQUEsSUFBQUUsQ0FBQSxJQUFBRSxDQUFBLGFBQUFBLENBQUEsY0FBQUEsQ0FBQSxtQkFBQVMsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUE0QyxtQkFBQXpDLENBQUEsRUFBQUgsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUksQ0FBQSxFQUFBZSxDQUFBLEVBQUFaLENBQUEsY0FBQUQsQ0FBQSxHQUFBSixDQUFBLENBQUFpQixDQUFBLEVBQUFaLENBQUEsR0FBQUcsQ0FBQSxHQUFBSixDQUFBLENBQUFxQixLQUFBLFdBQUF6QixDQUFBLGdCQUFBSixDQUFBLENBQUFJLENBQUEsS0FBQUksQ0FBQSxDQUFBb0IsSUFBQSxHQUFBM0IsQ0FBQSxDQUFBVyxDQUFBLElBQUFrQyxPQUFBLENBQUFDLE9BQUEsQ0FBQW5DLENBQUEsRUFBQW9DLElBQUEsQ0FBQTlDLENBQUEsRUFBQUksQ0FBQTtBQUFBLFNBQUEyQyxrQkFBQTdDLENBQUEsNkJBQUFILENBQUEsU0FBQUQsQ0FBQSxHQUFBa0QsU0FBQSxhQUFBSixPQUFBLFdBQUE1QyxDQUFBLEVBQUFJLENBQUEsUUFBQWUsQ0FBQSxHQUFBakIsQ0FBQSxDQUFBK0MsS0FBQSxDQUFBbEQsQ0FBQSxFQUFBRCxDQUFBLFlBQUFvRCxNQUFBaEQsQ0FBQSxJQUFBeUMsa0JBQUEsQ0FBQXhCLENBQUEsRUFBQW5CLENBQUEsRUFBQUksQ0FBQSxFQUFBOEMsS0FBQSxFQUFBQyxNQUFBLFVBQUFqRCxDQUFBLGNBQUFpRCxPQUFBakQsQ0FBQSxJQUFBeUMsa0JBQUEsQ0FBQXhCLENBQUEsRUFBQW5CLENBQUEsRUFBQUksQ0FBQSxFQUFBOEMsS0FBQSxFQUFBQyxNQUFBLFdBQUFqRCxDQUFBLEtBQUFnRCxLQUFBO0FBQUEsU0FBQUUsZUFBQXJELENBQUEsRUFBQUssQ0FBQSxJQUFBTCxDQUFBLENBQUFTLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFSLENBQUEsQ0FBQUksU0FBQSxHQUFBVCxDQUFBLENBQUFTLFNBQUEsQ0FBQTZDLFdBQUEsR0FBQXRELENBQUEsRUFBQXVELGVBQUEsQ0FBQXZELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFrRCxnQkFBQXZELENBQUEsRUFBQUQsQ0FBQSxXQUFBd0QsZUFBQSxHQUFBM0MsTUFBQSxDQUFBb0IsY0FBQSxHQUFBcEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBVixJQUFBLGVBQUF0QixDQUFBLEVBQUFELENBQUEsV0FBQUMsQ0FBQSxDQUFBaUMsU0FBQSxHQUFBbEMsQ0FBQSxFQUFBQyxDQUFBLEtBQUF1RCxlQUFBLENBQUF2RCxDQUFBLEVBQUFELENBQUE7QUFEeUM7QUFFOEI7QUFDUztBQUNqQztBQUNXO0FBQ2lCO0FBQ2xCO0FBQUEsSUFFcENrRSxJQUFJLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsS0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQWhCLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0VBQUFJLGNBQUEsQ0FBQVksSUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUMsTUFBQSxHQUFBRixJQUFBLENBQUF4RCxTQUFBO0VBQUEwRCxNQUFBLENBQ3JCQyxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQ3hDLElBQUksQ0FBQ0MsWUFBWSxHQUFHRCxDQUFDLENBQUMscUJBQXFCLENBQUM7SUFDNUMsSUFBSSxDQUFDRSxhQUFhLEdBQUdGLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUM1QyxJQUFJLENBQUNHLFdBQVcsR0FBR0gsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQzFDLElBQUksQ0FBQ0ksMkJBQTJCLEdBQUdKLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQztJQUMvRSxJQUFJLENBQUNLLFFBQVEsR0FBR0wsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQzNDTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUk7SUFDN0IsSUFBSSxDQUFDQyx3QkFBd0IsR0FBRyxJQUFJO0lBRXBDLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsQ0FBQztJQUN6QixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCLENBQUM7RUFBQWQsTUFBQSxDQUVEYSxrQkFBa0IsR0FBbEIsU0FBQUEsa0JBQWtCQSxDQUFBLEVBQUc7SUFDakIsSUFBSUUsTUFBTSxDQUFDQyxlQUFlLEVBQUU7TUFDeEIsSUFBSSxDQUFDYixnQkFBZ0IsQ0FBQ2MsUUFBUSxDQUFDLHFCQUFxQixDQUFDO0lBQ3pEO0VBQ0osQ0FBQztFQUFBakIsTUFBQSxDQUVEa0IsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUNDLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDaEIsSUFBTUMsTUFBTSxHQUFHRixPQUFPLENBQUNHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsSUFBSSxDQUFDWCxpQkFBaUIsR0FBR1UsTUFBTTtJQUMvQixJQUFJLENBQUNULHdCQUF3QixHQUFHTyxPQUFPLENBQUNHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFdEQsSUFBTUMsR0FBRyxHQUFHbkIsQ0FBQyxXQUFTaUIsTUFBUSxDQUFDO0lBQy9CLElBQU1HLE1BQU0sR0FBR0MsUUFBUSxDQUFDRixHQUFHLENBQUNHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3RDLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRixHQUFHLENBQUNELElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDcEQsSUFBTU0sTUFBTSxHQUFHSCxRQUFRLENBQUNGLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwRCxJQUFNTyxRQUFRLEdBQUdOLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQzdDLElBQU1RLFFBQVEsR0FBR1AsR0FBRyxDQUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDN0MsSUFBTVMsTUFBTSxHQUFHWixPQUFPLENBQUNHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLEdBQUdFLE1BQU0sR0FBRyxDQUFDLEdBQUdBLE1BQU0sR0FBRyxDQUFDO0lBQ3pFO0lBQ0EsSUFBSU8sTUFBTSxHQUFHSCxNQUFNLEVBQUU7TUFDakIsT0FBT2pDLDZEQUFjLENBQUNrQyxRQUFRLENBQUM7SUFDbkMsQ0FBQyxNQUFNLElBQUlGLE1BQU0sR0FBRyxDQUFDLElBQUlJLE1BQU0sR0FBR0osTUFBTSxFQUFFO01BQ3RDLE9BQU9oQyw2REFBYyxDQUFDbUMsUUFBUSxDQUFDO0lBQ25DO0lBRUEsSUFBSSxDQUFDckIsUUFBUSxDQUFDdUIsSUFBSSxDQUFDLENBQUM7SUFFcEJ4QyxzRUFBUyxDQUFDMEMsSUFBSSxDQUFDQyxVQUFVLENBQUNkLE1BQU0sRUFBRVUsTUFBTSxFQUFFLFVBQUNLLEdBQUcsRUFBRUMsUUFBUSxFQUFLO01BQ3pEakIsS0FBSSxDQUFDWCxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO01BRXBCLElBQUkyQixRQUFRLENBQUNmLElBQUksQ0FBQ2dCLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDcEM7UUFDQSxJQUFNQyxNQUFNLEdBQUlSLE1BQU0sS0FBSyxDQUFFO1FBRTdCWCxLQUFJLENBQUNvQixjQUFjLENBQUNELE1BQU0sQ0FBQztNQUMvQixDQUFDLE1BQU07UUFDSGhCLEdBQUcsQ0FBQ0csR0FBRyxDQUFDRixNQUFNLENBQUM7UUFDZjdCLDZEQUFjLENBQUMwQyxRQUFRLENBQUNmLElBQUksQ0FBQ21CLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ25EO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBMUMsTUFBQSxDQUVEMkMsdUJBQXVCLEdBQXZCLFNBQUFBLHVCQUF1QkEsQ0FBQ3hCLE9BQU8sRUFBRXlCLE1BQU0sRUFBUztJQUFBLElBQUFDLE1BQUE7SUFBQSxJQUFmRCxNQUFNO01BQU5BLE1BQU0sR0FBRyxJQUFJO0lBQUE7SUFDMUMsSUFBTXZCLE1BQU0sR0FBR0YsT0FBTyxDQUFDRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLElBQU1DLEdBQUcsR0FBR25CLENBQUMsV0FBU2lCLE1BQVEsQ0FBQztJQUMvQixJQUFNTSxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3BELElBQU1NLE1BQU0sR0FBR0gsUUFBUSxDQUFDRixHQUFHLENBQUNELElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDcEQsSUFBTUUsTUFBTSxHQUFHb0IsTUFBTSxLQUFLLElBQUksR0FBR0EsTUFBTSxHQUFHaEIsTUFBTTtJQUNoRCxJQUFNQyxRQUFRLEdBQUdOLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQzdDLElBQU1RLFFBQVEsR0FBR1AsR0FBRyxDQUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDN0MsSUFBTVMsTUFBTSxHQUFHTixRQUFRLENBQUNxQixNQUFNLENBQUN2QixHQUFHLENBQUNHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDOUMsSUFBSXFCLFlBQVk7O0lBRWhCO0lBQ0EsSUFBSSxDQUFDRCxNQUFNLENBQUNFLFNBQVMsQ0FBQ2pCLE1BQU0sQ0FBQyxFQUFFO01BQzNCZ0IsWUFBWSxHQUFHeEIsR0FBRyxDQUFDRyxHQUFHLENBQUMsQ0FBQztNQUN4QkgsR0FBRyxDQUFDRyxHQUFHLENBQUNGLE1BQU0sQ0FBQztNQUNmLE9BQU83Qiw2REFBYyxDQUFDLElBQUksQ0FBQ3NELE9BQU8sQ0FBQ0MsbUJBQW1CLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUVKLFlBQVksQ0FBQyxDQUFDO0lBQzVGLENBQUMsTUFBTSxJQUFJaEIsTUFBTSxHQUFHSCxNQUFNLEVBQUU7TUFDeEJMLEdBQUcsQ0FBQ0csR0FBRyxDQUFDRixNQUFNLENBQUM7TUFDZixPQUFPN0IsNkRBQWMsQ0FBQ2tDLFFBQVEsQ0FBQztJQUNuQyxDQUFDLE1BQU0sSUFBSUYsTUFBTSxHQUFHLENBQUMsSUFBSUksTUFBTSxHQUFHSixNQUFNLEVBQUU7TUFDdENKLEdBQUcsQ0FBQ0csR0FBRyxDQUFDRixNQUFNLENBQUM7TUFDZixPQUFPN0IsNkRBQWMsQ0FBQ21DLFFBQVEsQ0FBQztJQUNuQztJQUVBLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQ3VCLElBQUksQ0FBQyxDQUFDO0lBQ3BCeEMsc0VBQVMsQ0FBQzBDLElBQUksQ0FBQ0MsVUFBVSxDQUFDZCxNQUFNLEVBQUVVLE1BQU0sRUFBRSxVQUFDSyxHQUFHLEVBQUVDLFFBQVEsRUFBSztNQUN6RFEsTUFBSSxDQUFDcEMsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUVwQixJQUFJMkIsUUFBUSxDQUFDZixJQUFJLENBQUNnQixNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3BDO1FBQ0EsSUFBTUMsTUFBTSxHQUFJUixNQUFNLEtBQUssQ0FBRTtRQUU3QmMsTUFBSSxDQUFDTCxjQUFjLENBQUNELE1BQU0sQ0FBQztNQUMvQixDQUFDLE1BQU07UUFDSGhCLEdBQUcsQ0FBQ0csR0FBRyxDQUFDRixNQUFNLENBQUM7UUFFZixPQUFPN0IsNkRBQWMsQ0FBQzBDLFFBQVEsQ0FBQ2YsSUFBSSxDQUFDbUIsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDMUQ7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUExQyxNQUFBLENBRURvRCxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQy9CLE1BQU0sRUFBRTtJQUFBLElBQUFnQyxNQUFBO0lBQ25CLElBQUksQ0FBQzVDLFFBQVEsQ0FBQ3VCLElBQUksQ0FBQyxDQUFDO0lBQ3BCeEMsc0VBQVMsQ0FBQzBDLElBQUksQ0FBQ29CLFVBQVUsQ0FBQ2pDLE1BQU0sRUFBRSxVQUFDZSxHQUFHLEVBQUVDLFFBQVEsRUFBSztNQUNqRCxJQUFJQSxRQUFRLENBQUNmLElBQUksQ0FBQ2dCLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDcENlLE1BQUksQ0FBQ2IsY0FBYyxDQUFDLElBQUksQ0FBQztNQUM3QixDQUFDLE1BQU07UUFDSGEsTUFBSSxDQUFDNUMsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztRQUNwQmYsNkRBQWMsQ0FBQzBDLFFBQVEsQ0FBQ2YsSUFBSSxDQUFDbUIsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDbkQ7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUExQyxNQUFBLENBRUR1RCxlQUFlLEdBQWYsU0FBQUEsZUFBZUEsQ0FBQ2xDLE1BQU0sRUFBRW1DLFNBQVMsRUFBRTtJQUFBLElBQUFDLE1BQUE7SUFDL0IsSUFBTVIsT0FBTyxHQUFBeEcsTUFBQSxDQUFBaUgsTUFBQTtNQUFLQyxrQkFBa0IsRUFBRUg7SUFBUyxHQUFLLElBQUksQ0FBQ1AsT0FBTyxDQUFFO0lBQ2xFLElBQU1XLEtBQUssR0FBR2xFLDJEQUFZLENBQUMsQ0FBQztJQUU1QixJQUFJLElBQUksQ0FBQ1EsTUFBTSxLQUFLLElBQUksRUFBRTtNQUN0QixJQUFJLENBQUNBLE1BQU0sR0FBR0UsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUM3QjtJQUVBLElBQU15RCxPQUFPLEdBQUc7TUFDWkMsUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUVERixLQUFLLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQ1osSUFBSSxDQUFDN0QsTUFBTSxDQUFDOEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMvQyxRQUFRLENBQUMsY0FBYyxDQUFDO0lBRTNEekIsc0VBQVMsQ0FBQ3lFLGlCQUFpQixDQUFDQyxlQUFlLENBQUM3QyxNQUFNLEVBQUV3QyxPQUFPLEVBQUUsVUFBQ3pCLEdBQUcsRUFBRUMsUUFBUSxFQUFLO01BQzVFdUIsS0FBSyxDQUFDTyxhQUFhLENBQUM5QixRQUFRLENBQUMrQixPQUFPLENBQUM7TUFDckMsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBQSxFQUFTO1FBQzlCLElBQU1DLHdCQUF3QixHQUFHbEUsQ0FBQyxDQUFDLG1DQUFtQyxFQUFFcUQsTUFBSSxDQUFDdkQsTUFBTSxDQUFDO1FBQ3BGLElBQU1xRSx1QkFBdUIsR0FBR0Qsd0JBQXdCLENBQUNFLFdBQVcsQ0FBQyxDQUFDO1FBRXRFLElBQUlGLHdCQUF3QixDQUFDbEgsTUFBTSxJQUFJbUgsdUJBQXVCLEVBQUU7VUFDNURELHdCQUF3QixDQUFDRyxHQUFHLENBQUMsUUFBUSxFQUFFRix1QkFBdUIsQ0FBQztRQUNuRTtNQUNKLENBQUM7TUFFRCxJQUFJZCxNQUFJLENBQUN2RCxNQUFNLENBQUN3RSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDOUJMLG1CQUFtQixDQUFDLENBQUM7TUFDekIsQ0FBQyxNQUFNO1FBQ0haLE1BQUksQ0FBQ3ZELE1BQU0sQ0FBQ3lFLEdBQUcsQ0FBQy9FLHNEQUFXLENBQUNnRixNQUFNLEVBQUVQLG1CQUFtQixDQUFDO01BQzVEO01BRUEsSUFBTVEsU0FBUyxHQUFHcEIsTUFBSSxDQUFDdkQsTUFBTSxDQUFDOEQsSUFBSSxDQUFDLE1BQU0sQ0FBQztNQUMxQyxJQUFNeEIsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBO1FBQUEsT0FBU2lCLE1BQUksQ0FBQ2pCLGNBQWMsQ0FBQyxDQUFDO01BQUE7TUFBQyxTQUNwQ3NDLFFBQVFBLENBQUFDLEVBQUE7UUFBQSxPQUFBQyxTQUFBLENBQUFqRyxLQUFBLE9BQUFELFNBQUE7TUFBQTtNQUFBLFNBQUFrRyxVQUFBO1FBQUFBLFNBQUEsR0FBQW5HLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUF2QixTQUFBK0csUUFBd0JDLEtBQUs7VUFBQSxPQUFBbEgsWUFBQSxHQUFBQyxDQUFBLFdBQUFrSCxRQUFBO1lBQUEsa0JBQUFBLFFBQUEsQ0FBQW5KLENBQUE7Y0FBQTtnQkFDekJrSixLQUFLLENBQUNFLGNBQWMsQ0FBQyxDQUFDO2dCQUN0QjVGLHNFQUFTLENBQUMwQyxJQUFJLENBQUNtRCxZQUFZLENBQUMsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQU07a0JBQ2xEMUIsS0FBSyxDQUFDMkIsS0FBSyxDQUFDLENBQUM7a0JBQ2IvQyxjQUFjLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDO2NBQUM7Z0JBQUEsT0FBQTJDLFFBQUEsQ0FBQWxJLENBQUE7WUFBQTtVQUFBLEdBQUFnSSxPQUFBO1FBQUEsQ0FDTjtRQUFBLE9BQUFELFNBQUEsQ0FBQWpHLEtBQUEsT0FBQUQsU0FBQTtNQUFBO01BRUQrRixTQUFTLENBQUNXLEVBQUUsQ0FBQyxRQUFRLEVBQUVWLFFBQVEsQ0FBQztNQUVoQ3JCLE1BQUksQ0FBQ2dDLGNBQWMsR0FBRyxJQUFJNUYsaUVBQWUsQ0FBQzRELE1BQUksQ0FBQ3ZELE1BQU0sRUFBRStDLE9BQU8sQ0FBQztNQUUvRFEsTUFBSSxDQUFDaUMsb0JBQW9CLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7SUFFRmxHLHdFQUFXLENBQUNnRyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsVUFBQ04sS0FBSyxFQUFFVSxhQUFhLEVBQUs7TUFDOUQsSUFBTUMsS0FBSyxHQUFHekYsQ0FBQyxDQUFDd0YsYUFBYSxDQUFDLENBQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDO01BQzNDLElBQU04QixPQUFPLEdBQUcxRixDQUFDLENBQUMsY0FBYyxFQUFFeUYsS0FBSyxDQUFDO01BQ3hDLElBQU1FLFdBQVcsR0FBRzNGLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztNQUV6Q1osc0VBQVMsQ0FBQ3lFLGlCQUFpQixDQUFDK0IsWUFBWSxDQUFDeEMsU0FBUyxFQUFFcUMsS0FBSyxDQUFDSSxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQUM3RCxHQUFHLEVBQUU4RCxNQUFNLEVBQUs7UUFDcEYsSUFBTTVFLElBQUksR0FBRzRFLE1BQU0sQ0FBQzVFLElBQUksSUFBSSxDQUFDLENBQUM7UUFFOUIsSUFBSWMsR0FBRyxFQUFFO1VBQ0x6Qyw2REFBYyxDQUFDeUMsR0FBRyxDQUFDO1VBQ25CLE9BQU8sS0FBSztRQUNoQjtRQUVBLElBQUlkLElBQUksQ0FBQzZFLGtCQUFrQixFQUFFO1VBQ3pCL0YsQ0FBQyxDQUFDLG9CQUFvQixFQUFFMkYsV0FBVyxDQUFDLENBQUNLLElBQUksQ0FBQzlFLElBQUksQ0FBQzZFLGtCQUFrQixDQUFDO1VBQ2xFTCxPQUFPLENBQUNPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1VBQzlCTixXQUFXLENBQUMvRCxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLE1BQU07VUFDSDhELE9BQU8sQ0FBQ08sSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7VUFDL0JOLFdBQVcsQ0FBQ3JGLElBQUksQ0FBQyxDQUFDO1FBQ3RCO1FBRUEsSUFBSSxDQUFDWSxJQUFJLENBQUNnRixXQUFXLElBQUksQ0FBQ2hGLElBQUksQ0FBQ2lGLE9BQU8sRUFBRTtVQUNwQ1QsT0FBTyxDQUFDTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUNsQyxDQUFDLE1BQU07VUFDSFAsT0FBTyxDQUFDTyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztRQUNuQztNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXJHLE1BQUEsQ0FFRHdDLGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFDRCxNQUFNLEVBQUU7SUFBQSxJQUFBaUUsTUFBQTtJQUNuQixJQUFNQyxjQUFjLEdBQUdyRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7SUFDOUQsSUFBTXFHLGNBQWMsR0FBR3RHLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQztJQUNsRCxJQUFNeUQsT0FBTyxHQUFHO01BQ1pDLFFBQVEsRUFBRTtRQUNOTSxPQUFPLEVBQUUsY0FBYztRQUN2QnVDLE1BQU0sRUFBRSxhQUFhO1FBQ3JCQyxTQUFTLEVBQUUsaUJBQWlCO1FBQzVCQyxjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDQyx5QkFBeUIsRUFBRTtNQUMvQjtJQUNKLENBQUM7SUFFRCxJQUFJLENBQUNyRyxRQUFRLENBQUN1QixJQUFJLENBQUMsQ0FBQzs7SUFFcEI7SUFDQSxJQUFJTyxNQUFNLElBQUlrRSxjQUFjLENBQUNySixNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3ZDLE9BQU8yRCxNQUFNLENBQUNnRyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DO0lBRUF4SCxzRUFBUyxDQUFDMEMsSUFBSSxDQUFDK0UsVUFBVSxDQUFDcEQsT0FBTyxFQUFFLFVBQUN6QixHQUFHLEVBQUVDLFFBQVEsRUFBSztNQUNsRG1FLE1BQUksQ0FBQ25HLFlBQVksQ0FBQzZHLElBQUksQ0FBQzdFLFFBQVEsQ0FBQytCLE9BQU8sQ0FBQztNQUN4Q29DLE1BQUksQ0FBQ2pHLFdBQVcsQ0FBQzJHLElBQUksQ0FBQzdFLFFBQVEsQ0FBQ3NFLE1BQU0sQ0FBQztNQUN0Q0gsTUFBSSxDQUFDbEcsYUFBYSxDQUFDNEcsSUFBSSxDQUFDN0UsUUFBUSxDQUFDd0UsY0FBYyxDQUFDO01BQ2hETCxNQUFJLENBQUNoRywyQkFBMkIsQ0FBQzBHLElBQUksQ0FBQzdFLFFBQVEsQ0FBQ3lFLHlCQUF5QixDQUFDO01BRXpFSixjQUFjLENBQUNTLFdBQVcsQ0FBQzlFLFFBQVEsQ0FBQ3VFLFNBQVMsQ0FBQztNQUU5QyxJQUFNUSxRQUFRLEdBQUdoSCxDQUFDLENBQUMsc0JBQXNCLEVBQUVvRyxNQUFJLENBQUNuRyxZQUFZLENBQUMsQ0FBQ2lCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO01BRXZGLElBQUksQ0FBQzhGLFFBQVEsRUFBRTtRQUNYLE9BQU9yRyxNQUFNLENBQUNnRyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BQ25DO01BRUFSLE1BQUksQ0FBQzFGLFVBQVUsQ0FBQyxDQUFDO01BQ2pCMEYsTUFBSSxDQUFDL0YsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUVwQk4sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDaUgsT0FBTyxDQUFDLHNCQUFzQixFQUFFRCxRQUFRLENBQUM7TUFFbkRoSCxDQUFDLHlCQUF1Qm9HLE1BQUksQ0FBQzdGLGlCQUFpQixTQUFNNkYsTUFBSSxDQUFDbkcsWUFBWSxDQUFDLENBQ2pFaUgsTUFBTSxvQkFBa0JkLE1BQUksQ0FBQzVGLHdCQUF3QixPQUFJLENBQUMsQ0FDMUR5RyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXJILE1BQUEsQ0FFRHVILGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQ2IsSUFBTUMsZUFBZSxHQUFHLEdBQUc7SUFDM0IsSUFBTXZHLFVBQVUsR0FBR3dHLGtEQUFBLENBQUtDLHNEQUFBLENBQVMsSUFBSSxDQUFDekcsVUFBVSxFQUFFdUcsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3pFLElBQU05RSx1QkFBdUIsR0FBRytFLGtEQUFBLENBQUtDLHNEQUFBLENBQVMsSUFBSSxDQUFDaEYsdUJBQXVCLEVBQUU4RSxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDbkcsSUFBTXJFLGNBQWMsR0FBR3NFLGtEQUFBLENBQUtDLHNEQUFBLENBQVMsSUFBSSxDQUFDdkUsY0FBYyxFQUFFcUUsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ2pGLElBQUk3RSxNQUFNOztJQUVWO0lBQ0F4QyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQ21GLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQU4sS0FBSyxFQUFJO01BQzVELElBQU0vRCxPQUFPLEdBQUdmLENBQUMsQ0FBQzhFLEtBQUssQ0FBQ1UsYUFBYSxDQUFDO01BRXRDVixLQUFLLENBQUNFLGNBQWMsQ0FBQyxDQUFDOztNQUV0QjtNQUNBbEUsVUFBVSxDQUFDQyxPQUFPLENBQUM7SUFDdkIsQ0FBQyxDQUFDOztJQUVGO0lBQ0FmLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDbUYsRUFBRSxDQUFDO01BQzVDb0MsS0FBSyxFQUFFLFNBQVNDLFVBQVVBLENBQUEsRUFBRztRQUN6QmpGLE1BQU0sR0FBRyxJQUFJLENBQUNuRixLQUFLO01BQ3ZCLENBQUM7TUFDRHFLLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFFNUMsS0FBSyxFQUFJO1FBQ2IsSUFBTS9ELE9BQU8sR0FBR2YsQ0FBQyxDQUFDOEUsS0FBSyxDQUFDVSxhQUFhLENBQUM7UUFDdENWLEtBQUssQ0FBQ0UsY0FBYyxDQUFDLENBQUM7O1FBRXRCO1FBQ0F6Qyx1QkFBdUIsQ0FBQ3hCLE9BQU8sRUFBRXlCLE1BQU0sQ0FBQztNQUM1QztJQUNKLENBQUMsQ0FBQztJQUVGeEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDbUYsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBTixLQUFLLEVBQUk7TUFDdEQsSUFBTTdELE1BQU0sR0FBR2pCLENBQUMsQ0FBQzhFLEtBQUssQ0FBQ1UsYUFBYSxDQUFDLENBQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDO01BQ3hELElBQU15RyxNQUFNLEdBQUczSCxDQUFDLENBQUM4RSxLQUFLLENBQUNVLGFBQWEsQ0FBQyxDQUFDdEUsSUFBSSxDQUFDLGVBQWUsQ0FBQztNQUMzRDNCLDZEQUFjLENBQUNvSSxNQUFNLEVBQUU7UUFDbkJDLElBQUksRUFBRSxTQUFTO1FBQ2ZDLGdCQUFnQixFQUFFLElBQUk7UUFDdEJDLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBLEVBQVE7VUFDYjtVQUNBOUUsY0FBYyxDQUFDL0IsTUFBTSxDQUFDO1FBQzFCO01BQ0osQ0FBQyxDQUFDO01BQ0Y2RCxLQUFLLENBQUNFLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGaEYsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUNtRixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFOLEtBQUssRUFBSTtNQUMxRCxJQUFNN0QsTUFBTSxHQUFHakIsQ0FBQyxDQUFDOEUsS0FBSyxDQUFDVSxhQUFhLENBQUMsQ0FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUM7TUFDdEQsSUFBTWtDLFNBQVMsR0FBR3BELENBQUMsQ0FBQzhFLEtBQUssQ0FBQ1UsYUFBYSxDQUFDLENBQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDO01BQzFENEQsS0FBSyxDQUFDRSxjQUFjLENBQUMsQ0FBQztNQUN0QjtNQUNBb0MsTUFBSSxDQUFDakUsZUFBZSxDQUFDbEMsTUFBTSxFQUFFbUMsU0FBUyxDQUFDO0lBQzNDLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXhELE1BQUEsQ0FFRG1JLG1CQUFtQixHQUFuQixTQUFBQSxtQkFBbUJBLENBQUEsRUFBRztJQUFBLElBQUFDLE1BQUE7SUFDbEIsSUFBTUMsZ0JBQWdCLEdBQUdqSSxDQUFDLENBQUMsY0FBYyxDQUFDO0lBQzFDLElBQU1rSSxXQUFXLEdBQUdsSSxDQUFDLENBQUMsY0FBYyxDQUFDO0lBQ3JDLElBQU1tSSxVQUFVLEdBQUduSSxDQUFDLENBQUMscUJBQXFCLEVBQUVrSSxXQUFXLENBQUM7SUFFeERsSSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ29GLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQU4sS0FBSyxFQUFJO01BQ3ZDQSxLQUFLLENBQUNFLGNBQWMsQ0FBQyxDQUFDO01BRXRCaEYsQ0FBQyxDQUFDOEUsS0FBSyxDQUFDVSxhQUFhLENBQUMsQ0FBQ2xGLElBQUksQ0FBQyxDQUFDO01BQzdCMkgsZ0JBQWdCLENBQUNyRyxJQUFJLENBQUMsQ0FBQztNQUN2QnFHLGdCQUFnQixDQUFDRyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztNQUMzQ3BJLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDNEIsSUFBSSxDQUFDLENBQUM7TUFDL0J1RyxVQUFVLENBQUNsQixPQUFPLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUMsQ0FBQztJQUVGakgsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNvRixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFOLEtBQUssRUFBSTtNQUMxQ0EsS0FBSyxDQUFDRSxjQUFjLENBQUMsQ0FBQztNQUV0QmlELGdCQUFnQixDQUFDM0gsSUFBSSxDQUFDLENBQUM7TUFDdkIySCxnQkFBZ0IsQ0FBQ0csSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7TUFDMUNwSSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ00sSUFBSSxDQUFDLENBQUM7TUFDL0JOLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDNEIsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUZzRyxXQUFXLENBQUM5QyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFOLEtBQUssRUFBSTtNQUM5QixJQUFNdUQsSUFBSSxHQUFHRixVQUFVLENBQUM3RyxHQUFHLENBQUMsQ0FBQztNQUU3QndELEtBQUssQ0FBQ0UsY0FBYyxDQUFDLENBQUM7O01BRXRCO01BQ0EsSUFBSSxDQUFDcUQsSUFBSSxFQUFFO1FBQ1AsT0FBTzlJLDZEQUFjLENBQUM0SSxVQUFVLENBQUNqSCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDbkQ7TUFFQTlCLHNFQUFTLENBQUMwQyxJQUFJLENBQUN3RyxTQUFTLENBQUNELElBQUksRUFBRSxVQUFDckcsR0FBRyxFQUFFQyxRQUFRLEVBQUs7UUFDOUMsSUFBSUEsUUFBUSxDQUFDZixJQUFJLENBQUNnQixNQUFNLEtBQUssU0FBUyxFQUFFO1VBQ3BDOEYsTUFBSSxDQUFDNUYsY0FBYyxDQUFDLENBQUM7UUFDekIsQ0FBQyxNQUFNO1VBQ0g3Qyw2REFBYyxDQUFDMEMsUUFBUSxDQUFDZixJQUFJLENBQUNtQixNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRDtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTFDLE1BQUEsQ0FFRDJJLHlCQUF5QixHQUF6QixTQUFBQSx5QkFBeUJBLENBQUEsRUFBRztJQUFBLElBQUFDLE1BQUE7SUFDeEIsSUFBTUMsY0FBYyxHQUFHekksQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ2xELElBQU0wSSxTQUFTLEdBQUcxSSxDQUFDLENBQUMsNkJBQTZCLENBQUM7SUFDbEQsSUFBTTJJLFVBQVUsR0FBRzNJLENBQUMsQ0FBQyxtQkFBbUIsRUFBRTBJLFNBQVMsQ0FBQztJQUVwRDFJLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDb0YsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBTixLQUFLLEVBQUk7TUFDNUNBLEtBQUssQ0FBQ0UsY0FBYyxDQUFDLENBQUM7TUFDdEJoRixDQUFDLENBQUM4RSxLQUFLLENBQUNVLGFBQWEsQ0FBQyxDQUFDb0QsTUFBTSxDQUFDLENBQUM7TUFDL0JILGNBQWMsQ0FBQ0csTUFBTSxDQUFDLENBQUM7TUFDdkJILGNBQWMsQ0FBQ0wsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7TUFDekNwSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQzRJLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQztJQUVGNUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNvRixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFOLEtBQUssRUFBSTtNQUMvQ0EsS0FBSyxDQUFDRSxjQUFjLENBQUMsQ0FBQztNQUN0QnlELGNBQWMsQ0FBQ0csTUFBTSxDQUFDLENBQUM7TUFDdkJILGNBQWMsQ0FBQ0wsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7TUFDeENwSSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQzRJLE1BQU0sQ0FBQyxDQUFDO01BQ25DNUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM0SSxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUM7SUFFRkYsU0FBUyxDQUFDdEQsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBTixLQUFLLEVBQUk7TUFDNUIsSUFBTXVELElBQUksR0FBR00sVUFBVSxDQUFDckgsR0FBRyxDQUFDLENBQUM7TUFFN0J3RCxLQUFLLENBQUNFLGNBQWMsQ0FBQyxDQUFDO01BRXRCLElBQUksQ0FBQzlGLDhFQUFvQixDQUFDbUosSUFBSSxDQUFDLEVBQUU7UUFDN0IsSUFBTVEsb0JBQW9CLEdBQUcxSiw2RkFBMkIsQ0FBQ3FKLE1BQUksQ0FBQzNGLE9BQU8sQ0FBQztRQUN0RSxPQUFPdEQsNkRBQWMsQ0FBQ3NKLG9CQUFvQixDQUFDQyx3QkFBd0IsQ0FBQztNQUN4RTtNQUVBMUosc0VBQVMsQ0FBQzBDLElBQUksQ0FBQ2lILG9CQUFvQixDQUFDVixJQUFJLEVBQUUsVUFBQ3JHLEdBQUcsRUFBRWdILElBQUksRUFBSztRQUNyRCxJQUFJQSxJQUFJLENBQUM5SCxJQUFJLENBQUNnQixNQUFNLEtBQUssU0FBUyxFQUFFO1VBQ2hDc0csTUFBSSxDQUFDcEcsY0FBYyxDQUFDLENBQUM7UUFDekIsQ0FBQyxNQUFNO1VBQ0g3Qyw2REFBYyxDQUFDeUosSUFBSSxDQUFDOUgsSUFBSSxDQUFDbUIsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0M7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUExQyxNQUFBLENBRURxSixzQkFBc0IsR0FBdEIsU0FBQUEsc0JBQXNCQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQ3JCLElBQU0xRixLQUFLLEdBQUdsRSwyREFBWSxDQUFDLENBQUM7SUFFNUJVLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDb0YsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBTixLQUFLLEVBQUk7TUFDM0MsSUFBTTdELE1BQU0sR0FBR2pCLENBQUMsQ0FBQzhFLEtBQUssQ0FBQ1UsYUFBYSxDQUFDLENBQUN0RSxJQUFJLENBQUMsY0FBYyxDQUFDO01BQzFELElBQU11QyxPQUFPLEdBQUc7UUFDWkMsUUFBUSxFQUFFO01BQ2QsQ0FBQztNQUVEb0IsS0FBSyxDQUFDRSxjQUFjLENBQUMsQ0FBQztNQUV0QnhCLEtBQUssQ0FBQ0csSUFBSSxDQUFDLENBQUM7TUFFWnZFLHNFQUFTLENBQUMwQyxJQUFJLENBQUNxSCwwQkFBMEIsQ0FBQ2xJLE1BQU0sRUFBRXdDLE9BQU8sRUFBRSxVQUFDekIsR0FBRyxFQUFFQyxRQUFRLEVBQUs7UUFDMUV1QixLQUFLLENBQUNPLGFBQWEsQ0FBQzlCLFFBQVEsQ0FBQytCLE9BQU8sQ0FBQztRQUVyQ2tGLE1BQUksQ0FBQzVELG9CQUFvQixDQUFDLENBQUM7TUFDL0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBRUZ0RixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ29GLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM1Q3pFLE1BQU0sQ0FBQ3lJLE9BQU8sQ0FBQ0YsTUFBSSxDQUFDckcsT0FBTyxDQUFDd0cseUJBQXlCLENBQUM7SUFDMUQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBekosTUFBQSxDQUVEMEYsb0JBQW9CLEdBQXBCLFNBQUFBLG9CQUFvQkEsQ0FBQSxFQUFHO0lBQ25CdEYsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNvRixFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFOLEtBQUssRUFBSTtNQUM1QyxJQUFNd0UsT0FBTyxHQUFHdEosQ0FBQyxDQUFDOEUsS0FBSyxDQUFDVSxhQUFhLENBQUM7TUFDdEMsSUFBTStELEVBQUUsR0FBR0QsT0FBTyxDQUFDaEksR0FBRyxDQUFDLENBQUM7TUFDeEIsSUFBTWtJLEtBQUssR0FBR0YsT0FBTyxDQUFDcEksSUFBSSxDQUFDLE9BQU8sQ0FBQztNQUVuQyxJQUFJLENBQUNxSSxFQUFFLEVBQUU7UUFDTDtNQUNKO01BRUEsSUFBTUUsWUFBWSxHQUFHSCxPQUFPLENBQUMxRixJQUFJLG1CQUFpQjJGLEVBQUUsTUFBRyxDQUFDLENBQUNySSxJQUFJLENBQUMsY0FBYyxDQUFDO01BRTdFbEIsQ0FBQywwQkFBd0J3SixLQUFPLENBQUMsQ0FBQ2xKLElBQUksQ0FBQyxDQUFDO01BQ3hDTixDQUFDLDBCQUF3QndKLEtBQUssU0FBSUQsRUFBSSxDQUFDLENBQUMzSCxJQUFJLENBQUMsQ0FBQztNQUU5QyxJQUFJNkgsWUFBWSxFQUFFO1FBQ2R6SixDQUFDLDRCQUEwQndKLEtBQU8sQ0FBQyxDQUFDNUgsSUFBSSxDQUFDLENBQUM7TUFDOUMsQ0FBQyxNQUFNO1FBQ0g1QixDQUFDLDRCQUEwQndKLEtBQU8sQ0FBQyxDQUFDbEosSUFBSSxDQUFDLENBQUM7TUFDOUM7SUFDSixDQUFDLENBQUM7SUFFRk4sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNpSCxPQUFPLENBQUMsUUFBUSxDQUFDO0lBRTNDLFNBQVN5QyxXQUFXQSxDQUFBLEVBQUc7TUFDbkIsSUFBTXJNLEtBQUssR0FBRzJDLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDc0IsR0FBRyxDQUFDLENBQUM7TUFDbEUsSUFBTXFJLFdBQVcsR0FBRzNKLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztNQUM3QyxJQUFNNEosVUFBVSxHQUFHNUosQ0FBQyxDQUFDLHdCQUF3QixDQUFDO01BRTlDLElBQUkzQyxLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ2xCc00sV0FBVyxDQUFDL0gsSUFBSSxDQUFDLENBQUM7UUFDbEJnSSxVQUFVLENBQUN0SixJQUFJLENBQUMsQ0FBQztNQUNyQixDQUFDLE1BQU07UUFDSHFKLFdBQVcsQ0FBQ3JKLElBQUksQ0FBQyxDQUFDO1FBQ2xCc0osVUFBVSxDQUFDaEksSUFBSSxDQUFDLENBQUM7TUFDckI7SUFDSjtJQUVBNUIsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNvRixFQUFFLENBQUMsT0FBTyxFQUFFc0UsV0FBVyxDQUFDO0lBRW5EQSxXQUFXLENBQUMsQ0FBQztFQUNqQixDQUFDO0VBQUE5SixNQUFBLENBRURjLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUN5RyxjQUFjLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNZLG1CQUFtQixDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDa0Isc0JBQXNCLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUNWLHlCQUF5QixDQUFDLENBQUM7O0lBRWhDO0lBQ0EsSUFBTXNCLHFCQUFxQixHQUFHO01BQzFCQyxPQUFPLEVBQUUsSUFBSSxDQUFDakgsT0FBTyxDQUFDa0gsMkJBQTJCO01BQ2pEQyxRQUFRLEVBQUUsSUFBSSxDQUFDbkgsT0FBTyxDQUFDb0g7SUFDM0IsQ0FBQztJQUNELElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsSUFBSTdLLGdFQUFpQixDQUFDVyxDQUFDLENBQUMsMkJBQTJCLENBQUMsRUFBRTZKLHFCQUFxQixDQUFDO0VBQ3pHLENBQUM7RUFBQSxPQUFBbkssSUFBQTtBQUFBLEVBeGM2QlQscURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUTTtBQUNuQjtBQUNlO0FBQ29DO0FBQzVCO0FBQ047QUFBQSxJQUU1QkksaUJBQWlCO0VBQ2xDLFNBQUFBLGtCQUFZb0wsUUFBUSxFQUFFWixxQkFBcUIsRUFBRTtJQUN6QyxJQUFJLENBQUNZLFFBQVEsR0FBR0EsUUFBUTtJQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBRzFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUN5SyxRQUFRLENBQUM7SUFDM0QsSUFBSSxDQUFDRSxxQkFBcUIsR0FBRyxLQUFLO0lBQ2xDLElBQUksQ0FBQ2QscUJBQXFCLEdBQUdBLHFCQUFxQjtJQUNsRCxJQUFJLENBQUNlLGtCQUFrQixDQUFDLENBQUM7SUFDekIsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQztFQUM5QjtFQUFDLElBQUFsTCxNQUFBLEdBQUFQLGlCQUFBLENBQUFuRCxTQUFBO0VBQUEwRCxNQUFBLENBRURnTCxrQkFBa0IsR0FBbEIsU0FBQUEsa0JBQWtCQSxDQUFBLEVBQUc7SUFBQSxJQUFBNUosS0FBQTtJQUNqQixJQUFNK0osc0JBQXNCLEdBQUcvSyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFFcEQsSUFBSSxDQUFDa0ssaUJBQWlCLEdBQUcsK0JBQStCO0lBQ3hELElBQUksQ0FBQ2MsaUJBQWlCLEdBQUdYLHVEQUFHLENBQUM7TUFDekJZLE1BQU0sRUFBSyxJQUFJLENBQUNmLGlCQUFpQiwrQkFBNEI7TUFDN0RnQixHQUFHLEVBQUVYLCtFQUF5QkE7SUFDbEMsQ0FBQyxDQUFDO0lBRUZ2SyxDQUFDLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDeUssUUFBUSxDQUFDLENBQUNyRixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFOLEtBQUssRUFBSTtNQUMvRDtNQUNBO01BQ0E7TUFDQSxJQUFJaUcsc0JBQXNCLENBQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDckMyQyxzQkFBc0IsQ0FBQ0ksVUFBVSxDQUFDLE1BQU0sQ0FBQztNQUM3QztNQUVBSixzQkFBc0IsQ0FBQzNDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO01BQzVDO01BQ0E7TUFDQTtNQUNBLElBQUlwSSxDQUFDLENBQUlnQixLQUFJLENBQUNrSixpQkFBaUIsdUNBQWtDLENBQUMsQ0FBQzVJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEVOLEtBQUksQ0FBQ2dLLGlCQUFpQixDQUFDSSxZQUFZLENBQUMsQ0FBQztNQUN6QztNQUVBLElBQUlwSyxLQUFJLENBQUNnSyxpQkFBaUIsQ0FBQ0ssTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3hDO01BQ0o7TUFFQXZHLEtBQUssQ0FBQ0UsY0FBYyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDc0csY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUFBNUwsTUFBQSxDQUVEMEwsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ04saUJBQWlCLENBQUNTLEdBQUcsQ0FBQyxDQUN2QjtNQUNJQyxRQUFRLEVBQUssSUFBSSxDQUFDeEIsaUJBQWlCLHVDQUFrQztNQUNyRXlCLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxFQUFFLEVBQUV0SyxHQUFHLEVBQUs7UUFDbkIsSUFBTXVLLFNBQVMsR0FBR25KLE1BQU0sQ0FBQ3BCLEdBQUcsQ0FBQztRQUM3QixJQUFNd0UsTUFBTSxHQUFHK0YsU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDbkosTUFBTSxDQUFDb0osS0FBSyxDQUFDRCxTQUFTLENBQUM7UUFFMURELEVBQUUsQ0FBQzlGLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRGlHLFlBQVksRUFBRSxJQUFJLENBQUNsQyxxQkFBcUIsQ0FBQ0M7SUFDN0MsQ0FBQyxDQUNKLENBQUM7RUFDTixDQUFDO0VBQUFsSyxNQUFBLENBRUQyTCxtQkFBbUIsR0FBbkIsU0FBQUEsbUJBQW1CQSxDQUFBLEVBQUc7SUFBQSxJQUFBOUksTUFBQTtJQUNsQixJQUFJLENBQUN1SSxpQkFBaUIsQ0FBQ1MsR0FBRyxDQUFDLENBQ3ZCO01BQ0lDLFFBQVEsRUFBRTFMLENBQUMsQ0FBSSxJQUFJLENBQUNrSyxpQkFBaUIscUNBQWdDLENBQUM7TUFDdEV5QixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFLO1FBQ2QsSUFBSTlGLE1BQU07UUFFVixJQUFNa0csSUFBSSxHQUFHaE0sQ0FBQyxDQUFJeUMsTUFBSSxDQUFDeUgsaUJBQWlCLHFDQUFnQyxDQUFDO1FBRXpFLElBQUk4QixJQUFJLENBQUNoUCxNQUFNLEVBQUU7VUFDYixJQUFNaVAsTUFBTSxHQUFHRCxJQUFJLENBQUMxSyxHQUFHLENBQUMsQ0FBQztVQUV6QndFLE1BQU0sR0FBR21HLE1BQU0sSUFBSUEsTUFBTSxDQUFDalAsTUFBTSxJQUFJaVAsTUFBTSxLQUFLLGdCQUFnQjtRQUNuRTtRQUVBTCxFQUFFLENBQUM5RixNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RpRyxZQUFZLEVBQUUsSUFBSSxDQUFDbEMscUJBQXFCLENBQUNHO0lBQzdDLENBQUMsQ0FDSixDQUFDO0VBQ047O0VBRUE7QUFDSjtBQUNBLEtBRkk7RUFBQXBLLE1BQUEsQ0FHQTRMLFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxJQUFNVSxhQUFhLEdBQUcsK0JBQStCO0lBRXJEbE0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDb0YsRUFBRSxDQUFDLE9BQU8sRUFBRThHLGFBQWEsRUFBRSxVQUFDcEgsS0FBSyxFQUFLO01BQzVDLElBQU1xSCxpQkFBaUIsR0FBR25NLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztNQUNuRCxJQUFNb00scUJBQXFCLEdBQUdwTSxDQUFDLENBQUMsMEJBQTBCLENBQUM7TUFFM0Q4RSxLQUFLLENBQUNFLGNBQWMsQ0FBQyxDQUFDO01BRXRCbUgsaUJBQWlCLENBQUNFLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztNQUNqREQscUJBQXFCLENBQUNDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN6RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUF6TSxNQUFBLENBRURpTCxzQkFBc0IsR0FBdEIsU0FBQUEsc0JBQXNCQSxDQUFBLEVBQUc7SUFBQSxJQUFBNUgsTUFBQTtJQUNyQixJQUFJcUosS0FBSzs7SUFFVDtJQUNBbEMsaUVBQVksQ0FBQyxJQUFJLENBQUNNLE1BQU0sRUFBRSxJQUFJLENBQUM3SCxPQUFPLEVBQUU7TUFBRTBKLGNBQWMsRUFBRTtJQUFLLENBQUMsRUFBRSxVQUFDdkssR0FBRyxFQUFFd0ssS0FBSyxFQUFLO01BQzlFLElBQUl4SyxHQUFHLEVBQUU7UUFDTHpDLDZEQUFjLENBQUN5QyxHQUFHLENBQUM7UUFDbkIsTUFBTSxJQUFJeUssS0FBSyxDQUFDekssR0FBRyxDQUFDO01BQ3hCO01BRUEsSUFBTTBLLE1BQU0sR0FBRzFNLENBQUMsQ0FBQ3dNLEtBQUssQ0FBQztNQUV2QixJQUFJdkosTUFBSSxDQUFDK0gsaUJBQWlCLENBQUMyQixTQUFTLENBQUMxSixNQUFJLENBQUN5SCxNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7UUFDL0R6SCxNQUFJLENBQUMrSCxpQkFBaUIsQ0FBQzdJLE1BQU0sQ0FBQ2MsTUFBSSxDQUFDeUgsTUFBTSxDQUFDO01BQzlDO01BRUEsSUFBSTRCLEtBQUssRUFBRTtRQUNQckosTUFBSSxDQUFDK0gsaUJBQWlCLENBQUM3SSxNQUFNLENBQUNtSyxLQUFLLENBQUM7TUFDeEM7TUFFQSxJQUFJSSxNQUFNLENBQUNFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNyQk4sS0FBSyxHQUFHRSxLQUFLO1FBQ2J2SixNQUFJLENBQUNzSSxtQkFBbUIsQ0FBQyxDQUFDO01BQzlCLENBQUMsTUFBTTtRQUNIbUIsTUFBTSxDQUFDdEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztRQUM1Q2tDLGdFQUFVLENBQUN1QyxzQkFBc0IsQ0FBQ0wsS0FBSyxDQUFDO01BQzVDOztNQUVBO01BQ0E7TUFDQTtNQUNBeE0sQ0FBQyxDQUFDaUQsTUFBSSxDQUFDaUgsaUJBQWlCLENBQUMsQ0FBQ3RHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDa0osV0FBVyxDQUFDLHFCQUFxQixDQUFDO0lBQzdGLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWxOLE1BQUEsQ0FFRG1OLHdCQUF3QixHQUF4QixTQUFBQSx3QkFBd0JBLENBQUNDLFlBQVksRUFBRUMsY0FBYyxFQUFFQyxnQkFBZ0IsRUFBRTtJQUNyRSxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQXdCQSxDQUFJQyxrQkFBa0IsRUFBSztNQUNyRHBOLENBQUMsQ0FBQ2dOLFlBQVksQ0FBQyxDQUFDNUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFZ0Ysa0JBQWtCLENBQUM7TUFDM0RwTixDQUFDLENBQUNpTixjQUFjLENBQUMsQ0FBQ2pILElBQUksQ0FBQ2hHLENBQUMsT0FBS29OLGtCQUFvQixDQUFDLENBQUNwSCxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDMkUscUJBQXFCLEVBQUU7TUFDN0J3Qyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQztNQUMzQ0QsZ0JBQWdCLENBQUNKLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDNUMsQ0FBQyxNQUFNO01BQ0hLLHdCQUF3QixDQUFDLGVBQWUsQ0FBQztNQUN6Q0QsZ0JBQWdCLENBQUNyTSxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3pDO0lBQ0EsSUFBSSxDQUFDOEoscUJBQXFCLEdBQUcsQ0FBQyxJQUFJLENBQUNBLHFCQUFxQjtFQUM1RCxDQUFDO0VBQUEvSyxNQUFBLENBRURrTCxtQkFBbUIsR0FBbkIsU0FBQUEsbUJBQW1CQSxDQUFBLEVBQUc7SUFBQSxJQUFBekgsTUFBQTtJQUNsQixJQUFNZ0ssbUJBQW1CLEdBQUdyTixDQUFDLENBQUMscUJBQXFCLENBQUM7SUFDcEQsSUFBTXNOLGNBQWMsR0FBR3ROLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUMzQ3dLLCtEQUFrQixDQUFDLENBQUM7SUFDcEI4QyxjQUFjLENBQUNsSSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFOLEtBQUssRUFBSTtNQUNqQyxJQUFNeUksTUFBTSxHQUFHO1FBQ1hDLFVBQVUsRUFBRXhOLENBQUMsQ0FBQywyQkFBMkIsRUFBRXNOLGNBQWMsQ0FBQyxDQUFDaE0sR0FBRyxDQUFDLENBQUM7UUFDaEVtTSxRQUFRLEVBQUV6TixDQUFDLENBQUMseUJBQXlCLEVBQUVzTixjQUFjLENBQUMsQ0FBQ2hNLEdBQUcsQ0FBQyxDQUFDO1FBQzVEb00sSUFBSSxFQUFFMU4sQ0FBQyxDQUFDLHdCQUF3QixFQUFFc04sY0FBYyxDQUFDLENBQUNoTSxHQUFHLENBQUMsQ0FBQztRQUN2RHFNLFFBQVEsRUFBRTNOLENBQUMsQ0FBQyx1QkFBdUIsRUFBRXNOLGNBQWMsQ0FBQyxDQUFDaE0sR0FBRyxDQUFDO01BQzdELENBQUM7TUFFRHdELEtBQUssQ0FBQ0UsY0FBYyxDQUFDLENBQUM7TUFFdEI1RixzRUFBUyxDQUFDMEMsSUFBSSxDQUFDOEwsaUJBQWlCLENBQUNMLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxVQUFDdkwsR0FBRyxFQUFFQyxRQUFRLEVBQUs7UUFDaEZqQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQzhHLElBQUksQ0FBQzdFLFFBQVEsQ0FBQytCLE9BQU8sQ0FBQzs7UUFFNUM7UUFDQWhFLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDb0YsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBeUksVUFBVSxFQUFJO1VBQ2xELElBQU1DLE9BQU8sR0FBRzlOLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDc0IsR0FBRyxDQUFDLENBQUM7VUFFbER1TSxVQUFVLENBQUM3SSxjQUFjLENBQUMsQ0FBQztVQUUzQjVGLHNFQUFTLENBQUMwQyxJQUFJLENBQUNpTSxtQkFBbUIsQ0FBQ0QsT0FBTyxFQUFFLFlBQU07WUFDOUNuTixNQUFNLENBQUNnRyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1VBQzVCLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGNUcsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNvRixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFOLEtBQUssRUFBSTtNQUM5Q0EsS0FBSyxDQUFDRSxjQUFjLENBQUMsQ0FBQztNQUN0QjNCLE1BQUksQ0FBQzBKLHdCQUF3QixDQUFDakksS0FBSyxDQUFDVSxhQUFhLEVBQUUsbUNBQW1DLEVBQUU2SCxtQkFBbUIsQ0FBQztJQUNoSCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQWhPLGlCQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25NMEM7QUFDb0M7QUFFaEI7QUFBQSxJQUU5Q0ksZUFBZSwwQkFBQTJPLG1CQUFBO0VBQ2hDLFNBQUEzTyxnQkFBWTRPLE1BQU0sRUFBRXhMLE9BQU8sRUFBRXlMLHFCQUFxQixFQUFPO0lBQUEsSUFBQXROLEtBQUE7SUFBQSxJQUE1QnNOLHFCQUFxQjtNQUFyQkEscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQUE7SUFDbkR0TixLQUFBLEdBQUFvTixtQkFBQSxDQUFBalIsSUFBQSxPQUFNa1IsTUFBTSxFQUFFeEwsT0FBTyxDQUFDO0lBRXRCLElBQU00QyxLQUFLLEdBQUd6RixDQUFDLENBQUMsNEJBQTRCLEVBQUVnQixLQUFBLENBQUtxTixNQUFNLENBQUM7SUFDMUQsSUFBTUUsc0JBQXNCLEdBQUd2TyxDQUFDLENBQUMsbUNBQW1DLEVBQUV5RixLQUFLLENBQUM7SUFDNUUsSUFBTStJLFVBQVUsR0FBR0Qsc0JBQXNCLENBQUN6SCxJQUFJLENBQUMsQ0FBQyxDQUFDMkgsSUFBSSxDQUFDLENBQUMsQ0FBQ3pSLE1BQU07SUFDOUQsSUFBTTBSLGlCQUFpQixHQUFHSCxzQkFBc0IsQ0FBQzNLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDNUcsTUFBTTtJQUU5RXVSLHNCQUFzQixDQUFDbkosRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFNO01BQ3RDcEUsS0FBQSxDQUFLMk4saUJBQWlCLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7SUFFRixJQUFNQyxvQkFBb0IsR0FBR1gsd0VBQXFCLENBQUM5USxJQUFJLENBQUE2RCxLQUFBLEVBQU8wTixpQkFBaUIsQ0FBQzs7SUFFaEY7SUFDQTtJQUNBLElBQUksQ0FBQ0cscURBQUEsQ0FBUVAscUJBQXFCLENBQUMsSUFBSUksaUJBQWlCLEtBQUtGLFVBQVUsRUFBRTtNQUNyRSxJQUFNcEwsU0FBUyxHQUFHcEMsS0FBQSxDQUFLNkIsT0FBTyxDQUFDVSxrQkFBa0I7TUFFakRuRSxzRUFBUyxDQUFDeUUsaUJBQWlCLENBQUMrQixZQUFZLENBQUN4QyxTQUFTLEVBQUVxQyxLQUFLLENBQUNJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsOEJBQThCLEVBQUUrSSxvQkFBb0IsQ0FBQztJQUNoSSxDQUFDLE1BQU07TUFDSDVOLEtBQUEsQ0FBSzhOLHVCQUF1QixDQUFDUixxQkFBcUIsQ0FBQztJQUN2RDtJQUFDLE9BQUF0TixLQUFBO0VBQ0w7RUFBQ2xDLGNBQUEsQ0FBQVcsZUFBQSxFQUFBMk8sbUJBQUE7RUFBQSxJQUFBeE8sTUFBQSxHQUFBSCxlQUFBLENBQUF2RCxTQUFBO0VBQUEwRCxNQUFBLENBRUQrTyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFDaEIsSUFBTUkseUJBQXlCLEdBQUcsRUFBRTtJQUNwQyxJQUFNdEwsT0FBTyxHQUFHLEVBQUU7SUFFbEJ6RCxDQUFDLENBQUNnUCxJQUFJLENBQUNoUCxDQUFDLENBQUMsMEJBQTBCLENBQUMsRUFBRSxVQUFDd0osS0FBSyxFQUFFbk0sS0FBSyxFQUFLO01BQ3BELElBQU00UixXQUFXLEdBQUc1UixLQUFLLENBQUM2UixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVM7TUFDL0MsSUFBTUMsV0FBVyxHQUFHSCxXQUFXLENBQUNJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1osSUFBSSxDQUFDLENBQUM7TUFDcEQsSUFBTWEsUUFBUSxHQUFHTCxXQUFXLENBQUNNLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUM7TUFDL0QsSUFBTUMsSUFBSSxHQUFHcFMsS0FBSyxDQUFDcVMsWUFBWSxDQUFDLHdCQUF3QixDQUFDO01BRXpELElBQUksQ0FBQ0QsSUFBSSxLQUFLLFlBQVksSUFBSUEsSUFBSSxLQUFLLFlBQVksSUFBSUEsSUFBSSxLQUFLLGNBQWMsS0FBS3BTLEtBQUssQ0FBQ3NTLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ3RTLEtBQUssS0FBSyxFQUFFLElBQUlpUyxRQUFRLEVBQUU7UUFDdElQLHlCQUF5QixDQUFDYSxJQUFJLENBQUN2UyxLQUFLLENBQUM7TUFDekM7TUFFQSxJQUFJb1MsSUFBSSxLQUFLLFVBQVUsSUFBSXBTLEtBQUssQ0FBQ3NTLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ3RTLEtBQUssS0FBSyxFQUFFLElBQUlpUyxRQUFRLEVBQUU7UUFDakZQLHlCQUF5QixDQUFDYSxJQUFJLENBQUN2UyxLQUFLLENBQUM7TUFDekM7TUFFQSxJQUFJb1MsSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNqQixJQUFNSSxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDMVMsS0FBSyxDQUFDMlMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFVBQUNDLE1BQU07VUFBQSxPQUFLQSxNQUFNLENBQUNDLGFBQWEsS0FBSyxDQUFDO1FBQUEsRUFBQztRQUU5RyxJQUFJTixXQUFXLEVBQUU7VUFDYixJQUFNTyxVQUFVLEdBQUdOLEtBQUssQ0FBQ0MsSUFBSSxDQUFDMVMsS0FBSyxDQUFDMlMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQ0ssR0FBRyxDQUFDLFVBQUNDLENBQUM7WUFBQSxPQUFLQSxDQUFDLENBQUNqVCxLQUFLO1VBQUEsRUFBQyxDQUFDaUYsSUFBSSxDQUFDLEdBQUcsQ0FBQztVQUM3Rm1CLE9BQU8sQ0FBQ21NLElBQUksQ0FBSVIsV0FBVyxTQUFJZ0IsVUFBWSxDQUFDO1VBRTVDO1FBQ0o7UUFFQSxJQUFJZCxRQUFRLEVBQUU7VUFDVlAseUJBQXlCLENBQUNhLElBQUksQ0FBQ3ZTLEtBQUssQ0FBQztRQUN6QztNQUNKO01BRUEsSUFBSW9TLElBQUksS0FBSyxZQUFZLEVBQUU7UUFDdkIsSUFBTVMsTUFBTSxHQUFHN1MsS0FBSyxDQUFDc1MsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFNUSxhQUFhLEdBQUdELE1BQU0sQ0FBQ0MsYUFBYTtRQUUxQyxJQUFJQSxhQUFhLEtBQUssQ0FBQyxFQUFFO1VBQ3JCMU0sT0FBTyxDQUFDbU0sSUFBSSxDQUFJUixXQUFXLFNBQUljLE1BQU0sQ0FBQ3pNLE9BQU8sQ0FBQzBNLGFBQWEsQ0FBQyxDQUFDaEIsU0FBVyxDQUFDO1VBRXpFO1FBQ0o7UUFFQSxJQUFJRyxRQUFRLEVBQUU7VUFDVlAseUJBQXlCLENBQUNhLElBQUksQ0FBQ3ZTLEtBQUssQ0FBQztRQUN6QztNQUNKO01BRUEsSUFBSW9TLElBQUksS0FBSyxlQUFlLElBQUlBLElBQUksS0FBSyxXQUFXLElBQUlBLElBQUksS0FBSyxRQUFRLElBQUlBLElBQUksS0FBSyxnQkFBZ0IsSUFBSUEsSUFBSSxLQUFLLGNBQWMsRUFBRTtRQUMvSCxJQUFNYyxPQUFPLEdBQUdsVCxLQUFLLENBQUNzUyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQy9DLElBQUlZLE9BQU8sRUFBRTtVQUNULElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBUztZQUNqQyxJQUFNQyxtQkFBbUIsR0FBR3RDLG1FQUFnQixDQUFDOVEsS0FBSyxDQUFDNlIsUUFBUSxDQUFDO1lBQzVELElBQU13Qix5QkFBeUIsR0FBRyxTQUE1QkEseUJBQXlCQSxDQUFHQyxJQUFJO2NBQUEsT0FBSUEsSUFBSSxDQUFDQyxPQUFPLENBQUNDLHFCQUFxQixLQUFLTixPQUFPLENBQUNsVCxLQUFLO1lBQUE7WUFDOUYsT0FBT29ULG1CQUFtQixDQUFDdkosTUFBTSxDQUFDd0oseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDbkUsQ0FBQztVQUNELElBQUlqQixJQUFJLEtBQUssZUFBZSxJQUFJQSxJQUFJLEtBQUssV0FBVyxJQUFJQSxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQzdFLElBQU1xQixLQUFLLEdBQUc1QywwREFBVyxHQUFHc0Msc0JBQXNCLENBQUMsQ0FBQyxDQUFDckIsU0FBUyxDQUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHOEIsT0FBTyxDQUFDUSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM1QixTQUFTO1lBQ25HLElBQUkyQixLQUFLLEVBQUU7Y0FDUHJOLE9BQU8sQ0FBQ21NLElBQUksQ0FBSVIsV0FBVyxTQUFJMEIsS0FBTyxDQUFDO1lBQzNDO1VBQ0o7VUFFQSxJQUFJckIsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNuQixJQUFNcUIsTUFBSyxHQUFHNUMsMERBQVcsR0FBR3NDLHNCQUFzQixDQUFDLENBQUMsQ0FBQ3RCLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBR3FCLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDN0IsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRyxJQUFJNEIsTUFBSyxFQUFFO2NBQ1ByTixPQUFPLENBQUNtTSxJQUFJLENBQUlSLFdBQVcsU0FBSTBCLE1BQUssQ0FBQ0UsS0FBTyxDQUFDO1lBQ2pEO1VBQ0o7VUFFQSxJQUFJdkIsSUFBSSxLQUFLLGdCQUFnQixFQUFFO1lBQzNCaE0sT0FBTyxDQUFDbU0sSUFBSSxDQUFJUixXQUFXLFNBQU0sQ0FBQztVQUN0QztVQUVBO1FBQ0o7UUFFQSxJQUFJSyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7VUFDM0JoTSxPQUFPLENBQUNtTSxJQUFJLENBQUlSLFdBQVcsUUFBSyxDQUFDO1FBQ3JDO1FBRUEsSUFBSUUsUUFBUSxFQUFFO1VBQ1ZQLHlCQUF5QixDQUFDYSxJQUFJLENBQUN2UyxLQUFLLENBQUM7UUFDekM7TUFDSjtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUk0VCxjQUFjLEdBQUdsQyx5QkFBeUIsQ0FBQy9SLE1BQU0sS0FBSyxDQUFDLEdBQUd5RyxPQUFPLENBQUN5TixJQUFJLENBQUMsQ0FBQyxDQUFDNU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWE7SUFDdkcsSUFBTTZPLElBQUksR0FBR25SLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUVyQyxJQUFJaVIsY0FBYyxFQUFFO01BQ2hCQSxjQUFjLEdBQUdBLGNBQWMsS0FBSyxhQUFhLEdBQUcsRUFBRSxHQUFHQSxjQUFjO01BQ3ZFLElBQUlFLElBQUksQ0FBQy9JLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQzlCK0ksSUFBSSxDQUFDL0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFNkksY0FBYyxDQUFDO01BQ3JELENBQUMsTUFBTTtRQUNILElBQU1HLFdBQVcsR0FBR0QsSUFBSSxDQUFDckssSUFBSSxDQUFDLENBQUMsQ0FBQ3VLLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBTUMsSUFBSSxHQUFHdFIsQ0FBQyxtQkFBZ0JvUixXQUFXLFFBQUksQ0FBQztRQUM5Q0UsSUFBSSxDQUFDbEosSUFBSSxDQUFDLHNCQUFzQixFQUFFNkksY0FBYyxDQUFDO01BQ3JEO0lBQ0o7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQSxLQUhJO0VBQUFyUixNQUFBLENBSUFrUCx1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDNU4sSUFBSSxFQUFFO0lBQzFCa04sbUJBQUEsQ0FBQWxTLFNBQUEsQ0FBTTRTLHVCQUF1QixDQUFBM1IsSUFBQSxPQUFDK0QsSUFBSTtJQUVsQyxJQUFJLENBQUNtTixNQUFNLENBQUN6SyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ2tKLFdBQVcsQ0FBQyxjQUFjLENBQUM7RUFDbEUsQ0FBQztFQUFBLE9BQUFyTixlQUFBO0FBQUEsRUF4SXdDdU8sNkRBQWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNML0QsNkJBQWUsb0NBQVV1RCxJQUFJLEVBQUU7RUFDM0IsSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxJQUFJQSxJQUFJLENBQUN2VSxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQy9DLE9BQU8sS0FBSztFQUNoQjs7RUFFQTtFQUNBLE9BQU8sSUFBSTtBQUNmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ArQztBQUVhO0FBQ1g7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU3lVLGlCQUFpQkEsQ0FBQ0MsWUFBWSxFQUFFN08sT0FBTyxFQUFFO0VBQzlDLElBQU04TyxLQUFLLEdBQUdDLHVEQUFBLENBQVlGLFlBQVksQ0FBQ3pMLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFDSCxNQUFNLEVBQUUrTCxJQUFJLEVBQUs7SUFDekUsSUFBTUMsR0FBRyxHQUFHaE0sTUFBTTtJQUNsQmdNLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxJQUFJLENBQUMsR0FBR0YsSUFBSSxDQUFDeFUsS0FBSztJQUMzQixPQUFPeVUsR0FBRztFQUNkLENBQUMsQ0FBQztFQUVGLElBQU1FLHFCQUFxQixHQUFHO0lBQzFCekksRUFBRSxFQUFFb0ksS0FBSyxDQUFDcEksRUFBRTtJQUNaLFlBQVksRUFBRW9JLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDakMsU0FBTyxhQUFhO0lBQ3BCSSxJQUFJLEVBQUVKLEtBQUssQ0FBQ0ksSUFBSTtJQUNoQixpQkFBaUIsRUFBRUosS0FBSyxDQUFDLGlCQUFpQjtFQUM5QyxDQUFDO0VBRURELFlBQVksQ0FBQzNLLFdBQVcsQ0FBQy9HLENBQUMsQ0FBQyxtQkFBbUIsRUFBRWdTLHFCQUFxQixDQUFDLENBQUM7RUFFdkUsSUFBTUMsV0FBVyxHQUFHalMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0VBQ2xELElBQU1rUyxZQUFZLEdBQUdsUyxDQUFDLENBQUMsMkJBQTJCLENBQUM7RUFFbkQsSUFBSWtTLFlBQVksQ0FBQ2xWLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDM0JrVixZQUFZLENBQUMvUCxNQUFNLENBQUMsQ0FBQztFQUN6QjtFQUVBLElBQUk4UCxXQUFXLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUN2TyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM1RyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQy9DO0lBQ0FpVixXQUFXLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUNDLE1BQU0sYUFBV3ZQLE9BQU8sQ0FBQ3lNLFFBQVEsYUFBVSxDQUFDO0VBQ25FLENBQUMsTUFBTTtJQUNIMkMsV0FBVyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDdk8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDaEMsSUFBSSxDQUFDLENBQUM7RUFDM0M7RUFFQSxPQUFPcVEsV0FBVztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNJLGlCQUFpQkEsQ0FBQ1gsWUFBWSxFQUFFO0VBQ3JDLElBQU1DLEtBQUssR0FBR0MsdURBQUEsQ0FBWUYsWUFBWSxDQUFDekwsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQUNILE1BQU0sRUFBRStMLElBQUksRUFBSztJQUN6RSxJQUFNQyxHQUFHLEdBQUdoTSxNQUFNO0lBQ2xCZ00sR0FBRyxDQUFDRCxJQUFJLENBQUNFLElBQUksQ0FBQyxHQUFHRixJQUFJLENBQUN4VSxLQUFLO0lBRTNCLE9BQU95VSxHQUFHO0VBQ2QsQ0FBQyxDQUFDO0VBRUYsSUFBTUUscUJBQXFCLEdBQUc7SUFDMUJ2QyxJQUFJLEVBQUUsTUFBTTtJQUNabEcsRUFBRSxFQUFFb0ksS0FBSyxDQUFDcEksRUFBRTtJQUNaLFlBQVksRUFBRW9JLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDakMsU0FBTyxZQUFZO0lBQ25CSSxJQUFJLEVBQUVKLEtBQUssQ0FBQ0ksSUFBSTtJQUNoQixpQkFBaUIsRUFBRUosS0FBSyxDQUFDLGlCQUFpQjtFQUM5QyxDQUFDO0VBRURELFlBQVksQ0FBQzNLLFdBQVcsQ0FBQy9HLENBQUMsQ0FBQyxXQUFXLEVBQUVnUyxxQkFBcUIsQ0FBQyxDQUFDO0VBRS9ELElBQU1DLFdBQVcsR0FBR2pTLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztFQUVsRCxJQUFJaVMsV0FBVyxDQUFDalYsTUFBTSxLQUFLLENBQUMsRUFBRTtJQUMxQndVLHlFQUFzQixDQUFDUyxXQUFXLENBQUM7SUFDbkNBLFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQ3ZPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQ3RELElBQUksQ0FBQyxDQUFDO0VBQzNDO0VBRUEsT0FBTzJSLFdBQVc7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0ssVUFBVUEsQ0FBQ0MsV0FBVyxFQUFFQyxjQUFjLEVBQUUvTyxPQUFPLEVBQUU7RUFDdEQsSUFBTWdQLFNBQVMsR0FBRyxFQUFFO0VBRXBCQSxTQUFTLENBQUM3QyxJQUFJLHlCQUFxQjJDLFdBQVcsQ0FBQ0csTUFBTSxjQUFXLENBQUM7RUFFakUsSUFBSSxDQUFDN0QscURBQUEsQ0FBVTJELGNBQWMsQ0FBQyxFQUFFO0lBQzVCRCxXQUFXLENBQUNJLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFVBQUNDLFFBQVEsRUFBSztNQUNyQyxJQUFJcFAsT0FBTyxDQUFDOEksY0FBYyxFQUFFO1FBQ3hCa0csU0FBUyxDQUFDN0MsSUFBSSxzQkFBbUJpRCxRQUFRLENBQUN0SixFQUFFLFdBQUtzSixRQUFRLENBQUNkLElBQUksY0FBVyxDQUFDO01BQzlFLENBQUMsTUFBTTtRQUNIVSxTQUFTLENBQUM3QyxJQUFJLHNCQUFtQmlELFFBQVEsQ0FBQ2QsSUFBSSxZQUFLYyxRQUFRLENBQUMvQixLQUFLLEdBQUcrQixRQUFRLENBQUMvQixLQUFLLEdBQUcrQixRQUFRLENBQUNkLElBQUksZUFBVyxDQUFDO01BQ2xIO0lBQ0osQ0FBQyxDQUFDO0lBRUZTLGNBQWMsQ0FBQzFMLElBQUksQ0FBQzJMLFNBQVMsQ0FBQ25RLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUM1QztBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQWUsb0NBQVVvUCxZQUFZLEVBQUU3TyxPQUFPLEVBQU9ZLE9BQU8sRUFBRXFQLFFBQVEsRUFBRTtFQUFBLElBQWpDalEsT0FBTztJQUFQQSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0VBQUE7RUFDL0M7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxJQUFJLE9BQU9ZLE9BQU8sS0FBSyxVQUFVLEVBQUU7SUFDL0I7SUFDQXFQLFFBQVEsR0FBR3JQLE9BQU87SUFDbEJBLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDWjtFQUNKO0VBRUF6RCxDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQ29GLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQU4sS0FBSyxFQUFJO0lBQ3pELElBQU1pTyxXQUFXLEdBQUcvUyxDQUFDLENBQUM4RSxLQUFLLENBQUNVLGFBQWEsQ0FBQyxDQUFDbEUsR0FBRyxDQUFDLENBQUM7SUFFaEQsSUFBSXlSLFdBQVcsS0FBSyxFQUFFLEVBQUU7TUFDcEI7SUFDSjtJQUVBM1Qsc0VBQVMsQ0FBQzBLLE9BQU8sQ0FBQ2tKLFNBQVMsQ0FBQ0QsV0FBVyxFQUFFLFVBQUMvUSxHQUFHLEVBQUVDLFFBQVEsRUFBSztNQUN4RCxJQUFJRCxHQUFHLEVBQUU7UUFDTHpDLDZEQUFjLENBQUNzRCxPQUFPLENBQUNvUSxXQUFXLENBQUM7UUFDbkMsT0FBT0gsUUFBUSxDQUFDOVEsR0FBRyxDQUFDO01BQ3hCO01BRUEsSUFBTWtSLGFBQWEsR0FBR2xULENBQUMsQ0FBQywyQkFBMkIsQ0FBQztNQUVwRCxJQUFJLENBQUM2TyxxREFBQSxDQUFVNU0sUUFBUSxDQUFDZixJQUFJLENBQUN5UixNQUFNLENBQUMsRUFBRTtRQUNsQztRQUNBLElBQU1ILGNBQWMsR0FBR2YsaUJBQWlCLENBQUN5QixhQUFhLEVBQUVyUSxPQUFPLENBQUM7UUFFaEV5UCxVQUFVLENBQUNyUSxRQUFRLENBQUNmLElBQUksRUFBRXNSLGNBQWMsRUFBRS9PLE9BQU8sQ0FBQztRQUNsRHFQLFFBQVEsQ0FBQyxJQUFJLEVBQUVOLGNBQWMsQ0FBQztNQUNsQyxDQUFDLE1BQU07UUFDSCxJQUFNVyxVQUFVLEdBQUdkLGlCQUFpQixDQUFDYSxhQUFhLEVBQUVyUSxPQUFPLENBQUM7UUFFNURpUSxRQUFRLENBQUMsSUFBSSxFQUFFSyxVQUFVLENBQUM7TUFDOUI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDOzs7Ozs7Ozs7Ozs7OztBQ3RKQSxJQUFNQyxZQUFZLEdBQUcsY0FBYztBQUNuQyxJQUFNQywrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQStCQSxDQUFJQyxVQUFVO0VBQUEsT0FBSyxDQUFDLENBQUNqWCxNQUFNLENBQUNrWCxJQUFJLENBQUNELFVBQVUsQ0FBQ0YsWUFBWSxDQUFDLENBQUMsQ0FBQ3BXLE1BQU07QUFBQTtBQUN0RyxJQUFNd1csc0JBQXNCLEdBQUcsU0FBekJBLHNCQUFzQkEsQ0FBQSxFQUE4QjtFQUN0RCxLQUFLLElBQUl4WCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcwQyxTQUFBLENBQW1CMUIsTUFBTSxFQUFFaEIsQ0FBQyxFQUFFLEVBQUU7SUFDaEQsSUFBTXNYLFVBQVUsR0FBR0csSUFBSSxDQUFDQyxLQUFLLENBQW9CMVgsQ0FBQyxRQUFBMEMsU0FBQSxDQUFBMUIsTUFBQSxJQUFEaEIsQ0FBQyxHQUFBMlgsU0FBQSxHQUFBalYsU0FBQSxDQUFEMUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsSUFBSXFYLCtCQUErQixDQUFDQyxVQUFVLENBQUMsRUFBRTtNQUM3QyxPQUFPQSxVQUFVO0lBQ3JCO0VBQ0o7QUFDSixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1uVSwyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQTJCQSxDQUFJMEQsT0FBTyxFQUFLO0VBQ3BELElBQVErUSx3QkFBd0IsR0FBd0UvUSxPQUFPLENBQXZHK1Esd0JBQXdCO0lBQUVDLGdDQUFnQyxHQUFzQ2hSLE9BQU8sQ0FBN0VnUixnQ0FBZ0M7SUFBRUMsK0JBQStCLEdBQUtqUixPQUFPLENBQTNDaVIsK0JBQStCO0VBQ25HLElBQU1DLGdCQUFnQixHQUFHUCxzQkFBc0IsQ0FBQ0ksd0JBQXdCLEVBQUVDLGdDQUFnQyxFQUFFQywrQkFBK0IsQ0FBQztFQUM1SSxJQUFNRSxhQUFhLEdBQUczWCxNQUFNLENBQUM0WCxNQUFNLENBQUNGLGdCQUFnQixDQUFDWCxZQUFZLENBQUMsQ0FBQztFQUNuRSxJQUFNYyxlQUFlLEdBQUc3WCxNQUFNLENBQUNrWCxJQUFJLENBQUNRLGdCQUFnQixDQUFDWCxZQUFZLENBQUMsQ0FBQyxDQUFDL0MsR0FBRyxDQUFDLFVBQUE4RCxHQUFHO0lBQUEsT0FBSUEsR0FBRyxDQUFDOUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDK0UsR0FBRyxDQUFDLENBQUM7RUFBQSxFQUFDO0VBRXBHLE9BQU9GLGVBQWUsQ0FBQ0csTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUgsR0FBRyxFQUFFblksQ0FBQyxFQUFLO0lBQzNDc1ksR0FBRyxDQUFDSCxHQUFHLENBQUMsR0FBR0gsYUFBYSxDQUFDaFksQ0FBQyxDQUFDO0lBQzNCLE9BQU9zWSxHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvci5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY2FydC1pdGVtLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9zdGF0ZS1jb3VudHJ5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IGJpbmQsIGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjaGVja0lzR2lmdENlcnRWYWxpZCBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBTaGlwcGluZ0VzdGltYXRvciBmcm9tICcuL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IENhcnRJdGVtRGV0YWlscyBmcm9tICcuL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwgPSBudWxsO1xuICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0XScpO1xuICAgICAgICB0aGlzLiRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nKTtcbiAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzID0gJCgnW2RhdGEtY2FydC1zdGF0dXNdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRUb3RhbHMgPSAkKCdbZGF0YS1jYXJ0LXRvdGFsc10nKTtcbiAgICAgICAgdGhpcy4kY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMgPSAkKCdbZGF0YS1jYXJ0LWFkZGl0aW9uYWwtY2hlY2tvdXQtYnV0dG9uc10nKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnRdIC5sb2FkaW5nT3ZlcmxheScpXG4gICAgICAgICAgICAuaGlkZSgpOyAvLyBUT0RPOiB0ZW1wb3JhcnkgdW50aWwgcm9wZXIgcHVsbHMgaW4gaGlzIGNhcnQgY29tcG9uZW50c1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0QXBwbGVQYXlTdXBwb3J0KCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNldEFwcGxlUGF5U3VwcG9ydCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5BcHBsZVBheVNlc3Npb24pIHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRQYWdlQ29udGVudC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gaXRlbUlkO1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJyA/IG9sZFF0eSArIDEgOiBvbGRRdHkgLSAxO1xuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtaW5FcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtYXhFcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcHJlVmFsICE9PSBudWxsID8gcHJlVmFsIDogbWluUXR5O1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoTnVtYmVyKCRlbC52YWwoKSksIDEwKTtcbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcblxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihuZXdRdHkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkRW50cnkgPSAkZWwudmFsKCk7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodGhpcy5jb250ZXh0LmludmFsaWRFbnRyeU1lc3NhZ2UucmVwbGFjZSgnW0VOVFJZXScsIGludmFsaWRFbnRyeSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1pbkVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1heEVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0RWRpdE9wdGlvbnMoaXRlbUlkLCBwcm9kdWN0SWQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHsgcHJvZHVjdEZvckNoYW5nZUlkOiBwcm9kdWN0SWQsIC4uLnRoaXMuY29udGV4dCB9O1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRtb2RhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kbW9kYWwgPSAkKCcjbW9kYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2NvbmZpZ3VyZS1wcm9kdWN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICBtb2RhbC5vcGVuKCk7XG4gICAgICAgIHRoaXMuJG1vZGFsLmZpbmQoJy5tb2RhbC1jb250ZW50JykuYWRkQ2xhc3MoJ2hpZGUtY29udGVudCcpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyID0gJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVzLXdyYXBwZXJdJywgdGhpcy4kbW9kYWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0ID0gJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLmxlbmd0aCAmJiBtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIuY3NzKCdoZWlnaHQnLCBtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJG1vZGFsLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25DaGFuZ2VIYW5kbGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG1vZGFsLm9uZShNb2RhbEV2ZW50cy5vcGVuZWQsIG9wdGlvbkNoYW5nZUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtb2RhbEZvcm0gPSB0aGlzLiRtb2RhbC5maW5kKCdmb3JtJyk7XG4gICAgICAgICAgICBjb25zdCByZWZyZXNoQ29udGVudCA9ICgpID0+IHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5wb3N0Rm9ybURhdGEobmV3IEZvcm1EYXRhKHRoaXMpLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZGFsRm9ybS5vbignc3VibWl0Jywgb25TdWJtaXQpO1xuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IENhcnRJdGVtRGV0YWlscyh0aGlzLiRtb2RhbCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIChldmVudCwgY3VycmVudFRhcmdldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkKGN1cnJlbnRUYXJnZXQpLmZpbmQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRzdWJtaXQgPSAkKCdpbnB1dC5idXR0b24nLCAkZm9ybSk7XG4gICAgICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5hbGVydE1lc3NhZ2VCb3gnKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEgfHwge307XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSkge1xuICAgICAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcbiAgICAgICAgY29uc3QgJGNhcnRQYWdlVGl0bGUgPSAkKCdbZGF0YS1jYXJ0LXBhZ2UtdGl0bGVdJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjYXJ0L2NvbnRlbnQnLFxuICAgICAgICAgICAgICAgIHRvdGFsczogJ2NhcnQvdG90YWxzJyxcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxuICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2VzOiAnY2FydC9zdGF0dXMtbWVzc2FnZXMnLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnM6ICdjYXJ0L2FkZGl0aW9uYWwtY2hlY2tvdXQtYnV0dG9ucycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0QWRkaXRpb25hbENoZWNrb3V0QnRucy5odG1sKHJlc3BvbnNlLmFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnMpO1xuXG4gICAgICAgICAgICAkY2FydFBhZ2VUaXRsZS5yZXBsYWNlV2l0aChyZXNwb25zZS5wYWdlVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgIGlmICghcXVhbnRpdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgICQoYFtkYXRhLWNhcnQtaXRlbWlkPScke3RoaXMuJGFjdGl2ZUNhcnRJdGVtSWR9J11gLCB0aGlzLiRjYXJ0Q29udGVudClcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGBbZGF0YS1hY3Rpb249JyR7dGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb259J11gKVxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kQ2FydEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSA9IGJpbmQoZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgbGV0IHByZVZhbDtcblxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXG4gICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgdGhpcy4kY2FydENvbnRlbnQpLm9uKHtcbiAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbiBvblF0eUZvY3VzKCkge1xuICAgICAgICAgICAgICAgIHByZVZhbCA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICAgICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoc3RyaW5nLCB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY2FydFxuICAgICAgICAgICAgICAgICAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZWRpdF0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtRWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcm9kdWN0SWQnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkLCBwcm9kdWN0SWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kUHJvbW9Db2RlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkY291cG9uQ29udGFpbmVyID0gJCgnLmNvdXBvbi1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Gb3JtID0gJCgnLmNvdXBvbi1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjb2RlSW5wdXQgPSAkKCdbbmFtZT1cImNvdXBvbmNvZGVcIl0nLCAkY291cG9uRm9ybSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5zaG93KCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKCRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFjaGVja0lzR2lmdENlcnRWYWxpZChjb2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHZhbGlkYXRpb25EaWN0aW9uYXJ5LmludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChyZXNwLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNhcnQtaXRlbS1vcHRpb24tcmVtb3ZlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmNvbmZpcm0odGhpcy5jb250ZXh0LmdpZnRXcmFwcGluZ1JlbW92ZU1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdFdyYXBwaW5nRm9ybSgpIHtcbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRzZWxlY3QudmFsKCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICRzZWxlY3QuZGF0YSgnaW5kZXgnKTtcblxuICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWxsb3dNZXNzYWdlID0gJHNlbGVjdC5maW5kKGBvcHRpb25bdmFsdWU9JHtpZH1dYCkuZGF0YSgnYWxsb3dNZXNzYWdlJyk7XG5cbiAgICAgICAgICAgICQoYC5naWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH1gKS5oaWRlKCk7XG4gICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9LSR7aWR9YCkuc2hvdygpO1xuXG4gICAgICAgICAgICBpZiAoYWxsb3dNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlVmlld3MoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQoJ2lucHV0OnJhZGlvW25hbWUgPVwiZ2lmdHdyYXB0eXBlXCJdOmNoZWNrZWQnKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0ICRzaW5nbGVGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1zaW5nbGUnKTtcbiAgICAgICAgICAgIGNvbnN0ICRtdWx0aUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLW11bHRpcGxlJyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ3NhbWUnKSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbbmFtZT1cImdpZnR3cmFwdHlwZVwiXScpLm9uKCdjbGljaycsIHRvZ2dsZVZpZXdzKTtcblxuICAgICAgICB0b2dnbGVWaWV3cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuYmluZENhcnRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kUHJvbW9Db2RlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKTtcblxuICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXG4gICAgICAgIGNvbnN0IHNoaXBwaW5nRXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY29udGV4dC5zaGlwcGluZ0NvdW50cnlFcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBwcm92aW5jZTogdGhpcy5jb250ZXh0LnNoaXBwaW5nUHJvdmluY2VFcnJvck1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSBuZXcgU2hpcHBpbmdFc3RpbWF0b3IoJCgnW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXScpLCBzaGlwcGluZ0Vycm9yTWVzc2FnZXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQsIHNoaXBwaW5nRXJyb3JNZXNzYWdlcykge1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMgPSBzaGlwcGluZ0Vycm9yTWVzc2FnZXM7XG4gICAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmJpbmRFc3RpbWF0b3JFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQgPSAkKCcuc2hpcHBpbmctcXVvdGVzJyk7XG5cbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9ICdmb3JtW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXSc7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdCcsIHRoaXMuJGVsZW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIGVzdGltYXRvciBlcnJvciBtZXNzYWdlcyBhcmUgYmVpbmcgaW5qZWN0ZWQgaW4gaHRtbCBhcyBhIHJlc3VsdFxuICAgICAgICAgICAgLy8gb2YgdXNlciBzdWJtaXQ7IGNsZWFyaW5nIGFuZCBhZGRpbmcgcm9sZSBvbiBzdWJtaXQgcHJvdmlkZXNcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgYW5ub3VuY2VtZW50IG9mIHRoZXNlIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICBpZiAoc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5hdHRyKCdyb2xlJykpIHtcbiAgICAgICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRvckFsZXJ0LnJlbW92ZUF0dHIoJ3JvbGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5hdHRyKCdyb2xlJywgJ2FsZXJ0Jyk7XG4gICAgICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIGNvdW50cmllcywgdGhlIHN0YXRlL3JlZ2lvbiBpcyBkeW5hbWljXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxuICAgICAgICAgICAgaWYgKCQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCkudmFsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMuY291bnRyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuc2hpcHBpbmdFcnJvck1lc3NhZ2VzLnByb3ZpbmNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGJldHdlZW4gZGVmYXVsdCBzaGlwcGluZyBhbmQgdXBzIHNoaXBwaW5nIHJhdGVzXG4gICAgICovXG4gICAgYmluZFVQU1JhdGVzKCkge1xuICAgICAgICBjb25zdCBVUFNSYXRlVG9nZ2xlID0gJy5lc3RpbWF0b3ItZm9ybS10b2dnbGVVUFNSYXRlJztcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybVVwcyA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tdXBzJyk7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybURlZmF1bHQgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLWRlZmF1bHQnKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtRGVmYXVsdC50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCkge1xuICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKHRvZ2dsZUJ1dHRvbiwgYnV0dG9uU2VsZWN0b3IsICR0b2dnbGVDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlID0gKHNlbGVjdG9yVG9BY3RpdmF0ZSkgPT4ge1xuICAgICAgICAgICAgJCh0b2dnbGVCdXR0b24pLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIHNlbGVjdG9yVG9BY3RpdmF0ZSk7XG4gICAgICAgICAgICAkKGJ1dHRvblNlbGVjdG9yKS50ZXh0KCQoYCMke3NlbGVjdG9yVG9BY3RpdmF0ZX1gKS50ZXh0KCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQpIHtcbiAgICAgICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSgnZXN0aW1hdG9yLWNsb3NlJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlKCdlc3RpbWF0b3ItYWRkJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkID0gIXRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZShldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNoaXBwaW5nLWVzdGltYXRlLXNob3dfX2J0bi1uYW1lJywgJGVzdGltYXRvckNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRJdGVtRGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnI0NhcnRFZGl0UHJvZHVjdEZpZWxkc0Zvcm0nLCB0aGlzLiRzY29wZSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xuICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VDYWxsYmFjayA9IG9wdGlvbkNoYW5nZURlY29yYXRvci5jYWxsKHRoaXMsIGhhc0RlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSB0aGlzLmNvbnRleHQucHJvZHVjdEZvckNoYW5nZUlkO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgICQuZWFjaCgkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhbnRzbGlzdCA9IGNvbnZlcnRJbnRvQXJyYXkodmFsdWUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCA9IGlucHQgPT4gaW5wdC5kYXRhc2V0LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSA9PT0gY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmNoaWxkcmVuWzBdIDogY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLm1vZGFsLWhlYWRlci10aXRsZScpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5odG1sKCkubWF0Y2goLycoLio/KScvKVsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJy5tb2RhbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2hpZGUtY29udGVudCcpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJyB8fCBjZXJ0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgc3RhdGVzQXJyYXkuc3RhdGVzLmZvckVhY2goKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubGFiZWwgPyBzdGF0ZU9iai5sYWJlbCA6IHN0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRzZWxlY3RFbGVtZW50Lmh0bWwoY29udGFpbmVyLmpvaW4oJyAnKSk7XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gc3RhdGVFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZUVsZW1lbnQsIGNvbnRleHQgPSB7fSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZHMgY29tcGF0aWJsZSBmb3IgdGhyZWUgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIGZvdXJcbiAgICAgKlxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxuICAgICAqXG4gICAgICogdXNlSWRGb3JTdGF0ZXMge0Jvb2x9IC0gR2VuZXJhdGVzIHN0YXRlcyBkcm9wZG93biB1c2luZyBpZCBmb3IgdmFsdWVzIGluc3RlYWQgb2Ygc3RyaW5nc1xuICAgICAqL1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIH1cblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jb3VudHJ5LmdldEJ5TmFtZShjb3VudHJ5TmFtZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LnN0YXRlX2Vycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XG4gICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdEVsZW1lbnQgPSBtYWtlU3RhdGVSZXF1aXJlZCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICRzZWxlY3RFbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIl0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2luaGVyaXRzTG9vc2UiLCJjb25zdHJ1Y3RvciIsIl9zZXRQcm90b3R5cGVPZiIsIlBhZ2VNYW5hZ2VyIiwiY2hlY2tJc0dpZnRDZXJ0VmFsaWQiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJ1dGlscyIsIlNoaXBwaW5nRXN0aW1hdG9yIiwiZGVmYXVsdE1vZGFsIiwic2hvd0FsZXJ0TW9kYWwiLCJNb2RhbEV2ZW50cyIsIkNhcnRJdGVtRGV0YWlscyIsIkNhcnQiLCJfUGFnZU1hbmFnZXIiLCJfcHJvdG8iLCJvblJlYWR5IiwiJG1vZGFsIiwiJGNhcnRQYWdlQ29udGVudCIsIiQiLCIkY2FydENvbnRlbnQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMiLCIkb3ZlcmxheSIsImhpZGUiLCIkYWN0aXZlQ2FydEl0ZW1JZCIsIiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiIsInNldEFwcGxlUGF5U3VwcG9ydCIsImJpbmRFdmVudHMiLCJ3aW5kb3ciLCJBcHBsZVBheVNlc3Npb24iLCJhZGRDbGFzcyIsImNhcnRVcGRhdGUiLCIkdGFyZ2V0IiwiX3RoaXMiLCJpdGVtSWQiLCJkYXRhIiwiJGVsIiwib2xkUXR5IiwicGFyc2VJbnQiLCJ2YWwiLCJtYXhRdHkiLCJtaW5RdHkiLCJtaW5FcnJvciIsIm1heEVycm9yIiwibmV3UXR5Iiwic2hvdyIsImFwaSIsImNhcnQiLCJpdGVtVXBkYXRlIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZW1vdmUiLCJyZWZyZXNoQ29udGVudCIsImVycm9ycyIsImpvaW4iLCJjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSIsInByZVZhbCIsIl90aGlzMiIsIk51bWJlciIsImludmFsaWRFbnRyeSIsImlzSW50ZWdlciIsImNvbnRleHQiLCJpbnZhbGlkRW50cnlNZXNzYWdlIiwicmVwbGFjZSIsImNhcnRSZW1vdmVJdGVtIiwiX3RoaXMzIiwiaXRlbVJlbW92ZSIsImNhcnRFZGl0T3B0aW9ucyIsInByb2R1Y3RJZCIsIl90aGlzNCIsImFzc2lnbiIsInByb2R1Y3RGb3JDaGFuZ2VJZCIsIm1vZGFsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwib3BlbiIsImZpbmQiLCJwcm9kdWN0QXR0cmlidXRlcyIsImNvbmZpZ3VyZUluQ2FydCIsInVwZGF0ZUNvbnRlbnQiLCJjb250ZW50Iiwib3B0aW9uQ2hhbmdlSGFuZGxlciIsIiRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lciIsIm1vZGFsQm9keVJlc2VydmVkSGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjc3MiLCJoYXNDbGFzcyIsIm9uZSIsIm9wZW5lZCIsIm1vZGFsRm9ybSIsIm9uU3VibWl0IiwiX3giLCJfb25TdWJtaXQiLCJfY2FsbGVlIiwiZXZlbnQiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwicG9zdEZvcm1EYXRhIiwiRm9ybURhdGEiLCJjbG9zZSIsIm9uIiwicHJvZHVjdERldGFpbHMiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsImhvb2tzIiwiY3VycmVudFRhcmdldCIsIiRmb3JtIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94Iiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwicmVzdWx0IiwicHVyY2hhc2luZ19tZXNzYWdlIiwidGV4dCIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJfdGhpczUiLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJhZGRpdGlvbmFsQ2hlY2tvdXRCdXR0b25zIiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRDb250ZW50IiwiaHRtbCIsInJlcGxhY2VXaXRoIiwicXVhbnRpdHkiLCJ0cmlnZ2VyIiwiZmlsdGVyIiwiYmluZENhcnRFdmVudHMiLCJfdGhpczYiLCJkZWJvdW5jZVRpbWVvdXQiLCJfYmluZCIsIl9kZWJvdW5jZSIsImZvY3VzIiwib25RdHlGb2N1cyIsImNoYW5nZSIsInN0cmluZyIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwib25Db25maXJtIiwiYmluZFByb21vQ29kZUV2ZW50cyIsIl90aGlzNyIsIiRjb3Vwb25Db250YWluZXIiLCIkY291cG9uRm9ybSIsIiRjb2RlSW5wdXQiLCJhdHRyIiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCJfdGhpczgiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSIsImFwcGx5R2lmdENlcnRpZmljYXRlIiwicmVzcCIsImJpbmRHaWZ0V3JhcHBpbmdFdmVudHMiLCJfdGhpczkiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsImNvbmZpcm0iLCJnaWZ0V3JhcHBpbmdSZW1vdmVNZXNzYWdlIiwiJHNlbGVjdCIsImlkIiwiaW5kZXgiLCJhbGxvd01lc3NhZ2UiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXJyb3JNZXNzYWdlcyIsImNvdW50cnkiLCJzaGlwcGluZ0NvdW50cnlFcnJvck1lc3NhZ2UiLCJwcm92aW5jZSIsInNoaXBwaW5nUHJvdmluY2VFcnJvck1lc3NhZ2UiLCJzaGlwcGluZ0VzdGltYXRvciIsImRlZmF1bHQiLCJzdGF0ZUNvdW50cnkiLCJub2QiLCJWYWxpZGF0b3JzIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaXNFc3RpbWF0b3JGb3JtT3BlbmVkIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ0VzdGltYXRvckFsZXJ0Iiwic2hpcHBpbmdWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJyZW1vdmVBdHRyIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiYmluZFZhbGlkYXRpb24iLCJiaW5kU3RhdGVWYWxpZGF0aW9uIiwiYmluZFVQU1JhdGVzIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwiY291bnRyeUlkIiwiaXNOYU4iLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInJlbW92ZUNsYXNzIiwidG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlIiwidG9nZ2xlQnV0dG9uIiwiYnV0dG9uU2VsZWN0b3IiLCIkdG9nZ2xlQ29udGFpbmVyIiwiY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlIiwic2VsZWN0b3JUb0FjdGl2YXRlIiwiJGVzdGltYXRvckNvbnRhaW5lciIsIiRlc3RpbWF0b3JGb3JtIiwicGFyYW1zIiwiY291bnRyeV9pZCIsInN0YXRlX2lkIiwiY2l0eSIsInppcF9jb2RlIiwiZ2V0U2hpcHBpbmdRdW90ZXMiLCJjbGlja0V2ZW50IiwicXVvdGVJZCIsInN1Ym1pdFNoaXBwaW5nUXVvdGUiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJpc0Jyb3dzZXJJRSIsImNvbnZlcnRJbnRvQXJyYXkiLCJfUHJvZHVjdERldGFpbHNCYXNlIiwiJHNjb3BlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJ0cmltIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJzZXRQcm9kdWN0VmFyaWFudCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwiX2lzRW1wdHkiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJlYWNoIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInB1c2giLCJpc1NhdGlzZmllZCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImNoZWNrZWQiLCJnZXRTZWxlY3RlZE9wdGlvbkxhYmVsIiwicHJvZHVjdFZhcmlhbnRzbGlzdCIsIm1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQiLCJpbnB0IiwiZGF0YXNldCIsInByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSIsImxhYmVsIiwibGFiZWxzIiwidGl0bGUiLCJwcm9kdWN0VmFyaWFudCIsInNvcnQiLCJ2aWV3IiwicHJvZHVjdE5hbWUiLCJtYXRjaCIsImNhcmQiLCJjZXJ0IiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIm1ha2VTdGF0ZVJlcXVpcmVkIiwic3RhdGVFbGVtZW50IiwiYXR0cnMiLCJfdHJhbnNmb3JtIiwiaXRlbSIsInJldCIsIm5hbWUiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJhcHBlbmQiLCJtYWtlU3RhdGVPcHRpb25hbCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHJlZml4Iiwic3RhdGVzIiwiZm9yRWFjaCIsInN0YXRlT2JqIiwiY2FsbGJhY2siLCJjb3VudHJ5TmFtZSIsImdldEJ5TmFtZSIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiSlNPTiIsInBhcnNlIiwidW5kZWZpbmVkIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJrZXkiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9