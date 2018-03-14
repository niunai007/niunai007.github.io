webpackJsonp([6],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkInfoPageModule", function() { return WorkInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_info__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__identity_info_identity_info_service__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion_multi_picker__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ion_multi_picker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WorkInfoPageModule = (function () {
    function WorkInfoPageModule() {
    }
    WorkInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__work_info__["a" /* WorkInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__work_info__["a" /* WorkInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_5_ion_multi_picker__["MultiPickerModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__identity_info_identity_info_service__["a" /* IdentityInfoProvider */]
            ]
        })
    ], WorkInfoPageModule);
    return WorkInfoPageModule;
}());

//# sourceMappingURL=work-info.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(200);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var filter_1 = __webpack_require__(297);
/* tslint:enable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return filter_1.filter(predicate, thisArg)(this);
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(25);
/* tslint:enable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
    }
    // the try catch block below is left specifically for
    // optimization and perf reasons. a tryCatcher is not necessary here.
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the IdentityInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var IdentityInfoProvider = (function () {
    function IdentityInfoProvider(httpService) {
        this.httpService = httpService;
    }
    // 本地json文件请求
    IdentityInfoProvider.prototype.getCitys = function () {
        return this.httpService.get("assets/json/chinese-cities.json");
    };
    IdentityInfoProvider.prototype.getListCheckedValue = function (list) {
        var _list = list.slice();
        return _list.filter(function (val) {
            return val['checked'];
        })[0];
    };
    IdentityInfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], IdentityInfoProvider);
    return IdentityInfoProvider;
}());

//# sourceMappingURL=identity-info.service.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpBackend */
/* unused harmony export HttpHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* unused harmony export HttpHeaders */
/* unused harmony export HTTP_INTERCEPTORS */
/* unused harmony export JsonpClientBackend */
/* unused harmony export JsonpInterceptor */
/* unused harmony export HttpClientJsonpModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpClientModule; });
/* unused harmony export HttpClientXsrfModule */
/* unused harmony export ɵinterceptingHandler */
/* unused harmony export HttpParams */
/* unused harmony export HttpUrlEncodingCodec */
/* unused harmony export HttpRequest */
/* unused harmony export HttpErrorResponse */
/* unused harmony export HttpEventType */
/* unused harmony export HttpHeaderResponse */
/* unused harmony export HttpResponse */
/* unused harmony export HttpResponseBase */
/* unused harmony export HttpXhrBackend */
/* unused harmony export XhrFactory */
/* unused harmony export HttpXsrfTokenExtractor */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵg */
/* unused harmony export ɵh */
/* unused harmony export ɵe */
/* unused harmony export ɵf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatMap__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tslib__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/**
 * @license Angular v5.0.3
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@stable
 * @abstract
 */
