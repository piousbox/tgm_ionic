(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~LayoutMap-map-module~NewsitemsComponent-Newsitems-module"],{

/***/ "./src/app/GalleriesComponent/GalleriesShow.html":
/*!*******************************************************!*\
  !*** ./src/app/GalleriesComponent/GalleriesShow.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <h1>Name: {{gallery.name}}</h1>\n  <div *ngIf=\"gallery.is_premium && !gallery.is_purchased\" >\n    <ion-button (click)=\"purchase()\" >Purchase</ion-button>\n  </div>\n  <p>message: {{gallery.message}}</p>\n  <p>description: {{gallery.description}}</p>\n\n  <div class='card' *ngFor=\"let ph of gallery.photos\">\n    <div class='card-inner'>\n      <ion-img [src]=ph.large_url ></ion-img>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/GalleriesComponent/GalleriesShow.ts":
/*!*****************************************************!*\
  !*** ./src/app/GalleriesComponent/GalleriesShow.ts ***!
  \*****************************************************/
/*! exports provided: GalleriesShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriesShow", function() { return GalleriesShow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-router */ "./src/app/app-router.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var GalleriesShow = /** @class */ (function () {
    function GalleriesShow(appService, httpClient, modalController, nativeStorage) {
        this.appService = appService;
        this.httpClient = httpClient;
        this.modalController = modalController;
        this.nativeStorage = nativeStorage;
        this.gallery = false;
        if (this.slug) {
            this.ngOnInit();
        }
    }
    GalleriesShow.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_const__WEBPACK_IMPORTED_MODULE_6__["logg"])(this.slug, 'GalleriesShow ngOnInit() slug');
                        if (!this.slug) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.nativeStorage.getItem('current_user').then(function (r) { return JSON.parse(r); }).then(function (cu) {
                                return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accessToken', cu.longTermToken);
                            }).catch(function (e) {
                                return {};
                            })];
                    case 1:
                        params = _a.sent();
                        return [4 /*yield*/, this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_4__["ApiRouter"].galleriesShow(this.slug), { params: params }).toPromise()];
                    case 2:
                        answer = _a.sent();
                        this.gallery = answer['gallery'];
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GalleriesShow.prototype.purchase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, answer;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nativeStorage.getItem('current_user').then(function (r) { return JSON.parse(r); }).then(function (cu) {
                            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accessToken', cu.longTermToken).set('className', 'Gallery').set('slug', _this.slug);
                        }).catch(function (e) {
                            throw 'this cannot happen';
                            return {};
                        })];
                    case 1:
                        params = _a.sent();
                        return [4 /*yield*/, this.httpClient.post(_app_router__WEBPACK_IMPORTED_MODULE_4__["ApiRouter"].doPurchase, params).toPromise()];
                    case 2:
                        answer = _a.sent();
                        Object(_const__WEBPACK_IMPORTED_MODULE_6__["logg"])(answer, 'a12 - answer');
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GalleriesShow.prototype, "slug", void 0);
    GalleriesShow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'galleries-show',
            template: __webpack_require__(/*! ./GalleriesShow.html */ "./src/app/GalleriesComponent/GalleriesShow.html"),
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]])
    ], GalleriesShow);
    return GalleriesShow;
}());



/***/ }),

/***/ "./src/app/NewsitemsComponent/Newsitems.module.ts":
/*!********************************************************!*\
  !*** ./src/app/NewsitemsComponent/Newsitems.module.ts ***!
  \********************************************************/
/*! exports provided: NewsitemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsitemsModule", function() { return NewsitemsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _homefeed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homefeed.page */ "./src/app/NewsitemsComponent/homefeed.page.ts");
/* harmony import */ var _newsfeed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsfeed.page */ "./src/app/NewsitemsComponent/newsfeed.page.ts");
/* harmony import */ var _newsitems_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newsitems.list */ "./src/app/NewsitemsComponent/newsitems.list.ts");
/* harmony import */ var _GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../GalleriesComponent/GalleriesShow */ "./src/app/GalleriesComponent/GalleriesShow.ts");
/* harmony import */ var _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../LayoutSidemenu/LayoutSidemenu.module */ "./src/app/LayoutSidemenu/LayoutSidemenu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _homefeed_page__WEBPACK_IMPORTED_MODULE_5__["HomefeedPage"] },
    { path: 'news', component: _newsfeed_page__WEBPACK_IMPORTED_MODULE_6__["NewsfeedPage"] },
];
var NewsitemsModule = /** @class */ (function () {
    function NewsitemsModule() {
    }
    NewsitemsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_8__["GalleriesShow"], _homefeed_page__WEBPACK_IMPORTED_MODULE_5__["HomefeedPage"], _newsfeed_page__WEBPACK_IMPORTED_MODULE_6__["NewsfeedPage"], _newsitems_list__WEBPACK_IMPORTED_MODULE_7__["NewsitemsList"],],
            entryComponents: [_GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_8__["GalleriesShow"],],
            exports: [_newsitems_list__WEBPACK_IMPORTED_MODULE_7__["NewsitemsList"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_9__["LayoutSidemenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
        })
    ], NewsitemsModule);
    return NewsitemsModule;
}());



