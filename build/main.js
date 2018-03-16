webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_user_store__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, store) {
        this.http = http;
        this.store = store;
    }
    /**
     *用户登陆
     *@param  useraccount	是	string	用户账号
      @param  password	是	string	用户密码
  
     id	string	用户ID
     loginAcct	string	用户名
     phoneNum	string	手机号
     accountStatus	int	帐号状态。 1为正常，其他不正常。 2为锁定。
     salesmanToken	string	登陆token. 后面所有的请求都必须在头中带上该参数
     *
     * */
    UserService.prototype.login = function (_a) {
        var _this = this;
        var useraccount = _a.useraccount, password = _a.password;
        var seq = this.http.post('/users/login', {
            useraccount: useraccount,
            password: password
        }).share();
        seq.subscribe(function (user) {
            _this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__stores_user_store__["b" /* userLoggedInSuccess */])(user));
        }, function () {
        });
        return seq;
    };
    UserService.prototype.logout = function (useraccount) {
        var _this = this;
        var seq = this.http.post('/users/logout', { useraccount: useraccount }).share();
        seq.subscribe(function (user) {
            _this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__stores_user_store__["c" /* userLoggedOutSuccess */])());
        }, function () {
        });
        return seq;
    };
    /** 检查帐号是否存在
     * 重设密码步骤中检查帐号是否存在
     * @param userAccount	是	string	用户名
     * @return isExist	int	0 不存在， 1 存在
     * */
    UserService.prototype.inspectUserAccount = function (userAccount) {
        return this.http.get("/users/exists/" + userAccount);
    };
    /** 给用户手机号码发送验证码
     *  找回密码中，获取验证码
     * @param phoneNum	是	string	手机号
     * @param userAccount	是	string	用户名
      @param opType	是	string	操作类型。 这里为 RESET_PSD
     * @return isExist	int	0 不存在， 1 存在
     * */
    UserService.prototype.sendAuthMessage = function (_a) {
        var userAccount = _a.userAccount, phoneNum = _a.phoneNum, _b = _a.opType, opType = _b === void 0 ? 'RESET_PSD' : _b;
        return this.http.get("/users/" + userAccount + "/phone/verifyCode", { phoneNum: phoneNum, opType: opType });
    };
    /**校验短信验证码（重设密码）
     *验证短信验证码(找回密码中):
     * @param userAccount	是	string	用户名
     @param phoneNum	是	string	手机号
     @param code	是	string	验证码
     @param opType	是	string	固定为RESET_PSD
  
     @return session	string	本次得到得session。 在下一步操作（重设密码，重设手机号）时需要使用， 有效期同验证码获取得间隔时间。
     * */
    UserService.prototype.verifyCode = function (_a) {
        var userAccount = _a.userAccount, phoneNum = _a.phoneNum, code = _a.code, _b = _a.opType, opType = _b === void 0 ? 'RESET_PSD' : _b;
        return this.http.post("/users/" + userAccount + "/phone/verifyCode", { phoneNum: phoneNum, code: code, opType: opType });
    };
    /** 重设密码
     * 重新设置用户密码：
     * @param userAccount	是	string	用户名
     @param  phoneNum	是	string	用户手机号
     @param  password	是	string	密码
     @param  session	是	string	会话ID
  
     @return groupid	int	用户组id，1：超级管理员；2：普通用户
     * */
    UserService.prototype.resetPwd = function (_a) {
        var userAccount = _a.userAccount, phoneNum = _a.phoneNum, password = _a.password, session = _a.session;
        return this.http.post("/users/" + userAccount, { phoneNum: phoneNum, password: password, session: session });
    };
    /** 用户更改手机号时获取新手机号的验证码
     * 用户更改手机号时获取新手机号的验证码
     * @param  userAccount	是	string	用户名
     @param  phoneNum	是	string	手机号
     @param  code	是	string	旧的验证码
     @param  session	是	string	旧的验证码得到得session
     @param  newPhoneNum	是	string	新手机号
  
     * */
    UserService.prototype.getNewAuthMessage = function (_a) {
        var userAccount = _a.userAccount, phoneNum = _a.phoneNum, code = _a.code, session = _a.session, newPhoneNum = _a.newPhoneNum;
        return this.http.get("/users/" + userAccount + "/phone/new/verifyCode", { phoneNum: phoneNum, code: code, session: session, newPhoneNum: newPhoneNum });
    };
    /** 用户更改手机号时新手机号验证码验证
     * 用户重设手机号， 在过了验证手机验证码阶段后， 验证新手机的验证码
     *  @param  userAccount	是	string	用户帐号
     @param  phoneNum	是	string	原来的手机号
     @param  newPhoneNum	是	string	新的手机号
     @param  newVerifyCode	是	string	新的手机号的验证码
     return session, 和重设密码一样，表示当前重设手机号的前期校验通过， 该验证码的生存时间同获取手机号码的间隔时间一样
     * */
    UserService.prototype.verifyNewAuthMessage = function (_a) {
        var userAccount = _a.userAccount, phoneNum = _a.phoneNum, newVerifyCode = _a.newVerifyCode, newPhoneNum = _a.newPhoneNum;
        return this.http.get("/users/" + userAccount + "/phone/new/verifyCode", { phoneNum: phoneNum, newVerifyCode: newVerifyCode, newPhoneNum: newPhoneNum });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _b || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application_record_application_record__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__associations_customers_associations_customers__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_my__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// @IonicPage(
//   {
//     name:'tabs',
//     segment:'tabs',
//     priority: 'high'
//   }
// )
var TabsPage = (function () {
    // tab2Root = AssociationsCustomersPage;
    // tab3Root = MyPage;
    // Associations customers
    function TabsPage(events, nav) {
        this.events = events;
        this.nav = nav;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__application_record_application_record__["a" /* ApplicationRecordPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__associations_customers_associations_customers__["a" /* AssociationsCustomersPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__my_my__["a" /* MyPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        this.listenEvents();
        // console.log('界面创建');
    };
    TabsPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe('toLogin');
        // console.log('界面销毁');
    };
    TabsPage.prototype.listenEvents = function () {
        var _this = this;
        this.events.subscribe('toLogin', function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"E:\salesman\src\pages\tabs\tabs.html"*/'<ion-tabs id="anTabs">\n  <ion-tab [root]="tab1Root" tabTitle="申请记录" tabIcon="icon-ic_sqjl"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="关联客户" tabIcon="icon-ic_glkh"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="我的" tabIcon="icon-ic_me"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"E:\salesman\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_application_record_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listview_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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
 * Generated class for the ApplicationRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage(
//   {
//     name:'application-record',
//     segment:'applicationRecord',
//   }
//   )
var ApplicationRecordPage = (function () {
    function ApplicationRecordPage(navCtrl, aRecordService, toastCtrl, listviewService, navParams) {
        this.navCtrl = navCtrl;
        this.aRecordService = aRecordService;
        this.toastCtrl = toastCtrl;
        this.listviewService = listviewService;
        this.navParams = navParams;
        this.pagesCtrl = {
            isLastPage: false,
            pageNo: 0,
            pageSize: 20,
        };
        this.recordList = [];
        for (var i = 0; i < 30; i++) {
            this.recordList.push({
                status: '预审批中' + i,
                applyStatus: 0,
                applyTime: '2017/09/09 15:30',
                customerName: '薛琰',
                customerId: '1',
                money: '5,000.00',
                tel: '13733338242',
                repaymentTimes: '6个月' + i,
                btn: Math.random() > 0.5 ? {
                    text: '补充资料',
                    key: 'zhiliao',
                } : {
                    text: '确认预约',
                    key: 'appointment',
                },
            });
        }
    }
    ApplicationRecordPage.prototype.ionViewDidLoad = function () {
        this.renderLoansList();
    };
    ApplicationRecordPage.prototype.doRefresh = function (refresher) {
        this.pagesCtrl = this.listviewService.resetPagesCtrl();
        this.renderLoansList(refresher, true);
    };
    ApplicationRecordPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        this.renderLoansList(infiniteScroll);
    };
    ApplicationRecordPage.prototype.renderLoansList = function (fn, emptyList) {
        var _this = this;
        if (emptyList === void 0) { emptyList = false; }
        this.aRecordService.fetchLoansList({ pageNo: 0, pageSize: 20 }).subscribe(function (res) {
            if (res.code === 0 && res.success) {
                if (res.data && Array.isArray(res.data.list)) {
                    // 搜索的情况下或者下拉刷新的情况下，情况列表
                    if (emptyList) {
                        _this.recordList = [];
                    }
                    _this.recordList = _this.recordList.concat(res.data.list);
                }
                _this.pagesCtrl.isLastPage = !res.data.isLastPage;
                // 如果不是最后一页的话，页数加一
                if (res.data.isLastPage) {
                    _this.pagesCtrl.pageNo++;
                }
                if (fn && __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.isFunction(fn['complete'])) {
                    fn.complete();
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: res.meesage,
                    duration: 1000
                });
                toast.present();
            }
        }, function () {
        });
    };
    // 操作用户进入补充资料页面还是进入确认预约页面
    ApplicationRecordPage.prototype.operate = function (type) {
        if (type === 'zhiliao') {
            console.log('补充资料');
            // 完善信息页面进入
            this.navCtrl.push('informationIndex');
        }
        else if (type === 'appointment') {
            console.log('确认预约');
            this.navCtrl.push('appointment');
        }
    };
    // 搜索操作
    ApplicationRecordPage.prototype.handleInput = function (val) {
        console.log('val', val);
        this.pagesCtrl = this.listviewService.resetPagesCtrl();
        this.renderLoansList({}, true);
    };
    ApplicationRecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-application-record',template:/*ion-inline-start:"E:\salesman\src\pages\application-record\application-record.html"*/'<!--\n  Generated template for the ApplicationRecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>申请记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0 bgf5">\n  <search (handleInput)="handleInput($event)"></search>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ul class="recordList">\n    <li *ngFor="let item of recordList">\n      <div class="status">\n        <ng-container [ngSwitch]="item.applyStatus">\n          <span *ngSwitchCase="0">申请中</span>\n          <span *ngSwitchCase="1">预审批中</span>\n          <span *ngSwitchCase="2">待确认签约</span>\n          <span *ngSwitchDefault>待确认签约</span>\n        </ng-container>\n        <span>{{item.applyTime}}</span>\n      </div>\n      <div class="detail">\n        <div>\n          <span class="name">{{item.customerName}}</span>\n          <span class="money">{{item.money}}</span>\n        </div>\n        <div>\n          <span class="tel">{{item.tel|tel}}</span>\n          <span class="longDate">{{item.repaymentTimes}}</span>\n        </div>\n      </div>\n      <div class="operate">\n        <button (click)=\'operate(item.btn.key)\' class="anbutton operateBtn btn14" ion-button>{{item.btn.text}}</button>\n      </div>\n    </li>\n  </ul>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="pagesCtrl.isLastPage">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\application-record\application-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_application_record_service__["a" /* ApplicationRecordService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_listview_service__["a" /* ListviewService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ApplicationRecordPage);
    return ApplicationRecordPage;
}());

//# sourceMappingURL=application-record.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociationsCustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the AssociationsCustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({name:'associations-customers'})
var AssociationsCustomersPage = (function () {
    function AssociationsCustomersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AssociationsCustomersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssociationsCustomersPage');
    };
    AssociationsCustomersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-associations-customers',template:/*ion-inline-start:"E:\salesman\src\pages\associations-customers\associations-customers.html"*/'<!--\n  Generated template for the AssociationsCustomersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>安信业务员平台</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\associations-customers\associations-customers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AssociationsCustomersPage);
    return AssociationsCustomersPage;
}());

//# sourceMappingURL=associations-customers.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({name:'my'})
var MyPage = (function () {
    function MyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.info = {
            name: '万峰岭',
            tel: '15533337384',
            profileURL: 'assets/imgs/application-record/profile.png'
        };
        this.items = [];
        this.items = [
            {
                'title': '客户贷款记录查询',
                'icon': 'icon-ic_dkjlcx',
                'key': 'loan-record',
            },
            {
                'title': '我的客户',
                'icon': 'icon-ic_customer',
                'key': 'my-customer',
            },
            {
                'title': '我的消息',
                'icon': 'icon-ic_message',
                'key': 'my-message',
            },
            {
                'title': '客户预约',
                'icon': 'icon-ic_order',
                'key': 'appointment-customer',
            },
        ];
    }
    MyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyPage');
    };
    MyPage.prototype.openNavDetailsPage = function (item) {
        switch (item) {
            case 'loan-record':
                this.navCtrl.push('loan-record');
                break;
            case 'my-customer':
                this.navCtrl.push('my-customer');
                break;
            case 'my-message':
                this.navCtrl.push('my-message');
                break;
            case 'appointment-customer':
                this.navCtrl.push('appointment-customer');
                break;
            case 'my-detail':
                this.navCtrl.push('my-detail');
                break;
            default: console.log('-');
        }
    };
    MyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my',template:/*ion-inline-start:"E:\salesman\src\pages\my\my.html"*/'<!--\n  Generated template for the MyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0 bgf5">\n  <div class="myHeader" (click)="openNavDetailsPage(\'my-detail\')">\n    <img [src]="info.profileURL" alt="" class="profileImage">\n    <div class="infoDesc">\n      <p style="font-size: 18px;">{{info.name}}</p>\n      <p style="font-size: 14px;">{{info.tel|tel}}</p>\n    </div>\n  </div>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item.key)" icon-start>\n      <i [class]="\'iconfont \'+ item.icon" [ngStyle]="{\'color\': \'#ffd14d\'}" item-start></i>\n      {{ item.title }}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\my.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyPage);
    return MyPage;
}());

//# sourceMappingURL=my.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginAuth_loginAuth__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgetPwd_forgetPwd__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_user_store__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// @IonicPage(
//   {
//     name:'login',
//     segment:'login',
//   }
// )
var LoginPage = (function () {
    function LoginPage(navCtrl, store, userService) {
        //this.data$  = this.store.pipe(select('userData'))
        this.navCtrl = navCtrl;
        this.store = store;
        this.userService = userService;
        this.pwdURL = 'assets/imgs/login/eyes.png';
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_store__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_6__stores_user_store__["a" /* selectToken */])).subscribe(function (token) {
            //this.token=token;
            //console.log('token',this.token);
        });
        //console.log('token',this.token);
    }
    // 切换显式展示密码
    LoginPage.prototype.switchPwd = function () {
        // console.log('pwdURL', this.pwdURL);
        this.pwdURL = this.pwdURL === 'assets/imgs/login/eyes.png' ? 'assets/imgs/login/eyesopen.png' : 'assets/imgs/login/eyes.png';
    };
    LoginPage.prototype.login = function () {
        console.log('navCtrl', this.navCtrl);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__loginAuth_loginAuth__["a" /* LoginAuthPage */]);
        this.userService.login({ useraccount: 'ddd', password: 'ddddd' }).subscribe(function (res) {
            console.log('res', res);
        });
    };
    LoginPage.prototype.forgetPwd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgetPwd_forgetPwd__["a" /* ForgetPwdPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\salesman\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="pd30">\n  <div class="header">\n    <div class="headerBg">\n      <img src="assets/imgs/login/pro.png" alt="">\n    </div>\n  </div>\n  <div class="loginContainer">\n    <div class="inputContainer borderBottom">\n      <!--<span>账号</span>-->\n      <input type="text" placeholder="账号">\n    </div>\n\n    <div class="inputContainer borderBottom">\n      <!--<span>密码</span>-->\n      <input [type]="pwdURL===\'assets/imgs/login/eyes.png\'?\'password\':\'type\'"  placeholder="密码">\n      <img (click)=\'switchPwd()\'  [src]="pwdURL" alt="">\n    </div>\n    <span class="forgetPwd" (click)=\'forgetPwd()\'>忘记密码</span>\n    <div style="text-align:center;margin-top:28px;">\n      <button (click)=\'login()\'  class="anbutton loginBtn btn16" ion-button >登录</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]) === "function" && _c || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messageAuth_messageAuth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginAuthPage = (function () {
    function LoginAuthPage(navCtrl, user) {
        // console.log(this.user)
        this.navCtrl = navCtrl;
        this.user = user;
    }
    // 短信认证
    LoginAuthPage.prototype.messageAuth = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__messageAuth_messageAuth__["a" /* MessageAuthPage */], { from: 'login' });
        // this.user.login({userName:'123456',password:'testtest'}).subscribe(()=>{
        //   this.navCtrl.push(MessageAuthPage,{from:'login'});
        // },()=>{
        //   console.log('~~~~~~~~~~~~~~~~~~');
        // })
    };
    // 人脸识别认证
    LoginAuthPage.prototype.faceAuth = function () {
    };
    LoginAuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loginAuth',template:/*ion-inline-start:"E:\salesman\src\pages\login\loginAuth\loginAuth.html"*/'<ion-header>\n  <ion-navbar hideBackButton=\'true\'>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="welcomeContainer">\n    <p>欢迎使用</p>\n    <p>安信小贷业务服务平台</p>\n  </div>\n  <p style="font-size:16px;\n  margin: 32px auto 40px auto;\n  color:#666666;text-align:center;">请选择您的认证方式</p>\n  <button (click)=\'messageAuth()\' class="authBtn btn16" ion-button outline>短信验证</button>\n  <button (click)=\'faceAuth()\'  class="authBtn btn16" ion-button outline>人脸识别</button>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\login\loginAuth\loginAuth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]])
    ], LoginAuthPage);
    return LoginAuthPage;
}());

