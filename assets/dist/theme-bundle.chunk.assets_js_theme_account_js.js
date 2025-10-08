"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_account_js"],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }










var Account = /*#__PURE__*/function (_PageManager) {
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__.createTranslationDictionary)(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  _inheritsLoose(Account, _PageManager);
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-edit-account-form]');
    var $addressForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-address-form]');
    var $inboxForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-inbox-form]');
    var $accountReturnForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-return-form]');
    var $paymentMethodForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-payment-method-form]');
    var $reorderForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    var $bigCommerce = window.BigCommerce;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context);

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    if ($bigCommerce && $bigCommerce.renderAccountPayments) {
      var _this$context = this.context,
        countries = _this$context.countries,
        paymentsUrl = _this$context.paymentsUrl,
        storeHash = _this$context.storeHash,
        storeLocale = _this$context.storeLocale,
        vaultToken = _this$context.vaultToken,
        shopperId = _this$context.shopperId,
        customerEmail = _this$context.customerEmail,
        providerId = _this$context.providerId,
        currencyCode = _this$context.currencyCode,
        paymentMethodsUrl = _this$context.paymentMethodsUrl,
        paymentProviderInitializationData = _this$context.paymentProviderInitializationData,
        themeSettings = _this$context.themeSettings;
      $bigCommerce.renderAccountPayments({
        styles: {
          inputBase: {
            color: themeSettings['input-font-color'],
            borderColor: themeSettings['input-border-color']
          },
          inputValidationError: {
            color: themeSettings['color-error'],
            borderColor: themeSettings['color-error']
          },
          inputValidationSuccess: {
            color: themeSettings['color-success'],
            borderColor: themeSettings['color-success']
          },
          submitButton: {
            color: themeSettings['button--primary-color'],
            backgroundColor: themeSettings['button--primary-backgroundColor'],
            borderColor: themeSettings['button--primary-backgroundColor'],
            '&:hover': {
              color: themeSettings['button--primary-colorHover'],
              backgroundColor: themeSettings['button--primary-backgroundColorHover'],
              borderColor: themeSettings['button--primary-backgroundColorHover']
            },
            '&:active': {
              color: themeSettings['button--primary-colorActive'],
              backgroundColor: themeSettings['button--primary-backgroundColorActive'],
              borderColor: themeSettings['button--primary-backgroundColorActive']
            },
            '&[disabled]': {
              backgroundColor: themeSettings['button--disabled-backgroundColor'],
              borderColor: themeSettings['button--disabled-borderColor'],
              color: themeSettings['button--disabled-color'],
              cursor: 'not-allowed'
            }
          },
          cancelButton: {
            color: themeSettings['button--default-color'],
            backgroundColor: 'transparent',
            borderColor: themeSettings['button--default-borderColor'],
            '&:hover': {
              color: themeSettings['button--default-colorHover'],
              backgroundColor: 'transparent',
              borderColor: themeSettings['button--default-borderColorHover']
            },
            '&:active': {
              color: themeSettings['button--default-colorActive'],
              backgroundColor: 'transparent',
              borderColor: themeSettings['button--default-borderColorActive']
            }
          },
          label: {
            color: themeSettings['form-label-font-color']
          },
          validationError: {
            color: themeSettings['color-error']
          },
          heading: {
            color: themeSettings['color-textHeading']
          }
        },
        storeContextData: {
          countries: countries,
          paymentsUrl: paymentsUrl,
          storeHash: storeHash,
          storeLocale: storeLocale,
          vaultToken: vaultToken,
          shopperId: shopperId,
          customerEmail: customerEmail,
          providerId: providerId,
          currencyCode: currencyCode,
          paymentMethodsUrl: paymentMethodsUrl,
          paymentProviderInitializationData: paymentProviderInitializationData
        },
        errorHandler: _global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal
      });
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this2.context.selectItem);
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(errorMessage);
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, \"prefix\": \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.creditCardType)(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.storeInstrument)(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this4.context.generic_error);
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: formEditSelector + " input[type=\"submit\"]",
      delay: 900
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
        enterPassword = _this$validationDicti.password,
        matchPassword = _this$validationDicti.password_match;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error), true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.trigger('focus');
      }, 900);
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      delay: 900
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.trigger('focus');
      }, 900);
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Formatters: () => (/* binding */ Formatters),
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   creditCardType: () => (/* binding */ creditCardType),
/* harmony export */   storeInstrument: () => (/* binding */ storeInstrument)
/* harmony export */ });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9hY2NvdW50X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRVY7QUFDRztBQUNnQjtBQUNBO0FBT2Y7QUFDNkM7QUFDa0Q7QUFDbEY7QUFDUTtBQUFBLElBRW5Da0IsT0FBTywwQkFBQUMsWUFBQTtFQUN4QixTQUFBRCxRQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR2IsNkZBQTJCLENBQUNVLE9BQU8sQ0FBQztJQUNoRUMsS0FBQSxDQUFLRyxNQUFNLEdBQUdDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM1Q0osS0FBQSxDQUFLSyxLQUFLLEdBQUdELENBQUMsQ0FBQyxNQUFNLENBQUM7SUFBQyxPQUFBSixLQUFBO0VBQzNCO0VBQUNNLGNBQUEsQ0FBQVQsT0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQVMsTUFBQSxHQUFBVixPQUFBLENBQUFXLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBTUMsZ0JBQWdCLEdBQUcxQixzRUFBWSxDQUFDLDhCQUE4QixDQUFDO0lBQ3JFLElBQU0yQixZQUFZLEdBQUczQixzRUFBWSxDQUFDLHlCQUF5QixDQUFDO0lBQzVELElBQU00QixVQUFVLEdBQUc1QixzRUFBWSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hELElBQU02QixrQkFBa0IsR0FBRzdCLHNFQUFZLENBQUMsNEJBQTRCLENBQUM7SUFDckUsSUFBTThCLGtCQUFrQixHQUFHOUIsc0VBQVksQ0FBQyxnQ0FBZ0MsQ0FBQztJQUN6RSxJQUFNK0IsWUFBWSxHQUFHL0Isc0VBQVksQ0FBQyw2QkFBNkIsQ0FBQztJQUNoRSxJQUFNZ0MsY0FBYyxH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QyxDQUFDLE1BQU0sQ0FBQyxDQUFDNFEsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUV4QzVRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3FCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsVUFBQTZDLEtBQUssRUFBSTtJQUNoRCxJQUFNMk0sT0FBTyxHQUFHM00sS0FBSyxDQUFDRSxhQUFhLENBQUNnQixLQUFLO0lBQ3pDLElBQU0wTCxtQkFBbUIsR0FBRzlRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUVwRCxJQUFJa0UsS0FBSyxDQUFDRSxhQUFhLENBQUMyTSxPQUFPLEVBQUU7TUFDN0JwQixnQkFBZ0IsQ0FBQ1csY0FBYyxFQUFFTyxPQUFPLENBQUM7SUFDN0MsQ0FBQyxNQUFNO01BQ0h0QixnQkFBZ0IsQ0FBQ2UsY0FBYyxFQUFFTyxPQUFPLENBQUM7SUFDN0M7SUFFQWhCLGdCQUFnQixDQUFDUyxjQUFjLEVBQUVRLG1CQUFtQixFQUFFZixJQUFJLENBQUM7RUFDL0QsQ0FBQyxDQUFDO0VBRUYvUCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNxQixFQUFFLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQU07SUFDL0MsSUFBTTJQLG9CQUFvQixHQUFHaFIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDMEUsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRWpGLElBQUlzTSxvQkFBb0IsQ0FBQzlQLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDbEMzQixzREFBYyxDQUFDOFEsZ0JBQWdCLENBQUM7TUFDaEMsT0FBTyxLQUFLO0lBQ2hCO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4vd2lzaGxpc3QnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQge1xuICAgIGNsYXNzaWZ5Rm9ybSxcbiAgICBWYWxpZGF0b3JzLFxuICAgIGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCxcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXG59IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCB7IGNyZWRpdENhcmRUeXBlLCBzdG9yZUluc3RydW1lbnQsIFZhbGlkYXRvcnMgYXMgQ0NWYWxpZGF0b3JzLCBGb3JtYXR0ZXJzIGFzIENDRm9ybWF0dGVycyB9IGZyb20gJy4vY29tbW9uL3BheW1lbnQtbWV0aG9kJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XG4gICAgICAgIGNvbnN0ICRiaWdDb21tZXJjZSA9IHdpbmRvdy5CaWdDb21tZXJjZTtcblxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgdGVtcGxhdGVcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcblxuICAgICAgICAvLyBJbnN0YW50aWF0ZXMgd2lzaCBsaXN0IEpTXG4gICAgICAgIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoJGVkaXRBY2NvdW50Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSk7XG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaW52b2ljZUJ1dHRvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRpbnZvaWNlQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoIC8gMiAtIDQ1MDtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0IC8gMiAtIDMyMDtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAkaW52b2ljZUJ1dHRvbi5kYXRhKCdwcmludEludm9pY2UnKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ29yZGVySW52b2ljZScsIGB3aWR0aD05MDAsaGVpZ2h0PTY1MCxsZWZ0PSR7bGVmdH0sdG9wPSR7dG9wfSxzY3JvbGxiYXJzPTFgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhZGRyZXNzRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaW5ib3hGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWNjb3VudFJldHVybkZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGF5bWVudE1ldGhvZEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcmVvcmRlckZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRiaWdDb21tZXJjZSAmJiAkYmlnQ29tbWVyY2UucmVuZGVyQWNjb3VudFBheW1lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgY291bnRyaWVzLFxuICAgICAgICAgICAgICAgIHBheW1lbnRzVXJsLFxuICAgICAgICAgICAgICAgIHN0b3JlSGFzaCxcbiAgICAgICAgICAgICAgICBzdG9yZUxvY2FsZSxcbiAgICAgICAgICAgICAgICB2YXVsdFRva2VuLFxuICAgICAgICAgICAgICAgIHNob3BwZXJJZCxcbiAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsLFxuICAgICAgICAgICAgICAgIHByb3ZpZGVySWQsXG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlLFxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RzVXJsLFxuICAgICAgICAgICAgICAgIHBheW1lbnRQcm92aWRlckluaXRpYWxpemF0aW9uRGF0YSxcbiAgICAgICAgICAgICAgICB0aGVtZVNldHRpbmdzLFxuICAgICAgICAgICAgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICAgICAgJGJpZ0NvbW1lcmNlLnJlbmRlckFjY291bnRQYXltZW50cyh7XG4gICAgICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0QmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2lucHV0LWZvbnQtY29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydpbnB1dC1ib3JkZXItY29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWxpZGF0aW9uRXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydjb2xvci1lcnJvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLWVycm9yJ10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsaWRhdGlvblN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydjb2xvci1zdWNjZXNzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snY29sb3Itc3VjY2VzcyddLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktY29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1iYWNrZ3JvdW5kQ29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktY29sb3JIb3ZlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvckhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1iYWNrZ3JvdW5kQ29sb3JIb3ZlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWNvbG9yQWN0aXZlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktYmFja2dyb3VuZENvbG9yQWN0aXZlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1iYWNrZ3JvdW5kQ29sb3JBY3RpdmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJltkaXNhYmxlZF0nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRpc2FibGVkLWJhY2tncm91bmRDb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRpc2FibGVkLWJvcmRlckNvbG9yJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGlzYWJsZWQtY29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtY29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtYm9yZGVyQ29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtY29sb3JIb3ZlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWJvcmRlckNvbG9ySG92ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1jb2xvckFjdGl2ZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWJvcmRlckNvbG9yQWN0aXZlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2Zvcm0tbGFiZWwtZm9udC1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydjb2xvci1lcnJvciddLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snY29sb3ItdGV4dEhlYWRpbmcnXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0b3JlQ29udGV4dERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyaWVzLFxuICAgICAgICAgICAgICAgICAgICBwYXltZW50c1VybCxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVIYXNoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZUxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgdmF1bHRUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBlcklkLFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcklkLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RzVXJsLFxuICAgICAgICAgICAgICAgICAgICBwYXltZW50UHJvdmlkZXJJbml0aWFsaXphdGlvbkRhdGEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXI6IHNob3dBbGVydE1vZGFsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmREZWxldGVBZGRyZXNzKCk7XG4gICAgICAgIHRoaXMuYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIHN1Ym1pdCBob29rIHRvIGVuc3VyZSB0aGUgY3VzdG9tZXIgcmVjZWl2ZXMgYSBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBkZWxldGluZyBhbiBhZGRyZXNzXG4gICAgICovXG4gICAgYmluZERlbGV0ZUFkZHJlc3MoKSB7XG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1hZGRyZXNzXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVBZGRyZXNzJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLXBheW1lbnQtbWV0aG9kXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVQYXltZW50TWV0aG9kJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKSB7XG4gICAgICAgICRyZW9yZGVyRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyA9ICQoJy5hY2NvdW50LWxpc3RJdGVtIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQnKTtcbiAgICAgICAgICAgIGxldCBzdWJtaXRGb3JtID0gZmFsc2U7XG5cbiAgICAgICAgICAgICRyZW9yZGVyRm9ybS5maW5kKCdbbmFtZV49XCJyZW9yZGVyaXRlbVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzLmVhY2goKGluZGV4LCBwcm9kdWN0Q2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKHByb2R1Y3RDaGVja2JveCkudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGByZW9yZGVyaXRlbVske3Byb2R1Y3RJZH1dYCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmFwcGVuZCgkaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3VibWl0Rm9ybSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwodGhpcy5jb250ZXh0LnNlbGVjdEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRhZGRyZXNzRm9ybSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhZGRyZXNzRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAkYWNjb3VudFJldHVybkZvcm0uZGF0YSgnYWNjb3VudFJldHVybkZvcm1FcnJvcicpO1xuXG4gICAgICAgICRhY2NvdW50UmV0dXJuRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1TdWJtaXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCB3ZSBmaW5kIGEgbm9uLXplcm8gdmFsdWUgaW4gdGhlIGRyb3Bkb3duIGZvciBxdWFudGl0eVxuICAgICAgICAgICAgJCgnW25hbWVePVwicmV0dXJuX3F0eVwiXScsICRhY2NvdW50UmV0dXJuRm9ybSkuZWFjaCgoaSwgZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCQoZWxlKS52YWwoKSwgMTApICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgb3V0IG9mIGxvb3AgaWYgd2UgZm91bmQgYXQgbGVhc3Qgb25lIHJldHVyblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvcm1TdWJtaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoZXJyb3JNZXNzYWdlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKSB7XG4gICAgICAgIC8vIEluamVjdCB2YWxpZGF0aW9ucyBpbnRvIGZvcm0gZmllbGRzIGJlZm9yZSB2YWxpZGF0aW9uIHJ1bnNcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNmaXJzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5maXJzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNsYXN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0Lmxhc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY29tcGFueS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY29tcGFueUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwaG9uZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucGhvbmVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczEuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MxTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczIuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MyTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NpdHkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNpdHlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb3VudHJ5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVzZWxlY3RcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvdW50cnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInByZWZpeFwiOiBcIiR7dGhpcy5jb250ZXh0LmNob29zZUNvdW50cnlMYWJlbH1cIiB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjc3RhdGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnN0YXRlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcG9zdGFsX2NvZGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBvc3RhbENvZGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl1gKTtcblxuICAgICAgICBsZXQgJGxhc3Q7XG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVzZSBjcmVkaXQgY2FyZCBudW1iZXIgaW5wdXQgbGlzdGVuZXIgdG8gaGlnaGxpZ2h0IGNyZWRpdCBjYXJkIHR5cGVcbiAgICAgICAgbGV0IGNhcmRUeXBlO1xuICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBjYXJkVHlwZSA9IGNyZWRpdENhcmRUeXBlKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoY2FyZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nW2FsdD1cIiR7Y2FyZFR5cGV9XCJdYCkuc2libGluZ3MoKS5jc3MoJ29wYWNpdHknLCAnLjInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ2ApLmNzcygnb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCB2YWxpZGF0aW9uXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gLCB0aGlzLmNvbnRleHQuY3JlZGl0Q2FyZE51bWJlcik7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRFeHBpcmF0aW9uVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCwgdGhpcy5jb250ZXh0LmV4cGlyYXRpb24pO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwibmFtZV9vbl9jYXJkXCJdYCwgdGhpcy5jb250ZXh0Lm5hbWVPbkNhcmQpO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3Z2VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjdnZcIl1gLCB0aGlzLmNvbnRleHQuY3Z2LCAoKSA9PiBjYXJkVHlwZSk7XG5cbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIGZvcm1hdFxuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKTtcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldEV4cGlyYXRpb25Gb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWApO1xuXG4gICAgICAgIC8vIEJpbGxpbmcgYWRkcmVzcyB2YWxpZGF0aW9uXG4gICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gUGVyZm9ybSBmaW5hbCBmb3JtIHZhbGlkYXRpb25cbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXJpYWxpemUgZm9ybSBkYXRhIGFuZCByZWR1Y2UgaXQgdG8gb2JqZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IF8ucmVkdWNlKCRwYXltZW50TWV0aG9kRm9ybS5zZXJpYWxpemVBcnJheSgpLCAob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcbiAgICAgICAgICAgICAgICAgICAgcmVmT2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmT2JqO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBjb3VudHJ5IGFuZCBzdGF0ZSBjb2RlXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IF8uZmluZCh0aGlzLmNvbnRleHQuY291bnRyaWVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5jb3VudHJ5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvdW50cnkgJiYgXy5maW5kKGNvdW50cnkuc3RhdGVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5X2NvZGUgPSBjb3VudHJ5ID8gY291bnRyeS5jb2RlIDogZGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgIGRhdGEuc3RhdGVfb3JfcHJvdmluY2VfY29kZSA9IHN0YXRlID8gc3RhdGUuY29kZSA6IGRhdGEuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEluc3RydW1lbnRcbiAgICAgICAgICAgICAgICBkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudCA9ICEhZGF0YS5kZWZhdWx0X2luc3RydW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBjcmVkaXQgY2FyZFxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdHJ1bWVudCh0aGlzLmNvbnRleHQsIGRhdGEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNvbnRleHQucGF5bWVudE1ldGhvZHNVcmw7XG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbCh0aGlzLmNvbnRleHQuZ2VuZXJpY19lcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBjb25zdCBmb3JtRWRpdFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nO1xuICAgICAgICBjb25zdCBlZGl0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAsXG4gICAgICAgICAgICBkZWxheTogOTAwLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihlZGl0VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LnZhbGlkX2VtYWlsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgZWRpdFZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXG4gICAgICAgICAgICAgICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0KGVudGVyUGFzc3dvcmQsIGVudGVyUGFzc3dvcmQsIG1hdGNoUGFzc3dvcmQsIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMuZXJyb3IpLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogY3VycmVudFBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWFybGllc3RFcnJvciA9ICQoJ3NwYW4uZm9ybS1pbmxpbmVNZXNzYWdlOmZpcnN0JykucHJldignaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBlYXJsaWVzdEVycm9yLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICB9LCA5MDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKSB7XG4gICAgICAgIGNvbnN0IGluYm94VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIGRlbGF5OiA5MDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGluYm94VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTnVtYmVyKHZhbCkgIT09IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkaW5ib3hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpbmJveFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGluYm94VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWFybGllc3RFcnJvciA9ICQoJ3NwYW4uZm9ybS1pbmxpbmVNZXNzYWdlOmZpcnN0JykucHJldignaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBlYXJsaWVzdEVycm9yLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICB9LCA5MDApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgY3JlZGl0Y2FyZHMgZnJvbSAnY3JlZGl0Y2FyZHMnO1xuXG4vKipcbiAqIE9taXQgbnVsbCBvciBlbXB0eSBzdHJpbmcgcHJvcGVydGllcyBvZiBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XG5cbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVmT2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWZPYmo7XG59O1xuXG4vKipcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgaGVhZGVyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZhaWwgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHVuc3VjY2Vzc2Z1bCByZXNwb25zZVxuICovXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcbiAgICAvLyBIb3N0bmFtZSwgSWRzICYgVG9rZW5cbiAgICBwYXltZW50c1VybCxcbiAgICBzaG9wcGVySWQsXG4gICAgc3RvcmVIYXNoLFxuICAgIHZhdWx0VG9rZW4sXG59LCB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAvLyBQcm92aWRlciBJbmZvXG4gICAgcHJvdmlkZXJfaWQsXG4gICAgY3VycmVuY3lfY29kZSxcblxuICAgIC8vIEluc3RydW1lbnQgRGV0YWlsc1xuICAgIGNyZWRpdF9jYXJkX251bWJlcixcbiAgICBleHBpcmF0aW9uLFxuICAgIG5hbWVfb25fY2FyZCxcbiAgICBjdnYsXG4gICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuXG4gICAgLy8gQmlsbGluZyBBZGRyZXNzXG4gICAgYWRkcmVzczEsXG4gICAgYWRkcmVzczIsXG4gICAgY2l0eSxcbiAgICBwb3N0YWxfY29kZSxcbiAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgIGNvdW50cnlfY29kZSxcbiAgICBjb21wYW55LFxuICAgIGZpcnN0X25hbWUsXG4gICAgbGFzdF9uYW1lLFxuICAgIGVtYWlsLFxuICAgIHBob25lLFxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0sIGRvbmUsIGZhaWwpID0+IHtcbiAgICBjb25zdCBleHBpcnkgPSBleHBpcmF0aW9uLnNwbGl0KCcvJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGAke3BheW1lbnRzVXJsfS9zdG9yZXMvJHtzdG9yZUhhc2h9L2N1c3RvbWVycy8ke3Nob3BwZXJJZH0vc3RvcmVkX2luc3RydW1lbnRzYCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdmF1bHRUb2tlbixcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpbnN0cnVtZW50OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhcmQnLFxuICAgICAgICAgICAgICAgIGNhcmRob2xkZXJfbmFtZTogbmFtZV9vbl9jYXJkLFxuICAgICAgICAgICAgICAgIG51bWJlcjogY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZShjcmVkaXRfY2FyZF9udW1iZXIpLFxuICAgICAgICAgICAgICAgIGV4cGlyeV9tb250aDogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLFxuICAgICAgICAgICAgICAgIGV4cGlyeV95ZWFyOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSxcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25fdmFsdWU6IGN2dixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3M6IG9taXROdWxsU3RyaW5nKHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzMSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzMixcbiAgICAgICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlLFxuICAgICAgICAgICAgICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgICAgICAgICAgICAgY291bnRyeV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByb3ZpZGVyX2lkLFxuICAgICAgICAgICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICAgICAgLmRvbmUoZG9uZSlcbiAgICAgICAgLmZhaWwoZmFpbCk7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybWF0dGVycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gY3JlZGl0Y2FyZHMuY2FyZC5mb3JtYXQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25Gb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQudmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzAtMV0pKFszLTldKSQvZywgJzAkMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXGRcXC9dfF5bXFwvXSokL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmICFjcmVkaXRjYXJkcy5leHBpcmF0aW9uLmlzUGFzdChjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksIGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGN2dlxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxuICAgICAqL1xuICAgIHNldEN2dlZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UsIGNhcmRUeXBlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmN2Yy5pc1ZhbGlkKHZhbCwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJscykge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybHMuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgbm9Db21wYXJlTWVzc2FnZSwgdXJscyB9KSB7XG4gICAgbGV0IGNvbXBhcmVDb3VudGVyID0gW107XG5cbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/ICRjaGVja2VkLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IGVsZW1lbnQudmFsdWUpLmdldCgpIDogW107XG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJscyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybHMpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwobm9Db21wYXJlTWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsIm5vZCIsIldpc2hsaXN0IiwidmFsaWRhdGlvbiIsInN0YXRlQ291bnRyeSIsImNsYXNzaWZ5Rm9ybSIsIlZhbGlkYXRvcnMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImNyZWRpdENhcmRUeXBlIiwic3RvcmVJbnN0cnVtZW50IiwiQ0NWYWxpZGF0b3JzIiwiRm9ybWF0dGVycyIsIkNDRm9ybWF0dGVycyIsInNob3dBbGVydE1vZGFsIiwiY29tcGFyZVByb2R1Y3RzIiwiQWNjb3VudCIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIiRzdGF0ZSIsIiQiLCIkYm9keSIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIiRlZGl0QWNjb3VudEZvcm0iLCIkYWRkcmVzc0Zvcm0iLCIkaW5ib3hGb3JtIiwiJGFjY291bnRSZXR1cm5Gb3JtIiwiJHBheW1lbnRNZXRob2RGb3JtIiwiJHJlb3JkZXJGb3JtIiwiJGludm9pY2VCdXR0b24iLCIkYmlnQ29tbWVyY2UiLCJ3aW5kb3ciLCJCaWdDb21tZXJjZSIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwibG9hZCIsImxlbmd0aCIsInJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uIiwiaXMiLCJvbiIsImxlZnQiLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwidG9wIiwiYXZhaWxIZWlnaHQiLCJ1cmwiLCJkYXRhIiwib3BlbiIsImluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24iLCJyZWdpc3RlckluYm94VmFsaWRhdGlvbiIsImluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24iLCJpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uIiwiaW5pdFJlb3JkZXJGb3JtIiwicmVuZGVyQWNjb3VudFBheW1lbnRzIiwiX3RoaXMkY29udGV4dCIsImNvdW50cmllcyIsInBheW1lbnRzVXJsIiwic3RvcmVIYXNoIiwic3RvcmVMb2NhbGUiLCJ2YXVsdFRva2VuIiwic2hvcHBlcklkIiwiY3VzdG9tZXJFbWFpbCIsInByb3ZpZGVySWQiLCJjdXJyZW5jeUNvZGUiLCJwYXltZW50TWV0aG9kc1VybCIsInBheW1lbnRQcm92aWRlckluaXRpYWxpemF0aW9uRGF0YSIsInRoZW1lU2V0dGluZ3MiLCJzdHlsZXMiLCJpbnB1dEJhc2UiLCJjb2xvciIsImJvcmRlckNvbG9yIiwiaW5wdXRWYWxpZGF0aW9uRXJyb3IiLCJpbnB1dFZhbGlkYXRpb25TdWNjZXNzIiwic3VibWl0QnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwiY2FuY2VsQnV0dG9uIiwibGFiZWwiLCJ2YWxpZGF0aW9uRXJyb3IiLCJoZWFkaW5nIiwic3RvcmVDb250ZXh0RGF0YSIsImVycm9ySGFuZGxlciIsImJpbmREZWxldGVBZGRyZXNzIiwiYmluZERlbGV0ZVBheW1lbnRNZXRob2QiLCJldmVudCIsIm1lc3NhZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY29uZmlybSIsInByZXZlbnREZWZhdWx0IiwiX3RoaXMyIiwiJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyIsInN1Ym1pdEZvcm0iLCJmaW5kIiwicmVtb3ZlIiwiZWFjaCIsImluZGV4IiwicHJvZHVjdENoZWNrYm94IiwicHJvZHVjdElkIiwidmFsIiwiJGlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInNlbGVjdEl0ZW0iLCJfdGhpczMiLCJ2YWxpZGF0aW9uTW9kZWwiLCJzdGF0ZVNlbGVjdG9yIiwiJHN0YXRlRWxlbWVudCIsImFkZHJlc3NWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJhZGQiLCIkbGFzdCIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiZmllbGRfbm90X2JsYW5rIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImVycm9yTWVzc2FnZSIsImZvcm1TdWJtaXQiLCJpIiwiZWxlIiwicGFyc2VJbnQiLCJfdGhpczQiLCJhdHRyIiwiZmlyc3ROYW1lTGFiZWwiLCJsYXN0TmFtZUxhYmVsIiwiY29tcGFueUxhYmVsIiwicGhvbmVMYWJlbCIsImFkZHJlc3MxTGFiZWwiLCJhZGRyZXNzMkxhYmVsIiwiY2l0eUxhYmVsIiwiY291bnRyeUxhYmVsIiwiY2hvb3NlQ291bnRyeUxhYmVsIiwic3RhdGVMYWJlbCIsInBvc3RhbENvZGVMYWJlbCIsInBheW1lbnRNZXRob2RTZWxlY3RvciIsInBheW1lbnRNZXRob2RWYWxpZGF0b3IiLCJjYXJkVHlwZSIsIl9yZWYiLCJ0YXJnZXQiLCJzaWJsaW5ncyIsImNzcyIsInNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uIiwiY3JlZGl0Q2FyZE51bWJlciIsInNldEV4cGlyYXRpb25WYWxpZGF0aW9uIiwiZXhwaXJhdGlvbiIsInNldE5hbWVPbkNhcmRWYWxpZGF0aW9uIiwibmFtZU9uQ2FyZCIsInNldEN2dlZhbGlkYXRpb24iLCJjdnYiLCJzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0Iiwic2V0RXhwaXJhdGlvbkZvcm1hdCIsIl9yZWR1Y2UiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsIml0ZW0iLCJyZWZPYmoiLCJjb3VudHJ5IiwiX2ZpbmQiLCJfcmVmMiIsInN0YXRlIiwic3RhdGVzIiwiX3JlZjMiLCJjb3VudHJ5X2NvZGUiLCJjb2RlIiwic3RhdGVfb3JfcHJvdmluY2VfY29kZSIsImRlZmF1bHRfaW5zdHJ1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsImdlbmVyaWNfZXJyb3IiLCJmb3JtRWRpdFNlbGVjdG9yIiwiZWRpdFZhbGlkYXRvciIsImRlbGF5IiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCJwYXNzd29yZFNlbGVjdG9yIiwiJHBhc3N3b3JkRWxlbWVudCIsInBhc3N3b3JkMlNlbGVjdG9yIiwiJHBhc3N3b3JkMkVsZW1lbnQiLCJjdXJyZW50UGFzc3dvcmRTZWxlY3RvciIsIiRjdXJyZW50UGFzc3dvcmQiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJ2YWxpZF9lbWFpbCIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsImVudGVyUGFzc3dvcmQiLCJwYXNzd29yZCIsIm1hdGNoUGFzc3dvcmQiLCJwYXNzd29yZF9tYXRjaCIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsImVycm9yIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiY3VycmVudFBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRUaW1lb3V0IiwiZWFybGllc3RFcnJvciIsInByZXYiLCJ0cmlnZ2VyIiwiaW5ib3hWYWxpZGF0b3IiLCJOdW1iZXIiLCJlbnRlck9yZGVyTnVtIiwiZW50ZXJTdWJqZWN0IiwiZW50ZXJNZXNzYWdlIiwiZGVmYXVsdCIsImNyZWRpdGNhcmRzIiwib21pdE51bGxTdHJpbmciLCJrZXkiLCJjYXJkIiwicGFyc2UiLCJkb25lIiwiZmFpbCIsInByb3ZpZGVyX2lkIiwiY3VycmVuY3lfY29kZSIsImNyZWRpdF9jYXJkX251bWJlciIsIm5hbWVfb25fY2FyZCIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwicG9zdGFsX2NvZGUiLCJjb21wYW55IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJleHBpcnkiLCJzcGxpdCIsImFqYXgiLCJkYXRhVHlwZSIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBY2NlcHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5zdHJ1bWVudCIsImNhcmRob2xkZXJfbmFtZSIsIm51bWJlciIsImV4cGlyeV9tb250aCIsIm1vbnRoIiwiZXhwaXJ5X3llYXIiLCJ5ZWFyIiwidmVyaWZpY2F0aW9uX3ZhbHVlIiwiYmlsbGluZ19hZGRyZXNzIiwicmVmVGFyZ2V0IiwiZm9ybWF0IiwiX3JlZjQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxzIiwiYWRkQ2xhc3MiLCJjb21wYXJlIiwiam9pbiIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIm5vQ29tcGFyZU1lc3NhZ2UiLCJjb21wYXJlQ291bnRlciIsIiRjb21wYXJlTGluayIsIiRjaGVja2VkIiwibWFwIiwiZWxlbWVudCIsImdldCIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9