/***/ }),

/***/ "./src/app/NewsitemsComponent/homefeed.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/NewsitemsComponent/homefeed.page.ts ***!
  \*****************************************************/
/*! exports provided: HomefeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomefeedPage", function() { return HomefeedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-router */ "./src/app/app-router.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HomefeedPage = /** @class */ (function () {
    function HomefeedPage(appService, nativeStorage, router, httpClient, toastController) {
        this.appService = appService;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.newsitems = [];
        this.hasCalled = false;
        // logg('HomefeedPage.constructor()');
        // appService.setTitle('Homefeed!');
        this.ngOnInit();
    }
    HomefeedPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.hasCalled) return [3 /*break*/, 2];
                        this.hasCalled = true;
                        return [4 /*yield*/, this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_5__["ApiRouter"].homefeed).toPromise()];
                    case 1:
                        answer = _a.sent();
                        this.newsitems = answer['newsitems'];
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HomefeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'homefeed',
            template: __webpack_require__(/*! ./newsfeed.page.html */ "./src/app/NewsitemsComponent/newsfeed.page.html"),
            styles: [__webpack_require__(/*! ./newsitems.scss */ "./src/app/NewsitemsComponent/newsitems.scss")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], HomefeedPage);
    return HomefeedPage;
}());



/***/ }),

/***/ "./src/app/NewsitemsComponent/newsfeed.page.html":
/*!*******************************************************!*\
  !*** ./src/app/NewsitemsComponent/newsfeed.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<layout-sidemenu>\n  <ion-content>\n\n    <newsitems-list [newsitems]=newsitems ></newsitems-list>  \n    \n  </ion-content>\n</layout-sidemenu>\n\n"

/***/ }),

/***/ "./src/app/NewsitemsComponent/newsfeed.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/NewsitemsComponent/newsfeed.page.ts ***!
  \*****************************************************/
/*! exports provided: NewsfeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPage", function() { return NewsfeedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-router */ "./src/app/app-router.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var NewsfeedPage = /** @class */ (function () {
    function NewsfeedPage(appService, nativeStorage, router, httpClient, toastController) {
        this.appService = appService;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.newsitems = [];
        Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])('HomefeedPage.constructor()');
        this.ngOnInit();
    }
    NewsfeedPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_5__["ApiRouter"].homefeed).toPromise()];
                    case 1:
                        answer = _a.sent();
                        this.newsitems = answer['newsitems'];
                        return [2 /*return*/];
                }
            });
        });
    };
    NewsfeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newsfeed',
            template: __webpack_require__(/*! ./newsfeed.page.html */ "./src/app/NewsitemsComponent/newsfeed.page.html"),
            styles: [__webpack_require__(/*! ./newsitems.scss */ "./src/app/NewsitemsComponent/newsitems.scss")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], NewsfeedPage);
    return NewsfeedPage;
}());



/***/ }),

