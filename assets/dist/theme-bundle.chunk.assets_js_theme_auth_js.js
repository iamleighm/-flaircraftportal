'use strict';
(self['webpackChunkbigcommerce_cornerstone'] =
    self['webpackChunkbigcommerce_cornerstone'] || []).push([
    ['assets_js_theme_auth_js'],
    {
        /***/ './assets/js/theme/auth.js':
            /*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
            /***/ function (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: function () {
                            return /* binding */ Auth;
                        },
                        /* harmony export */
                    },
                );
                /* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./page-manager */ './assets/js/theme/page-manager.js',
                    );
                /* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./common/state-country */ './assets/js/theme/common/state-country.js',
                    );
                /* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./common/nod */ './assets/js/theme/common/nod.js',
                    );
                /* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ./common/form-validation */ './assets/js/theme/common/form-validation.js',
                    );
                /* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ./common/models/forms */ './assets/js/theme/common/models/forms.js',
                    );
                /* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! ./common/utils/form-utils */ './assets/js/theme/common/utils/form-utils.js',
                    );
                /* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        /*! ./common/utils/translations-utils */ './assets/js/theme/common/utils/translations-utils.js',
                    );
                /* provided dependency */ var $ = __webpack_require__(
                    /*! jquery */ './node_modules/jquery/dist/jquery.min.js',
                );
                function _inheritsLoose(subClass, superClass) {
                    subClass.prototype = Object.create(superClass.prototype);
                    subClass.prototype.constructor = subClass;
                    _setPrototypeOf(subClass, superClass);
                }

                function _setPrototypeOf(o, p) {
                    _setPrototypeOf =
                        Object.setPrototypeOf ||
                        function _setPrototypeOf(o, p) {
                            o.__proto__ = p;
                            return o;
                        };
                    return _setPrototypeOf(o, p);
                }

                var Auth = /*#__PURE__*/ (function (_PageManager) {
                    _inheritsLoose(Auth, _PageManager);

                    function Auth(context) {
                        var _this;

                        _this = _PageManager.call(this, context) || this;
                        _this.validationDictionary = (0,
                        _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__.createTranslationDictionary)(
                            context,
                        );
                        _this.formCreateSelector =
                            'form[data-create-account-form]';
                        _this.recaptcha = $('.g-recaptcha iframe[src]');
                        return _this;
                    }

                    var _proto = Auth.prototype;

                    _proto.registerLoginValidation =
                        function registerLoginValidation($loginForm) {
                            var _this2 = this;

                            var loginModel =
                                _common_models_forms__WEBPACK_IMPORTED_MODULE_4__[
                                    'default'
                                ];
                            this.loginValidator = (0,
                            _common_nod__WEBPACK_IMPORTED_MODULE_2__[
                                'default'
                            ])({
                                submit: '.login-form input[type="submit"]',
                                tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage,
                            });
                            this.loginValidator.add([
                                {
                                    selector:
                                        '.login-form input[name="login_email"]',
                                    validate: function validate(cb, val) {
                                        var result = loginModel.email(val);
                                        cb(result);
                                    },
                                    errorMessage: this.context.useValidEmail,
                                },
                                {
                                    selector:
                                        '.login-form input[name="login_pass"]',
                                    validate: function validate(cb, val) {
                                        var result = loginModel.password(val);
                                        cb(result);
                                    },
                                    errorMessage: this.context.enterPass,
                                },
                            ]);
                            $loginForm.on('submit', function (event) {
                                _this2.loginValidator.performCheck();

                                if (_this2.loginValidator.areAll('valid')) {
                                    return;
                                }

                                event.preventDefault();
                            });
                        };

                    _proto.registerForgotPasswordValidation =
                        function registerForgotPasswordValidation(
                            $forgotPasswordForm,
                        ) {
                            var _this3 = this;

                            this.forgotPasswordValidator = (0,
                            _common_nod__WEBPACK_IMPORTED_MODULE_2__[
                                'default'
                            ])({
                                submit: '.forgot-password-form input[type="submit"]',
                                tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage,
                            });
                            this.forgotPasswordValidator.add([
                                {
                                    selector:
                                        '.forgot-password-form input[name="email"]',
                                    validate: function validate(cb, val) {
                                        var result =
                                            _common_models_forms__WEBPACK_IMPORTED_MODULE_4__[
                                                'default'
                                            ].email(val);
                                        cb(result);
                                    },
                                    errorMessage: this.context.useValidEmail,
                                },
                            ]);
                            $forgotPasswordForm.on('submit', function (event) {
                                _this3.forgotPasswordValidator.performCheck();

                                if (
                                    _this3.forgotPasswordValidator.areAll(
                                        'valid',
                                    )
                                ) {
                                    return;
                                }

                                event.preventDefault();
                            });
                        };

                    _proto.registerNewPasswordValidation =
                        function registerNewPasswordValidation() {
                            var _this$validationDicti =
                                    this.validationDictionary,
                                enterPassword = _this$validationDicti.password,
                                matchPassword =
                                    _this$validationDicti.password_match;
                            var newPasswordForm = '.new-password-form';
                            var newPasswordValidator = (0,
                            _common_nod__WEBPACK_IMPORTED_MODULE_2__[
                                'default'
                            ])({
                                submit: $(
                                    newPasswordForm + ' input[type="submit"]',
                                ),
                                tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage,
                            });
                            var passwordSelector = $(
                                newPasswordForm + ' input[name="password"]',
                            );
                            var password2Selector = $(
                                newPasswordForm +
                                    ' input[name="password_confirm"]',
                            );
                            var errorTextMessages = (0,
                            _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.createPasswordValidationErrorTextObject)(
                                enterPassword,
                                enterPassword,
                                matchPassword,
                                this.passwordRequirements.error,
                            );
                            _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setPasswordValidation(
                                newPasswordValidator,
                                passwordSelector,
                                password2Selector,
                                this.passwordRequirements,
                                errorTextMessages,
                            );
                        };

                    _proto.registerCreateAccountValidator =
                        function registerCreateAccountValidator(
                            $createAccountForm,
                        ) {
                            var _this4 = this;

                            var validationModel = (0,
                            _common_form_validation__WEBPACK_IMPORTED_MODULE_3__[
                                'default'
                            ])($createAccountForm, this.context);
                            var createAccountValidator = (0,
                            _common_nod__WEBPACK_IMPORTED_MODULE_2__[
                                'default'
                            ])({
                                submit:
                                    this.formCreateSelector +
                                    " input[type='submit']",
                                delay: 900,
                            });
                            var $stateElement = $('[data-field-type="State"]');
                            var emailSelector =
                                this.formCreateSelector +
                                " [data-field-type='EmailAddress']";
                            var $emailElement = $(emailSelector);
                            var passwordSelector =
                                this.formCreateSelector +
                                " [data-field-type='Password']";
                            var $passwordElement = $(passwordSelector);
                            var password2Selector =
                                this.formCreateSelector +
                                " [data-field-type='ConfirmPassword']";
                            var $password2Element = $(password2Selector);
                            createAccountValidator.add(validationModel);

                            if ($stateElement) {
                                var $last; // Requests the states for a country with AJAX

                                (0,
                                _common_state_country__WEBPACK_IMPORTED_MODULE_1__[
                                    'default'
                                ])(
                                    $stateElement,
                                    this.context,
                                    function (err, field) {
                                        if (err) {
                                            throw new Error(err);
                                        }

                                        var $field = $(field);

                                        if (
                                            createAccountValidator.getStatus(
                                                $stateElement,
                                            ) !== 'undefined'
                                        ) {
                                            createAccountValidator.remove(
                                                $stateElement,
                                            );
                                        }

                                        if ($last) {
                                            createAccountValidator.remove(
                                                $last,
                                            );
                                        }

                                        if ($field.is('select')) {
                                            $last = field;
                                            _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setStateCountryValidation(
                                                createAccountValidator,
                                                field,
                                                _this4.validationDictionary
                                                    .field_not_blank,
                                            );
                                        } else {
                                            _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.cleanUpStateValidation(
                                                field,
                                            );
                                        }
                                    },
                                );
                            }

                            if ($emailElement) {
                                createAccountValidator.remove(emailSelector);
                                _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setEmailValidation(
                                    createAccountValidator,
                                    emailSelector,
                                    this.validationDictionary.valid_email,
                                );
                            }

                            if ($passwordElement && $password2Element) {
                                var _this$validationDicti2 =
                                        this.validationDictionary,
                                    enterPassword =
                                        _this$validationDicti2.password,
                                    matchPassword =
                                        _this$validationDicti2.password_match;
                                createAccountValidator.remove(passwordSelector);
                                createAccountValidator.remove(
                                    password2Selector,
                                );
                                _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setPasswordValidation(
                                    createAccountValidator,
                                    passwordSelector,
                                    password2Selector,
                                    this.passwordRequirements,
                                    (0,
                                    _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.createPasswordValidationErrorTextObject)(
                                        enterPassword,
                                        enterPassword,
                                        matchPassword,
                                        this.passwordRequirements.error,
                                    ),
                                );
                            }

                            $createAccountForm.on('submit', function (event) {
                                _this4.submitAction(
                                    event,
                                    createAccountValidator,
                                );
                            });
                        };

                    _proto.submitAction = function submitAction(
                        event,
                        validator,
                    ) {
                        validator.performCheck();

                        if (validator.areAll('valid')) {
                            return;
                        }

                        event.preventDefault();
                        setTimeout(function () {
                            var earliestError = $(
                                'span.form-inlineMessage:first',
                            ).prev('input');
                            earliestError.focus();
                        }, 900);
                    };
                    /**
                     * Request is made in this function to the remote endpoint and pulls back the states for country.
                     */

                    _proto.onReady = function onReady() {
                        if (!this.recaptcha.attr('title')) {
                            this.recaptcha.attr(
                                'title',
                                this.context.recaptchaTitle,
                            );
                        }

                        var $createAccountForm = (0,
                        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)(
                            this.formCreateSelector,
                        );
                        var $loginForm = (0,
                        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)(
                            '.login-form',
                        );
                        var $forgotPasswordForm = (0,
                        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)(
                            '.forgot-password-form',
                        );
                        var $newPasswordForm = (0,
                        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)(
                            '.new-password-form',
                        ); // reset password
                        // Injected via auth.html

                        this.passwordRequirements =
                            this.context.passwordRequirements;

                        if ($loginForm.length) {
                            this.registerLoginValidation($loginForm);
                        }

                        if ($newPasswordForm.length) {
                            this.registerNewPasswordValidation();
                        }

                        if ($forgotPasswordForm.length) {
                            this.registerForgotPasswordValidation(
                                $forgotPasswordForm,
                            );
                        }

                        if ($createAccountForm.length) {
                            this.registerCreateAccountValidator(
                                $createAccountForm,
                            );
                        }
                    };

                    return Auth;
                })(_page_manager__WEBPACK_IMPORTED_MODULE_0__['default']);

                /***/
            },
    },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9hdXRoX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7SUFFcUJVOzs7QUFDakIsZ0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsb0NBQU1BLE9BQU47QUFDQSxVQUFLQyxvQkFBTCxHQUE0QkgsNkZBQTJCLENBQUNFLE9BQUQsQ0FBdkQ7QUFDQSxVQUFLRSxrQkFBTCxHQUEwQixnQ0FBMUI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQyxDQUFDLENBQUMsMEJBQUQsQ0FBbEI7QUFKaUI7QUFLcEI7Ozs7U0FFREMsMEJBQUEsaUNBQXdCQyxVQUF4QixFQUFvQztBQUFBOztBQUNoQyxRQUFNQyxVQUFVLEdBQUdkLDREQUFuQjtBQUVBLFNBQUtlLGNBQUwsR0FBc0JqQix1REFBRyxDQUFDO0FBQ3RCa0IsTUFBQUEsTUFBTSxFQUFFLGtDQURjO0FBRXRCQyxNQUFBQSxHQUFHLEVBQUViLCtFQUF5QkE7QUFGUixLQUFELENBQXpCO0FBS0EsU0FBS1csY0FBTCxDQUFvQkcsR0FBcEIsQ0FBd0IsQ0FDcEI7QUFDSUMsTUFBQUEsUUFBUSxFQUFFLHVDQURkO0FBRUlDLE1BQUFBLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDbkIsWUFBTUMsTUFBTSxHQUFHVCxVQUFVLENBQUNVLEtBQVgsQ0FBaUJGLEdBQWpCLENBQWY7QUFFQUQsUUFBQUEsRUFBRSxDQUFDRSxNQUFELENBQUY7QUFDSCxPQU5MO0FBT0lFLE1BQUFBLFlBQVksRUFBRSxLQUFLbEIsT0FBTCxDQUFhbUI7QUFQL0IsS0FEb0IsRUFVcEI7QUFDSVAsTUFBQUEsUUFBUSxFQUFFLHNDQURkO0FBRUlDLE1BQUFBLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDbkIsWUFBTUMsTUFBTSxHQUFHVCxVQUFV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QUNnQyxNQUF2QixFQUErQjtBQUMzQixXQUFLakMsOEJBQUwsQ0FBb0NDLGtCQUFwQztBQUNIO0FBQ0o7OztFQWhONkJ0RCIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2F1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQge1xuICAgIGNsYXNzaWZ5Rm9ybSxcbiAgICBWYWxpZGF0b3JzLFxuICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCxcbiAgICBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxufSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGggZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICAgICAgdGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWNyZWF0ZS1hY2NvdW50LWZvcm1dJztcbiAgICAgICAgdGhpcy5yZWNhcHRjaGEgPSAkKCcuZy1yZWNhcHRjaGEgaWZyYW1lW3NyY10nKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckxvZ2luVmFsaWRhdGlvbigkbG9naW5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGxvZ2luTW9kZWwgPSBmb3JtcztcblxuICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy5sb2dpbi1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcubG9naW4tZm9ybSBpbnB1dFtuYW1lPVwibG9naW5fZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnVzZVZhbGlkRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmxvZ2luLWZvcm0gaW5wdXRbbmFtZT1cImxvZ2luX3Bhc3NcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLnBhc3N3b3JkKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyUGFzcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRsb2dpbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24oJGZvcmdvdFBhc3N3b3JkRm9ybSkge1xuICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmZvcmdvdC1wYXNzd29yZC1mb3JtIGlucHV0W25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnVzZVZhbGlkRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkZm9yZ290UGFzc3dvcmRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uKCkge1xuICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3QgbmV3UGFzc3dvcmRGb3JtID0gJy5uZXctcGFzc3dvcmQtZm9ybSc7XG4gICAgICAgIGNvbnN0IG5ld1Bhc3N3b3JkVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gKSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSAkKGAke25ld1Bhc3N3b3JkRm9ybX0gaW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdYCk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZF9jb25maXJtXCJdYCk7XG4gICAgICAgIGNvbnN0IGVycm9yVGV4dE1lc3NhZ2VzID0gY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0KGVudGVyUGFzc3dvcmQsIGVudGVyUGFzc3dvcmQsIG1hdGNoUGFzc3dvcmQsIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMuZXJyb3IpO1xuICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgIG5ld1Bhc3N3b3JkVmFsaWRhdG9yLFxuICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgIGVycm9yVGV4dE1lc3NhZ2VzLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkY3JlYXRlQWNjb3VudEZvcm0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUFjY291bnRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gaW5wdXRbdHlwZT0nc3VibWl0J11gLFxuICAgICAgICAgICAgZGVsYXk6IDkwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdFbWFpbEFkZHJlc3MnXWA7XG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J1Bhc3N3b3JkJ11gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nQ29uZmlybVBhc3N3b3JkJ11gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuXG4gICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihjcmVhdGVBY2NvdW50VmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihjcmVhdGVBY2NvdW50VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LnZhbGlkX2VtYWlsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcblxuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgICAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QoZW50ZXJQYXNzd29yZCwgZW50ZXJQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cy5lcnJvciksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgJGNyZWF0ZUFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uKGV2ZW50LCBjcmVhdGVBY2NvdW50VmFsaWRhdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0QWN0aW9uKGV2ZW50LCB2YWxpZGF0b3IpIHtcbiAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgIGlmICh2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlYXJsaWVzdEVycm9yID0gJCgnc3Bhbi5mb3JtLWlubGluZU1lc3NhZ2U6Zmlyc3QnKS5wcmV2KCdpbnB1dCcpO1xuICAgICAgICAgICAgZWFybGllc3RFcnJvci5mb2N1cygpO1xuICAgICAgICB9LCA5MDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgaXMgbWFkZSBpbiB0aGlzIGZ1bmN0aW9uIHRvIHRoZSByZW1vdGUgZW5kcG9pbnQgYW5kIHB1bGxzIGJhY2sgdGhlIHN0YXRlcyBmb3IgY291bnRyeS5cbiAgICAgKi9cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBpZiAoIXRoaXMucmVjYXB0Y2hhLmF0dHIoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVjYXB0Y2hhLmF0dHIoJ3RpdGxlJywgdGhpcy5jb250ZXh0LnJlY2FwdGNoYVRpdGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRjcmVhdGVBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSh0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0ICRsb2dpbkZvcm0gPSBjbGFzc2lmeUZvcm0oJy5sb2dpbi1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRmb3Jnb3RQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybScpO1xuICAgICAgICBjb25zdCAkbmV3UGFzc3dvcmRGb3JtID0gY2xhc3NpZnlGb3JtKCcubmV3LXBhc3N3b3JkLWZvcm0nKTsgLy8gcmVzZXQgcGFzc3dvcmRcblxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgYXV0aC5odG1sXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XG5cbiAgICAgICAgaWYgKCRsb2dpbkZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uKCRsb2dpbkZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRuZXdQYXNzd29yZEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGZvcmdvdFBhc3N3b3JkRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24oJGZvcmdvdFBhc3N3b3JkRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGNyZWF0ZUFjY291bnRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsInN0YXRlQ291bnRyeSIsIm5vZCIsInZhbGlkYXRpb24iLCJmb3JtcyIsImNsYXNzaWZ5Rm9ybSIsIlZhbGlkYXRvcnMiLCJjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiQXV0aCIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImZvcm1DcmVhdGVTZWxlY3RvciIsInJlY2FwdGNoYSIsIiQiLCJyZWdpc3RlckxvZ2luVmFsaWRhdGlvbiIsIiRsb2dpbkZvcm0iLCJsb2dpbk1vZGVsIiwibG9naW5WYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInVzZVZhbGlkRW1haWwiLCJwYXNzd29yZCIsImVudGVyUGFzcyIsIm9uIiwiZXZlbnQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcmV2ZW50RGVmYXVsdCIsInJlZ2lzdGVyRm9yZ290UGFzc3dvcmRWYWxpZGF0aW9uIiwiJGZvcmdvdFBhc3N3b3JkRm9ybSIsImZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yIiwicmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24iLCJlbnRlclBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwibmV3UGFzc3dvcmRGb3JtIiwibmV3UGFzc3dvcmRWYWxpZGF0b3IiLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJlcnJvclRleHRNZXNzYWdlcyIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwiZXJyb3IiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJyZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IiLCIkY3JlYXRlQWNjb3VudEZvcm0iLCJ2YWxpZGF0aW9uTW9kZWwiLCJjcmVhdGVBY2NvdW50VmFsaWRhdG9yIiwiZGVsYXkiLCIkc3RhdGVFbGVtZW50IiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCIkcGFzc3dvcmRFbGVtZW50IiwiJHBhc3N3b3JkMkVsZW1lbnQiLCIkbGFzdCIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJyZW1vdmUiLCJpcyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJmaWVsZF9ub3RfYmxhbmsiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRfZW1haWwiLCJzdWJtaXRBY3Rpb24iLCJ2YWxpZGF0b3IiLCJzZXRUaW1lb3V0IiwiZWFybGllc3RFcnJvciIsInByZXYiLCJmb2N1cyIsIm9uUmVhZHkiLCJhdHRyIiwicmVjYXB0Y2hhVGl0bGUiLCIkbmV3UGFzc3dvcmRGb3JtIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==
