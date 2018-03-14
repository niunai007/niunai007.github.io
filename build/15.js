webpackJsonp([15],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentCustomerPageModule", function() { return AppointmentCustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_customer__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppointmentCustomerPageModule = (function () {
    function AppointmentCustomerPageModule() {
    }
    AppointmentCustomerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__appointment_customer__["a" /* AppointmentCustomerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__appointment_customer__["a" /* AppointmentCustomerPage */]),
            ],
        })
    ], AppointmentCustomerPageModule);
    return AppointmentCustomerPageModule;
}());

//# sourceMappingURL=appointment-customer.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentCustomerPage; });
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
 * Generated class for the AppointmentCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
                                tel: '135 **** 0344',
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
                                tel: '135 **** 0344',
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
                                tel: '135 **** 0344',
                                where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                            },
                            {
                                name: '陈少敏',
                                tel: '135 **** 0344',
                                where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                            },
                            {
                                name: '陈少敏',
                                tel: '135 **** 0344',
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
                                tel: '135 **** 0344',
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
                                    tel: '135 **** 0344',
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
                                    tel: '135 **** 0344',
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
                                    tel: '135 **** 0344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                                {
                                    name: '陈少敏',
                                    tel: '135 **** 0344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                                {
                                    name: '陈少敏',
                                    tel: '135 **** 0344',
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
                                    tel: '135 **** 0344',
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
                                    tel: '135 **** 0344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                                {
                                    name: '陈少敏',
                                    tel: '135 **** 0344',
                                    where: '广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)广州海珠221号3-1（广州分行)'
                                },
                                {
                                    name: '陈少敏',
                                    tel: '135 **** 0344',
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
            selector: 'page-appointment-customer',template:/*ion-inline-start:"E:\salesman\src\pages\my\appointment-customer\appointment-customer.html"*/'<!--\n  Generated template for the AppointmentCustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>客户预约</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pd0 ">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ul class="appointmentList">\n    <li *ngFor="let item of appointmentList">\n      <div class="appointmentDateContainer" [ngClass]="isToday(item.date)">\n        <span class="identify"></span>\n        <span class="date">{{item.date}}</span>\n      </div>\n      <div class="appointmentTimeContainer" *ngFor="let childItem of item.timeList">\n        <p class="time">{{childItem.time}}</p>\n        <ul class="appointmentDetailList">\n          <li *ngFor="let _item of childItem.detailList">\n            <div>\n              <span class="name">{{_item.name}}</span>\n              <span class="tel">{{_item.tel}}</span>\n            </div>\n            <p class="where">{{_item.where}}</p>\n          </li>\n        </ul>\n      </div>\n    </li>\n\n\n    <div class="timeLine"></div>\n  </ul>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\salesman\src\pages\my\appointment-customer\appointment-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AppointmentCustomerPage);
    return AppointmentCustomerPage;
}());

//# sourceMappingURL=appointment-customer.js.map

/***/ })

});
//# sourceMappingURL=15.js.map