/***/ "./src/app/NewsitemsComponent/newsitems-list.html":
/*!********************************************************!*\
  !*** ./src/app/NewsitemsComponent/newsitems-list.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!newsitems || newsitems.length == 0\" >\n  <br /><br /><br />\n  <h1>Loading...</h1>\n  <br /><br /><br />\n</div>\n\n<div class=\"a-1\" *ngFor=\"let n of newsitems\">\n\n  <!--\n    -- gallery\n  -->\n  <div class='row' *ngIf=\"n.item_type=='gallery'\" >\n    <div class='title-card'>\n      <div class='title-card-inner'>\n        <h1 (click)=\"showGallery(n.galleryname)\" ><ion-icon slot=\"start\" name='camera'></ion-icon> &nbsp; {{ n.name }} ({{ n.photos.length }})</h1>\n        \n        <div class='metaline' >\n          <div class='premium-tier' *ngIf=\"n.premium_tier && n.premium_tier > 0\" >\n            <b class=\"{{n.is_purchased ? 'purchased' : ''}}\" >$ {{n.premium_tier}}</b>\n          </div>\n          {{n.created_at.substring(0,10)}}\n        </div>\n\n      </div>\n    </div>\n    <div class='card' *ngFor=\"let ph of n.photos | slice:0:3\">\n      <div class='card-inner'>\n        <div class='img'\n          [ngStyle]=\"{ background: '#cccccc url('+ph.large_url+')', \n            'background-repeat': 'no-repeat', 'background-position': 'center',\n            'background-size': 'contain' }\" \n        >&nbsp;</div>\n      </div>\n    </div>\n  </div>\n\n  <div class='row-newsitems-video' *ngIf=\"n.item_type=='video'\" >\n    <div class='title-card'>\n      <div class='title-card-inner'>\n        <h1><ion-icon slot=\"start\" name='videocam'></ion-icon> &nbsp; {{ n.name }}</h1>\n        <p><i>{{ n.created_at.substring(0,10) }}</i></p>\n      </div>\n    </div>\n    <div class='card'>\n      <div class='card-inner'>\n        <div *ngIf=\"n.youtube_id\" >\n          <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/{{n.youtube_id}}\" \n            frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n        </div>\n        <!-- <video src=\"{{ n.url }}\" width=\"100%\" controls ></video> -->\n      </div>\n    </div>\n  </div>\n\n  <div class='row' *ngIf=\"n.item_type=='report'\" >\n    <div class='title-card'>\n      <div class='title-card-inner'>\n        <h1><ion-icon slot=\"start\" name='today' ></ion-icon> &nbsp; <a [routerLink]=\"['/en/reports/show/'+n.reportname]\" >{{ n.name }}</a></h1>\n        <p>{{ n.created_at.substring(0,10) }}</p>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/NewsitemsComponent/newsitems.list.ts":
/*!******************************************************!*\
  !*** ./src/app/NewsitemsComponent/newsitems.list.ts ***!
  \******************************************************/
/*! exports provided: NewsitemsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsitemsList", function() { return NewsitemsList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
/* harmony import */ var _GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GalleriesComponent/GalleriesShow */ "./src/app/GalleriesComponent/GalleriesShow.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var NewsitemsList = /** @class */ (function () {
    function NewsitemsList(appService, modalController, nativeStorage, router, httpClient, toastController) {
        this.appService = appService;
        this.modalController = modalController;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.newsitems = [];
        // logg('NewsitemsList constructor()');
        this.ngOnInit();
    }
    NewsitemsList.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    NewsitemsList.prototype.showGallery = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_const__WEBPACK_IMPORTED_MODULE_6__["logg"])(slug, 'showGallery()');
                        return [4 /*yield*/, this.modalController.create({
                                component: _GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_7__["GalleriesShow"],
                                componentProps: { slug: slug },
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewsitemsList.prototype, "newsitems", void 0);
    NewsitemsList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newsitems-list',
            template: __webpack_require__(/*! ./newsitems-list.html */ "./src/app/NewsitemsComponent/newsitems-list.html"),
            styles: [__webpack_require__(/*! ./newsitems.scss */ "./src/app/NewsitemsComponent/newsitems.scss")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], NewsitemsList);
    return NewsitemsList;
}());



/***/ }),

