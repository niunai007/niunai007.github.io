webpackJsonp([14],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPwdPageModule", function() { return EditPwdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_pwd__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPwdPageModule = (function () {
    function EditPwdPageModule() {
    }
    EditPwdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_pwd__["a" /* EditPwdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_pwd__["a" /* EditPwdPage */]),
            ],
        })
    ], EditPwdPageModule);
    return EditPwdPageModule;
}());

//# sourceMappingURL=edit-pwd.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPwdPage; });
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
 * Generated class for the EditPwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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

/***/ })

});
//# sourceMappingURL=14.js.map