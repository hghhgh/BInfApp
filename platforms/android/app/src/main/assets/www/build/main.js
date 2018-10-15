webpackJsonp([5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHypPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__get_probs_get_probs__ = __webpack_require__(102);
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
 * Generated class for the AddHypPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddHypPage = /** @class */ (function () {
    function AddHypPage(viewCtrl, modalController, storage) {
        this.viewCtrl = viewCtrl;
        this.modalController = modalController;
        this.storage = storage;
        this.AllNames = [];
        this.FilteredNames = [];
        this.filtStr = '';
        this.loadAllHyps();
    }
    AddHypPage.prototype.loadAllHyps = function () {
        var _this = this;
        this.AllNames = [];
        this.FilteredNames = [];
        this.storage.keys().then(function (val) {
            val.forEach(function (k) {
                if (k.indexOf('hname') == 0) {
                    _this.storage.get(k).then(function (nval) {
                        // console.log(k);
                        _this.AllNames.push({ id: k, 'name': nval });
                        _this.FilteredNames.push({ id: k, 'name': nval });
                    });
                }
            });
        });
    };
    AddHypPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddHypPage');
    };
    AddHypPage.prototype.filterList = function () {
        // console.log('fil', this.filtStr);
        var sf = this.filtStr;
        this.FilteredNames = this.AllNames.filter(function (v) {
            // console.log('v', v['name'].toString());
            if (v['name'].toString().indexOf(sf) !== -1)
                return true;
        });
        // console.log(this.FilteredNames);
    };
    AddHypPage.prototype.itemSelected = function (item) {
        var _this = this;
        // console.log(item);
        // return;
        var profileModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__get_probs_get_probs__["a" /* GetProbsPage */], { id: item.id, name: item.name });
        profileModal.onDidDismiss(function (data) {
            if (data == null) {
                console.log('cancel !');
                return;
            }
            var id = item.id.split("_")[1];
            _this.storage.set('hprob_' + id, data.prob);
            console.log(data.prob);
        });
        profileModal.present();
    };
    AddHypPage.prototype.canclePage = function () {
        this.viewCtrl.dismiss();
    };
    AddHypPage.prototype.addNewHyp = function () {
        var _this = this;
        if (this.filtStr == '')
            return;
        this.storage.get('lasthypid').then(function (val) {
            var id = val + 1;
            _this.storage.set('hname_' + id, _this.filtStr);
            _this.storage.set('lasthypid', id);
            _this.loadAllHyps();
            _this.filtStr = '';
        });
    };
    AddHypPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-hyp',template:/*ion-inline-start:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/add-hyp/add-hyp.html"*/'<!--\n  Generated template for the AddHypPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      افزودن تشخیص جدید\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="canclePage()">\n        <span ion-text color="primary" showWhen="ios">لغو</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" stacked>نام تشخیص :</ion-label>\n      <ion-input type="text" placeholder="نام تشخیص" [(ngModel)]="filtStr" (ionChange)="filterList()"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button full (click)="addNewHyp()">افزودن تشخیص</button>\n    </ion-item>\n  </ion-list>\n  <hr>\n  <ion-list inset>\n    <ion-item *ngFor="let item of FilteredNames">\n      {{ item.name }}\n      <button ion-button item-end="" (click)="itemSelected(item)">ثبت احتمال(نرخ شیوع)</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/add-hyp/add-hyp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AddHypPage);
    return AddHypPage;
}());