var HttpHandler = (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@stable
 * @abstract
 */
var HttpBackend = (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * Immutable set of Http headers, with lazy parsing.
 * \@stable
 */
var HttpHeaders = (function () {
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var /** @type {?} */ index = line.indexOf(':');
                    if (index > 0) {
                        var /** @type {?} */ name_1 = line.slice(0, index);
                        var /** @type {?} */ key = name_1.toLowerCase();
                        var /** @type {?} */ value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            /** @type {?} */ ((_this.headers.get(key))).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var /** @type {?} */ values = headers[name];
                    var /** @type {?} */ key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of header by given name.
     */
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.has = /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns first header that matches given name.
     */
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.get = /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.init();
        var /** @type {?} */ values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers
     */
    /**
     * Returns the names of the headers
     * @return {?}
     */
    HttpHeaders.prototype.keys = /**
     * Returns the names of the headers
     * @return {?}
     */
    function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns list of header values for a given name.
     */
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.getAll = /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.append = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.set = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    HttpHeaders.prototype.delete = /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    /**
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    HttpHeaders.prototype.maybeSetNormalizedName = /**
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    /**
     * @return {?}
     */
    HttpHeaders.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    /**
     * @param {?} other
     * @return {?}
     */
    HttpHeaders.prototype.copyFrom = /**
     * @param {?} other
     * @return {?}
     */
    function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, /** @type {?} */ ((other.headers.get(key))));
            _this.normalizedNames.set(key, /** @type {?} */ ((other.normalizedNames.get(key))));
        });
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.clone = /**
     * @param {?} update
     * @return {?}
     */
    function (update) {
        var /** @type {?} */ clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.applyUpdate = /**
     * @param {?} update
     * @return {?}
     */
    function (update) {
        var /** @type {?} */ key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var /** @type {?} */ value = /** @type {?} */ ((update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var /** @type {?} */ base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, value);
                this.headers.set(key, base);
                break;
            case 'd':
                var /** @type {?} */ toDelete_1 = /** @type {?} */ (update.value);
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var /** @type {?} */ existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    HttpHeaders.prototype.forEach = /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(/** @type {?} */ ((_this.normalizedNames.get(key))), /** @type {?} */ ((_this.headers.get(key)))); });
    };
    return HttpHeaders;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * \@stable
 *
 * @record
 */

/**
 * A `HttpParameterCodec` that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values.
 *
 * \@stable
 */
var HttpUrlEncodingCodec = (function () {
    function HttpUrlEncodingCodec() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return standardEncoding(v); };
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return decodeURIComponent(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return decodeURIComponent(v); };
    return HttpUrlEncodingCodec;
}());
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    var /** @type {?} */ map$$1 = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Options used to construct an `HttpParams` instance.
 * @record
 */

/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable - all mutation operations return a new instance.
 *
 * \@stable
 */
var HttpParams = (function () {
    function HttpParams(options) {
        if (options === void 0) { options = /** @type {?} */ ({}); }
        var _this = this;
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var /** @type {?} */ value = (/** @type {?} */ (options.fromObject))[key]; /** @type {?} */
                ((_this.map)).set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     */
    /**
     * Check whether the body has one or more values for the given parameter name.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.has = /**
     * Check whether the body has one or more values for the given parameter name.
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.init();
        return /** @type {?} */ ((this.map)).has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     */
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.get = /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.init();
        var /** @type {?} */ res = /** @type {?} */ ((this.map)).get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     */
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.getAll = /**
     * Get all values for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.init();
        return /** @type {?} */ ((this.map)).get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     */
    /**
     * Get all the parameter names for this body.
     * @return {?}
     */
    HttpParams.prototype.keys = /**
     * Get all the parameter names for this body.
     * @return {?}
     */
    function () {
        this.init();
        return Array.from(/** @type {?} */ ((this.map)).keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     */
    /**
     * Construct a new body with an appended value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.append = /**
     * Construct a new body with an appended value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     */
    /**
     * Construct a new body with a new value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.set = /**
     * Construct a new body with a new value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     */
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     * @param {?} param
     * @param {?=} value
     * @return {?}
     */
    HttpParams.prototype.delete = /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     * @param {?} param
     * @param {?=} value
     * @return {?}
     */
    function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    HttpParams.prototype.toString = /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var /** @type {?} */ eKey = _this.encoder.encodeKey(key);
            return /** @type {?} */ ((/** @type {?} */ ((_this.map)).get(key))).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); }).join('&');
        })
            .join('&');
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpParams.prototype.clone = /**
     * @param {?} update
     * @return {?}
     */
    function (update) {
        var /** @type {?} */ clone = new HttpParams(/** @type {?} */ ({ encoder: this.encoder }));
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    /**
     * @return {?}
     */
    HttpParams.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return /** @type {?} */ ((_this.map)).set(key, /** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ ((_this.cloneFrom)).map)).get(key)))); }); /** @type {?} */
            ((this.updates)).forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var /** @type {?} */ base = (update.op === 'a' ? /** @type {?} */ ((_this.map)).get(update.param) : undefined) || [];
                        base.push(/** @type {?} */ ((update.value))); /** @type {?} */
                        ((_this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var /** @type {?} */ base_1 = /** @type {?} */ ((_this.map)).get(update.param) || [];
                            var /** @type {?} */ idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                /** @type {?} */ ((_this.map)).set(update.param, base_1);
                            }
                            else {
                                /** @type {?} */ ((_this.map)).delete(update.param);
                            }
                        }
                        else {
                            /** @type {?} */ ((_this.map)).delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = null;
        }
    };
    return HttpParams;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@stable
 */
var HttpRequest = (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var /** @type {?} */ options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = /** @type {?} */ (third) || null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = /** @type {?} */ (third);
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var /** @type {?} */ params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var /** @type {?} */ qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var /** @type {?} */ sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    HttpRequest.prototype.serializeBody = /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return (/** @type {?} */ (this.body)).toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    HttpRequest.prototype.detectContentTypeHeader = /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpRequest.prototype.clone = /**
     * @param {?=} update
     * @return {?}
     */
    function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var /** @type {?} */ method = update.method || this.method;
        var /** @type {?} */ url = update.url || this.url;
        var /** @type {?} */ responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var /** @type {?} */ body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var /** @type {?} */ withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var /** @type {?} */ reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var /** @type {?} */ headers = update.headers || this.headers;
        var /** @type {?} */ params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, /** @type {?} */ ((update.setHeaders))[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, /** @type {?} */ ((update.setParams))[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
var HttpEventType = {
    /**
       * The request was sent out over the wire.
       */
    Sent: 0,
    /**
       * An upload progress event was received.
       */
    UploadProgress: 1,
    /**
       * The response status code and headers were received.
       */
    ResponseHeader: 2,
    /**
       * A download progress event was received.
       */
    DownloadProgress: 3,
    /**
       * The full response including the body was received.
       */
    Response: 4,
    /**
       * A custom event from an interceptor or a backend.
       */
    User: 5,
};
HttpEventType[HttpEventType.Sent] = "Sent";
HttpEventType[HttpEventType.UploadProgress] = "UploadProgress";
HttpEventType[HttpEventType.ResponseHeader] = "ResponseHeader";
HttpEventType[HttpEventType.DownloadProgress] = "DownloadProgress";
HttpEventType[HttpEventType.Response] = "Response";
HttpEventType[HttpEventType.User] = "User";
/**
 * Base interface for progress events.
 *
 * \@stable
 * @record
 */

/**
 * A download progress event.
 *
 * \@stable
 * @record
 */

/**
 * An upload progress event.
 *
 * \@stable
 * @record
 */

/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * \@stable
 * @record
 */

/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * \@stable
 * @record
 */

/**
 * An error that represents a failed attempt to JSON.parse text coming back
 * from the server.
 *
 * It bundles the Error object with the actual response body that failed to parse.
 *
 * \@stable
 * @record
 */

/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@stable
 * @abstract
 */
var HttpResponseBase = (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@stable
 */
var HttpHeaderResponse = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    HttpHeaderResponse.prototype.clone = /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@stable
 */
var HttpResponse = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body || null;
        return _this;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpResponse.prototype.clone = /**
     * @param {?=} update
     * @return {?}
     */
    function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@stable
 */
var HttpErrorResponse = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Construct an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. Basically, this clones the object and adds the body.
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Perform HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies according to which
 * signature is called (mainly the values of `observe` and `responseType`).
 *
 * \@stable
 */
var HttpClient = (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     */
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.request = /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var /** @type {?} */ req;
        // Firstly, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = /** @type {?} */ (first);
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming GET unless a method is
            // provided.
            // Figure out the headers.
            var /** @type {?} */ headers = undefined;
            if (!!options.headers !== undefined) {
                if (options.headers instanceof HttpHeaders) {
                    headers = options.headers;
                }
                else {
                    headers = new HttpHeaders(options.headers);
                }
            }
            // Sort out parameters.
            var /** @type {?} */ params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams(/** @type {?} */ ({ fromObject: options.params }));
                }
            }
            // Construct the request.
            req = new HttpRequest(first, /** @type {?} */ ((url)), options.body || null, {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var /** @type {?} */ events$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatMap__["concatMap"].call(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(req), function (req) { return _this.handler.handle(req); });
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var /** @type {?} */ res$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["filter"].call(events$, function (event) { return event instanceof HttpResponse; });
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        });
                    case 'blob':
                        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        });
                    case 'text':
                        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        });
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(res$, function (res) { return res.body; });
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.delete = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.get = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.head = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     * @template T
     * @param {?} url
     * @param {?} callbackParam
     * @return {?}
     */
    HttpClient.prototype.jsonp = /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     * @template T
     * @param {?} url
     * @param {?} callbackParam
     * @return {?}
     */
    function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.options = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.patch = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.post = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.put = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HttpClient.ctorParameters = function () { return [
        { type: HttpHandler, },
    ]; };
    return HttpClient;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Intercepts `HttpRequest` and handles them.
 *
 * Most interceptors will transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 *
 * In rare cases, interceptors may wish to completely handle a request themselves,
 * and not delegate to the remainder of the chain. This behavior is allowed.
 *
 * \@stable
 * @record
 */

/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 * \@stable
 */
var HttpInterceptorHandler = (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptorHandler.prototype.handle = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * \@stable
 */
var HTTP_INTERCEPTORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = (function () {
    function NoopInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NoopInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    NoopInterceptor.ctorParameters = function () { return []; };
    return NoopInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 * \@stable
 * @abstract
 */
var JsonpCallbackContext = (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * \@stable
 */
var JsonpClientBackend = (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    JsonpClientBackend.prototype.nextCallback = /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     */
    /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    JsonpClientBackend.prototype.handle = /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var /** @type {?} */ callback = _this.nextCallback();
            var /** @type {?} */ url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var /** @type {?} */ node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var /** @type {?} */ body = null;
            // Whether the response callback has been called.
            var /** @type {?} */ finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var /** @type {?} */ cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var /** @type {?} */ cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var /** @type {?} */ onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the resposne is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var /** @type {?} */ onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JsonpClientBackend.ctorParameters = function () { return [
        { type: JsonpCallbackContext, },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* DOCUMENT */],] },] },
    ]; };
    return JsonpClientBackend;
}());
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * \@stable
 */
