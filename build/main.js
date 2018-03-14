webpackJsonp([18],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/application-record/application-record.module": [
		276,
		5
	],
	"../pages/application-record/appointment/appointment.module": [
		277,
		4
	],
	"../pages/application-record/identity-info/identity-info.module": [
		278,
		7
	],
	"../pages/application-record/information/information.module": [
		279,
		3
	],
	"../pages/application-record/upload-info-detail/upload-info-detail.module": [
		280,
		17
	],
	"../pages/application-record/upload-info/upload-info.module": [
		281,
		2
	],
	"../pages/application-record/work-info/work-info.module": [
		282,
		6
	],
	"../pages/associations-customers/associations-customers.module": [
		283,
		16
	],
	"../pages/my/appointment-customer/appointment-customer.module": [
		284,
		15
	],
	"../pages/my/edit-pwd/edit-pwd.module": [
		285,
		14
	],
	"../pages/my/edit-tel-first/edit-tel-first.module": [
		286,
		13
	],
	"../pages/my/edit-tel-second/edit-tel-second.module": [
		287,
		12
	],
	"../pages/my/loan-record/loan-record.module": [
		288,
		1
	],
	"../pages/my/my-customer/my-customer.module": [
		289,
		0
	],
	"../pages/my/my-detail/my-detail.module": [
		290,
		11
	],
	"../pages/my/my-message-detail/my-message-detail.module": [
		291,
		10
	],
	"../pages/my/my-message/my-message.module": [
		292,
		9
	],
	"../pages/my/my.module": [
		293,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-resetPwd',template:/*ion-inline-start:"E:\salesman\src\pages\login\resetPwd\resetPwd.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="pd30">\n  <p class="sendTel">请设置您的新密码</p>\n  <div class="authCodeContainer">\n    <input type="text" placeholder="输入新密码" [(ngModel)]="password">\n  </div>\n  <p class="reminderPwd">密码长度至少6位，支持数字、字母、符号</p>\n  <div style="text-align:center;margin-top:60px;">\n    <button (click)=\'next()\'  class="anbutton loginBtn" ion-button >保存</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\salesman\src\pages\login\resetPwd\resetPwd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ResetPwdPage);
    return ResetPwdPage;
}());