//# sourceMappingURL=add-hyp.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetProbsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
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
 * Generated class for the GetProbsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetProbsPage = /** @class */ (function () {
    function GetProbsPage(viewCtrl, navCtrl, navParams, storage) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.id = "";
        this.name = "";
        this.prob = 0.0;
        this.sliderValue = 0;
        console.log('name:', navParams.get('name'));
        this.id = navParams.get('id');
        this.name = navParams.get('name');
        var k = "hprob_" + this.id.split("_")[1];
        this.storage.get(k).then(function (nval) {
            _this.prob = nval;
            _this.sliderValue = nval * 10000;
        });
    }
    GetProbsPage.prototype.ionViewDidLoad = function () {
    };
    GetProbsPage.prototype.dismiss = function () {
        var data = { name: this.name, prob: this.prob };
        this.viewCtrl.dismiss(data);
    };
    GetProbsPage.prototype.canclePage = function () {
        this.viewCtrl.dismiss();
    };
    GetProbsPage.prototype.updateProb = function (e) {
        this.prob = this.sliderValue / 10000.0;
    };
    GetProbsPage.prototype.updateSlideBar = function () {
        this.sliderValue = this.prob * 10000.0;
    };
    GetProbsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-get-probs',template:/*ion-inline-start:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/get-probs/get-probs.html"*/'<!--\n  Generated template for the GetProbsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>\n      ثبت مقدار احتمال پیشین(تخمین ما)\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="canclePage()">\n        <span ion-text color="primary" showWhen="ios">لغو</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-label color="primary" stacked>نام مشکل(فرضیه) : {{name}}</ion-label>\n  <hr>\n  <div dir="ltr">\n    <ion-range min="0" max="10000" step="1" (ionChange)="updateProb()" [(ngModel)]="sliderValue">\n      <ion-label range-left>0</ion-label>\n      <ion-label range-right>1.0</ion-label>\n    </ion-range>\n  </div>\n    <ion-label color="primary" stacked>احتمال مثبت بودن تشخیص (براساس نرخ شیوع):</ion-label>\n    <ion-input type="number" pattern="0.[0-9]" placeholder="0.####" [(ngModel)]="prob" clearInput\n               (ionChange)="updateSlideBar()"></ion-input>\n  <button ion-button full (click)="dismiss()">ثبت و بستن</button>\n\n  <!--<button ion-button full (click)="canclePage()">لغو</button>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/get-probs/get-probs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], GetProbsPage);
    return GetProbsPage;
}());

//# sourceMappingURL=get-probs.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_conditional_set_conditional__ = __webpack_require__(104);
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
 * Generated class for the AddTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTestPage = /** @class */ (function () {
    function AddTestPage(viewCtrl, navCtrl, storage) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.AllNames = [];
        this.FilteredNames = [];
        this.filtStr = '';
        this.loadAllVars();
    }
    AddTestPage.prototype.loadAllVars = function () {
        var _this = this;
        this.AllNames = [];
        this.FilteredNames = [];
        this.storage.keys().then(function (val) {
            val.forEach(function (k) {
                if (k.indexOf('tname') == 0) {
                    _this.storage.get(k).then(function (nval) {
                        // console.log(k);
                        _this.AllNames.push({ id: k, 'name': nval });
                        _this.FilteredNames.push({ id: k, 'name': nval });
                    });
                }
            });
        });
    };
    AddTestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddHypPage');
    };
    AddTestPage.prototype.filterList = function () {
        // console.log('fil', this.filtStr);
        var sf = this.filtStr;
        this.FilteredNames = this.AllNames.filter(function (v) {
            // console.log('v', v['name'].toString());
            if (v['name'].toString().indexOf(sf) !== -1)
                return true;
        });
        // console.log(this.FilteredNames);
    };
    AddTestPage.prototype.itemSelected = function (item) {
        // console.log(item);
        // return;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__set_conditional_set_conditional__["a" /* SetConditionalPage */], {
            seconditem: {
                id: item.id,
                title: item.name,
            }
        });
    };
    AddTestPage.prototype.canclePage = function () {
        this.viewCtrl.dismiss();
    };
    AddTestPage.prototype.addNewTest = function () {
        var _this = this;
        if (this.filtStr == '')
            return;
        this.storage.get('lasttestid').then(function (val) {
            var id = val + 1;
            _this.storage.set('tname_' + id, _this.filtStr);
            _this.storage.set('lasttestid', id);
            _this.loadAllVars();
            _this.filtStr = '';
        });
    };
    AddTestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-test',template:/*ion-inline-start:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/add-test/add-test.html"*/'<!--\n  Generated template for the AddTestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      افزودن تست جدید\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="canclePage()">\n        <span ion-text color="primary" showWhen="ios">لغو</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" stacked>نام تست :</ion-label>\n      <ion-input type="text" placeholder="نام متغیر" [(ngModel)]="filtStr" (ionChange)="filterList()"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button full (click)="addNewTest()">افزودن متغیر</button>\n    </ion-item>\n  </ion-list>\n  <hr>\n  <ion-list inset>\n    <ion-item *ngFor="let item of FilteredNames">\n      {{ item.name }}\n      <button ion-button item-end="" (click)="itemSelected(item)">ثبت دقت تست</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/add-test/add-test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AddTestPage);
    return AddTestPage;
}());

