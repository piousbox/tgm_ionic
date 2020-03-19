(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~CitiesComponent-cities-module~LayoutMap-map-module~NewsitemsComponent-Homefeed-module"],{

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _newsitems_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newsitems.list */ "./src/app/NewsitemsComponent/newsitems.list.ts");
/* harmony import */ var _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LayoutSidemenu/LayoutSidemenu.module */ "./src/app/LayoutSidemenu/LayoutSidemenu.module.ts");
/* harmony import */ var _pipes_sanitizeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/sanitizeUrl.pipe */ "./src/app/pipes/sanitizeUrl.pipe.ts");
/* harmony import */ var _pipes_transformYoutubeUrl_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/transformYoutubeUrl.pipe */ "./src/app/pipes/transformYoutubeUrl.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewsitemsModule = /** @class */ (function () {
    function NewsitemsModule() {
    }
    NewsitemsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_5__["LayoutSidemenuModule"],
            ],
            declarations: [_newsitems_list__WEBPACK_IMPORTED_MODULE_4__["NewsitemsList"], _pipes_sanitizeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__["SanitizeUrlPipe"], _pipes_transformYoutubeUrl_pipe__WEBPACK_IMPORTED_MODULE_7__["TransformYoutubeUrlPipe"]],
            exports: [_newsitems_list__WEBPACK_IMPORTED_MODULE_4__["NewsitemsList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_5__["LayoutSidemenuModule"]]
        })
    ], NewsitemsModule);
    return NewsitemsModule;
}());



/***/ }),