//# sourceMappingURL=loginAuth.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPwdPage = (function () {
    function ResetPwdPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.password = '';
    }
    ResetPwdPage.prototype.next = function () {
        if (this.password.trim().length > 0) {
            this.navCtrl.goToRoot({});
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: '请输入密码',
                buttons: ['确定']
            });
            alert_1.present();
        }
    };
    ResetPwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resetPwd',template:/*ion-inline-start:"E:\salesman\src\pages\login\resetPwd\resetPwd.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="pd30">\n  <p class="sendTel">请设置您的新密码</p>\n  <div class="authCodeContainer borderBottom">\n    <input type="text" placeholder="输入新密码" [(ngModel)]="password">\n  </div>\n  <p class="reminderPwd">密码长度至少6位，支持数字、字母、符号</p>\n  <div style="text-align:center;margin-top:60px;">\n    <button (click)=\'next()\'  class="anbutton loginBtn" ion-button >保存</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\login\resetPwd\resetPwd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ResetPwdPage);
    return ResetPwdPage;
}());

//# sourceMappingURL=resetPwd.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messageAuth_messageAuth__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetPwdPage = (function () {
    function ForgetPwdPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.account = '';
    }
    ForgetPwdPage.prototype.next = function () {
        if (this.account.trim().length > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__messageAuth_messageAuth__["a" /* MessageAuthPage */], { from: 'forgetPwd' });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: '请输入账号',
                buttons: ['确定']
            });
            alert_1.present();
        }
    };
    ForgetPwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgetPwd',template:/*ion-inline-start:"E:\salesman\src\pages\login\forgetPwd\forgetPwd.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="pd30">\n  <p class="sendTel">请输入您的账号</p>\n  <div class="authCodeContainer borderBottom">\n    <input type="text" placeholder="请输入" [(ngModel)]="account">\n  </div>\n  <div style="text-align:center;margin-top:60px;">\n    <button (click)=\'next()\'  class="anbutton loginBtn" ion-button >下一步</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\login\forgetPwd\forgetPwd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ForgetPwdPage);
    return ForgetPwdPage;
}());

//# sourceMappingURL=forgetPwd.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(47);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], IdentityInfoProvider);
    return IdentityInfoProvider;
}());

//# sourceMappingURL=identity-info.service.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER; });
var SERVER;
var loadConfig = function () {
    var xhr = new XMLHttpRequest();
    //同步获取
    xhr.open("GET", "assets/config.json", false);
    xhr.send();
    var conf = JSON.parse(xhr.responseText);
    SERVER = conf.SERVER;
};
loadConfig();

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPage = (function () {
    function ErrorPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.error = this.params.get('error');
    }
    ErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-error',template:/*ion-inline-start:"E:\salesman\src\pages\error\error.html"*/'\n\n  \n\n<ion-content>\n\n\n\n    <div>错误页面</div>\n\n    <div>{{error.msg}}</div>\n\n</ion-content>'/*ion-inline-end:"E:\salesman\src\pages\error\error.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ErrorPage);
    return ErrorPage;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationRecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationRecordService = (function () {
    function ApplicationRecordService(http) {
        this.http = http;
    }
    /**
     *
     * loans
     * loanId  String  贷款记录ID
     applyTime  String  申请时间
     applyStatus  int  申请状态。 见首页贷款申请状态
     customerName  String  客户名称
     customerId  String  客户ID
     repaymentTimes  int  还款期数
     *
     * */
    ApplicationRecordService.prototype.fetchLoansList = function (_a) {
        var _b = _a === void 0 ? { pageNo: 0, pageSize: 0 } : _a, pageNo = _b.pageNo, pageSize = _b.pageSize;
        return this.http.get('/loans', { pageNo: pageNo, pageSize: pageSize }).share();
    };
    ApplicationRecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* HttpService */]])
    ], ApplicationRecordService);
    return ApplicationRecordService;
}());

//# sourceMappingURL=application-record.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListviewService = (function () {
    function ListviewService() {
    }
    ListviewService.prototype.resetPagesCtrl = function () {
        return {
            isLastPage: false,
            pageNo: 0,
            pageSize: 20,
        };
    };
    ListviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ListviewService);
    return ListviewService;
}());

