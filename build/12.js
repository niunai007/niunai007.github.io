webpackJsonp([12],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTelSecondPageModule", function() { return EditTelSecondPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_tel_second__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditTelSecondPageModule = (function () {
    function EditTelSecondPageModule() {
    }
    EditTelSecondPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_tel_second__["a" /* EditTelSecondPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_tel_second__["a" /* EditTelSecondPage */]),
            ],
        })
    ], EditTelSecondPageModule);
    return EditTelSecondPageModule;
}());

//# sourceMappingURL=edit-tel-second.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTelSecondPage; });
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
 * Generated class for the EditTelSecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            selector: 'page-edit-tel-second',template:/*ion-inline-start:"E:\salesman\src\pages\my\edit-tel-second\edit-tel-second.html"*/'<!--\n  Generated template for the EditTelSecondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd30">\n  <div class="authCodeContainer">\n    <input type="number" placeholder="手机号" [(ngModel)]="tel">\n  </div>\n  <div class="authCodeContainer">\n    <input type="text" placeholder="请输入验证码" [(ngModel)]="authMessage">\n    <span *ngIf="countDown>1">({{countDown}})重新发送</span>\n    <span *ngIf="countDown===1" (click)=\'restartSendMessage()\' style="color:#15c182;">发送验证码</span>\n  </div>\n  <div class="reAuth">没有收到验证码？<span >点这里</span></div>\n  <div class="saveBtnContainer" style="position: static;">\n    <button (click)=\'save()\' [disabled]="!authMessage.trim().length>0&&!tel.toString().trim().length>0" class="anbutton saveBtn" ion-button >确定</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\edit-tel-second\edit-tel-second.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], EditTelSecondPage);
    return EditTelSecondPage;
}());

//# sourceMappingURL=edit-tel-second.js.map

/***/ })

});
//# sourceMappingURL=12.js.map