//# sourceMappingURL=add-test.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetConditionalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
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
 * Generated class for the SetConditionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetConditionalPage = /** @class */ (function () {
    function SetConditionalPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.P_Tp_Hp = 0.0;
        this.P_Tn_Hn = 0.0;
        this.sliderValueP_Tp_Hp = 0;
        this.sliderValueP_Tn_Hn = 0;
        // If we navigated to this page, we will have an item available as a nav param
        this.firstItem = navParams.get('firstitem'); // this is the Hypothesis
        this.secondItem = navParams.get('seconditem'); // it is the Test
        this.items = [];
        this.storage.keys().then(function (val) {
            val.forEach(function (k) {
                if (k.indexOf('hname') == 0) {
                    _this.storage.get(k).then(function (nval) {
                        _this.items.push({ id: k, title: nval });
                    });
                }
            });
        });
        if (this.firstItem && this.secondItem) {
            var keyP_Ep_Hp = 'P-Tp-Hp_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
            this.storage.get('cprob_' + keyP_Ep_Hp).then(function (val) {
                // if(val) {
                _this.P_Tp_Hp = val;
                _this.sliderValueP_Tp_Hp = val * 1000;
                // }
            });
            var keyP_En_Hn = 'P-Tn-Hn_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
            this.storage.get('cprob_' + keyP_En_Hn).then(function (val) {
                // if(val) {
                _this.P_Tn_Hn = val;
                _this.sliderValueP_Tn_Hn = val * 1000;
                // }
            });
        }
    }
    SetConditionalPage_1 = SetConditionalPage;
    SetConditionalPage.prototype.itemTapped = function (event, item) {
        console.log('first ', this.firstItem);
        console.log('second ', this.secondItem);
        if (!this.firstItem) {
            // That's right, we're pushing to ourselves!
            this.navCtrl.push(SetConditionalPage_1, {
                firstitem: item,
                seconditem: this.secondItem,
            });
        }
    };
    SetConditionalPage.prototype.updateP_Tp_Hp = function (e) {
        this.P_Tp_Hp = this.sliderValueP_Tp_Hp / 1000.0;
    };
    SetConditionalPage.prototype.updateP_Tn_Hn = function () {
        this.P_Tn_Hn = this.sliderValueP_Tn_Hn / 1000.0;
    };
    SetConditionalPage.prototype.saveAndReturn = function () {
        var keyP_Ep_Hp = 'P-Tp-Hp_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
        var nameP_Ep_Hp = 'P-Tp-Hp_' + '_' + this.secondItem.title + '_' + this.firstItem.title;
        this.storage.set('cname_' + keyP_Ep_Hp, nameP_Ep_Hp);
        this.storage.set('cprob_' + keyP_Ep_Hp, this.P_Tp_Hp);
        var keyP_En_Hn = 'P-Tn-Hn_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
        var nameP_En_Hn = 'P-Tn-Hn_' + '_' + this.secondItem.title + '_' + this.firstItem.title;
        this.storage.set('cname_' + keyP_En_Hn, nameP_En_Hn);
        this.storage.set('cprob_' + keyP_En_Hn, this.P_Tn_Hn);
        this.navCtrl.pop();
    };
    SetConditionalPage.prototype.updateSliderP_Tn_Hn = function () {
        this.sliderValueP_Tn_Hn = this.P_Tn_Hn * 1000.0;
    };
    SetConditionalPage.prototype.updateSliderP_Tp_Hp = function () {
        this.sliderValueP_Tp_Hp = this.P_Tp_Hp * 1000.0;
    };
    SetConditionalPage = SetConditionalPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-conditional',template:/*ion-inline-start:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/set-conditional/set-conditional.html"*/'<!--\n  Generated template for the SetConditionalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>تعیین احتمال شرطی</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="!firstItem && !secondItem"> شرط</div>\n  <div *ngIf="firstItem && !secondItem"> احتمال</div>\n  <div *ngIf="!firstItem || !secondItem">\n    <ion-list>\n      <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n        تشخیص : {{item.title}}\n      </button>\n    </ion-list>\n  </div>\n  <div *ngIf="firstItem && secondItem" padding>\n    احتمال :\n    <b>{{secondItem.title}}</b>\n    به شرط :\n    <b>{{firstItem.title}}</b>\n    <hr>\n\n    <div dir="ltr">\n      P(T+ | H+) or sensitivity:\n      <ion-range min="0" max="1000" step="1" (ionChange)="updateP_Tp_Hp()" [(ngModel)]="sliderValueP_Tp_Hp">\n        <ion-label range-left>0</ion-label>\n        <ion-label range-right>1.0</ion-label>\n      </ion-range>\n    </div>\n    <ion-label color="primary" stacked>احتمال مثبت بودن تست به شرط مثبت بودن تشخیص:</ion-label>\n    <ion-input type="number" pattern="0.[0-9]" placeholder="0.###" [(ngModel)]="P_Tp_Hp" clearInput (ionChange)="updateSliderP_Tp_Hp()"></ion-input>\n    <hr>\n    <div dir="ltr">\n      P(T- | H-) or specificity :\n      <ion-range min="0" max="1000" step="1" (ionChange)="updateP_Tn_Hn()" [(ngModel)]="sliderValueP_Tn_Hn">\n        <ion-label range-left>0</ion-label>\n        <ion-label range-right>1.0</ion-label>\n      </ion-range>\n    </div>\n    <ion-label color="primary" stacked>احتمال منفی بودن تست به شرط منفی بودن تشخیص</ion-label>\n    <ion-input type="number" pattern="0.[0-9]" placeholder="0.###" [(ngModel)]="P_Tn_Hn" clearInput (ionChange)="updateSliderP_Tn_Hn()"></ion-input>\n\n    <button ion-button full (click)="saveAndReturn()">ثبت و بستن</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/set-conditional/set-conditional.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SetConditionalPage);
    return SetConditionalPage;
    var SetConditionalPage_1;
}());