//# sourceMappingURL=listview.service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name:'appointment'
// })
var AppointmentPage = (function () {
    function AppointmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = [
            { title: '预约日期', detail: '2018-09-09' },
            { title: '预约时间', detail: '9:00 - 10:00' },
            { title: '预约地点', detail: '广州海珠221号3-1 020-55333355' },
        ];
    }
    AppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentPage');
    };
    AppointmentPage.prototype.saveAppoinment = function () {
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment',template:/*ion-inline-start:"E:\salesman\src\pages\application-record\appointment\appointment.html"*/'<!--\n  Generated template for the AppointmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>查看预约</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0">\n  <customer-profile customerId="d-fff-fdd-fff" [inputStyle]="false"></customer-profile>\n\n  <div class="appointmentContent">\n    <ul>\n      <li *ngFor="let item of list">\n        <span>{{item.title}}:</span>\n        <span>{{item.detail}}</span>\n      </li>\n    </ul>\n    <div class="appointmentFooter">\n    </div>\n  </div>\n\n  <div class="saveBtnContainer">\n    <button (click)=\'saveAppoinment()\'  style=" " class="anbutton saveBtn" ion-button >确认预约</button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\application-record\appointment\appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name:'informationIndex',
//   segment:'informationIndex',
//
// })
var InformationPage = (function () {
    function InformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.items = [
            {
                'title': '身份信息',
                'icon': 'icon-ic_sfxx',
                'color': '#ffd14d',
                'completed': '已完成',
                'key': 'identityInfo'
            },
            {
                'title': '工作信息',
                'icon': 'icon-ic_gzxx',
                'color': '#ffd14d',
                'completed': '已完成',
                'key': 'workInfo'
            },
            {
                'title': '资料上传',
                'icon': 'icon-ic_zlsc',
                'color': '#ffd14d',
                'completed': '未完成',
                'key': 'upload'
            },
        ];
    }
    InformationPage.prototype.openNavDetailsPage = function (item) {
        switch (item) {
            case 'identityInfo':
                this.navCtrl.push('identity-info');
                break;
            case 'workInfo':
                this.navCtrl.push('work-info');
                break;
            case 'upload':
                this.navCtrl.push('upload-info-index');
                break;
            default: console.log('-');
        }
    };
    InformationPage.prototype.tel = function () {
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-information',template:/*ion-inline-start:"E:\salesman\src\pages\application-record\information\information.html"*/'<!--\n  Generated template for the InformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>完善信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgf5 pd0">\n\n<customer-profile customerId="333-44-55-666"></customer-profile>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item.key)" icon-start>\n      <i [class]="\'iconfont \'+ item.icon" [ngStyle]="{\'color\': \'#ffd14d\'}" item-start></i>\n      {{ item.title }}\n      <ion-note item-end style="margin-right: 1px;">\n        {{item.completed}}\n      </ion-note>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\application-record\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity_info_service__ = __webpack_require__(120);
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
 * Generated class for the IdentityInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name: 'identity-info'
// })
var IdentityInfoPage = (function () {
    function IdentityInfoPage(navCtrl, alertCtrl, identityInfoProvider, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.identityInfoProvider = identityInfoProvider;
        this.navParams = navParams;
        this.itemsFirst = [
            { title: '身份状态', key: 'status', value: '' },
            { title: '教育程度', key: 'education', value: '' },
            { title: '婚姻状态', key: 'marriage', value: '' },
        ];
        this.itemsSecond = [
            // {title:'现有物业居住时间' , key:'residenceDate',value:''},
            { title: '居住类别', key: 'boarding', value: '' },
        ];
        // 教育程度
        this.educationList = [
            { type: 'radio', label: '博士及以上', value: 'boshi', checked: false },
            { type: 'radio', label: '硕士', value: 'suoshi', checked: false },
            { type: 'radio', label: '本科', value: 'benke', checked: false },
            { type: 'radio', label: '大专', value: 'dazhuan', checked: false },
            { type: 'radio', label: '高中或中专', value: 'gaozhong', checked: false },
            { type: 'radio', label: '初中及以下', value: 'chuzhong', checked: false },
        ];
        // 婚姻状态
        this.marriageList = [
            { type: 'radio', label: '未婚', value: 'weihun', checked: false },
            { type: 'radio', label: '已婚', value: 'yihun', checked: false },
            { type: 'radio', label: '离异/分居', value: 'fenju', checked: false },
            { type: 'radio', label: '其他', value: 'qita', checked: false }
        ];
        // 居住类别
        this.boardingList = [
            { type: 'radio', label: '自有物业（无担保无抵押）', value: 'ziyou', checked: false },
            { type: 'radio', label: '租赁', value: 'zupin', checked: false },
            { type: 'radio', label: '家人拥有', value: 'jiaren', checked: false },
            { type: 'radio', label: '公司宿舍', value: 'gongsi', checked: false },
            { type: 'radio', label: '抵押中', value: 'diya', checked: false }
        ];
        // 现有物业居住时间
        this.residenceDate = '请选择';
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
        // 城市
        this.city = '请选择';
        this.AddressColumns = [];
        // 详细地址
        this.addressDetail = '';
        this.identityInfoProvider.getCitys().subscribe(function (res) {
            console.log('res', res);
            _this.AddressColumns = res;
        });
    }
    IdentityInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IdentityInfoPage');
    };
    IdentityInfoPage.prototype.choice = function (key) {
        console.log('key', key);
        switch (key) {
            // case 'education':this.choiceEducation();break;
            case 'education':
                this.renderRadio('教育程度', this.educationList, 'education');
                break;
            case 'marriage':
                this.renderRadio('婚姻状态', this.marriageList, 'marriage');
                break;
            case 'boarding':
                this.renderRadio('居住类别', this.boardingList, 'boarding');
                break;
        }
    };
    IdentityInfoPage.prototype.renderRadio = function (title, list, key) {
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
    IdentityInfoPage.prototype.checkedData = function (list, value, key) {
        var _this = this;
        list.forEach(function (val) {
            val.checked = false;
            if (val.value === value) {
                val.checked = true;
                console.log(val);
                _this.renderListValue(_this.itemsFirst, key, val.label);
                _this.renderListValue(_this.itemsSecond, key, val.label);
            }
        });
    };
    IdentityInfoPage.prototype.renderListValue = function (list, key, value) {
        list.forEach(function (val) {
            if (val.key === key) {
                val.value = value;
            }
        });
    };
    // 保存
    IdentityInfoPage.prototype.save = function () {
        //city 居住地区
        console.log('city 居住地区', this.city);
        // 详细地址
        console.log('addressDetail 详细地址', this.addressDetail);
        // 现有物业居住时间
        console.log('residenceDate 现有物业居住时间', this.residenceDate);
        // 教育程度
        console.log('educationList 教育程度', this.educationList);
        // 婚姻状态
        console.log('marriageList 婚姻状态', this.marriageList);
        // 居住类别
        console.log('boardingList 婚姻状态', this.boardingList);
        console.log('educationList 教育程度', this.identityInfoProvider.getListCheckedValue(this.educationList));
        console.log('educationList 婚姻状态', this.identityInfoProvider.getListCheckedValue(this.marriageList));
        console.log('educationList 婚姻状态', this.identityInfoProvider.getListCheckedValue(this.boardingList));
    };
    IdentityInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-identity-info',template:/*ion-inline-start:"E:\salesman\src\pages\application-record\identity-info\identity-info.html"*/'<!--\n  Generated template for the IdentityInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>身份信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0">\n  <ion-list>\n    <button ion-item *ngFor="let item of itemsFirst">\n      {{item.title}}\n      <ion-note item-end  [style.color]="item.value.length === 0?\'#dddddd\':\'#232323\'" (click)="choice(item.key)">\n          {{item.value.length === 0?\'请选择\':item.value}}\n      </ion-note>\n    </button>\n\n\n    <button ion-item>\n      <ion-label color="#666666">居住地区</ion-label>\n      <ion-note  *ngIf="city===\'请选择\'" item-end>\n        {{city}}\n      </ion-note>\n      <ion-multi-picker id="default" item-content  [(ngModel)]="city" separator="-" [multiPickerColumns]="AddressColumns"  cancelText="取消" doneText="确定"></ion-multi-picker>\n    </button>\n    <ion-item>\n      <ion-input type="text" placeholder="详细地址" [(ngModel)]="addressDetail"></ion-input>\n    </ion-item>\n\n    <button ion-item>\n      <ion-label color="#666666">现有物业居住时间</ion-label>\n      <ion-note  *ngIf="residenceDate===\'请选择\'" item-end style="">\n        {{residenceDate}}\n      </ion-note>\n      <ion-multi-picker item-content [(ngModel)]="residenceDate" separator="-" [multiPickerColumns]="residenceColumns" cancelText="取消" doneText="确定"></ion-multi-picker>\n    </button>\n\n    <button ion-item *ngFor="let item of itemsSecond">\n      {{item.title}}\n      <ion-note item-end style="" (click)="choice(item.key)" [style.color]="item.value.length === 0?\'#dddddd\':\'#232323\'" >\n        {{item.value.length === 0?\'请选择\':item.value}}\n      </ion-note>\n    </button>\n  </ion-list>\n\n  <div class="saveBtnContainer">\n    <button (click)=\'save()\'  class="anbutton saveBtn" ion-button >保存</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\application-record\identity-info\identity-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__identity_info_service__["a" /* IdentityInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], IdentityInfoPage);
    return IdentityInfoPage;
}());

//# sourceMappingURL=identity-info.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the UploadInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name:'upload-info-index'
// })
var UploadInfoPage = (function () {
    function UploadInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = [
            { title: '身份类资料', complete: true, key: 'sfl' },
            { title: '自雇人士资料', complete: true, key: 'zgrs' },
            { title: '工作类资料', complete: true, key: 'gzl' },
            { title: '住宅及物业资料', complete: false, key: 'zzjwy' },
            { title: '公积金资料', complete: false, key: 'gjj' },
            { title: '保单资料', complete: false, key: 'bd' },
            { title: '银行流水资料', complete: true, key: 'yhls' },
        ];
    }
    UploadInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadInfoPage');
    };
    UploadInfoPage.prototype.choice = function (key) {
    };
    UploadInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-upload-info',template:/*ion-inline-start:"E:\salesman\src\pages\application-record\upload-info\upload-info.html"*/'<!--\n  Generated template for the UploadInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>信息完善</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgf5 pd0">\n  <customer-profile customerId="333-44-55-666"></customer-profile>\n  <ion-list>\n    <button ion-item *ngFor="let item of list">\n      {{item.title}}\n      <ion-note item-end style="font-size: 14px;margin-right: 1px;" (click)="choice(item.key)">\n        {{item.complete?\'已完成\':\'\'}}\n      </ion-note>\n    </button>\n  </ion-list>\n  <div class="saveBtnContainer">\n    <button (click)=\'save()\' [disabled]="false" class="anbutton saveBtn" ion-button >保存</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\application-record\upload-info\upload-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], UploadInfoPage);
    return UploadInfoPage;
}());

//# sourceMappingURL=upload-info.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity_info_identity_info_service__ = __webpack_require__(120);
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
// @IonicPage({
//   name: 'work-info'
// })
var WorkInfoPage = (function () {
    function WorkInfoPage(navCtrl, alertCtrl, identityInfoProvider, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.identityInfoProvider = identityInfoProvider;
        this.navParams = navParams;
        /*单位信息开始*/
        this.companyInfo = {
            city: '请选择',
            addressDetail: '',
            companyName: '',
            companyTel: '',
            companyTypeList: [
                { type: 'radio', label: '政府机构', value: 'zf', checked: false },
                { type: 'radio', label: '民营', value: 'my', checked: false },
                { type: 'radio', label: '私营', value: 'sy', checked: false },
                { type: 'radio', label: '三资企业', value: 'szqy', checked: false },
                { type: 'radio', label: '国有企业', value: 'gyqy', checked: false },
                { type: 'radio', label: '个体', value: 'gt', checked: false },
                { type: 'radio', label: '其它', value: 'qt', checked: false }
            ],
            industryList: [
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
            ]
        };
        this.itemsFirst = [
            { title: '单位性质', key: 'company-type', value: '' },
            { title: '所属行业', key: 'industry', value: '' }
        ];
        // 单位地区
        this.AddressColumns = [];
        /*单位信息结束*/
        /*个人信息开始*/
        this.itemsSecond = [
            { title: '月收入方式', key: 'money-method', value: '' },
            { title: '月收入金额', key: 'money-howmuch', value: '' },
            { title: '是否有社保', key: 'security', value: '' },
            { title: '缴纳公司为本公司', key: 'company-security', value: '' }
        ];
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
        this.personInfo = {
            department: '',
            position: '',
            enterytime: '',
            workLengthDate: '请选择',
            moneyMethodList: [
                { type: 'radio', label: '代发', value: 'df', checked: false },
                { type: 'radio', label: '部分代发', value: 'bfdf', checked: false },
                { type: 'radio', label: '现金', value: 'xj', checked: false },
            ],
            moneyHowmuchList: [
                { type: 'radio', label: '15000元以上', value: '15000', checked: false },
                { type: 'radio', label: '10001-15000元', value: '10001', checked: false },
                { type: 'radio', label: '8001-10000元', value: '8001', checked: false },
                { type: 'radio', label: '5001-8000元', value: '5001', checked: false },
                { type: 'radio', label: '3501-5000元', value: '3501', checked: false },
                { type: 'radio', label: '1-3500元', value: '1', checked: false },
                { type: 'radio', label: '0元', value: '0', checked: false },
            ],
            securityList: [
                { type: 'radio', label: '是', value: 'yes', checked: false },
                { type: 'radio', label: '否', value: 'no', checked: false },
            ],
            companySecurityList: [
                { type: 'radio', label: '是', value: 'yes', checked: false },
                { type: 'radio', label: '否', value: 'no', checked: false },
            ]
        };
        /*个人信息结束*/
        /*自雇经营信息开始*/
        this.itemsThird = [
            { title: '经营场所', key: 'manage-location', value: '' },
        ];
        this.selfManageInfo = {
            starttime: '',
            monthMoney: '',
            peopleCount: '',
            turnover: '',
            cost: '',
            profit: '',
            manageLocationList: [
                { type: 'radio', label: '自有', value: 'ziyou', checked: false },
                { type: 'radio', label: '租用', value: 'zhuyong', checked: false },
                { type: 'radio', label: '按揭', value: 'anjie', checked: false },
            ]
        };
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
            slidesOffsetBefore: 35,
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
                this.renderRadio('单位性质', this.companyInfo.companyTypeList, 'company-type');
                break;
            case 'industry':
                this.renderRadio('所属行业', this.companyInfo.industryList, 'industry');
                break;
            case 'money-method':
                this.renderRadio('月收入方式', this.personInfo.moneyMethodList, 'money-method');
                break;
            case 'money-howmuch':
                this.renderRadio('月收入方式', this.personInfo.moneyHowmuchList, 'money-howmuch');
                break;
            case 'security':
                this.renderRadio('是否有社保', this.personInfo.securityList, 'security');
                break;
            case 'company-security':
                this.renderRadio('缴纳公司为本公司', this.personInfo.companySecurityList, 'company-security');
                break;
            case 'manage-location':
                this.renderRadio('经营场所', this.selfManageInfo.manageLocationList, 'manage-location');
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
    // 提交
    WorkInfoPage.prototype.save = function () {
    };
    //保存到本地
    WorkInfoPage.prototype.localSave = function (type) {
        switch (type) {
            // 单位基本信息
            case 'companyInfo':
                this.saveCompanyInfo();
                break;
            // 个人基本信息
            case 'personInfo':
                this.savePersonInfo();
                break;
            // 自雇经营信息
            case 'selfManageInfo':
                this.saveSelfManageInfo();
                break;
        }
    };
    // 保存单位基本信息
    WorkInfoPage.prototype.saveCompanyInfo = function () {
        console.log('companyTypeList', this.companyInfo.companyTypeList);
        console.log('industryList', this.companyInfo.industryList);
        console.log('city', this.companyInfo.city);
        console.log('AddressColumns', this.AddressColumns);
        console.log('addressDetail', this.companyInfo.addressDetail);
        console.log('companyName', this.companyInfo.companyName);
        console.log('companyTel', this.companyInfo.companyTel);
        console.log('companyInfo', this.companyInfo);
        localStorage.setItem('saveCompanyInfo', JSON.stringify(this.companyInfo));
    };
    // 保存个人基本信息
    WorkInfoPage.prototype.savePersonInfo = function () {
        console.log('department', this.personInfo.department);
        console.log('position', this.personInfo.position);
        console.log('enterytime', this.personInfo.enterytime);
        console.log('workLengthDate', this.personInfo.workLengthDate);
        console.log('department', this.personInfo.department);
        console.log('moneyMethodList', this.personInfo.moneyMethodList);
        console.log('moneyHowmuchList', this.personInfo.moneyHowmuchList);
        console.log('securityList', this.personInfo.securityList);
        console.log('companySecurityList', this.personInfo.companySecurityList);
        localStorage.setItem('saveCompanyInfo', JSON.stringify(this.personInfo));
    };
    // 保存自雇经营信息
    WorkInfoPage.prototype.saveSelfManageInfo = function () {
        console.log('manageLocationList', this.selfManageInfo.manageLocationList);
        console.log('starttime', this.selfManageInfo.starttime);
        console.log('monthMoney', this.selfManageInfo.monthMoney);
        console.log('peopleCount', this.selfManageInfo.peopleCount);
        console.log('turnover', this.selfManageInfo.turnover);
        console.log('cost', this.selfManageInfo.cost);
        console.log('profit', this.selfManageInfo.profit);
        console.log('selfManageInfo', this.selfManageInfo);
        localStorage.setItem('saveCompanyInfo', JSON.stringify(this.selfManageInfo));
    };
    WorkInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-work-info',template:/*ion-inline-start:"E:\salesman\src\pages\application-record\work-info\work-info.html"*/'<!--\n  Generated template for the WorkInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>工作信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0 bgf5" >\n  <div class="swiper-container">\n    <div class="swiper-wrapper">\n      <!--单位信息-->\n      <div class="swiper-slide" id="companyInfo">\n\n        <div class="workInfoheader">\n          <span>单位基本信息</span>\n          <button clear ion-button (click)="localSave(\'companyInfo\')" >保存</button>\n        </div>\n        <ion-list>\n          <ion-item>\n            <ion-label color="#666666">单位名称</ion-label>\n            <ion-input type="text" placeholder="" [(ngModel)]="companyInfo.companyName"></ion-input>\n          </ion-item>\n          <button ion-item *ngFor="let item of itemsFirst">\n            {{item.title}}\n            <ion-note item-end [style.color]="item.value.length === 0?\'#dddddd\':\'#232323\'" (click)="choice(item.key)">\n              {{item.value.length === 0?\'请选择\':item.value}}\n            </ion-note>\n          </button>\n\n\n          <button ion-item>\n            <ion-label color="#666666">单位地区</ion-label>\n            <ion-note  *ngIf="city===\'请选择\'" item-end style="margin-right: 1px;">\n              {{city}}\n            </ion-note>\n            <ion-multi-picker  item-content  [(ngModel)]="companyInfo.city" separator="-" [multiPickerColumns]="AddressColumns"  cancelText="取消" doneText="确定"></ion-multi-picker>\n          </button>\n\n          <ion-item>\n            <ion-input type="text" id="addressDetail" placeholder="详细地址" [(ngModel)]="companyInfo.addressDetail"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">单位电话</ion-label>\n            <ion-input type="text" placeholder="格式：区号-座机号码-分机" [(ngModel)]="companyInfo.companyTel"></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </div>\n\n      <!--个人信息-->\n\n      <div class="swiper-slide" id="personInfo">\n\n        <div class="workInfoheader">\n          <span>个人基本信息</span>\n          <button clear ion-button  (click)="localSave(\'personInfo\')" >保存</button>\n        </div>\n        <ion-list>\n          <ion-item>\n            <ion-label color="#666666">部门</ion-label>\n            <ion-input type="text" placeholder="请输入部门" [(ngModel)]="department"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">职位/职务</ion-label>\n            <ion-input type="text" placeholder="请输入职位/职务" [(ngModel)]="position"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">入职时间</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="enterytime"></ion-datetime>\n          </ion-item>\n\n          <button ion-item>\n            <ion-label color="#666666">累计工作时间</ion-label>\n            <ion-note  *ngIf="workLengthDate===\'请选择\'" item-end  [style.color]="item.value.length === 0?\'#dddddd\':\'#232323\'">\n              {{workLengthDate}}\n            </ion-note>\n            <ion-multi-picker item-content [(ngModel)]="workLengthDate" separator="-" [multiPickerColumns]="residenceColumns" cancelText="取消" doneText="确定"></ion-multi-picker>\n          </button>\n          <button ion-item *ngFor="let item of itemsSecond">\n            {{item.title}}\n            <ion-note item-end [style.color]="item.value.length === 0?\'#dddddd\':\'#232323\'" (click)="choice(item.key)">\n              {{item.value.length === 0?\'请选择\':item.value}}\n            </ion-note>\n          </button>\n\n        </ion-list>\n\n      </div>\n\n      <!--自雇经营信息-->\n      <div class="swiper-slide" style="height: 560px;" id="selfInfo">\n        <div class="workInfoheader">\n          <span>自雇经营信息</span>\n          <button clear ion-button (click)="localSave(\'selfManageInfo\')" >保存</button>\n        </div>\n        <ion-list>\n          <button ion-item *ngFor="let item of itemsThird">\n            {{item.title}}\n            <ion-note item-end [style.color]="item.value.length === 0?\'#dddddd\':\'#232323\'" (click)="choice(item.key)">\n              {{item.value.length === 0?\'请选择\':item.value}}\n            </ion-note>\n          </button>\n          <ion-item>\n            <ion-label color="#666666">成立时间</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="selfManageInfo.starttime"></ion-datetime>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label color="#666666">月供/月租金(元)</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="selfManageInfo.monthMoney"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">雇员人数</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="selfManageInfo.peopleCount"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">月均营业额(元)</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="selfManageInfo.turnover"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">成本支出(元)</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="selfManageInfo.cost"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="#666666">月盈利(元)</ion-label>\n            <ion-input type="number" placeholder="请输入" [(ngModel)]="selfManageInfo.profit"></ion-input>\n          </ion-item>\n        </ion-list>\n\n\n      </div>\n\n    </div>\n    <!-- 如果需要分页器 -->\n    <div class="swiper-pagination"></div>\n  </div>\n\n  <div class="saveBtnContainer" *ngIf="showSaveBtn">\n    <button (click)=\'save()\'  class="anbutton saveBtn" ion-button >提交</button>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\application-record\work-info\work-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__identity_info_identity_info_service__["a" /* IdentityInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], WorkInfoPage);
    return WorkInfoPage;
}());

//# sourceMappingURL=work-info.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the AppointmentCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//
// @IonicPage({
//   name: 'appointment-customer'
// })
var AppointmentCustomerPage = (function () {
    function AppointmentCustomerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appointmentList = [
            {
                date: '2018年3月13日',
                timeList: [
                    {
                        time: '10:00~12:00',
                        detailList: [{
                                name: '陈少敏',
                                tel: '13533220344',
                                where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                            }]
                    }
                ]
            },
            {
                date: '2018年3月31日',
                timeList: [
                    {
                        time: '10:00~12:00',
                        detailList: [{
                                name: '陈少敏',
                                tel: '13533220344',
                                where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                            }]
                    }
                ]
            },
            {
                date: '2018年4月31日',
                timeList: [
                    {
                        time: '9:00~10:00',
                        detailList: [
                            {
                                name: '陈少敏',
                                tel: '13533220344',
                                where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                            },
                            {
                                name: '陈少敏',
                                tel: '13533220344',
                                where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                            },
                            {
                                name: '陈少敏',
                                tel: '13533220344',
                                where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                            },
                        ]
                    }
                ]
            },
            {
                date: '2018年5月31日',
                timeList: [
                    {
                        time: '10:00~12:00',
                        detailList: [{
                                name: '陈少敏',
                                tel: '13533220344',
                                where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                            }]
                    }
                ]
            },
        ];
    }
    AppointmentCustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentCustomerPage');
    };
    AppointmentCustomerPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.appointmentList = [
                {
                    date: '2018年3月13日',
                    timeList: [
                        {
                            time: '10:00~12:00',
                            detailList: [{
                                    name: '陈少敏',
                                    tel: '13533220344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                }]
                        }
                    ]
                },
                {
                    date: '2018年3月31日',
                    timeList: [
                        {
                            time: '10:00~12:00',
                            detailList: [{
                                    name: '陈少敏',
                                    tel: '13533220344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                }]
                        }
                    ]
                },
                {
                    date: '2018年4月31日',
                    timeList: [
                        {
                            time: '9:00~10:00',
                            detailList: [
                                {
                                    name: '陈少敏',
                                    tel: '13533220344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                                {
                                    name: '陈少敏',
                                    tel: '13533220344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                                {
                                    name: '陈少敏',
                                    tel: '13533220344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                            ]
                        }
                    ]
                },
                {
                    date: '2018年5月31日',
                    timeList: [
                        {
                            time: '10:00~12:00',
                            detailList: [{
                                    name: '陈少敏',
                                    tel: '13533220344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                }]
                        }
                    ]
                },
            ];
            refresher.complete();
        }, 2000);
    };
    AppointmentCustomerPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.appointmentList.push({
                    date: '2018年4月31日' + i,
                    timeList: [
                        {
                            time: '9:00~10:00',
                            detailList: [
                                {
                                    name: '陈少敏',
                                    tel: '13533220344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                                {
                                    name: '陈少敏',
                                    tel: '13533220344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                                {
                                    name: '陈少敏',
                                    tel: '13533220344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                            ]
                        }
                    ]
                });
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    AppointmentCustomerPage.prototype.isToday = function (date) {
        console.log('date', date);
    };
    AppointmentCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment-customer',template:/*ion-inline-start:"E:\salesman\src\pages\my\appointment-customer\appointment-customer.html"*/'<!--\n  Generated template for the AppointmentCustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>客户预约</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0 ">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ul class="appointmentList">\n    <li *ngFor="let item of appointmentList">\n      <div class="appointmentDateContainer" [ngClass]="isToday(item.date)">\n        <span class="identify"></span>\n        <span class="date">{{item.date}}</span>\n      </div>\n      <div class="appointmentTimeContainer" *ngFor="let childItem of item.timeList">\n        <p class="time">{{childItem.time}}</p>\n        <ul class="appointmentDetailList">\n          <li *ngFor="let _item of childItem.detailList">\n            <div>\n              <span class="name">{{_item.name}}</span>\n              <span class="tel">{{_item.tel|tel}}</span>\n            </div>\n            <p class="where">{{_item.where}}</p>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <div class="timeLine"></div>\n  </ul>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\appointment-customer\appointment-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AppointmentCustomerPage);
    return AppointmentCustomerPage;
}());

//# sourceMappingURL=appointment-customer.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTelFirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_messageAuth_messageAuth__ = __webpack_require__(44);
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
 * Generated class for the EditTelFirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name:'editTelFirst'
// })
var EditTelFirstPage = (function () {
    function EditTelFirstPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tel = '13333338615';
    }
    EditTelFirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditTelFirstPage');
    };
    EditTelFirstPage.prototype.editTel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_messageAuth_messageAuth__["a" /* MessageAuthPage */], { from: 'editTel' });
    };
    EditTelFirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-tel-first',template:/*ion-inline-start:"E:\salesman\src\pages\my\edit-tel-first\edit-tel-first.html"*/'<!--\n  Generated template for the EditTelFirstPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0" style="text-align: center">\n  <div class="tel">\n    您已绑定手机：{{tel|tel}}\n  </div>\n  <img src="assets/imgs/my/tel.png" alt="">\n\n  <div class="saveBtnContainer" style="position: static;">\n    <button (click)=\'editTel()\' class="anbutton saveBtn" ion-button >绑定新手机</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\edit-tel-first\edit-tel-first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], EditTelFirstPage);
    return EditTelFirstPage;
}());

//# sourceMappingURL=edit-tel-first.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTelSecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the EditTelSecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name:'edit-tel-second'
// })
var EditTelSecondPage = (function () {
    function EditTelSecondPage(navCtrl, toastCtrl, appCtrl, events, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.appCtrl = appCtrl;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.countDown = 1;
        this.tel = '';
        this.authMessage = '';
    }
    EditTelSecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditTelSecondPage');
    };
    EditTelSecondPage.prototype.restartSendMessage = function () {
        this.countDown = 60;
        this.countDownFn();
    };
    EditTelSecondPage.prototype.countDownFn = function () {
        var _this = this;
        clearInterval(this.timerID);
        this.timerID = setInterval(function () {
            if (_this.countDown > 1) {
                _this.countDown = _this.countDown - 1;
            }
        }, 1000);
    };
    EditTelSecondPage.prototype.save = function () {
        //ajax success
        if (Math.random() > 0.5) {
            var toast = this.toastCtrl.create({
                message: '绑定手机失败，请重试！',
                duration: 1500,
                position: 'middle',
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: '绑定手机成功',
                duration: 1500,
                position: 'middle',
            });
            toast.present();
            this.events.publish('toLogin');
        }
    };
    EditTelSecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-tel-second',template:/*ion-inline-start:"E:\salesman\src\pages\my\edit-tel-second\edit-tel-second.html"*/'<!--\n  Generated template for the EditTelSecondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd30">\n  <div class="authCodeContainer">\n    <input type="number" placeholder="手机号" [(ngModel)]="tel">\n  </div>\n  <div class="authCodeContainer">\n    <input type="text" placeholder="请输入验证码" [(ngModel)]="authMessage">\n    <span *ngIf="countDown>1">({{countDown}})重新发送</span>\n    <span *ngIf="countDown===1" (click)=\'restartSendMessage()\' style="color:#15c182;">发送验证码</span>\n  </div>\n  <div class="reAuth">没有收到验证码？<span >点这里</span></div>\n  <div class="saveBtnContainer" style="position: static;">\n    {{authMessage|json}}\n    {{tel|json}}\n    <button (click)=\'save()\' [disabled]="!authMessage.toString().trim().length>0&&tel>0" class="anbutton saveBtn" ion-button >确定</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\edit-tel-second\edit-tel-second.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _f || Object])
    ], EditTelSecondPage);
    return EditTelSecondPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=edit-tel-second.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the EditPwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name:'editPwd'
// })
var EditPwdPage = (function () {
    function EditPwdPage(navCtrl, toastCtrl, events, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.oldPwd = '';
        this.newPwd = '';
    }
    EditPwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPwdPage');
    };
    EditPwdPage.prototype.editPwd = function () {
        if (Math.random() > 0.5) {
            var toast = this.toastCtrl.create({
                message: '修改密码失败，请重试！',
                duration: 1500,
                position: 'middle',
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: '修改密码成功',
                duration: 1500,
                position: 'middle',
            });
            toast.present();
            this.events.publish('toLogin');
        }
    };
    EditPwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-pwd',template:/*ion-inline-start:"E:\salesman\src\pages\my\edit-pwd\edit-pwd.html"*/'<!--\n  Generated template for the EditPwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>修改登录密码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd30">\n  <div class="authCodeContainer">\n    <input type="text" placeholder="输入原密码" [(ngModel)]="oldPwd">\n  </div>\n  <div class="authCodeContainer">\n    <input type="text" placeholder="输入新密码" [(ngModel)]="newPwd">\n  </div>\n  <p style="font-size:14px;\ncolor:#999999;margin-top: 11px;">\n    密码长度至少6位，支持数字、字母、符号\n  </p>\n  <div class="saveBtnContainer" style="position: static;">\n    <button (click)=\'editPwd()\' [disabled]="!newPwd.trim().length>0 && !oldPwd.trim().length>0" class="anbutton saveBtn" ion-button >保存</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\edit-pwd\edit-pwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], EditPwdPage);
    return EditPwdPage;
}());

//# sourceMappingURL=edit-pwd.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the LoanRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name:'loan-record'
// })
var LoanRecordPage = (function () {
    function LoanRecordPage(navCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loadRecordList = [
            { date: '2017-09-13 13:40', statusText: '申请中', statusKey: 'sqz' },
            { date: '2017-09-13 13:40', statusText: '已结清', statusKey: 'sqz' },
            { date: '2017-09-13 13:40', statusText: '申请中', statusKey: 'sqz' },
            { date: '2017-09-13 13:40', statusText: '已结清', statusKey: 'sqz' },
        ];
    }
    LoanRecordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoanRecordPage');
    };
    LoanRecordPage.prototype.handleInput = function (val) {
        console.log('val', val);
        if (Math.random() > 0.5) {
            console.log('val----', val);
            this.loadRecordList = [];
        }
        else {
            this.loadRecordList = [
                { date: '2017-09-13 13:40', statusText: '申请中', statusKey: 'sqz' },
                { date: '2017-09-13 13:40', statusText: '已结清', statusKey: 'sqz' },
                { date: '2017-09-13 13:40', statusText: '申请中', statusKey: 'sqz' },
                { date: '2017-09-13 13:40', statusText: '已结清', statusKey: 'sqz' },
                { date: '2017-09-13 13:40', statusText: '已结清', statusKey: 'sqz' },
                { date: '2017-09-13 13:40', statusText: '已结清', statusKey: 'sqz' },
                { date: '2017-09-13 13:40', statusText: '已结清', statusKey: 'sqz' },
            ];
        }
    };
    LoanRecordPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.loadRecordList.push({ date: '2017-09-13 13:40', statusText: '申请中' + i, statusKey: 'sqz' });
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    LoanRecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loan-record',template:/*ion-inline-start:"E:\salesman\src\pages\my\loan-record\loan-record.html"*/'<!--\n  Generated template for the LoanRecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>客户贷款记录查询</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0" [style.background-color]="loadRecordList.length===0?\'#f5f5f8\':\'white\'">\n  <search (handleInput)="handleInput($event)" [inputType]="\'number\'" [placeText]="\'请输入客户身份证号码\'"  ></search>\n  <div class="fg"></div>\n  <div *ngIf="loadRecordList.length>0">\n    <p style="font-size:18px;\ncolor:#232323;text-align: center;margin-top: 17px;margin-bottom: 23px;">贷款记录</p>\n    <ul class="load_record_list">\n        <li *ngFor="let item of loadRecordList">\n          <span>{{item.date}}</span>\n          <span>{{item.statusText}}</span>\n        </li>\n    </ul>\n  </div>\n  <empty-reminder *ngIf="loadRecordList.length===0"></empty-reminder>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="loadRecordList.length>0">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\loan-record\loan-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], LoanRecordPage);
    return LoanRecordPage;
}());

//# sourceMappingURL=loan-record.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_customer_service__ = __webpack_require__(241);
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
 * Generated class for the MyCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//
// @IonicPage({
//   name: 'my-customer'
// })
var MyCustomerPage = (function () {
    function MyCustomerPage(navCtrl, alertCtrl, myCustomerService, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.myCustomerService = myCustomerService;
        this.navParams = navParams;
        this.testData = [
            { name: '陈少敏', tel: '13533320344' },
            { name: '陈晓', tel: '15533320344' },
            { name: '春节后', tel: '16633320344' },
            { name: '狄仁杰', tel: '13533320344' },
            { name: '东西', tel: '13533324444' },
            { name: '东乡县', tel: '14433320344' },
            { name: '德里克', tel: '13533320344' },
            { name: '火少敏', tel: '13533320344' },
            { name: '火少敏', tel: '13533320344' },
            { name: '火少敏', tel: '13533323333' },
            { name: '吴晓敏', tel: '33333320344' },
            { name: '王小明', tel: '13533320344' },
            { name: '吴小华', tel: '13533323333' },
            { name: '文学奖', tel: '13533320344' },
            { name: '王小明', tel: '13533320344' },
            { name: '#', tel: '13533320344' },
            { name: '#', tel: '13533320344' },
            { name: '#', tel: '13533323333' },
            { name: '#', tel: '13533320344' },
        ];
        this.contactsList = [];
        this.searchIndexList = [];
    }
    MyCustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyCustomerPage');
        this.contactsList = this.myCustomerService.getContactList(this.testData);
        this.searchIndexList = this.contactsList.map(function (val) { return { text: val.title, key: val.title }; });
    };
    MyCustomerPage.prototype.handleInput = function (val) {
        console.log('val', val);
        var data = this.myCustomerService.filterContactList(this.testData, val.value);
        this.contactsList = this.myCustomerService.getContactList(data);
    };
    MyCustomerPage.prototype.handleClick = function (item) {
        console.log('item', item);
        var that = this;
        var elList = Array.prototype.slice.call(document.querySelectorAll('.listTitle[data-key]'));
        console.log('elList', elList);
        elList.forEach(function (val) {
            //
            //   console.log('val',);
            if (val.dataset['key'] === item['key']) {
                console.log('val', val);
                console.log('offsetTop', val.offsetTop);
                that.content.scrollTo(0, val.offsetTop, 300);
            }
        });
    };
    MyCustomerPage.prototype.tel = function (nameVal, telVal) {
        var alert = this.alertCtrl.create({
            cssClass: 'contactAlert',
            title: '联系Ta',
            message: "<p>\u60A8\u5C06\u81F4\u7535</p><p>\u5BA2\u6237\uFF1A" + nameVal + " <span>" + telVal + "</span></p>",
            buttons: [{
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        window.location.href = "tel:" + telVal;
                    }
                }]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], MyCustomerPage.prototype, "content", void 0);
    MyCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-customer',template:/*ion-inline-start:"E:\salesman\src\pages\my\my-customer\my-customer.html"*/'<!--\n  Generated template for the MyCustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的客户</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0">\n\n  <search (handleInput)="handleInput($event)"></search>\n  <div class="fg"></div>\n  <ul class="contactsList">\n    <li *ngFor="let item of contactsList">\n      <div class="listTitle borderBottom" [attr.data-key]="item.title">{{item.title}}</div>\n      <ul class="contactsDetailList">\n        <li  class="borderBottom" *ngFor="let _item of item.detailList">\n          <div>\n            <p class="name">{{_item.name}}</p>\n            <p class="tel">{{_item.tel|tel}}</p>\n          </div>\n          <button ion-button clear color="anlight"  icon-left  (click)="tel(_item.name,_item.tel)">\n            <i class="iconfont icon-ic_phone1"></i>\n            联系ta\n          </button>\n        </li>\n      </ul>\n    </li>\n  </ul>\n\n  <empty-reminder *ngIf="contactsList.length===0"></empty-reminder>\n  <search-line (handleClick)="handleClick($event)" [searchIndexList]="searchIndexList"></search-line>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\my-customer\my-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__my_customer_service__["a" /* MyCustomerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyCustomerPage);
    return MyCustomerPage;
}());