//# sourceMappingURL=resetPwd.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    // tab2Root = AssociationsCustomersPage;
    // tab3Root = MyPage;
    // Associations customers
    function TabsPage(events, nav) {
        this.events = events;
        this.nav = nav;
        this.tab1Root = 'application-record';
        this.tab2Root = 'associations-customers';
        this.tab3Root = 'my';
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
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"E:\salesman\src\pages\tabs\tabs.html"*/'<ion-tabs id="anTabs">\n  <ion-tab [root]="tab1Root" tabTitle="申请记录" tabIcon="icon-ic_sqjl"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="关联客户" tabIcon="icon-ic_glkh"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="我的" tabIcon="icon-ic_me"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"E:\salesman\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messageAuth_messageAuth__ = __webpack_require__(50);
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
    function LoginAuthPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    // 短信认证
    LoginAuthPage.prototype.messageAuth = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__messageAuth_messageAuth__["a" /* MessageAuthPage */], { from: 'login' });
    };
    // 人脸识别认证
    LoginAuthPage.prototype.faceAuth = function () {
    };
    LoginAuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loginAuth',template:/*ion-inline-start:"E:\salesman\src\pages\login\loginAuth\loginAuth.html"*/'<ion-header>\n  <ion-navbar hideBackButton=\'true\'>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="welcomeContainer">\n    <p>欢迎使用</p>\n    <p>安信小贷业务服务平台</p>\n  </div>\n  <p style="font-size:16px;\n  color:#666666;text-align:center;">请选择您的认证方式</p>\n  <button (click)=\'messageAuth()\' class="authBtn" ion-button outline>短信验证</button>\n  <button (click)=\'faceAuth()\'  class="authBtn" ion-button outline>人脸识别</button>\n</ion-content>'/*ion-inline-end:"E:\salesman\src\pages\login\loginAuth\loginAuth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], LoginAuthPage);
    return LoginAuthPage;
}());

//# sourceMappingURL=loginAuth.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messageAuth_messageAuth__ = __webpack_require__(50);
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
            selector: 'page-forgetPwd',template:/*ion-inline-start:"E:\salesman\src\pages\login\forgetPwd\forgetPwd.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="pd30">\n  <p class="sendTel">请输入您的账号</p>\n  <div class="authCodeContainer">\n    <input type="text" placeholder="请输入" [(ngModel)]="account">\n  </div>\n  <div style="text-align:center;margin-top:60px;">\n    <button (click)=\'next()\'  class="anbutton loginBtn" ion-button >下一步</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\salesman\src\pages\login\forgetPwd\forgetPwd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ForgetPwdPage);
    return ForgetPwdPage;
}());

//# sourceMappingURL=forgetPwd.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_loginAuth_loginAuth__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_messageAuth_messageAuth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_forgetPwd_forgetPwd__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_resetPwd_resetPwd__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_loginAuth_loginAuth__["a" /* LoginAuthPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_messageAuth_messageAuth__["a" /* MessageAuthPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_forgetPwd_forgetPwd__["a" /* ForgetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_resetPwd_resetPwd__["a" /* ResetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: '返回',
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/application-record/application-record.module#ApplicationRecordPageModule', name: 'application-record', segment: 'application-record', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/application-record/appointment/appointment.module#AppointmentPageModule', name: 'appointment', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/application-record/identity-info/identity-info.module#IdentityInfoPageModule', name: 'identity-info', segment: 'identity-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/application-record/information/information.module#InformationPageModule', name: 'informationIndex', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/application-record/upload-info-detail/upload-info-detail.module#UploadInfoDetailPageModule', name: 'UploadInfoDetailPage', segment: 'upload-info-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/application-record/upload-info/upload-info.module#UploadInfoPageModule', name: 'upload-info-index', segment: 'upload-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/application-record/work-info/work-info.module#WorkInfoPageModule', name: 'work-info', segment: 'work-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/associations-customers/associations-customers.module#AssociationsCustomersPageModule', name: 'associations-customers', segment: 'associations-customers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/appointment-customer/appointment-customer.module#AppointmentCustomerPageModule', name: 'appointment-customer', segment: 'appointment-customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/edit-pwd/edit-pwd.module#EditPwdPageModule', name: 'editPwd', segment: 'edit-pwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/edit-tel-first/edit-tel-first.module#EditTelFirstPageModule', name: 'editTelFirst', segment: 'edit-tel-first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/edit-tel-second/edit-tel-second.module#EditTelSecondPageModule', name: 'edit-tel-second', segment: 'edit-tel-second', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/loan-record/loan-record.module#LoanRecordPageModule', name: 'loan-record', segment: 'loan-record', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my-customer/my-customer.module#MyCustomerPageModule', name: 'my-customer', segment: 'my-customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my-detail/my-detail.module#MyDetailPageModule', name: 'my-detail', segment: 'my-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my-message-detail/my-message-detail.module#MyMessageDetailPageModule', name: 'my-message-detail', segment: 'detail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my-message/my-message.module#MyMessagePageModule', name: 'my-message', segment: 'my-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my.module#MyPageModule', name: 'my', segment: 'my', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_loginAuth_loginAuth__["a" /* LoginAuthPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_messageAuth_messageAuth__["a" /* MessageAuthPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_forgetPwd_forgetPwd__["a" /* ForgetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_resetPwd_resetPwd__["a" /* ResetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(78);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // document.addEventListener('click',function(e){
        //   console.log('e',e);
        //   console.log('e',e.target);
        //
        // })
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetPwd_resetPwd__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(154);
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
            selector: 'page-messageAuth',template:/*ion-inline-start:"E:\salesman\src\pages\login\messageAuth\messageAuth.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]=\'showBackBtn\'>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="pd30">\n  <p class="sendTel">{{desc}}</p>\n  <div class="authCodeContainer">\n    <input type="text" placeholder="请输入验证码" [(ngModel)]="authMessage">\n    <span *ngIf="countDown>1">({{countDown}})重新发送</span>\n    <span *ngIf="countDown===1" (click)=\'restartSendMessage()\' style="color:#15c182;">重新发送</span>\n  </div>\n  <div class="reAuth">没有收到验证码？<span >点这里</span></div>\n  <div style="text-align:center;margin-top:60px;">\n    <button (click)=\'sureBtn()\' [disabled]="!authMessage.trim().length>0" class="anbutton loginBtn" ion-button >{{btnText}}</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\login\messageAuth\messageAuth.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MessageAuthPage);
    return MessageAuthPage;
}());

//# sourceMappingURL=messageAuth.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginAuth_loginAuth__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgetPwd_forgetPwd__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pwdURL = 'assets/imgs/login/eyes.png';
    }
    // 切换显式展示密码
    LoginPage.prototype.switchPwd = function () {
        // console.log('pwdURL', this.pwdURL);
        this.pwdURL = this.pwdURL === 'assets/imgs/login/eyes.png' ? 'assets/imgs/login/eyesopen.png' : 'assets/imgs/login/eyes.png';
    };
    LoginPage.prototype.login = function () {
        console.log('navCtrl', this.navCtrl);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__loginAuth_loginAuth__["a" /* LoginAuthPage */]);
    };
    LoginPage.prototype.forgetPwd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgetPwd_forgetPwd__["a" /* ForgetPwdPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\salesman\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      安信业务员平台\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="pd30">\n  <div class="header">\n    <div class="headerBg">\n      <img src="assets/imgs/login/pro.png" alt="">\n    </div>\n  </div>\n  <div class="loginContainer">\n    <div class="inputContainer">\n      <span>账号</span>\n      <input type="text">\n    </div>\n\n    <div class="inputContainer">\n      <span>密码</span>\n      <input [type]="pwdURL===\'assets/imgs/login/eyes.png\'?\'password\':\'type\'">\n      <img (click)=\'switchPwd()\'  [src]="pwdURL" alt="">\n    </div>\n    <span class="forgetPwd" (click)=\'forgetPwd()\'>忘记密码</span>\n    <div style="text-align:center;margin-top:28px;">\n      <button (click)=\'login()\'  class="anbutton loginBtn" ion-button >登录</button>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\salesman\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map