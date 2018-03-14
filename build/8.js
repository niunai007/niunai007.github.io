webpackJsonp([8],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageModule", function() { return MyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my__ = __webpack_require__(339);
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
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__my__["a" /* MyPage */]),
            ],
        })
    ], MyPageModule);
    return MyPageModule;
}());

//# sourceMappingURL=my.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPage; });
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
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyPage = (function () {
    function MyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.info = {
            name: '万峰岭',
            tel: '155 **** 7384',
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
            selector: 'page-my',template:/*ion-inline-start:"E:\salesman\src\pages\my\my.html"*/'<!--\n  Generated template for the MyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0 bgf5">\n  <div class="myHeader" (click)="openNavDetailsPage(\'my-detail\')">\n    <img [src]="info.profileURL" alt="" class="profileImage">\n    <div class="infoDesc">\n      <p style="font-size: 18px;">{{info.name}}</p>\n      <p style="font-size: 14px;">{{info.tel}}</p>\n    </div>\n  </div>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item.key)" icon-start>\n      <i [class]="\'iconfont \'+ item.icon" [ngStyle]="{\'color\': \'#ffd14d\'}" item-start></i>\n      {{ item.title }}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\my.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyPage);
    return MyPage;
}());

//# sourceMappingURL=my.js.map

/***/ })

});
//# sourceMappingURL=8.js.map