//# sourceMappingURL=my-customer.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
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
var MyCustomerService = (function () {
    function MyCustomerService() {
    }
    MyCustomerService.prototype.getContactList = function (data) {
        if (data === void 0) { data = []; }
        var saveAry = [
            { title: 'A', detailList: [] },
            { title: 'B', detailList: [] },
            { title: 'C', detailList: [] },
            { title: 'D', detailList: [] },
            { title: 'E', detailList: [] },
            { title: 'F', detailList: [] },
            { title: 'G', detailList: [] },
            { title: 'H', detailList: [] },
            { title: 'J', detailList: [] },
            { title: 'K', detailList: [] },
            { title: 'L', detailList: [] },
            { title: 'Q', detailList: [] },
            { title: 'W', detailList: [] },
            { title: 'E', detailList: [] },
            { title: 'R', detailList: [] },
            { title: 'T', detailList: [] },
            { title: 'Y', detailList: [] },
            { title: 'U', detailList: [] },
            { title: 'I', detailList: [] },
            { title: 'O', detailList: [] },
            { title: 'P', detailList: [] },
            { title: 'Z', detailList: [] },
            { title: 'X', detailList: [] },
            { title: 'C', detailList: [] },
            { title: 'V', detailList: [] },
            { title: 'B', detailList: [] },
            { title: 'N', detailList: [] },
            { title: 'M', detailList: [] },
            { title: '#', detailList: [] }
        ];
        var reg = /^[A-Za-z]+$/;
        data.forEach(function (val) {
            var str = pinyinUtil.getFirstLetter(val.name).slice(0, 1);
            console.log('str', str);
            if (reg.test(str)) {
                saveAry.forEach(function (_val) {
                    if (_val['title'] === str) {
                        _val['detailList'].push({ name: val.name, tel: val.tel });
                    }
                });
            }
            else {
                saveAry.forEach(function (_val) {
                    if (_val['title'] === '#') {
                        _val['detailList'].push({ name: val.name, tel: val.tel });
                    }
                });
            }
        });
        console.log('saveAry', saveAry);
        var contactList = saveAry.slice();
        return contactList.filter(function (val) {
            return val.detailList.length > 0;
        });
    };
    MyCustomerService.prototype.filterContactList = function (data, searchKey) {
        if (data === void 0) { data = []; }
        if (searchKey.trim().length === 0) {
            return data;
        }
        var _data = data.slice();
        return _data.filter(function (val) {
            console.log('val', val);
            return val['name'].indexOf(searchKey) > -1 || val['tel'].indexOf(searchKey) > -1;
        });
    };
    MyCustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MyCustomerService);
    return MyCustomerService;
}());