var JsonpInterceptor = (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    JsonpInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(/** @type {?} */ (req));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JsonpInterceptor.ctorParameters = function () { return [
        { type: JsonpClientBackend, },
    ]; };
    return JsonpInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@stable
 * @abstract
 */
var XhrFactory = (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for \@{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 * \@stable
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((new XMLHttpRequest())); };
    BrowserXhr.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * \@stable
 */
var HttpXhrBackend = (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     */
    /**
     * Process a request and return a stream of response events.
     * @param {?} req
     * @return {?}
     */
    HttpXhrBackend.prototype.handle = /**
     * Process a request and return a stream of response events.
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var /** @type {?} */ xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var /** @type {?} */ detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var /** @type {?} */ responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = /** @type {?} */ (((responseType !== 'json') ? responseType : 'text'));
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var /** @type {?} */ reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var /** @type {?} */ headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var /** @type {?} */ partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var /** @type {?} */ status = xhr.status === 1223 ? 204 : xhr.status;
                var /** @type {?} */ statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var /** @type {?} */ headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var /** @type {?} */ url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var /** @type {?} */ onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var /** @type {?} */ body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var /** @type {?} */ ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (ok && req.responseType === 'json' && typeof body === 'string') {
                    // Attempt the parse. If it fails, a parse error should be delivered to the user.
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        body = JSON.parse(body);
                    }
                    catch (/** @type {?} */ error) {
                        // Even though the response status was 2xx, this is still an error.
                        ok = false;
                        // The parse error contains the text of the body that failed to parse.
                        body = /** @type {?} */ ({ error: error, text: body });
                    }
                }
                else if (!ok && req.responseType === 'json' && typeof body === 'string') {
                    try {
                        // Attempt to parse the body as JSON.
                        body = JSON.parse(body);
                    }
                    catch (/** @type {?} */ error) {
                        // Cannot be certain that the body was meant to be parsed as JSON.
                        // Leave the body as a string.
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var /** @type {?} */ onError = function (error) {
                var /** @type {?} */ res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var /** @type {?} */ sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var /** @type {?} */ progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var /** @type {?} */ progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HttpXhrBackend.ctorParameters = function () { return [
        { type: XhrFactory, },
    ]; };
    return HttpXhrBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@stable
 * @abstract
 */
var HttpXsrfTokenExtractor = (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    HttpXsrfCookieExtractor.prototype.getToken = /**
     * @return {?}
     */
    function () {
        if (this.platform === 'server') {
            return null;
        }
        var /** @type {?} */ cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(__WEBPACK_IMPORTED_MODULE_6__angular_common__["j" /* ɵparseCookieValue */])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HttpXsrfCookieExtractor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* DOCUMENT */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [XSRF_COOKIE_NAME,] },] },
    ]; };
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    HttpXsrfInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var /** @type {?} */ lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var /** @type {?} */ token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HttpXsrfInterceptor.ctorParameters = function () { return [
        { type: HttpXsrfTokenExtractor, },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [XSRF_HEADER_NAME,] },] },
    ]; };
    return HttpXsrfInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an `HttpHandler` that applies a bunch of `HttpInterceptor`s
 * to a request before passing it to the given `HttpBackend`.
 *
 * Meant to be used as a factory function within `HttpClientModule`.
 *
 * \@stable
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */
function interceptingHandler(backend, interceptors) {
    if (interceptors === void 0) { interceptors = []; }
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 * \@stable
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * `NgModule` which adds XSRF protection support to outgoing requests.
 *
 * Provided the server supports a cookie-based XSRF protection system, this
 * module can be used directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no such names are provided, the default is to use `X-XSRF-TOKEN` for
 * the header name and `XSRF-TOKEN` for the cookie name.
 *
 * \@stable
 */
var HttpClientXsrfModule = (function () {
    function HttpClientXsrfModule() {
    }
    /**
     * Disable the default XSRF protection.
     */
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    HttpClientXsrfModule.disable = /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    function () {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     */
    /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     * @param {?=} options
     * @return {?}
     */
    HttpClientXsrfModule.withOptions = /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    HttpClientXsrfModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        HttpXsrfInterceptor,
                        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                        { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                        { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpClientXsrfModule.ctorParameters = function () { return []; };
    return HttpClientXsrfModule;
}());
/**
 * `NgModule` which provides the `HttpClient` and associated services.
 *
 * Interceptors can be added to the chain behind `HttpClient` by binding them
 * to the multiprovider for `HTTP_INTERCEPTORS`.
 *
 * \@stable
 */
var HttpClientModule = (function () {
    function HttpClientModule() {
    }
    HttpClientModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        HttpClientXsrfModule.withOptions({
                            cookieName: 'XSRF-TOKEN',
                            headerName: 'X-XSRF-TOKEN',
                        }),
                    ],
                    providers: [
                        HttpClient,
                        // HttpHandler is the backend + interceptors and is constructed
                        // using the interceptingHandler factory function.
                        {
                            provide: HttpHandler,
                            useFactory: interceptingHandler,
                            deps: [HttpBackend, [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"](HTTP_INTERCEPTORS)]],
                        },
                        HttpXhrBackend,
                        { provide: HttpBackend, useExisting: HttpXhrBackend },
                        BrowserXhr,
                        { provide: XhrFactory, useExisting: BrowserXhr },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpClientModule.ctorParameters = function () { return []; };
    return HttpClientModule;
}());
/**
 * `NgModule` which enables JSONP support in `HttpClient`.
 *
 * Without this module, Jsonp requests will reach the backend
 * with method JSONP, where they'll be rejected.
 *
 * \@stable
 */
var HttpClientJsonpModule = (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        JsonpClientBackend,
                        { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpClientJsonpModule.ctorParameters = function () { return []; };
    return HttpClientJsonpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var multi_picker_1 = __webpack_require__(314);
__export(__webpack_require__(314));
exports.MULTI_PICKER_DIRECTIVES = [
    multi_picker_1.MultiPicker
];
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(16);
var ionic_angular_1 = __webpack_require__(15);
exports.MULTI_PICKER_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MultiPicker; }),
    multi: true
};
var MultiPicker = (function () {
    function MultiPicker(_form, _item, _pickerCtrl) {
        this._form = _form;
        this._item = _item;
        this._pickerCtrl = _pickerCtrl;
        this._disabled = false;
        this._labelId = '';
        this._text = '';
        this._isOpen = false;
        this._isDependent = false;
        this._sequence = [];
        this._originSelectedIndexes = [];
        this.cancelText = 'Cancel';
        this.doneText = 'Done';
        this.resetText = 'Reset';
        this.multiPickerColumns = [];
        this.separator = ' ';
        this.placeholder = '';
        this.showReset = false;
        this.ionChange = new core_1.EventEmitter();
        this.ionCancel = new core_1.EventEmitter();
        this._form.register(this);
        if (_item) {
            this.id = 'dt-' + _item.registerInput('multi-picker');
            this._labelId = 'lbl-' + _item.id;
            this._item.setElementClass('item-multi-picker', true);
            this._value = this._value || '';
        }
    }
    MultiPicker.prototype._click = function (ev) {
        if (ev.detail === 0) {
            return;
        }
        ev.preventDefault();
        ev.stopPropagation();
        this.open();
    };
    MultiPicker.prototype._keyup = function () {
        if (!this._isOpen) {
            this.open();
        }
    };
    MultiPicker.prototype.open = function () {
        var _this = this;
        if (this._disabled) {
            return;
        }
        var pickerOptions = {};
        var picker = this._pickerCtrl.create(pickerOptions);
        var cancel = { text: this.cancelText, role: 'multi-picker-cancel', handler: function () { _this.ionCancel.emit(null); } };
        var reset = { text: this.resetText, role: 'multi-picker-reset', handler: function (data) { _this.reset(); return false; } };
        var done = { text: this.doneText, handler: function (data) { _this.onChange(data); _this.ionChange.emit(data); } };
        pickerOptions.buttons = this.showReset ? [cancel, reset, done] : [cancel, done];
        this._isDependent = this.multiPickerColumns.some(function (col) { return col.options.some(function (opt) { return opt.parentVal; }); });
        this.generate(picker);
        if (this.multiPickerColumns.length > 1 && this._isDependent) {
            this.generateSequence();
            picker.ionChange.subscribe(function () {
                _this.validate(picker);
            });
        }
        picker.present(pickerOptions).then(function () {
            _this._pickerCmp = picker.instance;
            _this._pickerColumnCmps = _this._pickerCmp._cols.toArray();
            _this._pickerColumnCmps.forEach(function (col) { return col.lastIndex = -1; });
            for (var i = 0; i < picker.getColumns().length; i++) {
                _this.validate(picker);
            }
        });
        this._isOpen = true;
        picker.onDidDismiss(function () {
            _this._isOpen = false;
        });
    };
    MultiPicker.prototype.generateSequence = function () {
        var _this = this;
        var hasParentCol = this.multiPickerColumns.some(function (col) { return col.parentCol !== undefined; });
        if (!this._isDependent || !hasParentCol) {
            this.multiPickerColumns.forEach(function (col, index) { return _this._sequence.push(index); });
        }
        else {
            var name_1 = undefined;
            var alias_1 = undefined;
            for (var i = 0; i < this.multiPickerColumns.length; i++) {
                var index = this.multiPickerColumns.findIndex(function (col) { return col.parentCol === name_1 || (alias_1 && col.parentCol === alias_1); });
                name_1 = this.multiPickerColumns[index].name;
                alias_1 = this.multiPickerColumns[index].alias;
                if (index > -1) {
                    this._sequence.push(index);
                }
            }
        }
    };
    MultiPicker.prototype.generate = function (picker) {
        var _this = this;
        this._originSelectedIndexes = [];
        var values = this._value.toString().split(this.separator);
        this.multiPickerColumns.forEach(function (col, index) {
            var selectedOpt = col.options.find(function (option) { return option.value == values[index]; }) || col.options[0];
            var options = col.options;
            if (_this._isDependent) {
                options = options.filter(function (option) { return option.parentVal === selectedOpt.parentVal; });
            }
            var column = {
                name: col.name || index.toString(),
                options: options.map(function (option) { return { text: option.text, value: option.value, disabled: option.disabled || false }; }),
                columnWidth: col.columnWidth
            };
            var selectedIndex = column.options.findIndex(function (option) { return option.value == values[index]; });
            selectedIndex = selectedIndex === -1 ? 0 : selectedIndex;
            column.selectedIndex = selectedIndex;
            _this._originSelectedIndexes.push(selectedIndex);
            picker.addColumn(column);
        });
        this.divyColumns(picker);
    };
    MultiPicker.prototype.validate = function (picker) {
        var _this = this;
        var columns = picker.getColumns();
        var _loop_1 = function (j) {
            var i = this_1._sequence[j];
            var curCol = columns[i];
            var parentCol = this_1.getParentCol(i, columns);
            if (!parentCol)
                return "continue";
            var curOption = curCol.options[curCol.selectedIndex];
            if (parentCol.selectedIndex >= parentCol.options.length) {
                parentCol.selectedIndex = parentCol.options.length - 1;
            }
            var parentOption = parentCol.options[parentCol.selectedIndex] || {};
            var curParentVal = void 0;
            if (curOption) {
                curParentVal = this_1.getOptionParentValue(i, curOption);
            }
            if (curParentVal != parentOption.value) {
                curCol.options.splice(0, curCol.options.length);
                this_1.multiPickerColumns[i].options.forEach(function (option) {
                    if (option.parentVal == parentOption.value) {
                        curCol.options.push({ text: option.text, value: option.value, disabled: false });
                    }
                });
                var selectedIndex_1 = curCol.selectedIndex >= curCol.options.length ? curCol.options.length - 1 : curCol.selectedIndex;
                setTimeout(function () { return _this._pickerColumnCmps[i].setSelected(selectedIndex_1, 150); }, 0);
            }
        };
        var this_1 = this;
        for (var j = 0; j < this._sequence.length; j++) {
            _loop_1(j);
        }
    };
    MultiPicker.prototype.getOptionParentValue = function (colIndex, option) {
        return this.multiPickerColumns[colIndex].options.find(function (opt) { return opt.value == option.value; }).parentVal;
    };
    MultiPicker.prototype.getParentCol = function (childColIndex, columns) {
        var pos = this._sequence.findIndex(function (idx) { return idx === childColIndex; });
        if (pos > 0) {
            return columns[this._sequence[pos - 1]];
        }
        return null;
    };
    MultiPicker.prototype.divyColumns = function (picker) {
        var pickerColumns = picker.getColumns();
        var columns = [];
        pickerColumns.forEach(function (col, i) {
            columns.push(0);
            col.options.forEach(function (opt) {
                if (opt.text.replace(/[^\x00-\xff]/g, "01").length > columns[i]) {
                    columns[i] = opt.text.replace(/[^\x00-\xff]/g, "01").length;
                }
            });
        });
        if (columns.length === 2) {
            var width = Math.max(columns[0], columns[1]);
            if (!pickerColumns[0].columnWidth) {
                pickerColumns[0].columnWidth = width * 16 + "px";
            }
            if (!pickerColumns[1].columnWidth) {
                pickerColumns[1].columnWidth = width * 16 + "px";
            }
        }
        else if (columns.length === 3) {
            var width = Math.max(columns[0], columns[2]);
            if (!pickerColumns[1].columnWidth) {
                pickerColumns[1].columnWidth = columns[1] * 16 + "px";
            }
            if (!pickerColumns[0].columnWidth) {
                pickerColumns[0].columnWidth = width * 16 + "px";
            }
            if (!pickerColumns[2].columnWidth) {
                pickerColumns[2].columnWidth = width * 16 + "px";
            }
        }
        else if (columns.length > 3) {
            columns.forEach(function (col, i) {
                if (!pickerColumns[i].columnWidth) {
                    pickerColumns[i].columnWidth = col * 12 + "px";
                }
            });
        }
    };
    MultiPicker.prototype.setValue = function (newData) {
        if (newData === null || newData === undefined) {
            this._value = '';
        }
        else {
            this._value = newData;
        }
    };
    MultiPicker.prototype.getValue = function () {
        return this._value;
    };
    MultiPicker.prototype.checkHasValue = function (inputValue) {
        if (this._item) {
            this._item.setElementClass('input-has-value', !!(inputValue && inputValue !== ''));
        }
    };
    MultiPicker.prototype.updateText = function () {
        var _this = this;
        this._text = '';
        var values = this._value.toString().split(this.separator);
        this.multiPickerColumns.forEach(function (col, index) {
            var option = col.options.find(function (option) { return option.value.toString() === values[index]; });
            if (option) {
                _this._text += "" + option.text;
                if (index < _this.multiPickerColumns.length - 1) {
                    _this._text += "" + _this.separator;
                }
            }
        });
        this._text = this._text.trim();
    };
    Object.defineProperty(MultiPicker.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = val;
            this._item && this._item.setElementClass('item-multi-picker-disabled', this._disabled);
        },
        enumerable: true,
        configurable: true
    });
    MultiPicker.prototype.writeValue = function (val) {
        this.setValue(val);
        this.updateText();
        this.checkHasValue(val);
    };
    MultiPicker.prototype.ngAfterContentInit = function () {
        this.updateText();
    };
    MultiPicker.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function (val) {
            _this.setValue(_this.convertObjectToString(val));
            _this.updateText();
            _this.checkHasValue(val);
            fn(_this._value);
            _this.onTouched();
        };
    };
    MultiPicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MultiPicker.prototype.onChange = function (val) {
        this.setValue(this.convertObjectToString(val));
        this.updateText();
        this.onTouched();
    };
    MultiPicker.prototype.onTouched = function () { };
    MultiPicker.prototype.ngOnDestroy = function () {
        this._form.deregister(this);
    };
    MultiPicker.prototype.convertObjectToString = function (newData) {
        var _this = this;
        var value = "";
        this.multiPickerColumns.forEach(function (col, index) {
            value += "" + newData[col.name || index.toString()].value;
            if (index !== _this.multiPickerColumns.length - 1) {
                value += _this.separator;
            }
        });
        return value;
    };
    MultiPicker.prototype.reset = function () {
        var _this = this;
        if (!this._pickerColumnCmps)
            return;
        if (this._isDependent) {
            var index = this._sequence.find(function (index) { return _this._pickerColumnCmps[index].col.selectedIndex !== _this._originSelectedIndexes[index]; });
            if (index === undefined)
                return;
            this._originSelectedIndexes.forEach(function (index, i) { return _this._pickerColumnCmps[i].col.selectedIndex = index; });
            this._pickerColumnCmps[index].setSelected(this._originSelectedIndexes[index], 0);
        }
        else {
            this._originSelectedIndexes.forEach(function (index, i) { return _this._pickerColumnCmps[i].setSelected(index, 0); });
        }
    };
    return MultiPicker;
}());
MultiPicker.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ion-multi-picker',
                template: "<div class=\"multi-picker-placeholder\" *ngIf=\"placeholder && !_text\">{{placeholder}}</div>\n             <div class=\"multi-picker-text\" *ngIf=\"!placeholder || _text\">{{_text}}</div>\n             <button aria-haspopup=\"true\" type=\"button\" [id]=\"id\" ion-button=\"item-cover\" [attr.aria-labelledby]=\"_labelId\" [attr.aria-disabled]=\"_disabled\" class=\"item-cover\"></button>",
                host: {
                    '[class.multi-picke-disabled]': '_disabled'
                },
                providers: [exports.MULTI_PICKER_VALUE_ACCESSOR],
                encapsulation: core_1.ViewEncapsulation.None,
            },] },
];
MultiPicker.ctorParameters = function () { return [
    { type: ionic_angular_1.Form, },
    { type: ionic_angular_1.Item, decorators: [{ type: core_1.Optional },] },
    { type: ionic_angular_1.PickerController, decorators: [{ type: core_1.Optional },] },
]; };
MultiPicker.propDecorators = {
    'cancelText': [{ type: core_1.Input },],
    'doneText': [{ type: core_1.Input },],
    'resetText': [{ type: core_1.Input },],
    'multiPickerColumns': [{ type: core_1.Input },],
    'separator': [{ type: core_1.Input },],
    'placeholder': [{ type: core_1.Input },],
    'showReset': [{ type: core_1.Input },],
    'ionChange': [{ type: core_1.Output },],
    'ionCancel': [{ type: core_1.Output },],
    '_click': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    '_keyup': [{ type: core_1.HostListener, args: ['keyup.space',] },],
    'disabled': [{ type: core_1.Input },],
};
exports.MultiPicker = MultiPicker;
//# sourceMappingURL=multi-picker.js.map

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayObservable_1 = __webpack_require__(201);
exports.of = ArrayObservable_1.ArrayObservable.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var concatMap_1 = __webpack_require__(317);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, in a serialized fashion waiting for each one to complete before
 * merging the next.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link concatAll}.</span>
 *
 * <img src="./img/concatMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each new inner Observable is
 * concatenated with the previous inner Observable.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
 * to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMapTo}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking values from each projected inner
 * Observable sequentially.
 * @method concatMap
 * @owner Observable
 */
