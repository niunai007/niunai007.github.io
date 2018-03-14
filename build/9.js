webpackJsonp([9],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMessagePageModule", function() { return MyMessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_message__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyMessagePageModule = (function () {
    function MyMessagePageModule() {
    }
    MyMessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_message__["a" /* MyMessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__my_message__["a" /* MyMessagePage */]),
            ],
        })
    ], MyMessagePageModule);
    return MyMessagePageModule;
}());

//# sourceMappingURL=my-message.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMessagePage; });
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
 * Generated class for the MyMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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

/***/ })

});
//# sourceMappingURL=9.js.map