//# sourceMappingURL=my-customer.service.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the MyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name:'my-detail'
// })
var MyDetailPage = (function () {
    function MyDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDetail = {
            tel: '1399998732',
            account: 'ffffffffffff',
            profileURL: 'assets/imgs/application-record/profile.png'
        };
    }
    MyDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyDetailPage');
    };
    MyDetailPage.prototype.openNavDetailsPage = function (item) {
        switch (item) {
            // 修改手机号
            case 'editTelFirst':
                this.navCtrl.push('editTelFirst');
                break;
            // 修改头像
            case 'editProfile':
                this.navCtrl.push('editProfile');
                break;
            // 修改登录密码
            case 'editPwd':
                this.navCtrl.push('editPwd');
                break;
            default: console.log('-');
        }
    };
    MyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-detail',template:/*ion-inline-start:"E:\salesman\src\pages\my\my-detail\my-detail.html"*/'<!--\n  Generated template for the MyDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0 bgf5">\n  <ul class="anList borderBottom">\n    <!--修改头像-->\n    <li class="anLi " (click)="openNavDetailsPage(\'editProfile\')" >\n      <div class="innerDiv borderBottom" style="height: 86px;">\n        <span class="title">头像</span>\n        <div class="lileftDiv" >\n          <img [src]="myDetail.profileURL" alt="">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </div>\n      </div>\n    </li>\n    <!--我的账号-->\n    <li class="anLi ">\n      <div class="innerDiv borderBottom">\n        <span class="title">我的账号</span>\n        <span>{{myDetail.account}}</span>\n      </div>\n\n    </li>\n    <!--修改手机号-->\n    <li class="anLi" (click)="openNavDetailsPage(\'editTelFirst\')" >\n      <div class="innerDiv borderBottom">\n        <span class="title">手机号</span>\n        <div class="lileftDiv">\n          <span style="line-height: 14px;margin-right: 10px;">{{myDetail.tel|tel}}</span>\n          <ion-icon name="arrow-forward"></ion-icon>\n        </div>\n      </div>\n\n    </li>\n  </ul>\n\n  <ul class="anList borderBottom borderTop" style="margin-top: 10px;">\n    <!--修改登录密码-->\n    <li class="anLi " (click)="openNavDetailsPage(\'editPwd\')">\n      <div class="innerDiv borderBottom">\n        <span class="title">修改登录密码</span>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </div>\n\n    </li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\my-detail\my-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyDetailPage);
    return MyDetailPage;
}());

