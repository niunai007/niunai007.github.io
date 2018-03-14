webpackJsonp([11],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDetailPageModule", function() { return MyDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_detail__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyDetailPageModule = (function () {
    function MyDetailPageModule() {
    }
    MyDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_detail__["a" /* MyDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__my_detail__["a" /* MyDetailPage */]),
            ],
        })
    ], MyDetailPageModule);
    return MyDetailPageModule;
}());

//# sourceMappingURL=my-detail.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDetailPage; });
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


/**
 * Generated class for the MyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyDetailPage = (function () {
    function MyDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDetail = {
            tel: '139****8732',
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
            selector: 'page-my-detail',template:/*ion-inline-start:"E:\salesman\src\pages\my\my-detail\my-detail.html"*/'<!--\n  Generated template for the MyDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0 bgf5">\n  <ul class="anList borderBottom">\n    <!--修改头像-->\n    <li class="anLi " (click)="openNavDetailsPage(\'editProfile\')" >\n      <div class="innerDiv borderBottom" style="height: 86px;">\n        <span class="title">头像</span>\n        <div class="lileftDiv" >\n          <img [src]="myDetail.profileURL" alt="">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </div>\n      </div>\n    </li>\n    <!--我的账号-->\n    <li class="anLi ">\n      <div class="innerDiv borderBottom">\n        <span class="title">我的账号</span>\n        <span>{{myDetail.account}}</span>\n      </div>\n\n    </li>\n    <!--修改手机号-->\n    <li class="anLi" (click)="openNavDetailsPage(\'editTelFirst\')" >\n      <div class="innerDiv borderBottom">\n        <span class="title">手机号</span>\n        <div class="lileftDiv">\n          <span style="line-height: 14px;margin-right: 10px;">{{myDetail.tel}}</span>\n          <ion-icon name="arrow-forward"></ion-icon>\n        </div>\n      </div>\n\n    </li>\n  </ul>\n\n  <ul class="anList borderBottom borderTop" style="margin-top: 10px;">\n    <!--修改登录密码-->\n    <li class="anLi " (click)="openNavDetailsPage(\'editPwd\')">\n      <div class="innerDiv borderBottom">\n        <span class="title">修改登录密码</span>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </div>\n\n    </li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\my-detail\my-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyDetailPage);
    return MyDetailPage;
}());

//# sourceMappingURL=my-detail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map