/***/ "./src/app/NewsitemsComponent/newsitems.scss":
/*!***************************************************!*\
  !*** ./src/app/NewsitemsComponent/newsitems.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  overflow: scroll; }\n\n.a-1 {\n  width: 100%;\n  height: 100%; }\n\n.row {\n  height: calc(100% - 40px);\n  overflow-x: scroll;\n  overflow-y: hidden;\n  /* margin: 20px; */\n  display: -webkit-box;\n  display: flex;\n  /* align-items: center;\n  justify-content: center; */\n  width: auto; }\n\n.title-card {\n  width: 35vw;\n  min-width: 250px;\n  margin-right: 40px; }\n\n.title-card-inner {\n  /* border: 2px solid green; */\n  width: 100%;\n  background: #eee;\n  height: calc(100% - 80px);\n  margin: 20px;\n  padding: 20px; }\n\n.card-inner {\n  /* border: 1px solid red; */\n  padding: 10px;\n  height: 100%; }\n\n.card img {\n  max-height: calc(100% - 20px);\n  max-width: calc(100vw - 40px);\n  /* max-height: 100%;\n  max-width: 100%; */ }\n\n.img {\n  width: calc(100vw - 1em);\n  /* height: calc(100% - 1em); */\n  height: 100%; }\n\n/**\n * newsitems-video\n */\n\n.row-newsitems-video {\n  height: calc(100% - 100px);\n  overflow-x: scroll;\n  overflow-y: hidden;\n  margin: 20px;\n  display: -webkit-box;\n  display: flex;\n  /* align-items: center;\n  justify-content: center; */\n  width: auto; }\n\n.row-newsitems-video .card {\n    /* max-height: calc(100% - 20px);\n    max-width: calc(100vw - 40px); */\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n.row-newsitems-video .card-inner {\n    /* border: 1px solid red; */\n    background: #eee;\n    margin: 0;\n    padding: 0;\n    min-width: 90vw;\n    /* max-height: calc(100% - 100px); */\n    height: calc(100% - 20px);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n.row-newsitems-video .card-inner video {\n    margin: auto;\n    max-width: 100%;\n    max-height: 100%; }\n\n.purchased {\n  text-decoration: line-through; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL3RnbV9pb25pYy9zcmMvYXBwL05ld3NpdGVtc0NvbXBvbmVudC9uZXdzaXRlbXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUI7RUFFekIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUVsQixtQkFBbUI7RUFFbkIscUJBQWE7RUFBYixjQUFhO0VBQ2I7NkJBQzJCO0VBRTNCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixjQUFhLEVBQ2Q7O0FBR0Q7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYTtFQUNiLGFBQVksRUFDYjs7QUFDRDtFQUNFLDhCQUE2QjtFQUM3Qiw4QkFBNkI7RUFDN0I7cUJBQ21CLEVBQ3BCOztBQUVEO0VBQ0UseUJBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQixhQUFZLEVBQ2I7O0FBRUQ7O0dBRUc7O0FBQ0g7RUFDRSwyQkFBMEI7RUFFMUIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUVsQixhQUFZO0VBRVoscUJBQWE7RUFBYixjQUFhO0VBQ2I7NkJBQzJCO0VBRTNCLFlBQVcsRUE0Qlo7O0FBeENEO0lBZUk7cUNBQ2lDO0lBRWpDLHFCQUFhO0lBQWIsY0FBYTtJQUNiLDBCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIseUJBQXVCO1lBQXZCLHdCQUF1QixFQUN4Qjs7QUFyQkg7SUF1QkksNEJBQTRCO0lBQzVCLGlCQUFnQjtJQUNoQixVQUFTO0lBQ1QsV0FBVTtJQUNWLGdCQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLDBCQUF5QjtJQUV6QixxQkFBYTtJQUFiLGNBQWE7SUFDYiwwQkFBbUI7WUFBbkIsb0JBQW1CO0lBQ25CLHlCQUF1QjtZQUF2Qix3QkFBdUIsRUFDeEI7O0FBbENIO0lBb0NJLGFBQVk7SUFDWixnQkFBZTtJQUNmLGlCQUFnQixFQUNqQjs7QUFHSDtFQUNFLDhCQUE2QixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL05ld3NpdGVtc0NvbXBvbmVudC9uZXdzaXRlbXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5hLTEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucm93IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcblxuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICAvKiBtYXJnaW46IDIwcHg7ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG5cbiAgd2lkdGg6IGF1dG87XG59XG5cbi50aXRsZS1jYXJkIHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi50aXRsZS1jYXJkLWlubmVyIHtcbiAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY2FyZCB7XG59XG4uY2FyZC1pbm5lciB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xuICAvKiBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7ICovXG59XG5cbi5pbWcge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDFlbSk7XG4gIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMWVtKTsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKipcbiAqIG5ld3NpdGVtcy12aWRlb1xuICovXG4ucm93LW5ld3NpdGVtcy12aWRlbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuXG4gIG1hcmdpbjogMjBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cblxuICB3aWR0aDogYXV0bztcblxuICAuY2FyZCB7XG4gICAgLyogbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7ICovXG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmNhcmQtaW5uZXIge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgICAvKiBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7ICovXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY2FyZC1pbm5lciB2aWRlbyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi5wdXJjaGFzZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbiJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=default~LayoutMap-map-module~NewsitemsComponent-Newsitems-module.js.map