//# sourceMappingURL=my-detail.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMessageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the MyMessageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name:'my-message-detail',
//   segment: 'detail/:id'
// })
var MyMessageDetailPage = (function () {
    function MyMessageDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messageDetail = {
            title: '关于小贷2018年春节放假安排通知',
            date: '2017-12-13',
            content: "<div>ffff</div><p>dfsfs</p><div >wewe</div>"
        };
        console.log('NavParams', this.navParams.get('id'));
    }
    MyMessageDetailPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MyMessageDetailPage');
        //console.log('NavParams',NavParams);
    };
    MyMessageDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-message-detail',template:/*ion-inline-start:"E:\salesman\src\pages\my\my-message-detail\my-message-detail.html"*/'<!--\n  Generated template for the MyMessageDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的消息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="mstitle">\n    {{messageDetail.title}}\n  </div>\n  <div class="date">\n    {{messageDetail.date}}\n  </div>\n  <div  [innerHTML]="messageDetail.content">\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\my-message-detail\my-message-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyMessageDetailPage);
    return MyMessageDetailPage;
}());

//# sourceMappingURL=my-message-detail.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the MyMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage({
//   name: 'my-message'
// })
var MyMessagePage = (function () {
    function MyMessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messageList = [
            { title: '客户李建华已向你申请预约面签，客户李建华已向你申请预约面签。', date: '1小时前', read: false, id: '3333' },
            { title: '家有20万闲置资金，如何投资收益跑赢通货膨胀', date: '3小时前', read: true, id: '33233' },
            { title: '关于小贷2018年春节放假安排通知关于小2018年春节放假安排通知', date: '昨天', read: false, id: '3344333' },
            { title: '家有20万闲置资金，如何投资收益跑赢通货膨胀', date: '2018-01-25', read: true, id: '4224' },
        ];
    }
    MyMessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyMessagePage');
    };
    MyMessagePage.prototype.itemSelected = function (item) {
        this.navCtrl.push('my-message-detail', {
            'id': item.id
        });
    };
    MyMessagePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.messageList = [
                { title: '客户李建华已向你申请预约面签，客户李建华已向你申请预约面签。', date: '1小时前', read: false, id: '3333' },
                { title: '家有20万闲置资金，如何投资收益跑赢通货膨胀', date: '3小时前', read: true, id: '33233' },
                { title: '关于小贷2018年春节放假安排通知关于小2018年春节放假安排通知', date: '昨天', read: false, id: '3344333' },
                { title: '家有20万闲置资金，如何投资收益跑赢通货膨胀', date: '2018-01-25', read: true, id: '4224' },
            ];
            refresher.complete();
        }, 2000);
    };
    MyMessagePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.messageList.push({ title: '家有20万闲置资金，如何投资收益跑赢通货膨胀', date: '2018-01-25', read: true, id: '4224' + i });
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    MyMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-message',template:/*ion-inline-start:"E:\salesman\src\pages\my\my-message\my-message.html"*/'<!--\n  Generated template for the MyMessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的消息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="pd0 bgf5" id="my_message_content">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ul class="anList borderBottom">\n    <!--修改头像-->\n    <li class="anLi " *ngFor="let item of messageList" (click)="itemSelected(item)">\n      <div class="innerDiv borderBottom" >\n        <span class="title">\n          <ng-container *ngIf="item.read"> <span style="color:red;    position: absolute;\n    left: 6px;">*</span></ng-container>\n\n          {{ item.title }}\n        </span>\n        <p>{{item.date}}</p>\n      </div>\n\n    </li>\n  </ul>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\my-message\my-message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyMessagePage);
    return MyMessagePage;
}());

//# sourceMappingURL=my-message.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_user_store__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_error_error__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_components_module__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_application_record_application_record_module__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_my_module__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_associations_customers_associations_customers_module__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_route_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_http_loading_interceptor__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_listview_service__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// reducer













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_error_error__["a" /* ErrorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["b" /* StoreModule */].forRoot({ user: __WEBPACK_IMPORTED_MODULE_10__stores_user_store__["d" /* userReducer */] }),
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    backButtonText: '返回',
                    tabsHideOnSubPages: true,
                    swipeBackEnabled: false,
                    preloadModules: true,
                    iconMode: 'ios',
                    mode: 'ios'
                }, {
                    links: __WEBPACK_IMPORTED_MODULE_19__app_route_module__["a" /* default */]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_application_record_application_record_module__["a" /* ApplicationRecordPageModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_my_module__["a" /* MyPageModule */],
                __WEBPACK_IMPORTED_MODULE_17__pages_associations_customers_associations_customers_module__["a" /* AssociationsCustomersPageModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_error_error__["a" /* ErrorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__providers_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_21__providers_listview_service__["a" /* ListviewService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["IonicErrorHandler"] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_20__providers_http_loading_interceptor__["a" /* HttpLoadingInterceptor */], multi: true },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serverMap__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__serverMap__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVERMAP; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(221);

var SERVERMAP = {
    '/customer/userLogin': __WEBPACK_IMPORTED_MODULE_0__app__["a" /* SERVER */].MAIN,
};

//# sourceMappingURL=serverMap.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'login';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\salesman\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\salesman\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
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
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SearchComponent = (function () {
    function SearchComponent() {
        this.placeText = '请输入姓名/电话号码';
        this.inputType = 'text';
        this.handleInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showSearchMask = false;
        this.searchContent = '';
        console.log('Hello SearchComponent Component');
        console.log('searchInput', this.searchInput);
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('searchInput', this.searchInput.nativeElement);
        //
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.searchInput.nativeElement, 'input').debounceTime(1000).filter(function (e) {
            return e['target'].value.length >= 0;
        }).map(function (e) {
            console.log('e', e);
            return e['target'].value;
        }).subscribe(function (val) {
            console.log(val);
            // ajax
            _this.handleInput.emit({ value: val });
            _this.showSearchMask = false;
            _this.searchInput.nativeElement.blur();
        });
    };
    SearchComponent.prototype.focusSearch = function () {
        console.log('focus');
        this.showSearchMask = true;
    };
    SearchComponent.prototype.delete = function () {
        this.searchContent = '';
    };
    SearchComponent.prototype.cancel = function () {
        this.searchContent = '';
        this.showSearchMask = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchInput'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "placeText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "inputType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "handleInput", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search',template:/*ion-inline-start:"E:\salesman\src\components\search\search.html"*/'<!-- Generated template for the SearchComponent component -->\n<div class="searchContainer">\n  <div class="searchBg">\n    <i class="iconfont icon-ic_search"></i>\n    <input [type]="inputType" [placeholder]="placeText" #searchInput  (focus)="focusSearch()" [(ngModel)]="searchContent">\n    <i class="iconfont icon-ic_delete" (click)="delete()" *ngIf="searchContent.length>0&&showSearchMask"></i>\n    <span class="cancel" (click)="cancel()" *ngIf="searchContent.length===0&&showSearchMask">取消</span>\n  </div>\n  <div class="searchMask" *ngIf="showSearchMask"></div>\n</div>\n'/*ion-inline-end:"E:\salesman\src\components\search\search.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the CustomerProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomerProfileComponent = (function () {
    function CustomerProfileComponent() {
        this.inputStyle = true;
        this.info = {
            name: '万峰岭',
            tel: '15509837384',
            profileURL: 'assets/imgs/application-record/profile.png'
        };
        console.log('Hello CustomerProfileComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CustomerProfileComponent.prototype, "customerId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CustomerProfileComponent.prototype, "inputStyle", void 0);
    CustomerProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'customer-profile',template:/*ion-inline-start:"E:\salesman\src\components\customer-profile\customer-profile.html"*/'<div class="headerContainer" [ngClass]="inputStyle?\'bg\':\'\'">\n  <img [src]="info.profileURL" alt="" class="profileImage">\n  <div class="infoDesc">\n    <p style="font-size: 18px;">{{info.name}}</p>\n    <p style="font-size: 14px;">{{info.tel|tel}}</p>\n  </div>\n  <div>\n    <a  class="anbutton telBtn" [href]="\'tel:\'+info.tel" >\n      <ion-icon name="call" style="font-size: 22px;margin-right: 5px;"></ion-icon>\n      联系ta\n    </a>\n  </div>\n</div>\n'/*ion-inline-end:"E:\salesman\src\components\customer-profile\customer-profile.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomerProfileComponent);
    return CustomerProfileComponent;
}());

//# sourceMappingURL=customer-profile.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyReminderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the EmptyReminderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EmptyReminderComponent = (function () {
    function EmptyReminderComponent() {
        this.reminderText = '暂无该用户的贷款记录！';
        console.log('Hello EmptyReminderComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyReminderComponent.prototype, "reminderText", void 0);
    EmptyReminderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'empty-reminder',template:/*ion-inline-start:"E:\salesman\src\components\empty-reminder\empty-reminder.html"*/'<!-- Generated template for the EmptyReminderComponent component -->\n<div style="text-align: center;">\n  <img  src="../assets/imgs/my/empty.png" alt="">\n  <p >{{reminderText}}</p>\n</div>\n'/*ion-inline-end:"E:\salesman\src\components\empty-reminder\empty-reminder.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EmptyReminderComponent);
    return EmptyReminderComponent;
}());

//# sourceMappingURL=empty-reminder.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the SearchLineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SearchLineComponent = (function () {
    function SearchLineComponent() {
        this.handleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchIndexList = [
            { text: 'A', key: 'A' },
            { text: 'B', key: 'B' },
            { text: 'C', key: 'C' },
            { text: 'D', key: 'D' },
            { text: 'E', key: 'E' },
            { text: 'F', key: 'F' },
            { text: 'G', key: 'G' },
            { text: 'H', key: 'H' },
            { text: 'I', key: 'I' },
            { text: 'J', key: 'J' },
            { text: 'K', key: 'K' },
            { text: 'L', key: 'L' },
            { text: 'M', key: 'M' },
            { text: 'N', key: 'N' },
            { text: 'O', key: 'O' },
            { text: 'P', key: 'P' },
            { text: 'S', key: 'S' },
            { text: 'R', key: 'R' },
            { text: 'T', key: 'T' },
            { text: 'U', key: 'U' },
            { text: 'V', key: 'V' },
            { text: 'W', key: 'W' },
            { text: 'X', key: 'X' },
            { text: 'Y', key: 'Y' },
            { text: 'Z', key: 'Z' },
            { text: '#', key: '#' },
        ];
        console.log('Hello SearchLineComponent Component');
    }
    SearchLineComponent.prototype.ngOnInit = function () {
        console.log('searchLine', this.searchLine);
        console.log('searchLine', this.searchLine.nativeElement);
        var pEl = this.searchLine.nativeElement.querySelector('p');
    };
    SearchLineComponent.prototype.handleSearchClick = function (item) {
        this.handleClick.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchLine'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SearchLineComponent.prototype, "searchLine", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SearchLineComponent.prototype, "handleClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchLineComponent.prototype, "searchIndexList", void 0);
    SearchLineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search-line',template:/*ion-inline-start:"E:\salesman\src\components\search-line\search-line.html"*/'<!-- Generated template for the SearchLineComponent component -->\n<div class="searchLine" #searchLine>\n  <p *ngFor="let item of searchIndexList" (click)="handleSearchClick(item)">\n    {{item?.text}}\n  </p>\n</div>\n'/*ion-inline-end:"E:\salesman\src\components\search-line\search-line.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchLineComponent);
    return SearchLineComponent;
}());

//# sourceMappingURL=search-line.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TelPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TelPipe = (function () {
    function TelPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TelPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.slice(0, 3) + ' **** ' + value.slice(7);
    };
    TelPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'tel',
        })
    ], TelPipe);
    return TelPipe;
}());

//# sourceMappingURL=tel.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationRecordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application_record__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_appointment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__information_information__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__identity_info_identity_info__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upload_info_upload_info__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_info_detail_upload_info_detail__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ion_multi_picker__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__identity_info_identity_info_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__work_info_work_info__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_application_record_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ApplicationRecordPageModule = (function () {
    function ApplicationRecordPageModule() {
    }
    ApplicationRecordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_2__application_record__["a" /* ApplicationRecordPage */],
                __WEBPACK_IMPORTED_MODULE_5__information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_7__upload_info_upload_info__["a" /* UploadInfoPage */],
                __WEBPACK_IMPORTED_MODULE_8__upload_info_detail_upload_info_detail__["a" /* UploadInfoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__identity_info_identity_info__["a" /* IdentityInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__work_info_work_info__["a" /* WorkInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"],
                __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ion_multi_picker__["MultiPickerModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_2__application_record__["a" /* ApplicationRecordPage */],
                __WEBPACK_IMPORTED_MODULE_5__information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_7__upload_info_upload_info__["a" /* UploadInfoPage */],
                __WEBPACK_IMPORTED_MODULE_8__upload_info_detail_upload_info_detail__["a" /* UploadInfoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__identity_info_identity_info__["a" /* IdentityInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__work_info_work_info__["a" /* WorkInfoPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_2__application_record__["a" /* ApplicationRecordPage */],
                __WEBPACK_IMPORTED_MODULE_5__information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_7__upload_info_upload_info__["a" /* UploadInfoPage */],
                __WEBPACK_IMPORTED_MODULE_8__upload_info_detail_upload_info_detail__["a" /* UploadInfoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__identity_info_identity_info__["a" /* IdentityInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__work_info_work_info__["a" /* WorkInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__identity_info_identity_info_service__["a" /* IdentityInfoProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_application_record_service__["a" /* ApplicationRecordService */]
            ]
        })
    ], ApplicationRecordPageModule);
    return ApplicationRecordPageModule;
}());