//# sourceMappingURL=set-conditional.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
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
 * Generated class for the InferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InferencePage = /** @class */ (function () {
    function InferencePage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.step = 0;
        this.filtStr = '';
        this.P_Hp_Tp = 0.0;
        this.newprior = -1;
        // If we navigated to this page, we will have an item available as a nav param
        this.step = navParams.get('step');
        console.log('step: ', this.step);
        this.firstItem = navParams.get('firstitem'); // Hypothesis
        this.secondItem = navParams.get('seconditem'); // Test
        this.newprior = navParams.get('newprior');
        this.Hitems = [];
        this.FHitems = [];
        this.Titems = [];
        this.FTitems = [];
        this.storage.keys().then(function (val) {
            val.forEach(function (k) {
                if (k.indexOf('hname') == 0) {
                    _this.storage.get(k).then(function (nval) {
                        var pk = k.replace('hname_', 'hprob_');
                        // console.log(pk);
                        _this.storage.get(pk).then(function (pval) {
                            _this.Hitems.push({ id: k, title: nval, prob: pval });
                            _this.FHitems.push({ id: k, title: nval, prob: pval });
                        });
                    });
                }
                if (k.indexOf('tname') == 0) {
                    var pk = k.replace('hname_', 'tname_');
                    _this.storage.get(pk).then(function (nval) {
                        _this.Titems.push({ id: k, title: nval });
                        _this.FTitems.push({ id: k, title: nval });
                    });
                }
            });
        });
        if (this.step > 1) {
            var keyP_Ep_Hp = 'P-Tp-Hp_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
            console.log('keyP_Ep_Hp: ', keyP_Ep_Hp);
            this.storage.get('cprob_' + keyP_Ep_Hp).then(function (P_Ep_Hp) {
                if (P_Ep_Hp) {
                    var keyP_En_Hn = 'P-Tn-Hn_' + _this.secondItem.id.split('_')[1] + '_' + _this.firstItem.id.split('_')[1];
                    console.log('keyP_En_Hn: ', keyP_En_Hn);
                    _this.storage.get('cprob_' + keyP_En_Hn).then(function (P_En_Hn) {
                        if (P_En_Hn) {
                            // console.log(this.newprior);
                            if (!_this.newprior || _this.newprior < 0) {
                                _this.storage.get('hprob_' + _this.firstItem.id.split('_')[1]).then(function (P_Hp) {
                                    // console.log('P_Hp',P_Hp);
                                    // console.log('P_Ep_Hp',P_Ep_Hp);
                                    // console.log('P_En_Hn',P_En_Hn);
                                    var prs = _this.findProbabilities(P_Hp, P_Ep_Hp, P_En_Hn);
                                    // console.log(prs);
                                    _this.P_Hp_Tp = _this.inferBayesian(prs);
                                });
                            }
                            else {
                                var prs = _this.findProbabilities(_this.newprior, P_Ep_Hp, P_En_Hn);
                                _this.P_Hp_Tp = _this.inferBayesian(prs);
                            }
                        }
                        else {
                            console.log('no P_Tn_Hn');
                        }
                    });
                }
                else {
                    console.log('no P_Tp_Hp');
                }
            });
        }
    }
    InferencePage_1 = InferencePage;
    InferencePage.prototype.itemTapped = function (event, item) {
        if (this.step == 0) {
            // That's right, we're pushing to ourselves!
            this.navCtrl.push(InferencePage_1, {
                seconditem: item,
                step: this.step + 1,
            });
        }
        else if (this.step == 1) {
            this.navCtrl.push(InferencePage_1, {
                firstitem: this.secondItem,
                seconditem: item,
                step: this.step + 1,
            });
        }
        else if (this.step > 1) {
            this.navCtrl.push(InferencePage_1, {
                seconditem: item,
                firstitem: this.firstItem,
                step: this.step + 1,
                newprior: this.P_Hp_Tp,
            });
        }
    };
    InferencePage.prototype.filterList = function (type) {
        var sf = this.filtStr;
        if (type == 'H') {
            this.FHitems = this.Hitems.filter(function (v) {
                if (v.title.indexOf(sf) !== -1)
                    return true;
            });
        }
        else if (type == 'T') {
            this.FTitems = this.Titems.filter(function (v) {
                // console.log('v', v['name'].toString());
                if (v.title.indexOf(sf) !== -1)
                    return true;
            });
        }
    };
    InferencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InferencePage');
    };
    /**
     * Baysian inference functions
     * target is P(Hypothesis | Evidence) = P(H and E) / P(E)
     * H+(or Hp) means the target is sick
     * H-(or Hn) means the target is healthy
     * E+(or Ep) means the Evidence is occured
     * E-(or En) means the Evidence isn't occured
     *
     * P_Hp = .0; // from our knowledge or litrature
     * P_Ep_Hp = .0; // from specification of the test that provides the evidence
     * P_En_Hn = .0; // from specification of the test that provides the evidence
     */
    InferencePage.prototype.findProbabilities = function (P_Hp, P_Ep_Hp, P_En_Hn) {
        //  if P(H+)
        //  P_Hp
        //  P_Ep_Hp
        var P_En_Hp = 1 - P_Ep_Hp;
        // if P(H-)
        var P_Hn = 1.0 - P_Hp;
        //  P_Tn_Hn
        var P_Ep_Hn = 1 - P_En_Hn;
        var res = {
            P_Hp: P_Hp,
            P_Ep_Hp: P_Ep_Hp,
            P_En_Hp: P_En_Hp,
            P_Hn: P_Hn,
            P_Ep_Hn: P_Ep_Hn,
            P_En_Hn: P_En_Hn
        };
        return res;
    };
    /**
     * Infer based on Bayes rule
     *
     * return : the probability of being sick given positive evidence
     */
    InferencePage.prototype.inferBayesian = function (probs) {
        var P_HpEp = probs.P_Hp * probs.P_Ep_Hp;
        var P_HnEp = probs.P_Hn * probs.P_Ep_Hn;
        var denom = P_HpEp + P_HnEp;
        console.log('P_HpEp', P_HpEp);
        console.log('P_HnEp', P_HnEp);
        console.log('denom', denom);
        // P_Hp_Ep
        return P_HpEp / denom;
    };
    InferencePage = InferencePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inference',template:/*ion-inline-start:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/inference/inference.html"*/'<!--\n  Generated template for the InferencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>استنتاج</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <button ion-button full *ngIf="step >= 1">دلیل: {{step}}</button>\n  <div *ngIf="step >= 2" padding>\n    احتمال :\n    <b> {{firstItem.title}} </b>\n    باوجود :\n    <b> {{secondItem.title}} </b>\n    <div dir="ltr">\n      <ion-label color="primary" stacked>Probability Score (0.###):</ion-label>\n      <ion-input type="number" pattern="0.[0-9]" placeholder="0.###" [(ngModel)]="P_Hp_Tp" clearInput></ion-input>\n    </div>\n  </div>\n  <hr>\n  <div padding>\n    <ion-list *ngIf="step == 0">\n      <ion-item>\n        <ion-label color="primary" stacked>نام تشخیص :</ion-label>\n        <ion-input type="text" placeholder="نام تشخیص" [(ngModel)]="filtStr" (ionChange)="filterList(\'H\')"></ion-input>\n      </ion-item>\n      <button ion-item *ngFor="let item of FHitems" (click)="itemTapped($event, item)">\n        تشخیص مثبت بودن : {{item.title}}\n      </button>\n    </ion-list>\n    <h3 *ngIf="step >= 2">\n      بروزرسانی با تست جدید :\n    </h3>\n    <ion-list *ngIf="step >= 1">\n      <ion-item>\n        <ion-label color="primary" stacked>نام تست :</ion-label>\n        <ion-input type="text" placeholder="نام تست" [(ngModel)]="filtStr" (ionChange)="filterList(\'T\')"></ion-input>\n      </ion-item>\n      <button ion-item *ngFor="let item of FTitems" (click)="itemTapped($event, item)">\n        درصورت مثبت بودن : {{item.title}}\n      </button>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/inference/inference.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], InferencePage);
    return InferencePage;
    var InferencePage_1;
}());