/***/ "./src/app/NewsitemsComponent/newsitems-list.html":
/*!********************************************************!*\
  !*** ./src/app/NewsitemsComponent/newsitems-list.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!newsitems || newsitems.length == 0\">\n  <br /><br /><br />\n  <h1>Loading...</h1>\n  <br /><br /><br />\n</div>\n\n<div class=\"container\">\n  <div class='items premium-0 ' [ngClass]=\"{\n    'premium-1': n.premium_tier === 1,\n    'premium-2': n.premium_tier === 2\n  }\" *ngFor=\"let n of newsitems\">\n\n    <!-- VIDEO ITEMS -->\n    <div *ngIf=\"n.item_type=='video'\" class='newsitems-video'>\n\n      <div class=\"image-section\">\n        <video *ngIf=\"!n.youtube_id\" width=\"100%\" preload=\"metadata\" height=\"auto\" controls><source src=\"{{n.url}}\" type=\"video/mp4\"></video>\n        <!-- <ion-icon class=\"play-icon\" slot=\"start\" name=\"play-circle\"></ion-icon>\n          <img class=\"image\" src=\"{{n.photo_s169_url}}\" /> -->\n        <iframe class=\"iframe\" width=\"100%\" height=\"315\" *ngIf=\"n.youtube_id\" [src]=\"n.youtube_id | transformYoutubeUrl | sanitizeUrl\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n      </div>\n      <div>\n        <p class=\"title\">\n          <img class=\"icon\" [src]=\"getIconUrl(n.is_premium, n.premium_tier, n.item_type)\" />\n          <span class=\"title-heading\">{{n.name}}</span>\n        </p>\n        <p class=\"info\">\n          <span class=\"date\"> {{n.created_at.substring(0,10)}} </span> by\n          <span class=\"user\"> {{n.username}} </span> in\n          <span class=\"city\"> {{n.cityname}} </span>\n          <span class=\"tags\" *ngFor=\"let tag of n.tags\">{{tag.name}}</span>\n        </p>\n        <p class=\"description\">\n          {{n.description}}\n        </p>\n      </div>\n    </div>\n\n    <!-- REPORT ITEMS -->\n    <div *ngIf=\"n.item_type=='report'\" class='newsitems-report'>\n      <!-- <div class=\"image-section\"><img class=\"image\" src=\"{{n.photo_s169_url}}\" /></div> -->\n      <div>\n        <p class=\"title\">\n          <img class=\"icon\" [src]=\"getIconUrl(n.is_premium, n.premium_tier, n.item_type)\" />\n          <span class=\"title-heading\" (click)=\"navigateToReport(n.reportname)\">{{n.name}}</span>\n        </p>\n        <p class=\"info\">\n          <span class=\"date\"> {{n.created_at.substring(0,10)}} </span>\n          <span *ngIf=\"n.username\" > by {{n.username}} </span>\n          <span *ngIf=\"n.cityname\" > in {{n.cityname}} </span>\n          <span class=\"tags\" *ngFor=\"let tag of n.tags\"> {{tag.name}} </span>\n        </p>\n        <p class=\"description\">\n          {{n.description}}\n        </p>\n      </div>\n    </div>\n\n    <!-- GALLERY ITEMS -->\n    <div *ngIf=\"n.item_type=='gallery'\" class='newsitems-gallery'>\n      <div class=\"image-section\">\n        <div class=\"gallery\">\n          <div class=\"grid-item\" *ngFor=\"let photo of (n.photos ? n.photos.slice(0,3):[]); let i = index\">\n            <div class=\"image-item\" [ngStyle]=\"{'background-image': 'url(' + photo.large_url + ')'}\">\n              <div *ngIf=\"n.photos.length > 3 && i==2\" class=\"number\">+{{ n.photos.length - 3 }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <p class=\"title\">\n          <img class=\"icon\" [src]=\"getIconUrl(n.is_premium, n.premium_tier, n.item_type)\" />\n          <span class=\"title-heading\">{{n.name}}</span>\n        </p>\n        <p class=\"info\">\n          <span class=\"date\"> {{n.created_at.substring(0,10)}} </span> by\n          <span class=\"user\"> {{n.username}} </span> in\n          <span class=\"city\"> {{n.cityname}} </span>\n          <span class=\"tags\" *ngFor=\"let tag of n.tags\">{{tag.name}}</span>\n        </p>\n        <p class=\"description\">\n          {{n.description}}\n        </p>\n      </div>\n    </div>\n\n  </div>\n</div>"

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
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-router */ "./src/app/app-router.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
/* harmony import */ var _GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../GalleriesComponent/GalleriesShow */ "./src/app/GalleriesComponent/GalleriesShow.ts");
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
                        Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])(slug, 'showGallery()');
                        return [4 /*yield*/, this.modalController.create({
                                component: _GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_8__["GalleriesShow"],
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
    NewsitemsList.prototype.navigateToReport = function (slug) {
        this.router.navigate([_app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouter"].reportPath(slug)]);
    };
    NewsitemsList.prototype.navigateToVideo = function (slug) {
        this.router.navigate([_app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouter"].videoPath(slug)]);
    };
    NewsitemsList.prototype.getIconUrl = function (isPremium, premiumTier, type) {
        if (!isPremium) {
            switch (type) {
                case "video":
                    return "../../assets/newsfeed/Videos Icon.svg";
                case "report":
                    return "../../assets/newsfeed/Reports Icon.png";
                case "gallery":
                    return "../../assets/newsfeed/Photos Icon.png";
            }
        }
        if (premiumTier === 1) {
            return "../../assets/newsfeed/Sunglass.png";
        }
        if (premiumTier === 2) {
            return "../../assets/newsfeed/Gem Premium.png";
        }
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
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
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

module.exports = ".wrapper {\n  background: #f4f4f4;\n  padding-bottom: 10em; }\n\ndiv.container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: scroll;\n  margin: auto;\n  max-width: 44em; }\n\n.hero-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.hero {\n  background: url('hero.png');\n  width: 400px;\n  height: 180px;\n  background-size: cover; }\n\ndiv.items {\n  /* border: 1px solid black; */\n  box-shadow: -0.2em 0.3em 0.4em #bfb4b4;\n  flex-basis: 100%;\n  padding: 1em;\n  margin: 0.7em;\n  background-size: 100%;\n  background-position: bottom;\n  background-repeat: no-repeat; }\n\ndiv.items img.image {\n    max-width: 100%;\n    border-radius: 0.7em; }\n\ndiv.items .icon {\n    height: 1.9em; }\n\ndiv.items .gallery {\n    display: grid;\n    grid-gap: 0.2em;\n    grid-template-columns: 25% 25% 25%; }\n\ndiv.items .gallery .grid-item .image-item {\n      position: relative;\n      padding-top: 100%;\n      overflow: hidden;\n      z-index: 10;\n      background-position: center;\n      background-size: cover;\n      background-repeat: no-repeat; }\n\ndiv.items .gallery .grid-item .image-item div.number {\n        top: 0;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: #57535380;\n        font-size: 1.5em;\n        color: white;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center; }\n\ndiv.items .gallery .grid-item .image-item img {\n        position: absolute; }\n\ndiv.items .gallery .grid-item:first-of-type {\n      grid-row: 1/3;\n      grid-column: 1/3; }\n\ndiv.items .title-heading {\n    padding: 1em;\n    vertical-align: super;\n    font-size: 1.2em; }\n\ndiv.items .info {\n    font-size: 0.8em; }\n\ndiv.items .info .user {\n      color: #378ff9;\n      font-weight: 600;\n      font-style: italic; }\n\ndiv.items .info .city {\n      color: #378ff9;\n      font-weight: 600;\n      font-style: italic; }\n\ndiv.items .info .tags {\n      border: 0.1em solid #378ff9;\n      border-radius: 1.5em;\n      padding: 0.5em 1em;\n      margin: 0px;\n      display: inline-block;\n      margin: 1em 1em 0 0; }\n\ndiv.items .description {\n    font-size: 1em;\n    font-weight: unset; }\n\n.image-section {\n  position: relative; }\n\n.play-icon {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 3.12em;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.premium-0 {\n  background: white; }\n\n.premium-1 {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.7)), to(rgba(255, 255, 255, 0.7))), url('sunglass-background.png');\n  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('sunglass-background.png'); }\n\n.premium-2 {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.7)), to(rgba(255, 255, 255, 0.7))), url('lock-background.png');\n  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('lock-background.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGF5L0Rlc2t0b3AvdGdtX2lvbmljL3NyYy9hcHAvTmV3c2l0ZW1zQ29tcG9uZW50L25ld3NpdGVtcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW1CO0VBQ25CLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLHFCQUFhO0VBQWIsY0FBYTtFQUNiLGdCQUFlO0VBQ2YseUJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UscUJBQWE7RUFBYixjQUFhO0VBQ2IsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQix5QkFBdUI7VUFBdkIsd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsNEJBQThCO0VBQzlCLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLHVDQUFzQztFQUN0QyxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGNBQWE7RUFDYixzQkFBcUI7RUFDckIsNEJBQTJCO0VBQzNCLDZCQUE0QixFQW1GN0I7O0FBM0ZEO0lBV0ksZ0JBQWU7SUFDZixxQkFBb0IsRUFDckI7O0FBYkg7SUFnQkksY0FBYSxFQUNkOztBQWpCSDtJQW9CSSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZixtQ0FBa0MsRUFtQ25DOztBQXpESDtNQTBCUSxtQkFBa0I7TUFDbEIsa0JBQWlCO01BQ2pCLGlCQUFnQjtNQUNoQixZQUFXO01BQ1gsNEJBQTJCO01BQzNCLHVCQUFzQjtNQUN0Qiw2QkFBNEIsRUFrQjdCOztBQWxEUDtRQW1DVSxPQUFNO1FBQ04sbUJBQWtCO1FBQ2xCLFlBQVc7UUFDWCxhQUFZO1FBQ1osc0JBQXFCO1FBQ3JCLGlCQUFnQjtRQUNoQixhQUFZO1FBQ1oscUJBQWE7UUFBYixjQUFhO1FBQ2IseUJBQXVCO2dCQUF2Qix3QkFBdUI7UUFDdkIsMEJBQW1CO2dCQUFuQixvQkFBbUIsRUFDcEI7O0FBN0NUO1FBZ0RVLG1CQUFrQixFQUNuQjs7QUFqRFQ7TUFzRE0sY0FBYTtNQUNiLGlCQUFnQixFQUNqQjs7QUF4REw7SUE0REksYUFBWTtJQUNaLHNCQUFxQjtJQUNyQixpQkFBZ0IsRUFDakI7O0FBL0RIO0lBa0VJLGlCQUFnQixFQW1CakI7O0FBckZIO01Bb0VNLGVBQWM7TUFDZCxpQkFBZ0I7TUFDaEIsbUJBQWtCLEVBQ25COztBQXZFTDtNQXlFTSxlQUFjO01BQ2QsaUJBQWdCO01BQ2hCLG1CQUFrQixFQUNuQjs7QUE1RUw7TUE4RU0sNEJBQTJCO01BQzNCLHFCQUFvQjtNQUNwQixtQkFBa0I7TUFDbEIsWUFBVztNQUNYLHNCQUFxQjtNQUNyQixvQkFBbUIsRUFDcEI7O0FBcEZMO0lBd0ZJLGVBQWM7SUFDZCxtQkFBa0IsRUFDbkI7O0FBR0g7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLHlDQUFnQztVQUFoQyxpQ0FBZ0MsRUFDakM7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxnS0FDc0Q7RUFEdEQsc0hBQ3NELEVBQ3ZEOztBQUVEO0VBQ0UsNEpBQ2tEO0VBRGxELGtIQUNrRCxFQUNuRCIsImZpbGUiOiJzcmMvYXBwL05ld3NpdGVtc0NvbXBvbmVudC9uZXdzaXRlbXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgcGFkZGluZy1ib3R0b206IDEwZW07XG59XG5cbmRpdi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNDRlbTtcbn1cblxuLmhlcm8td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2hlcm8ucG5nJyk7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuZGl2Lml0ZW1zIHtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG4gIGJveC1zaGFkb3c6IC0wLjJlbSAwLjNlbSAwLjRlbSAjYmZiNGI0O1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMC43ZW07XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gIGltZy5pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xuICB9XG5cbiAgLmljb24ge1xuICAgIGhlaWdodDogMS45ZW07XG4gIH1cblxuICAuZ2FsbGVyeSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMC4yZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JTtcblxuICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgLmltYWdlLWl0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgIGRpdi5udW1iZXIge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM1NzUzNTM4MDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5ncmlkLWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBncmlkLXJvdzogMS8zO1xuICAgICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICB9XG4gIH1cblxuICAudGl0bGUtaGVhZGluZyB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG5cbiAgLmluZm8ge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgLnVzZXIge1xuICAgICAgY29sb3I6ICMzNzhmZjk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cbiAgICAuY2l0eSB7XG4gICAgICBjb2xvcjogIzM3OGZmOTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICAgIC50YWdzIHtcbiAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgIzM3OGZmOTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW46IDFlbSAxZW0gMCAwO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IHVuc2V0O1xuICB9XG59XG5cbi5pbWFnZS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGxheS1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMy4xMmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnByZW1pdW0tMCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ucHJlbWl1bS0xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpKSxcbiAgICB1cmwoXCIuLi8uLi9hc3NldHMvbmV3c2ZlZWQvc3VuZ2xhc3MtYmFja2dyb3VuZC5wbmdcIik7XG59XG5cbi5wcmVtaXVtLTIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpLFxuICAgIHVybChcIi4uLy4uL2Fzc2V0cy9uZXdzZmVlZC9sb2NrLWJhY2tncm91bmQucG5nXCIpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pipes/sanitizeUrl.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/sanitizeUrl.pipe.ts ***!
  \*******************************************/
/*! exports provided: SanitizeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeUrlPipe", function() { return SanitizeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeUrlPipe = /** @class */ (function () {
    function SanitizeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SanitizeUrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'sanitizeUrl' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SanitizeUrlPipe);
    return SanitizeUrlPipe;
}());



/***/ }),

/***/ "./src/app/pipes/transformYoutubeUrl.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/transformYoutubeUrl.pipe.ts ***!
  \***************************************************/
/*! exports provided: TransformYoutubeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformYoutubeUrlPipe", function() { return TransformYoutubeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransformYoutubeUrlPipe = /** @class */ (function () {
    function TransformYoutubeUrlPipe() {
    }
    TransformYoutubeUrlPipe.prototype.transform = function (id) {
        return "https://www.youtube.com/embed/" + id;
    };
    TransformYoutubeUrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'transformYoutubeUrl' })
    ], TransformYoutubeUrlPipe);
    return TransformYoutubeUrlPipe;
}());



/***/ })

}]);
//# sourceMappingURL=default~CitiesComponent-cities-module~LayoutMap-map-module~NewsitemsComponent-Homefeed-module.js.map