//# sourceMappingURL=application-record.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadInfoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the UploadInfoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var UploadInfoDetailPage = (function () {
    function UploadInfoDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UploadInfoDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadInfoDetailPage');
    };
    UploadInfoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-upload-info-detail',template:/*ion-inline-start:"E:\salesman\src\pages\application-record\upload-info-detail\upload-info-detail.html"*/'<!--\n  Generated template for the UploadInfoDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>uploadInfoDetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\application-record\upload-info-detail\upload-info-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], UploadInfoDetailPage);
    return UploadInfoDetailPage;
}());

//# sourceMappingURL=upload-info-detail.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment_customer_appointment_customer__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_tel_first_edit_tel_first__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_tel_second_edit_tel_second__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_pwd_edit_pwd__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loan_record_loan_record__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_customer_my_customer__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_detail_my_detail__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_message_detail_my_message_detail__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_message_my_message__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_customer_my_customer_service__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_components_module__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_my_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MyPageModule = (function () {
    function MyPageModule() {
    }
    MyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my__["a" /* MyPage */],
                __WEBPACK_IMPORTED_MODULE_3__appointment_customer_appointment_customer__["a" /* AppointmentCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_4__edit_tel_first_edit_tel_first__["a" /* EditTelFirstPage */],
                __WEBPACK_IMPORTED_MODULE_5__edit_tel_second_edit_tel_second__["a" /* EditTelSecondPage */],
                __WEBPACK_IMPORTED_MODULE_6__edit_pwd_edit_pwd__["a" /* EditPwdPage */],
                __WEBPACK_IMPORTED_MODULE_7__loan_record_loan_record__["a" /* LoanRecordPage */],
                __WEBPACK_IMPORTED_MODULE_8__my_customer_my_customer__["a" /* MyCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_9__my_detail_my_detail__["a" /* MyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__my_message_detail_my_message_detail__["a" /* MyMessageDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__my_message_my_message__["a" /* MyMessagePage */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__my__["a" /* MyPage */],
                __WEBPACK_IMPORTED_MODULE_3__appointment_customer_appointment_customer__["a" /* AppointmentCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_4__edit_tel_first_edit_tel_first__["a" /* EditTelFirstPage */],
                __WEBPACK_IMPORTED_MODULE_5__edit_tel_second_edit_tel_second__["a" /* EditTelSecondPage */],
                __WEBPACK_IMPORTED_MODULE_6__edit_pwd_edit_pwd__["a" /* EditPwdPage */],
                __WEBPACK_IMPORTED_MODULE_7__loan_record_loan_record__["a" /* LoanRecordPage */],
                __WEBPACK_IMPORTED_MODULE_8__my_customer_my_customer__["a" /* MyCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_9__my_detail_my_detail__["a" /* MyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__my_message_detail_my_message_detail__["a" /* MyMessageDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__my_message_my_message__["a" /* MyMessagePage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__my__["a" /* MyPage */],
                __WEBPACK_IMPORTED_MODULE_3__appointment_customer_appointment_customer__["a" /* AppointmentCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_4__edit_tel_first_edit_tel_first__["a" /* EditTelFirstPage */],
                __WEBPACK_IMPORTED_MODULE_5__edit_tel_second_edit_tel_second__["a" /* EditTelSecondPage */],
                __WEBPACK_IMPORTED_MODULE_6__edit_pwd_edit_pwd__["a" /* EditPwdPage */],
                __WEBPACK_IMPORTED_MODULE_7__loan_record_loan_record__["a" /* LoanRecordPage */],
                __WEBPACK_IMPORTED_MODULE_8__my_customer_my_customer__["a" /* MyCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_9__my_detail_my_detail__["a" /* MyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__my_message_detail_my_message_detail__["a" /* MyMessageDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__my_message_my_message__["a" /* MyMessagePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"],
                __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__my_customer_my_customer_service__["a" /* MyCustomerService */], __WEBPACK_IMPORTED_MODULE_14__providers_my_service__["a" /* MyService */]]
        })
    ], MyPageModule);
    return MyPageModule;
}());

//# sourceMappingURL=my.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyService = (function () {
    function MyService(http) {
        this.http = http;
    }
    /** 获取客户贷款记录
     * @param userAccount    string  用户账号
     @param idCard  string  客户身份证号
     @param pageNo  string  见分页
     @param pageSize  string 见分页
  
     loanId  String  贷款记录ID
     applyTime  String  申请时间
     applyStatus  String  申请状态。 见首页贷款申请状态
     * */
    MyService.prototype.fetchLoansList = function (userAccount, idCard, pageNo, pageSize) {
        if (pageNo === void 0) { pageNo = 0; }
        if (pageSize === void 0) { pageSize = 20; }
        var url = "/users/" + userAccount + "/customers/loans";
        return this.http.get(url, { idCard: idCard, pageNo: pageNo, pageSize: pageSize });
    };
    /** 获取客户列表
     * @param userAccount    string  用户账号
     @param pageNo  string  见分页
     @param pageSize  string 见分页
  
     loanId  String  贷款记录ID
     applyTime  String  申请时间
     applyStatus  String  申请状态。 见首页贷款申请状态
     * */
    MyService.prototype.fetchCustomersList = function (userAccount, pageNo, pageSize) {
        if (pageNo === void 0) { pageNo = 0; }
        if (pageSize === void 0) { pageSize = 20; }
        var url = "/users/" + userAccount + "/customers";
        return this.http.get(url, { pageNo: pageNo, pageSize: pageSize });
    };
    /** 获取客户列表
     * @param userAccount    string  用户账号
     * @param queryParam    string  客户手机号或者名字
     @param pageNo  string  见分页
     @param pageSize  string 见分页
  
     name	String	预约者姓名
     time	String	预约时间
     address	String	预约地址
     phoneNum	String	预约者手机号码
     * */
    MyService.prototype.fetchReservationsList = function (userAccount, queryParam, pageNo, pageSize) {
        if (pageNo === void 0) { pageNo = 0; }
        if (pageSize === void 0) { pageSize = 20; }
        var url = "/users/" + userAccount + "/reservations";
        return this.http.get(url, { pageNo: pageNo, pageSize: pageSize, queryParam: queryParam });
    };
    /** 获取用户消息列表
     * @param userAccount    string  用户账号
     @param pageNo  string  见分页
     @param pageSize  string 见分页
  
     msgId	String	消息ID
     name	String	预约者姓名
     time	String	预约时间
     address	String	预约地址
     phoneNum	String	预约者手机号码
     * */
    MyService.prototype.fetchMsgsList = function (userAccount, pageNo, pageSize) {
        if (pageNo === void 0) { pageNo = 0; }
        if (pageSize === void 0) { pageSize = 20; }
        var url = "/users/" + userAccount + "/msgs";
        return this.http.get(url, { pageNo: pageNo, pageSize: pageSize });
    };
    /** 获取用户消息得详情
     * @param userAccount    string  用户账号
     * @param msgId    string  消息ID
     title	string	标题
     notifyTime	string	通知时间
     other	string	其他消息
     * */
    MyService.prototype.fetchMsgsDetail = function (userAccount, msgId) {
        var url = "/users/" + userAccount + "/msgs/" + msgId;
        return this.http.get(url);
    };
    MyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* HttpService */]])
    ], MyService);
    return MyService;
}());

