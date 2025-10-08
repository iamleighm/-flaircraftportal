'use strict';
(self['webpackChunkbigcommerce_cornerstone'] =
    self['webpackChunkbigcommerce_cornerstone'] || []).push([
    ['assets_js_theme_wishlist_js'],
    {
        /***/ './assets/js/theme/common/utils/pagination-utils.js':
            /*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
            /***/ function (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ wishlistPaginatorHelper:
                            function () {
                                return /* binding */ wishlistPaginatorHelper;
                            },
                        /* harmony export */
                    },
                );
                /* provided dependency */ var $ = __webpack_require__(
                    /*! jquery */ './node_modules/jquery/dist/jquery.min.js',
                );
                var changeWishlistPaginationLinks =
                    function changeWishlistPaginationLinks(wishlistUrl) {
                        for (
                            var _len = arguments.length,
                                paginationItems = new Array(
                                    _len > 1 ? _len - 1 : 0,
                                ),
                                _key = 1;
                            _key < _len;
                            _key++
                        ) {
                            paginationItems[_key - 1] = arguments[_key];
                        }
                        return $.each(paginationItems, function (_, $item) {
                            var paginationLink =
                                $item.children('.pagination-link');
                            if (
                                $item.length &&
                                !paginationLink.attr('href').includes('page=')
                            ) {
                                var pageNumber = paginationLink.attr('href');
                                paginationLink.attr(
                                    'href',
                                    wishlistUrl + 'page=' + pageNumber,
                                );
                            }
                        });
                    };

                /**
                 * helps to withdraw differences in structures around the stencil resource pagination
                 */
                var wishlistPaginatorHelper =
                    function wishlistPaginatorHelper() {
                        var $paginationList = $('.pagination-list');
                        if (!$paginationList.length) return;
                        var $nextItem = $(
                            '.pagination-item--next',
                            $paginationList,
                        );
                        var $prevItem = $(
                            '.pagination-item--previous',
                            $paginationList,
                        );
                        var currentHref = $(
                            '[data-pagination-current-page-link]',
                        ).attr('href');
                        var partialPaginationUrl = currentHref
                            .split('page=')
                            .shift();
                        changeWishlistPaginationLinks(
                            partialPaginationUrl,
                            $prevItem,
                            $nextItem,
                        );
                    };

                /***/
            },

        /***/ './assets/js/theme/wishlist.js':
            /*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
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
                            return /* binding */ WishList;
                        },
                        /* harmony export */
                    },
                );
                /* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! foundation-sites/js/foundation/foundation */ './node_modules/foundation-sites/js/foundation/foundation.js',
                    );
                /* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__,
                    );
                /* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! foundation-sites/js/foundation/foundation.reveal */ './node_modules/foundation-sites/js/foundation/foundation.reveal.js',
                    );
                /* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__,
                    );
                /* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./common/nod */ './assets/js/theme/common/nod.js',
                    );
                /* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ./page-manager */ './assets/js/theme/page-manager.js',
                    );
                /* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ./common/utils/pagination-utils */ './assets/js/theme/common/utils/pagination-utils.js',
                    );
                /* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! ./common/utils/form-utils */ './assets/js/theme/common/utils/form-utils.js',
                    );
                /* provided dependency */ var $ = __webpack_require__(
                    /*! jquery */ './node_modules/jquery/dist/jquery.min.js',
                );
                function _assertThisInitialized(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                        );
                    return e;
                }
                function _inheritsLoose(t, o) {
                    (t.prototype = Object.create(o.prototype)),
                        (t.prototype.constructor = t),
                        _setPrototypeOf(t, o);
                }
                function _setPrototypeOf(t, e) {
                    return (
                        (_setPrototypeOf = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, e) {
                                  return (t.__proto__ = e), t;
                              }),
                        _setPrototypeOf(t, e)
                    );
                }

                var WishList = /*#__PURE__*/ (function (_PageManager) {
                    function WishList(context) {
                        var _this;
                        _this = _PageManager.call(this, context) || this;
                        _this.options = {
                            template: 'account/add-wishlist',
                        };
                        return _this || _assertThisInitialized(_this);
                    }

                    /**
                     * Creates a confirm box before deleting all wish lists
                     */
                    _inheritsLoose(WishList, _PageManager);
                    var _proto = WishList.prototype;
                    _proto.wishlistDeleteConfirm =
                        function wishlistDeleteConfirm() {
                            var _this2 = this;
                            $('body').on(
                                'click',
                                '[data-wishlist-delete]',
                                function (event) {
                                    var confirmed = window.confirm(
                                        _this2.context.wishlistDelete,
                                    );
                                    if (confirmed) {
                                        return true;
                                    }
                                    event.preventDefault();
                                },
                            );
                        };
                    _proto.registerAddWishListValidation =
                        function registerAddWishListValidation(
                            $addWishlistForm,
                        ) {
                            var _this3 = this;
                            this.addWishlistValidator = (0,
                            _common_nod__WEBPACK_IMPORTED_MODULE_2__[
                                'default'
                            ])({
                                submit: '.wishlist-form input[type="submit"]',
                                tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage,
                            });
                            this.addWishlistValidator.add([
                                {
                                    selector:
                                        '.wishlist-form input[name="wishlistname"]',
                                    validate: function validate(cb, val) {
                                        var result = val.length > 0;
                                        cb(result);
                                    },
                                    errorMessage:
                                        this.context.enterWishlistNameError,
                                },
                            ]);
                            $addWishlistForm.on('submit', function (event) {
                                _this3.addWishlistValidator.performCheck();
                                if (
                                    _this3.addWishlistValidator.areAll('valid')
                                ) {
                                    return;
                                }
                                event.preventDefault();
                            });
                        };
                    _proto.onReady = function onReady() {
                        var $addWishListForm = $('.wishlist-form');
                        if ($('[data-pagination-wishlist]').length) {
                            (0,
                            _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
                        }
                        if ($addWishListForm.length) {
                            this.registerAddWishListValidation(
                                $addWishListForm,
                            );
                        }
                        this.wishlistDeleteConfirm();
                    };
                    return WishList;
                })(_page_manager__WEBPACK_IMPORTED_MODULE_3__['default']);

                /***/
            },
    },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV93aXNobGlzdF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBNkJBLENBQUlDLFdBQVc7RUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFLQyxlQUFlLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBZkYsZUFBZSxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBQUEsT0FBS0MsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLGVBQWUsRUFBRSxVQUFDSyxDQUFDLEVBQUVDLEtBQUssRUFBSztJQUM3RyxJQUFNQyxjQUFjLEdBQUdELEtBQUssQ0FBQ0UsUUFBUSxDQUFDLGtCQUFrQixDQUFDO0lBRXpELElBQUlGLEtBQUssQ0FBQ1AsTUFBTSxJQUFJLENBQUNRLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFDaEUsSUFBTUMsVUFBVSxHQUFHSixjQUFjLENBQUNFLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDOUNGLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBS2IsV0FBVyxhQUFRZSxVQUFZLENBQUM7SUFDbkU7RUFDSixDQUFDLENBQUM7QUFBQTs7QUFFRjtBQUNBO0FBQ0E7QUFDTyxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQXVCQSxDQUFBLEVBQVM7RUFDekMsSUFBTUMsZUFBZSxHQUFHVixDQUFDLENBQUMsa0JBQWtCLENBQUM7RUFFN0MsSUFBSSxDQUFDVSxlQUFlLENBQUNkLE1BQU0sRUFBRTtFQUU3QixJQUFNZSxTQUFTLEdBQUdYLENBQUMsQ0FBQyx3QkFBd0IsRUFBRVUsZUFBZSxDQUFDO0VBQzlELElB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QztJQUM3QjtJQUVBLElBQUlnRCxnQkFBZ0IsQ0FBQzdELE1BQU0sRUFBRTtNQUN6QixJQUFJLENBQUM0Qyw2QkFBNkIsQ0FBQ2lCLGdCQUFnQixDQUFDO0lBQ3hEO0lBRUEsSUFBSSxDQUFDMUIscUJBQXFCLENBQUMsQ0FBQztFQUNoQyxDQUFDO0VBQUEsT0FBQVgsUUFBQTtBQUFBLEVBbkVpQ0YscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS93aXNobGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyA9ICh3aXNobGlzdFVybCwgLi4ucGFnaW5hdGlvbkl0ZW1zKSA9PiAkLmVhY2gocGFnaW5hdGlvbkl0ZW1zLCAoXywgJGl0ZW0pID0+IHtcbiAgICBjb25zdCBwYWdpbmF0aW9uTGluayA9ICRpdGVtLmNoaWxkcmVuKCcucGFnaW5hdGlvbi1saW5rJyk7XG5cbiAgICBpZiAoJGl0ZW0ubGVuZ3RoICYmICFwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJykuaW5jbHVkZXMoJ3BhZ2U9JykpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicsIGAke3dpc2hsaXN0VXJsfXBhZ2U9JHtwYWdlTnVtYmVyfWApO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIGhlbHBzIHRvIHdpdGhkcmF3IGRpZmZlcmVuY2VzIGluIHN0cnVjdHVyZXMgYXJvdW5kIHRoZSBzdGVuY2lsIHJlc291cmNlIHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyID0gKCkgPT4ge1xuICAgIGNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcblxuICAgIGlmICghJHBhZ2luYXRpb25MaXN0Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgJG5leHRJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCcsICRwYWdpbmF0aW9uTGlzdCk7XG4gICAgY29uc3QgJHByZXZJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMnLCAkcGFnaW5hdGlvbkxpc3QpO1xuICAgIGNvbnN0IGN1cnJlbnRIcmVmID0gJCgnW2RhdGEtcGFnaW5hdGlvbi1jdXJyZW50LXBhZ2UtbGlua10nKS5hdHRyKCdocmVmJyk7XG4gICAgY29uc3QgcGFydGlhbFBhZ2luYXRpb25VcmwgPSBjdXJyZW50SHJlZi5zcGxpdCgncGFnZT0nKS5zaGlmdCgpO1xuXG4gICAgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MocGFydGlhbFBhZ2luYXRpb25VcmwsICRwcmV2SXRlbSwgJG5leHRJdGVtKTtcbn07XG4iLCJpbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyB3aXNobGlzdFBhZ2luYXRvckhlbHBlciB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYWNjb3VudC9hZGQtd2lzaGxpc3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcbiAgICAgKi9cbiAgICB3aXNobGlzdERlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKHRoaXMuY29udGV4dC53aXNobGlzdERlbGV0ZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hsaXN0Rm9ybSkge1xuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy53aXNobGlzdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFtuYW1lPVwid2lzaGxpc3RuYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyV2lzaGxpc3ROYW1lRXJyb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkYWRkV2lzaGxpc3RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRhZGRXaXNoTGlzdEZvcm0gPSAkKCcud2lzaGxpc3QtZm9ybScpO1xuXG4gICAgICAgIGlmICgkKCdbZGF0YS1wYWdpbmF0aW9uLXdpc2hsaXN0XScpLmxlbmd0aCkge1xuICAgICAgICAgICAgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkV2lzaExpc3RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaExpc3RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lzaGxpc3REZWxldGVDb25maXJtKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzIiwid2lzaGxpc3RVcmwiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicGFnaW5hdGlvbkl0ZW1zIiwiQXJyYXkiLCJfa2V5IiwiJCIsImVhY2giLCJfIiwiJGl0ZW0iLCJwYWdpbmF0aW9uTGluayIsImNoaWxkcmVuIiwiYXR0ciIsImluY2x1ZGVzIiwicGFnZU51bWJlciIsIndpc2hsaXN0UGFnaW5hdG9ySGVscGVyIiwiJHBhZ2luYXRpb25MaXN0IiwiJG5leHRJdGVtIiwiJHByZXZJdGVtIiwiY3VycmVudEhyZWYiLCJwYXJ0aWFsUGFnaW5hdGlvblVybCIsInNwbGl0Iiwic2hpZnQiLCJub2QiLCJQYWdlTWFuYWdlciIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJXaXNoTGlzdCIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJfdGhpczIiLCJvbiIsImV2ZW50IiwiY29uZmlybWVkIiwid2luZG93IiwiY29uZmlybSIsIndpc2hsaXN0RGVsZXRlIiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbiIsIiRhZGRXaXNobGlzdEZvcm0iLCJfdGhpczMiLCJhZGRXaXNobGlzdFZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInZhbCIsInJlc3VsdCIsImVycm9yTWVzc2FnZSIsImVudGVyV2lzaGxpc3ROYW1lRXJyb3IiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJvblJlYWR5IiwiJGFkZFdpc2hMaXN0Rm9ybSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9