//# sourceMappingURL=inference.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-hyp/add-hyp.module": [
		277,
		4
	],
	"../pages/add-test/add-test.module": [
		278,
		3
	],
	"../pages/get-probs/get-probs.module": [
		279,
		2
	],
	"../pages/inference/inference.module": [
		280,
		1
	],
	"../pages/set-conditional/set-conditional.module": [
		281,
		0
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_hyp_add_hyp__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inference_inference__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_test_add_test__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalController, storage) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.storage = storage;
        // Or to get a key/value pair
        this.storage.get('lastrun').then(function (val) {
            console.log('last run: ', val);
        });
    }
    HomePage.prototype.openNewVarPage = function () {
        var profileModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__add_hyp_add_hyp__["a" /* AddHypPage */]);
        profileModal.onDidDismiss(function (data) {
            if (data == null) {
                console.log('cancel !');
                return;
            }
        });
        profileModal.present();
    };
    HomePage.prototype.openSetConditionalPage = function () {
        // let profileModal = this.modalController.create(SetConditionalPage);
        // profileModal.onDidDismiss(data => {
        //   if (data == null){
        //     console.log('cancel !');
        //     return;
        //   }
        // });
        // profileModal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_test_add_test__["a" /* AddTestPage */]);
    };
    HomePage.prototype.openInferencePage = function () {
        // let profileModal = this.modalController.create(InferencePage);
        // profileModal.onDidDismiss(data => {
        //   if (data == null){
        //     console.log('cancel !');
        //     return;
        //   }
        // });
        // profileModal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inference_inference__["a" /* InferencePage */], { step: 0 });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>صفحه اصلی</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full (click)="openNewVarPage()">افزودن تشخیص</button>\n  <button ion-button full (click)="openSetConditionalPage()">افزودن تست</button>\n  <hr>\n  <button ion-button full color="secondary" (click)="openInferencePage()">تشخیص(استنتاج)</button>\n</ion-content>\n\n'/*ion-inline-end:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        this.storage.keys().then(function (val) {
            // console.log('keys ', val);
            val.forEach(function (k) {
                // console.log('k', k);
                // console.log('k.indexOf(\'name\')', k.indexOf('name'));
                // if(k.indexOf('name') >= 0)
                {
                    _this.storage.get(k).then(function (nval) {
                        // console.log('nval', nval);
                        // var pk = k.split('_')[1];
                        _this.items.push({
                            key: k,
                            title: nval,
                            icon: _this.icons[Math.floor(Math.random() * _this.icons.length)]
                        });
                    });
                }
            });
        });
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage.prototype.clearAllData = function () {
        this.storage.clear();
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content dir="ltr">\n  <button ion-button full (click)="clearAllData()">پاک کردن پایگاه داده</button>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      {{item.key}} : {{item.title}}\n    </button>\n  </ion-list>\n  <div *ngIf="firstItem" padding>\n    You navigated here from <b>{{firstItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ghiassi/Projects/fromGit/BInfApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_get_probs_get_probs__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_hyp_add_hyp__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_set_conditional_set_conditional__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_inference_inference__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_test_add_test__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_get_probs_get_probs__["a" /* GetProbsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_hyp_add_hyp__["a" /* AddHypPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_set_conditional_set_conditional__["a" /* SetConditionalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inference_inference__["a" /* InferencePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_test_add_test__["a" /* AddTestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-hyp/add-hyp.module#AddVarPageModule', name: 'AddHypPage', segment: 'add-hyp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-test/add-test.module#AddTestPageModule', name: 'AddTestPage', segment: 'add-test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/get-probs/get-probs.module#GetProbsPageModule', name: 'GetProbsPage', segment: 'get-probs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inference/inference.module#InferencePageModule', name: 'InferencePage', segment: 'inference', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-conditional/set-conditional.module#SetConditionalPageModule', name: 'SetConditionalPage', segment: 'set-conditional', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_get_probs_get_probs__["a" /* GetProbsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_hyp_add_hyp__["a" /* AddHypPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_set_conditional_set_conditional__["a" /* SetConditionalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inference_inference__["a" /* InferencePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_test_add_test__["a" /* AddTestPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // this.storage.clear();
        // set a key/value
        this.storage.get('lastrun').then(function (val) {
            if (val == null) {
                _this.storage.set('lasthypid', 1);
                _this.storage.set('lasttestid', 1);
                _this.storage.set('lastrun', new Date().getDate());
            }
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'صفحه نخست', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'تمام متغیرها', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ghiassi/Projects/fromGit/BInfApp/src/app/app.html"*/'<ion-menu [content]="content" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>منو</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/ghiassi/Projects/fromGit/BInfApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map