//# sourceMappingURL=my.service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociationsCustomersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__associations_customers__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AssociationsCustomersPageModule = (function () {
    function AssociationsCustomersPageModule() {
    }
    AssociationsCustomersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__associations_customers__["a" /* AssociationsCustomersPage */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__associations_customers__["a" /* AssociationsCustomersPage */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__associations_customers__["a" /* AssociationsCustomersPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]
            ],
        })
    ], AssociationsCustomersPageModule);
    return AssociationsCustomersPageModule;
}());

//# sourceMappingURL=associations-customers.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgetPwd_forgetPwd__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginAuth_loginAuth__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messageAuth_messageAuth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resetPwd_resetPwd__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_pipes_module__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__forgetPwd_forgetPwd__["a" /* ForgetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_5__loginAuth_loginAuth__["a" /* LoginAuthPage */],
                __WEBPACK_IMPORTED_MODULE_6__messageAuth_messageAuth__["a" /* MessageAuthPage */],
                __WEBPACK_IMPORTED_MODULE_7__resetPwd_resetPwd__["a" /* ResetPwdPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__forgetPwd_forgetPwd__["a" /* ForgetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__loginAuth_loginAuth__["a" /* LoginAuthPage */],
                __WEBPACK_IMPORTED_MODULE_6__messageAuth_messageAuth__["a" /* MessageAuthPage */],
                __WEBPACK_IMPORTED_MODULE_7__resetPwd_resetPwd__["a" /* ResetPwdPage */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__forgetPwd_forgetPwd__["a" /* ForgetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_5__loginAuth_loginAuth__["a" /* LoginAuthPage */],
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__messageAuth_messageAuth__["a" /* MessageAuthPage */],
                __WEBPACK_IMPORTED_MODULE_7__resetPwd_resetPwd__["a" /* ResetPwdPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"],
                __WEBPACK_IMPORTED_MODULE_8__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_application_record_application_record__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_application_record_information_information__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_application_record_appointment_appointment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_application_record_identity_info_identity_info__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_application_record_upload_info_upload_info__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_application_record_work_info_work_info__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_appointment_customer_appointment_customer__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_my__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_my_my_detail_my_detail__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_my_customer_my_customer__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_loan_record_loan_record__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_my_my_message_my_message__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_my_my_message_detail_my_message_detail__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_edit_pwd_edit_pwd__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_edit_tel_first_edit_tel_first__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_edit_tel_second_edit_tel_second__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_associations_customers_associations_customers__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_forgetPwd_forgetPwd__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_loginAuth_loginAuth__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_messageAuth_messageAuth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_resetPwd_resetPwd__ = __webpack_require__(118);























/* harmony default export */ __webpack_exports__["a"] = ([
    /*登录模块 路由*/
    { component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */], name: 'login', segment: 'login' },
    { component: __WEBPACK_IMPORTED_MODULE_19__pages_login_forgetPwd_forgetPwd__["a" /* ForgetPwdPage */], name: 'forgetPwd', segment: 'forgetPwd', defaultHistory: ['login'] },
    { component: __WEBPACK_IMPORTED_MODULE_20__pages_login_loginAuth_loginAuth__["a" /* LoginAuthPage */], name: 'loginAuth', segment: 'loginAuth', defaultHistory: ['login'] },
    { component: __WEBPACK_IMPORTED_MODULE_21__pages_login_messageAuth_messageAuth__["a" /* MessageAuthPage */], name: 'messageAuth', segment: 'messageAuth', defaultHistory: ['login'] },
    { component: __WEBPACK_IMPORTED_MODULE_22__pages_login_resetPwd_resetPwd__["a" /* ResetPwdPage */], name: 'reset', segment: 'reset', defaultHistory: ['login'] },
    /* tabs 路由*/
    { component: __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__["a" /* TabsPage */], name: 'Home', segment: 'home', loadChildren: 'record' },
    /*申请记录模块 路由*/
    { component: __WEBPACK_IMPORTED_MODULE_2__pages_application_record_application_record__["a" /* ApplicationRecordPage */], name: 'record', segment: 'record', loadChildren: 'informationIndex' },
    { component: __WEBPACK_IMPORTED_MODULE_3__pages_application_record_information_information__["a" /* InformationPage */], name: 'informationIndex', segment: 'informationIndex', defaultHistory: ['record'] },
    { component: __WEBPACK_IMPORTED_MODULE_4__pages_application_record_appointment_appointment__["a" /* AppointmentPage */], name: 'appointment', segment: 'appointment', defaultHistory: ['record'] },
    { component: __WEBPACK_IMPORTED_MODULE_5__pages_application_record_identity_info_identity_info__["a" /* IdentityInfoPage */], name: 'identity-info', segment: 'identity-info', defaultHistory: ['record', 'informationIndex'] },
    { component: __WEBPACK_IMPORTED_MODULE_6__pages_application_record_upload_info_upload_info__["a" /* UploadInfoPage */], name: 'upload-info-index', segment: 'upload-info-index', defaultHistory: ['record', 'informationIndex'] },
    { component: __WEBPACK_IMPORTED_MODULE_7__pages_application_record_work_info_work_info__["a" /* WorkInfoPage */], name: 'work-info', segment: 'work-info', defaultHistory: ['record', 'informationIndex'] },
    /*关联客户 路由*/
    { component: __WEBPACK_IMPORTED_MODULE_18__pages_associations_customers_associations_customers__["a" /* AssociationsCustomersPage */], name: 'associations-customers', segment: 'associations-customers' },
    /*我的模块 路由*/
    { component: __WEBPACK_IMPORTED_MODULE_9__pages_my_my__["a" /* MyPage */], name: 'my', segment: 'my', loadChildren: 'appointment-customer' },
    { component: __WEBPACK_IMPORTED_MODULE_8__pages_my_appointment_customer_appointment_customer__["a" /* AppointmentCustomerPage */], name: 'appointment-customer', segment: 'appointment-customer', defaultHistory: ['my'] },
    { component: __WEBPACK_IMPORTED_MODULE_10__pages_my_my_detail_my_detail__["a" /* MyDetailPage */], name: 'my-detail', segment: 'my-detail', defaultHistory: ['my'] },
    { component: __WEBPACK_IMPORTED_MODULE_11__pages_my_my_customer_my_customer__["a" /* MyCustomerPage */], name: 'my-customer', segment: 'my-customer', defaultHistory: ['my'] },
    { component: __WEBPACK_IMPORTED_MODULE_12__pages_my_loan_record_loan_record__["a" /* LoanRecordPage */], name: 'loan-record', segment: 'loan-record', defaultHistory: ['my'] },
    { component: __WEBPACK_IMPORTED_MODULE_13__pages_my_my_message_my_message__["a" /* MyMessagePage */], name: 'my-message', segment: 'my-message', defaultHistory: ['my'] },
    { component: __WEBPACK_IMPORTED_MODULE_14__pages_my_my_message_detail_my_message_detail__["a" /* MyMessageDetailPage */], name: 'my-message-detail', segment: 'message-detail/:id', defaultHistory: ['my', 'my-message'] },
    { component: __WEBPACK_IMPORTED_MODULE_15__pages_my_edit_pwd_edit_pwd__["a" /* EditPwdPage */], name: 'editPwd', segment: 'editPwd', defaultHistory: ['my', 'editTelFirst'] },
    { component: __WEBPACK_IMPORTED_MODULE_16__pages_my_edit_tel_first_edit_tel_first__["a" /* EditTelFirstPage */], name: 'editTelFirst', segment: 'editTelFirst', defaultHistory: ['my'] },
    { component: __WEBPACK_IMPORTED_MODULE_17__pages_my_edit_tel_second_edit_tel_second__["a" /* EditTelSecondPage */], name: 'edit-tel-second', segment: 'edit-tel-second', defaultHistory: ['my', 'editTelFirst'] },
]);
//# sourceMappingURL=app.route.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpLoadingInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Pass untouched request through to the next request handler. */
var HttpLoadingInterceptor = (function () {
    function HttpLoadingInterceptor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    HttpLoadingInterceptor.prototype.intercept = function (req, next) {
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        return next.handle(req).finally(function () { return loading.dismiss(); });
    };
    HttpLoadingInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], HttpLoadingInterceptor);
    return HttpLoadingInterceptor;
}());

//# sourceMappingURL=http-loading-interceptor.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetPwd_resetPwd__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageAuthPage = (function () {
    function MessageAuthPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.countDown = 60;
        this.desc = '已发送验证码至';
        this.btnText = '确认';
        this.showBackBtn = true;
        // 严重信息
        this.authMessage = '';
        this.tel = '13983454210';
        console.log('navParams', this.navParams);
        if (this.navParams.get('from') === 'forgetPwd') {
            this.desc = '已发送验证码至密保手机号';
        }
        if (this.navParams.get('from') === 'editTel') {
            this.desc = '已发送验证码至绑定手机';
            this.btnText = '下一步';
            this.showBackBtn = false;
        }
    }
    MessageAuthPage.prototype.ionViewDidEnter = function () {
        this.countDownFn();
    };
    MessageAuthPage.prototype.restartSendMessage = function () {
        this.countDown = 60;
        this.countDownFn();
    };
    MessageAuthPage.prototype.countDownFn = function () {
        var _this = this;
        clearInterval(this.timerID);
        this.timerID = setInterval(function () {
            if (_this.countDown > 1) {
                _this.countDown = _this.countDown - 1;
            }
        }, 1000);
    };
    MessageAuthPage.prototype.sureBtn = function () {
        if (this.navParams.get('from') === 'forgetPwd') {
            // 验证号码是否正确（忘记密码）
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resetPwd_resetPwd__["a" /* ResetPwdPage */]);
        }
        else if (this.navParams.get('from') === 'login') {
            // 登录
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }
        else if (this.navParams.get('from') === 'editTel') {
            // 验证号码是否正确（修改绑定手机号码）
            // ajax....
            this.navCtrl.push('edit-tel-second');
        }
    };
    MessageAuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-messageAuth',template:/*ion-inline-start:"E:\salesman\src\pages\login\messageAuth\messageAuth.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]=\'showBackBtn\'>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="pd30">\n  <p class="sendTel">{{desc}}{{tel|tel}}</p>\n  <div class="authCodeContainer borderBottom">\n    <input type="text" placeholder="请输入验证码" [(ngModel)]="authMessage">\n    <span *ngIf="countDown>1">({{countDown}})重新发送</span>\n    <span *ngIf="countDown===1" (click)=\'restartSendMessage()\' style="color:#15c182;">重新发送</span>\n  </div>\n  <div class="reAuth">没有收到验证码？<span >点这里</span></div>\n  <div style="text-align:center;margin-top:60px;">\n    <button (click)=\'sureBtn()\' [disabled]="!authMessage.trim().length>0" class="anbutton loginBtn btn16" ion-button >{{btnText}}</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\login\messageAuth\messageAuth.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MessageAuthPage);
    return MessageAuthPage;
}());

//# sourceMappingURL=messageAuth.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_user_store__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_error_error__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpService = (function () {
    function HttpService(http, store, modalCtrl, alertCtrl, toastCtrl) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.defaultSettings = {
            host: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER */].MAIN,
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            timeout: 60,
            showError: 1
        };
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_store__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_5__stores_user_store__["a" /* selectToken */])).subscribe(function (salesmanToken) {
            _this.salesmanToken = salesmanToken;
        });
    }
    HttpService.prototype.request = function (type, url, req, exParams) {
        var _this = this;
        var params = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.merge({}, this.defaultSettings, exParams);
        if (this.salesmanToken) {
            params.headers.Authorization = this.salesmanToken;
        }
        var exHost = (exParams && exParams.host) || '';
        if (!url.match(/:[/]{2,3}/)) {
            //host 的取值优先级->exHost(调用接口传的参数)->SERVERMAP（配置）->base（MAIN字段）
            var host = params.host;
            //console.log(url.match(/[?].*/))
            var path = url.replace(/[?].*/, '');
            if (__WEBPACK_IMPORTED_MODULE_2__config__["b" /* SERVERMAP */][path]) {
                host = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* SERVERMAP */][path];
            }
            if (exHost) {
                host = exHost;
            }
            url = host + url;
        }
        console.log(url);
        console.log(params);
        var request$;
        if (type == "GET") {
            console.log('~~~~~~~~~~~~~~~~~~~');
            request$ = this.http.get(url, {
                headers: params.headers,
                params: req
            });
        }
        if (type == "POST") {
            request$ = this.http.post(url, req, {
                headers: params.headers
            });
        }
        return request$
            .timeout(params.timeout * 1000)
            .map(function (response) {
            if (response.success || params.ignore) {
                return response.data;
            }
            else {
                // 001001	用户没有登陆或者登陆已过期
                if (response.code == '001001') {
                    var alert = _this.alertCtrl.create({
                        title: '登录过期',
                        subTitle: '',
                        message: '登录过期，请重新登录',
                        buttons: [{
                                text: '确定',
                                handler: function (data) {
                                    console.log('Cancel clicked');
                                    console.log('window', window);
                                }
                            }]
                    });
                    alert.present();
                }
                // 20001	session会话过期。 见于通过验证码重设密码时会话过期，或者登录时重设密码会话过期
                if (response.code == '20001') {
                    var alert = _this.alertCtrl.create({
                        title: '验证码过期',
                        subTitle: '',
                        message: '验证码过期，请重新获取验证码',
                        buttons: [{
                                text: '确定',
                                handler: function (data) {
                                    console.log('Cancel clicked');
                                }
                            }]
                    });
                    alert.present();
                }
                throw ({
                    name: "ServerErrorResponse",
                    msg: response.msg,
                    data: response.data,
                    code: response.code
                });
            }
        }).catch(function (err) {
            console.log('err', err);
            var error;
            if (!err.name) {
                error = ({ errNo: -1, msg: "\u8BF7\u6C42\u9519\u8BEF" });
            }
            else if (err.name == "HttpErrorResponse") {
                error = ({ errNo: -2, msg: "\u8BF7\u6C42\u5931\u8D25,\u72B6\u6001\u7801" + err.status, status: err.status });
            }
            else if (err.name == "ServerErrorResponse") {
                error = ({ errNo: -3, msg: err.msg, data: err.data, code: err.code });
            }
            else {
                error = ({ errNo: -4, msg: "请求超时" });
            }
            if (params.showError) {
                var preRedirectHandle = void 0;
                var preErrorHandle = void 0;
                if (params.showError == 1) {
                    preRedirectHandle = function (error) {
                        // if(isNeedRedirect){
                        //     return true;
                        // }
                    };
                    preErrorHandle = function (error) {
                        var toast = _this.toastCtrl.create({
                            message: error.msg,
                            duration: 3000
                        });
                        toast.present();
                    };
                }
                else if (params.showError == 2) {
                    //不需要重定向
                    preRedirectHandle = function (error) { };
                    //
                    preErrorHandle = function (error) {
                        var errorModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_error_error__["a" /* ErrorPage */], { error: error });
                        errorModal.present();
                    };
                }
                if (params.preRedirectHandle) {
                    preRedirectHandle = params.preRedirectHandle;
                }
                if (params.preErrorHandle) {
                    preErrorHandle = params.preErrorHandle;
                }
                preRedirectHandle(error);
                preErrorHandle(error);
            }
            throw (error);
        });
    };
    HttpService.prototype.post = function (url, body, params) {
        return this.request("POST", url, body, params);
    };
    HttpService.prototype.get = function (url, body, params) {
        return this.request("GET", url, body, params);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ModalController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["AlertController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ToastController"]) === "function" && _e || Object])
    ], HttpService);
    return HttpService;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectUserData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectToken; });
/* harmony export (immutable) */ __webpack_exports__["d"] = userReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = userLoggedInSuccess;
/* harmony export (immutable) */ __webpack_exports__["c"] = userLoggedOutSuccess;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(43);

/** Initial State */
var initialState = {
    isFetching: false,
    userData: {
        token: '',
    }
};
var selectUserData = function (state) { return state.user.userData; };
var selectToken = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createSelector */])(selectUserData, function (state) { return state.token; });
var REQUEST = 'user/REQUEST';
var USER_LOGGED_IN_SUCCESS = 'user/USER_LOGGED_IN_SUCCESS';
var USER_LOGGED_OUT_SUCCESS = 'user/USER_LOGGED_OUT_SUCCESS';
function userReducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case USER_LOGGED_IN_SUCCESS:
            return {
                isFetching: false,
                userData: {
                    token: payload.token,
                }
            };
        case USER_LOGGED_OUT_SUCCESS:
            return {
                isFetching: false,
                userData: {
                    token: '',
                }
            };
        default:
            return state;
    }
}
function userLoggedInSuccess(user) {
    return {
        type: USER_LOGGED_IN_SUCCESS,
        payload: {
            salesmanToken: user.salesmanToken,
        },
    };
}
function userLoggedOutSuccess(message) {
    return {
        type: USER_LOGGED_OUT_SUCCESS,
        payload: {
            message: message,
        },
    };
}
//# sourceMappingURL=user.store.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_profile_customer_profile__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_reminder_empty_reminder__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_line_search_line__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_3__customer_profile_customer_profile__["a" /* CustomerProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_4__empty_reminder_empty_reminder__["a" /* EmptyReminderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_line_search_line__["a" /* SearchLineComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"], __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_3__customer_profile_customer_profile__["a" /* CustomerProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_4__empty_reminder_empty_reminder__["a" /* EmptyReminderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_line_search_line__["a" /* SearchLineComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tel_tel__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__tel_tel__["a" /* TelPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__tel_tel__["a" /* TelPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ })

},[245]);
//# sourceMappingURL=main.js.map