function concatMap(project, resultSelector) {
    return concatMap_1.concatMap(project, resultSelector)(this);
}
exports.concatMap = concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeMap_1 = __webpack_require__(202);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, in a serialized fashion waiting for each one to complete before
 * merging the next.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link concatAll}.</span>
 *
 * <img src="./img/concatMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each new inner Observable is
 * concatenated with the previous inner Observable.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
 * to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMapTo}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking values from each projected inner
 * Observable sequentially.
 * @method concatMap
 * @owner Observable
 */
function concatMap(project, resultSelector) {
    return mergeMap_1.mergeMap(project, resultSelector, 1);
}
exports.concatMap = concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(313));
var module_1 = __webpack_require__(319);
exports.MultiPickerModule = module_1.MultiPickerModule;
__export(__webpack_require__(320));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var directives_1 = __webpack_require__(313);
var ionic_angular_1 = __webpack_require__(15);
var MultiPickerModule = (function () {
    function MultiPickerModule() {
    }
    return MultiPickerModule;
}());
MultiPickerModule.decorators = [
    { type: core_1.NgModule, args: [{
                exports: [directives_1.MULTI_PICKER_DIRECTIVES],
                declarations: [directives_1.MULTI_PICKER_DIRECTIVES],
                imports: [
                    ionic_angular_1.IonicModule
                ]
            },] },
];
MultiPickerModule.ctorParameters = function () { return []; };
exports.MultiPickerModule = MultiPickerModule;
//# sourceMappingURL=module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function convertEnumToColumn(enumType) {
    var col = [];
    col[0] = { options: [] };
    var keys = Object.keys(enumType);
    var length = keys.length / 2;
    for (var i = 0; i < length; i++) {
        col[0].options.push({
            text: keys[i + length],
            value: Number.parseInt(keys[i])
        });
    }
    return col;
}
exports.convertEnumToColumn = convertEnumToColumn;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity_info_identity_info_service__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WorkInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkInfoPage = (function () {
    function WorkInfoPage(navCtrl, alertCtrl, identityInfoProvider, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.identityInfoProvider = identityInfoProvider;
        this.navParams = navParams;
        /*单位信息开始*/
        this.itemsFirst = [
            { title: '单位性质', key: 'company-type', value: '' },
            { title: '所属行业', key: 'industry', value: '' }
        ];
        this.companyTypeList = [
            { type: 'radio', label: '政府机构', value: 'zf', checked: false },
            { type: 'radio', label: '民营', value: 'my', checked: false },
            { type: 'radio', label: '私营', value: 'sy', checked: false },
            { type: 'radio', label: '三资企业', value: 'szqy', checked: false },
            { type: 'radio', label: '国有企业', value: 'gyqy', checked: false },
            { type: 'radio', label: '个体', value: 'gt', checked: false },
            { type: 'radio', label: '其它', value: 'qt', checked: false }
        ];
        this.industryList = [
            { type: 'radio', label: '农、林、牧、渔业', value: '1', checked: false },
            { type: 'radio', label: '采掘业', value: '12', checked: false },
            { type: 'radio', label: '制造业', value: '13', checked: false },
            { type: 'radio', label: '电力、燃气及水的生产和供应业', value: '14', checked: false },
            { type: 'radio', label: '建筑业', value: '15', checked: false },
            { type: 'radio', label: '交通运输、仓储和邮政业', value: '16', checked: false },
            { type: 'radio', label: '信息传输、计算机服务和软件业', value: '17', checked: false },
            { type: 'radio', label: '批发和零售业', value: '18', checked: false },
            { type: 'radio', label: '住宿和餐饮业', value: '19', checked: false },
            { type: 'radio', label: '金融业', value: '100', checked: false },
            { type: 'radio', label: '房地产业', value: '122', checked: false },
            { type: 'radio', label: '租赁和商务服务业', value: '133', checked: false },
            { type: 'radio', label: '科学研究、技术服务业和地质勘察业', value: '144', checked: false },
            { type: 'radio', label: '水利、环境和公共设施管理业', value: '155', checked: false },
            { type: 'radio', label: '居民服务和其他服务业', value: '166', checked: false },
            { type: 'radio', label: '教育', value: '144', checked: false },
            { type: 'radio', label: '卫生、社会保障和社会福利业', value: '1553', checked: false },
            { type: 'radio', label: '文化、体育和娱乐业', value: '441', checked: false },
            { type: 'radio', label: '公共管理和社会组织', value: '4331', checked: false }
        ];
        // 单位地区
        this.city = '请选择';
        this.AddressColumns = [];
        // 详细地址
        this.addressDetail = '';
        // 单位名称
        this.companyName = '';
        // 单位电话
        this.companyTel = '';
        this.itemsSecond = [
            { title: '月收入方式', key: 'money-method', value: '' },
            { title: '月收入金额', key: 'money-howmuch', value: '' },
            { title: '是否有社保', key: 'security', value: '' },
            { title: '缴纳公司为本公司', key: 'company-security', value: '' }
        ];
        // 累计工作时间
        this.workLengthDate = '请选择';
        this.residenceColumns = [
            {
                options: [
                    { text: '0年', value: '0' },
                    { text: '1年', value: '1' },
                    { text: '2年', value: '2' },
                    { text: '3年', value: '3' },
                    { text: '4年', value: '4' },
                    { text: '5年', value: '5' },
                    { text: '6年', value: '6' },
                    { text: '7年', value: '7' },
                    { text: '8年', value: '8' },
                    { text: '9年', value: '9' },
                    { text: '10年', value: '10' },
                    { text: '10年以上', value: '11' },
                ]
            },
            {
                options: [
                    { text: '0月', value: '0' },
                    { text: '1月', value: '1' },
                    { text: '2月', value: '2' },
                    { text: '3月', value: '3' },
                    { text: '4月', value: '4' },
                    { text: '5月', value: '5' },
                    { text: '6月', value: '6' },
                    { text: '7月', value: '7' },
                    { text: '8月', value: '8' },
                    { text: '9月', value: '9' },
                    { text: '10月', value: '10' },
                    { text: '11月', value: '11' },
                    { text: '12月', value: '12' }
                ]
            },
        ];
        this.moneyMethodList = [
            { type: 'radio', label: '代发', value: 'df', checked: false },
            { type: 'radio', label: '部分代发', value: 'bfdf', checked: false },
            { type: 'radio', label: '现金', value: 'xj', checked: false },
        ];
        this.moneyHowmuchList = [
            { type: 'radio', label: '15000元以上', value: '15000', checked: false },
            { type: 'radio', label: '10001-15000元', value: '10001', checked: false },
            { type: 'radio', label: '8001-10000元', value: '8001', checked: false },
            { type: 'radio', label: '5001-8000元', value: '5001', checked: false },
            { type: 'radio', label: '3501-5000元', value: '3501', checked: false },
            { type: 'radio', label: '1-3500元', value: '1', checked: false },
            { type: 'radio', label: '0元', value: '0', checked: false },
        ];
        this.securityList = [
            { type: 'radio', label: '是', value: 'yes', checked: false },
            { type: 'radio', label: '否', value: 'no', checked: false },
        ];
        this.companySecurityList = [
            { type: 'radio', label: '是', value: 'yes', checked: false },
            { type: 'radio', label: '否', value: 'no', checked: false },
        ];
        /*个人信息结束*/
        /*自雇经营信息开始*/
        this.itemsThird = [
            { title: '经营场所', key: 'manage-location', value: '' },
        ];
        this.manageLocationList = [
            { type: 'radio', label: '自有', value: 'ziyou', checked: false },
            { type: 'radio', label: '租用', value: 'zhuyong', checked: false },
            { type: 'radio', label: '按揭', value: 'anjie', checked: false },
        ];
        // 是否显示保存按钮
        this.showSaveBtn = false;
        this.identityInfoProvider.getCitys().subscribe(function (res) {
            console.log('res', res);
            _this.AddressColumns = res;
        });
    }
    WorkInfoPage.prototype.ionViewDidLoad = function () {
        var that = this;
        console.log('ionViewDidLoad WorkInfoPage');
        this.mySwiper = new Swiper('.swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 15,
            slidesOffsetBefore: 15,
            slidesOffsetAfter: 15,
            autoHeight: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            on: {
                transitionEnd: function (swiper) {
                    var dist = document.querySelector('.swiper-wrapper')['style'].transform.split('(')[1].split(',')[0].replace('px', '');
                    // console.log(dist);
                    // console.log(this.width);
                    that.showSaveBtn = (dist * -1) > this.width ? true : false;
                },
            },
        });
    };
    WorkInfoPage.prototype.choice = function (key) {
        console.log('key', key);
        switch (key) {
            // case 'education':this.choiceEducation();break;
            case 'company-type':
                this.renderRadio('单位性质', this.companyTypeList, 'company-type');
                break;
            case 'industry':
                this.renderRadio('所属行业', this.industryList, 'industry');
                break;
            case 'money-method':
                this.renderRadio('月收入方式', this.moneyMethodList, 'money-method');
                break;
            case 'money-howmuch':
                this.renderRadio('月收入方式', this.moneyHowmuchList, 'money-howmuch');
                break;
            case 'security':
                this.renderRadio('是否有社保', this.securityList, 'security');
                break;
            case 'company-security':
                this.renderRadio('缴纳公司为本公司', this.companySecurityList, 'company-security');
                break;
            case 'manage-location':
                this.renderRadio('经营场所', this.manageLocationList, 'manage-location');
                break;
        }
    };
    WorkInfoPage.prototype.renderRadio = function (title, list, key) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(title);
        list.forEach(function (val) {
            alert.addInput(val);
        });
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.checkedData(list, data, key);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    WorkInfoPage.prototype.checkedData = function (list, value, key) {
        var _this = this;
        list.forEach(function (val) {
            val.checked = false;
            if (val.value === value) {
                val.checked = true;
                console.log(val);
                _this.renderListValue(_this.itemsFirst, key, val.label);
                _this.renderListValue(_this.itemsSecond, key, val.label);
                _this.renderListValue(_this.itemsThird, key, val.label);
            }
        });
    };
    WorkInfoPage.prototype.renderListValue = function (list, key, value) {
        list.forEach(function (val) {
            if (val.key === key) {
                val.value = value;
            }
        });
    };
    WorkInfoPage.prototype.save = function () {
    };
    WorkInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-work-info',template:/*ion-inline-start:"E:\salesman\src\pages\application-record\work-info\work-info.html"*/'<!--\n  Generated template for the WorkInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>工作信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0 bgf5">\n  <div class="swiper-container">\n    <div class="swiper-wrapper">\n      <!--单位信息-->\n      <div class="swiper-slide">\n\n        <div class="workInfoheader">\n          <span>单位基本信息</span>\n          <span>保存</span>\n        </div>\n        <ion-list>\n          <ion-item>\n            <ion-label color="#666666">单位名称</ion-label>\n            <ion-input type="text" placeholder="" [(ngModel)]="companyName"></ion-input>\n          </ion-item>\n          <button ion-item *ngFor="let item of itemsFirst">\n            {{item.title}}\n            <ion-note item-end style="font-size: 14px;margin-right: 1px;" (click)="choice(item.key)">\n              {{item.value.length === 0?\'请选择\':item.value}}\n            </ion-note>\n          </button>\n\n\n          <button ion-item>\n            <ion-label color="#666666">单位地区</ion-label>\n            <ion-note  *ngIf="city===\'请选择\'" item-end style="font-size: 14px;margin-right: 1px;">\n              {{city}}\n            </ion-note>\n            <ion-multi-picker  item-content  [(ngModel)]="city" separator="-" [multiPickerColumns]="AddressColumns"  cancelText="取消" doneText="确定"></ion-multi-picker>\n          </button>\n\n          <ion-item>\n            <ion-input type="text" id="addressDetail" placeholder="详细地址" [(ngModel)]="addressDetail"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">单位电话</ion-label>\n            <ion-input type="text" placeholder="格式：区号-座机号码-分机" [(ngModel)]="companyTel"></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </div>\n\n      <!--个人信息-->\n\n      <div class="swiper-slide">\n\n        <div class="workInfoheader">\n          <span>个人基本信息</span>\n          <span>保存</span>\n        </div>\n        <ion-list>\n          <ion-item>\n            <ion-label color="#666666">部门</ion-label>\n            <ion-input type="text" placeholder="请输入部门" [(ngModel)]="department"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">职位/职务</ion-label>\n            <ion-input type="text" placeholder="请输入职位/职务" [(ngModel)]="position"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">入职时间</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="enterytime"></ion-datetime>\n          </ion-item>\n\n          <button ion-item>\n            <ion-label color="#666666">累计工作时间</ion-label>\n            <ion-note  *ngIf="workLengthDate===\'请选择\'" item-end style="font-size: 14px;margin-right: 1px;">\n              {{workLengthDate}}\n            </ion-note>\n            <ion-multi-picker item-content [(ngModel)]="workLengthDate" separator="-" [multiPickerColumns]="residenceColumns" cancelText="取消" doneText="确定"></ion-multi-picker>\n          </button>\n          <button ion-item *ngFor="let item of itemsSecond">\n            {{item.title}}\n            <ion-note item-end style="font-size: 14px;margin-right: 1px;" (click)="choice(item.key)">\n              {{item.value.length === 0?\'请选择\':item.value}}\n            </ion-note>\n          </button>\n\n        </ion-list>\n\n      </div>\n\n      <!--自雇经营信息-->\n      <div class="swiper-slide" style="height: 560px;">\n        <div class="workInfoheader">\n          <span>自雇经营信息</span>\n          <span>保存</span>\n        </div>\n        <ion-list>\n          <button ion-item *ngFor="let item of itemsThird">\n            {{item.title}}\n            <ion-note item-end style="font-size: 14px;margin-right: 1px;" (click)="choice(item.key)">\n              {{item.value.length === 0?\'请选择\':item.value}}\n            </ion-note>\n          </button>\n          <ion-item>\n            <ion-label color="#666666">成立时间</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="starttime"></ion-datetime>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label color="#666666">月供/月租金(元)</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="monthMoney"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">雇员人数</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="peopleCount"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">月均营业额(元)</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="turnover"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">成本支出(元)</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="cost"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">月盈利(元)</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="profit"></ion-input>\n          </ion-item>\n        </ion-list>\n\n\n      </div>\n\n    </div>\n    <!-- 如果需要分页器 -->\n    <div class="swiper-pagination"></div>\n  </div>\n\n  <div class="saveBtnContainer" *ngIf="showSaveBtn">\n    <button (click)=\'save()\'  class="anbutton saveBtn" ion-button >提交</button>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\application-record\work-info\work-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__identity_info_identity_info_service__["a" /* IdentityInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], WorkInfoPage);
    return WorkInfoPage;
}());

//# sourceMappingURL=work-info.js.map

/***/ })

});
//# sourceMappingURL=6.js.map