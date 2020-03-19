(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CitiesComponent-cities-module"],{

/***/ "./src/app/CitiesComponent/CitiesIndex.page.html":
/*!*******************************************************!*\
  !*** ./src/app/CitiesComponent/CitiesIndex.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<layout-fab>\n  <ion-content fullscreen>\n    <h1 class=\"heading\">Cities</h1>\n    <ion-list>\n      <div class=\"wrapper\">\n\n        <div class=\"filter-section\">\n          <input [(ngModel)]=\"filterValue\" class=\"filter-input\" (input)=\"filterHandler()\" />\n          <ion-icon class=\"filter-icon\" name=\"ios-funnel\"></ion-icon>\n        </div>\n\n        <div class=\"bookmark-section\">\n          <label class=\"switch\">\n            <input type=\"checkbox\" checked>\n            <span class=\"slider round\"></span>\n          </label>\n          <span class=\"bookmark-text\">Show only bookmarked</span>\n        </div>\n\n        <div class=\"container\">\n\n          <div class=\"cities\" *ngFor=\"let city of filteredCities\" (click)=\"navigateToCity(city)\">\n            <div class=\"img-section\">\n              <span class=\"bookmark\" >\n                <ion-icon class=\"bookmark-icon\" name=\"bookmark\"></ion-icon>\n              </span>\n              <img class=\"city-img\" [src]=\"city.photo\" />\n              <span class=\"city-title\">{{ city.name }}</span>\n            </div>\n\n            <div class=\"content-section\">\n              <div class=\"content-item\">\n                <ion-icon class=\"icon\" name=\"paper\"></ion-icon>\n                <span class=\"count\">{{city.n_reports}}</span>\n              </div>\n              <div class=\"content-item\">\n                <ion-icon class=\"icon\" name=\"image\"></ion-icon>\n                <span class=\"count\">{{city.n_galleries}}</span>\n              </div>\n              <div class=\"content-item\">\n                <ion-icon class=\"icon\" name=\"videocam\"></ion-icon>\n                <span class=\"count\">{{city.n_videos}}</span>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </ion-list>\n  </ion-content>\n</layout-fab>\n"

/***/ }),

/***/ "./src/app/CitiesComponent/CitiesIndex.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/CitiesComponent/CitiesIndex.page.ts ***!
  \*****************************************************/
/*! exports provided: CitiesIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesIndexPage", function() { return CitiesIndexPage; });
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







var CitiesIndexPage = /** @class */ (function () {
    function CitiesIndexPage(nativeStorage, appService, router, httpClient, toastController) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        this.appService = appService;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.cities = [];
        this.filteredCities = [];
        this.filterValue = "";
        var answer = this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_5__["ApiRouter"].citiesindex);
        answer.subscribe(function (data) {
            if (data) {
                _this.cities = data;
                _this.filteredCities = data;
            }
        }, function (error) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('+++ citiesindex 1:', error);
                        return [4 /*yield*/, this.toastController.create({
                                message: error,
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    CitiesIndexPage.prototype.navigateToCity = function (c) {
        // logg(c, 'c');
        this.router.navigate([_app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouter"].cityPath(c)]);
    };
    CitiesIndexPage.prototype.ngOnInit = function () {
    };
    CitiesIndexPage.prototype.filterHandler = function () {
        var _this = this;
        this.filteredCities = this.cities.filter(function (city) {
            return city.name
                .toLowerCase()
                .indexOf(_this.filterValue.trim().toLowerCase()) > -1;
        });
    };
    CitiesIndexPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cities-index',
            template: __webpack_require__(/*! ./CitiesIndex.page.html */ "./src/app/CitiesComponent/CitiesIndex.page.html"),
            styles: [__webpack_require__(/*! ./citiesIndex.scss */ "./src/app/CitiesComponent/citiesIndex.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], CitiesIndexPage);
    return CitiesIndexPage;
}());



/***/ }),

/***/ "./src/app/CitiesComponent/CitiesShow.page.html":
/*!******************************************************!*\
  !*** ./src/app/CitiesComponent/CitiesShow.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<layout-fab>\n  <ion-content>\n    <div class='wrapper'>\n      <div class='cities-show'>\n\n        <header [ngStyle]=\"{ \n          'background-image': 'url('+city.hero_img+'}',\n          'background-size': 'contain'\n        }\"></header>\n\n        <section class=\"section-one\">\n          <ion-icon name=\"pin\" class=\"location\"></ion-icon>\n          <h1>{{ city.name }}</h1>\n          <div class=\"status\">\n            <div class=\"status-grid\">\n              <ion-icon class=\"icon\" name=\"paper\"></ion-icon>\n              <span class=\"numbers\">{{city.n_reports}}</span>\n            </div>\n            <div class=\"status-grid\">\n              <ion-icon class=\"icon\" name=\"image\"></ion-icon>\n              <span class=\"numbers\">{{city.n_galleries}}</span>\n            </div>\n            <div class=\"status-grid mid\">\n              <ion-icon class=\"icon\" name=\"videocam\"></ion-icon>\n              <span class=\"numbers \">{{city.n_videos}}</span>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"tags-section\" *ngIf=\"city.tags.length > 0\" >\n          <span class=\"btn delete-btn\" (click)=\"deSelectAll()\">\n            <ion-icon name=\"close\"> </ion-icon> deselect all\n          </span>\n\n          <span class=\"btn\" [ngClass]=\"{\n            'random': selectedTags.includes(tag.slug)\n          }\" *ngFor=\"let tag of city.tags\" (click)=\"tagSelection(tag)\">{{tag.name}}</span>\n\n        </section>\n\n        <section class=\"section-three\">\n\n          <div class=\"menu-option\" (click)=\"changeMenuHandler('newsfeed')\">\n            <img src=\"../../assets/Newsfeed Icon.svg\" alt=\"Newsfeed\" /><p>Newsfeed</p>\n          </div>\n\n          <div class=\"menu-option\" (click)=\"changeMenuHandler('venues')\">\n            <img src=\"../../assets/Venue Icon.svg\" alt=\"Venues\" />\n            <p>Venues</p>\n          </div>\n\n          <!-- <div class=\"menu-option\" (click)=\"changeMenuHandler('events')\">\n            <img src=\"../../assets/Events Icon.svg\" alt=\"Events\" /><p>Events</p>\n          </div>\n\n          <div class=\"menu-option\" (click)=\"changeMenuHandler('galleries')\">\n            <img src=\"../../assets/Photos Icon.svg\" alt=\"Galleries\" /><p>Galleries</p>\n          </div>\n\n          <div class=\"menu-option\" (click)=\"changeMenuHandler('videos')\">\n            <img src=\"../../assets/Videos Icon.svg\" alt=\"Videos\" /><p>Videos</p>\n          </div>\n\n          <div class=\"menu-option\" (click)=\"changeMenuHandler('reports')\">\n            <img src=\"../../assets/Reports Icon.svg\" alt=\"Reports\" /><p>Reports</p>\n          </div> -->\n\n        </section>\n\n        <section [ngSwitch]=\"selectedMenu\">\n          <div *ngSwitchCase=\"'newsfeed'\">\n            <newsitems-list [newsitems]=city.newsitems></newsitems-list>\n            <br /><br /><br />\n          </div>\n          <div *ngSwitchCase=\"'events'\">\n            <p>Events</p>\n          </div>\n          <div *ngSwitchCase=\"'venues'\">\n            <p>Venues</p>\n          </div>\n          <div *ngSwitchCase=\"'galleries'\">\n            <p>Galleries</p>\n          </div>\n          <div *ngSwitchCase=\"'videos'\">\n            <newsitems-list [newsitems]=videos></newsitems-list>\n          </div>\n          <div *ngSwitchCase=\"'reports'\">\n            <newsitems-list [newsitems]=reports></newsitems-list>\n          </div>\n        </section>\n      </div>\n    </div>\n  </ion-content>\n</layout-fab>"

/***/ }),

/***/ "./src/app/CitiesComponent/CitiesShow.page.ts":
/*!****************************************************!*\
  !*** ./src/app/CitiesComponent/CitiesShow.page.ts ***!
  \****************************************************/
/*! exports provided: CitiesShowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesShowPage", function() { return CitiesShowPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-router */ "./src/app/app-router.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/city.service */ "./src/app/services/city.service.ts");
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







var CitiesShowPage = /** @class */ (function () {
    function CitiesShowPage(nativeStorage, appService, route, router, httpClient, _cityService) {
        this.nativeStorage = nativeStorage;
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this._cityService = _cityService;
        this.city = {};
        this.selectedTags = [];
        this.selectedMenu = "newsfeed";
        this.videos = [];
        this.reports = [];
        this.appRouter = _app_router__WEBPACK_IMPORTED_MODULE_4__["AppRouter"];
        this.slug = this.route.snapshot.paramMap.get('cityname');
        this.ngOnInit();
    }
    CitiesShowPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_4__["ApiRouter"].city(this.slug)).toPromise()];
                    case 1:
                        answer = _a.sent();
                        this.city = answer['city'];
                        this.reports = this.city.reports.map(function (item) {
                            item.item_type = "report";
                            return item;
                        });
                        this.videos = this.city.videos.map(function (item) {
                            item.item_type = "video";
                            return item;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CitiesShowPage.prototype.navigate = function (where) { };
    CitiesShowPage.prototype.tagSelection = function (tag) {
        var index = this.selectedTags.findIndex(function (item) {
            return item === tag.slug;
        });
        if (index >= 0) {
            this.selectedTags.splice(index, 1);
        }
        else {
            this.selectedTags.push(tag.slug);
        }
    };
    CitiesShowPage.prototype.deSelectAll = function () {
        this.selectedTags = [];
    };
    CitiesShowPage.prototype.changeMenuHandler = function (option) {
        this.selectedMenu = option;
    };
    CitiesShowPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cities-show',
            template: __webpack_require__(/*! ./CitiesShow.page.html */ "./src/app/CitiesComponent/CitiesShow.page.html"),
            styles: [__webpack_require__(/*! ./cities.scss */ "./src/app/CitiesComponent/cities.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"]])
    ], CitiesShowPage);
    return CitiesShowPage;
}());



/***/ }),

/***/ "./src/app/CitiesComponent/cities.module.ts":
/*!**************************************************!*\
  !*** ./src/app/CitiesComponent/cities.module.ts ***!
  \**************************************************/
/*! exports provided: CitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesModule", function() { return CitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _CitiesIndex_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CitiesIndex.page */ "./src/app/CitiesComponent/CitiesIndex.page.ts");
/* harmony import */ var _CitiesShow_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CitiesShow.page */ "./src/app/CitiesComponent/CitiesShow.page.ts");
/* harmony import */ var _NewsitemsComponent_Newsitems_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NewsitemsComponent/Newsitems.module */ "./src/app/NewsitemsComponent/Newsitems.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _CitiesIndex_page__WEBPACK_IMPORTED_MODULE_2__["CitiesIndexPage"], },
    { path: 'travel-to/:cityname', component: _CitiesShow_page__WEBPACK_IMPORTED_MODULE_3__["CitiesShowPage"], },
];
var CitiesModule = /** @class */ (function () {
    function CitiesModule() {
    }
    CitiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_CitiesIndex_page__WEBPACK_IMPORTED_MODULE_2__["CitiesIndexPage"], _CitiesShow_page__WEBPACK_IMPORTED_MODULE_3__["CitiesShowPage"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _NewsitemsComponent_Newsitems_module__WEBPACK_IMPORTED_MODULE_4__["NewsitemsModule"],
            ]
        })
    ], CitiesModule);
    return CitiesModule;
}());



/***/ }),

/***/ "./src/app/CitiesComponent/cities.scss":
/*!*********************************************!*\
  !*** ./src/app/CitiesComponent/cities.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  padding: 0;\n  margin: 0; }\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px; }\n\n.wrapper {\n  background-color: #f4f4f4; }\n\n.cities-show {\n  max-width: 44em;\n  margin: auto; }\n\nheader {\n  padding: 25px 15px;\n  width: 100%;\n  height: 220px;\n  background-position: center bottom;\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: 1; }\n\nheader nav {\n  background-color: #23a158;\n  padding: 16px 0 0 10px;\n  border-radius: 50%;\n  height: 55px;\n  width: 55px;\n  text-align: center;\n  display: inline-block; }\n\n/* ------------\n * section one\n ---------------- */\n\n.section-one {\n  padding: 5px;\n  margin: -50px auto 40px auto;\n  display: grid;\n  grid-template-columns: 25px 90px 115px;\n  height: 85px;\n  width: 250px;\n  justify-items: center;\n  grid-column-gap: 5px;\n  background-color: #fff;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 1px 4px 5px #1313137c;\n  border-radius: 5px;\n  z-index: 5; }\n\n.location {\n  color: #11b0c5;\n  font-size: 24px;\n  --ionicon-stroke-width: 40px; }\n\n.section-one h1 {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center; }\n\n.status {\n  display: grid;\n  grid-template-columns: 50px 50px;\n  grid-template-rows: 25px 25px;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  grid-gap: 5px; }\n\n.status img {\n  width: 18px;\n  height: 20px; }\n\n.status-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5px;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.numbers {\n  font-size: 12px;\n  color: #272727; }\n\n.mid {\n  grid-column: span 2; }\n\n/* ------------\n * tags\n ---------------- */\n\n.tags-container {\n  margin: 20px 0px;\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: left;\n          align-items: left;\n  -webkit-box-pack: left;\n          justify-content: left; }\n\n.btn {\n  background-color: #fff;\n  border-radius: 50px;\n  color: #272727;\n  margin: 5px;\n  padding: 0.5em 1em;\n  border: 2px solid #11b0c5;\n  display: inline-block; }\n\n.delete-btn {\n  position: relative;\n  background-color: #ff2222;\n  color: #fff;\n  border: 0; }\n\n.random {\n  background-color: #11b0c5;\n  color: #fff; }\n\n.icon {\n  font-size: 2em;\n  color: #605d5d; }\n\n.numbers {\n  color: #988b8b;\n  font-size: 0.9em;\n  font-weight: 600; }\n\n/* Section two end */\n\n.section-three {\n  overflow-y: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n  margin: 2em 0; }\n\n.section-three .menu-option {\n    text-align: center;\n    display: inline-block;\n    width: 33%; }\n\n.section-three .menu-option img {\n      width: 3em;\n      height: 3em; }\n\n.section-three .menu-option p {\n      color: #6a6666;\n      font-weight: 600;\n      font-size: 14px;\n      padding: 5px 1px; }\n\n@media (max-width: 360px) {\n  .section-one h1 {\n    font-size: 16px;\n    font-weight: bold; }\n  .status-grid {\n    grid-gap: 1px; }\n  .section-two {\n    padding: 0px;\n    grid-gap: 5px;\n    grid-row-gap: 10px;\n    grid-template-columns: repeat(auto-fit, minmax(100px, 250px)); } }\n\n@media (min-width: 500px) {\n  .section-two {\n    grid-gap: 10px;\n    grid-row-gap: 20px;\n    grid-template-columns: repeat(auto-fit, minmax(110px, 250px)); } }\n\n.tags-section {\n  overflow-y: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGF5L0Rlc2t0b3AvdGdtX2lvbmljL3NyYy9hcHAvQ2l0aWVzQ29tcG9uZW50L2NpdGllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEOzs7Ozs7O0VBT0UsV0FBVTtFQUNWLFVBQVMsRUFDVjs7QUFFRDtFQUNFLFdBQVU7RUFDVixVQUFTO0VBQ1QsMENBQXlDO0VBQ3pDLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGNBQWE7RUFDYixtQ0FBa0M7RUFDbEMsdUJBQXNCO0VBQ3RCLDZCQUE0QjtFQUM1QixXQUFVLEVBQ1g7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDdEI7O0FBRUQ7O29CQUVvQjs7QUFFcEI7RUFDRSxhQUFZO0VBQ1osNkJBQTRCO0VBQzVCLGNBQWE7RUFDYix1Q0FBc0M7RUFDdEMsYUFBWTtFQUNaLGFBQVk7RUFDWixzQkFBcUI7RUFDckIscUJBQW9CO0VBQ3BCLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixrQ0FBaUM7RUFDakMsbUJBQWtCO0VBQ2xCLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGVBQWM7RUFDZCxnQkFBZTtFQUNmLDZCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGNBQWE7RUFDYixpQ0FBZ0M7RUFDaEMsOEJBQTZCO0VBQzdCLHNCQUFxQjtFQUNyQiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGNBQWEsRUFDZDs7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLGNBQWE7RUFDYixzQkFBcUI7RUFDckIsMEJBQW1CO1VBQW5CLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsZUFBYyxFQUNmOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEOztvQkFFb0I7O0FBRXBCO0VBQ0UsaUJBQWdCO0VBQ2hCLGFBQVk7RUFFWixxQkFBYTtFQUFiLGNBQWE7RUFDYixnQkFBZTtFQUVmLHdCQUFpQjtVQUFqQixrQkFBaUI7RUFDakIsdUJBQXFCO1VBQXJCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsWUFBVztFQUNYLFVBQVMsRUFDVjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsZUE3SmdCLEVBOEpqQjs7QUFFRDtFQUNFLGVBaEtpQjtFQWlLakIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFFRCxxQkFBcUI7O0FBRXJCO0VBQ0UsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsY0FBYSxFQW1CZDs7QUF2QkQ7SUFPSSxtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLFdBQVUsRUFhWDs7QUF0Qkg7TUFZTSxXQUFVO01BQ1YsWUFBVyxFQUNaOztBQWRMO01BaUJNLGVBQWM7TUFDZCxpQkFBZ0I7TUFDaEIsZ0JBQWU7TUFDZixpQkFBZ0IsRUFDakI7O0FBSUw7RUFDRTtJQUNFLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBQ2xCO0VBRUQ7SUFDRSxjQUFhLEVBQ2Q7RUFFRDtJQUNFLGFBQVk7SUFDWixjQUFhO0lBQ2IsbUJBQWtCO0lBQ2xCLDhEQUE2RCxFQUM5RCxFQUFBOztBQUdIO0VBQ0U7SUFDRSxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLDhEQUE2RCxFQUM5RCxFQUFBOztBQUdIO0VBQ0UsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9DaXRpZXNDb21wb25lbnQvY2l0aWVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnMgVXNlZCBpbiBDaXR5IFBhZ2VcbiRkYXJrR3JleTogIzYwNWQ1ZDtcbiRsaWdodEdyZXk6ICM5ODhiOGI7XG4kYmx1ZTogIzZhYTNlOTtcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDsgXG59XG5cbi5jaXRpZXMtc2hvdyB7XG4gIG1heC13aWR0aDogNDRlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiAxO1xufVxuXG5oZWFkZXIgbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzYTE1ODtcbiAgcGFkZGluZzogMTZweCAwIDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogLS0tLS0tLS0tLS0tXG4gKiBzZWN0aW9uIG9uZVxuIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLnNlY3Rpb24tb25lIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IC01MHB4IGF1dG8gNDBweCBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggOTBweCAxMTVweDtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggIzEzMTMxMzdjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGNvbG9yOiAjMTFiMGM1O1xuICBmb250LXNpemU6IDI0cHg7XG4gIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQwcHg7XG59XG5cbi5zZWN0aW9uLW9uZSBoMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXR1cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHggMjVweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWdhcDogNXB4O1xufVxuLnN0YXR1cyBpbWcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uc3RhdHVzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiA1cHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm51bWJlcnMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjcyNzI3O1xufVxuXG4ubWlkIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbn1cblxuLyogLS0tLS0tLS0tLS0tXG4gKiB0YWdzXG4gLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4udGFncy1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBwYWRkaW5nOiA1cHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogIzI3MjcyNztcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzExYjBjNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcbn1cblxuLnJhbmRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMWIwYzU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogJGRhcmtHcmV5O1xufVxuXG4ubnVtYmVycyB7XG4gIGNvbG9yOiAkbGlnaHRHcmV5O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiBTZWN0aW9uIHR3byBlbmQgKi9cblxuLnNlY3Rpb24tdGhyZWUge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbjogMmVtIDA7XG5cbiAgLm1lbnUtb3B0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMyU7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDNlbTtcbiAgICAgIGhlaWdodDogM2VtO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6ICM2YTY2NjY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogNXB4IDFweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5zZWN0aW9uLW9uZSBoMSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnN0YXR1cy1ncmlkIHtcbiAgICBncmlkLWdhcDogMXB4O1xuICB9XG5cbiAgLnNlY3Rpb24tdHdvIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZ3JpZC1nYXA6IDVweDtcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMjUwcHgpKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLnNlY3Rpb24tdHdvIHtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgICBncmlkLXJvdy1nYXA6IDIwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMTBweCwgMjUwcHgpKTtcbiAgfVxufVxuXG4udGFncy1zZWN0aW9uIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/CitiesComponent/citiesIndex.scss":
/*!**************************************************!*\
  !*** ./src/app/CitiesComponent/citiesIndex.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1.heading {\n  text-align: center;\n  color: #605d5d; }\n\ndiv.wrapper {\n  max-width: 44em;\n  margin: auto;\n  padding-bottom: 10em; }\n\ndiv.filter-section {\n  padding: 0 1em;\n  position: relative;\n  margin: 1em 0; }\n\ndiv.filter-section .filter-input {\n    width: 100%;\n    border: 2px solid #6aa3e9;\n    border-radius: 2em;\n    height: 2.5em;\n    outline: none;\n    padding: 1em 1em;\n    color: #6aa3e9;\n    background: white; }\n\ndiv.filter-section .filter-icon {\n    position: absolute;\n    right: 1.3em;\n    font-size: 1.5em;\n    top: 0.3em;\n    color: #6aa3e9; }\n\ndiv.bookmark-section {\n  margin: 1em 0;\n  padding: 0 1em; }\n\ndiv.bookmark-section .bookmark-text {\n    color: #6aa3e9;\n    padding: 1em; }\n\ndiv.container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\ndiv.container .cities {\n    margin: 0.5em;\n    padding: 0.8em;\n    border: 1px solid #6aa3e9;\n    border-radius: 0.4em;\n    box-shadow: 1px 2px 8px 0px #d5cdcd;\n    background: white;\n    cursor: pointer; }\n\ndiv.container .cities .img-section {\n      position: relative; }\n\ndiv.container .cities .img-section .city-img {\n        border-radius: 0.4em;\n        opacity: 0.8; }\n\ndiv.container .cities .img-section .city-title {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        -webkit-transform: translate(-50%, 15%);\n                transform: translate(-50%, 15%);\n        background: white;\n        padding: 0.5em;\n        text-align: center;\n        border-radius: 0.4em;\n        font-size: 0.8em;\n        font-weight: 600;\n        color: #605d5d; }\n\ndiv.container .cities .img-section .bookmark {\n        position: absolute;\n        top: 0;\n        right: 0.2em;\n        padding: 0.8em;\n        background: white;\n        z-index: 1;\n        border-radius: 50%; }\n\ndiv.container .cities .img-section .bookmark-icon {\n        position: absolute;\n        top: -0.25em;\n        right: 50%;\n        -webkit-transform: translate(50%);\n                transform: translate(50%);\n        font-size: 1.6em;\n        color: #6aa3e9; }\n\ndiv.container .cities .content-section {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center;\n      margin: 1em 0px; }\n\ndiv.container .cities .content-section .content-item {\n        width: 50%;\n        text-align: center;\n        position: relative;\n        padding: 0.1em; }\n\ndiv.container .cities .content-section .content-item .icon {\n          font-size: 2em;\n          color: #605d5d; }\n\ndiv.container .cities .content-section .content-item .count {\n          position: absolute;\n          top: 50%;\n          -webkit-transform: translateY(-60%);\n                  transform: translateY(-60%);\n          padding: 0.5em;\n          color: #988b8b;\n          font-size: 0.9em;\n          font-weight: 600; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 2.9em;\n  height: 1.5em; }\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 1.15em;\n  width: 1.15em;\n  left: 0.2em;\n  bottom: 0.2em;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n\ninput:checked + .slider {\n  background-color: #6aa3e9; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(1.3em);\n  transform: translateX(1.3em); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 2em; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n@media all and (max-width: 296px) {\n  .cities {\n    width: 80%; } }\n\n@media all and (min-width: 296px) and (max-width: 540px) {\n  .cities {\n    width: 44%; } }\n\n@media all and (min-width: 540px) {\n  .cities {\n    width: 22%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGF5L0Rlc2t0b3AvdGdtX2lvbmljL3NyYy9hcHAvQ2l0aWVzQ29tcG9uZW50L2NpdGllc0luZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxtQkFBa0I7RUFDbEIsZUFOZ0IsRUFPakI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGFBQVk7RUFDWixxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGNBQWEsRUFvQmQ7O0FBdkJEO0lBTUksWUFBVztJQUNYLDBCQXBCVTtJQXFCVixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGNBQWE7SUFDYixpQkFBZ0I7SUFDaEIsZUF6QlU7SUEwQlYsa0JBQWlCLEVBQ2xCOztBQWRIO0lBaUJJLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osaUJBQWdCO0lBQ2hCLFdBQVU7SUFDVixlQWxDVSxFQW1DWDs7QUFHSDtFQUNFLGNBQWE7RUFDYixlQUFjLEVBTWY7O0FBUkQ7SUFLSSxlQTNDVTtJQTRDVixhQUFZLEVBQ2I7O0FBR0g7RUFDRSxxQkFBYTtFQUFiLGNBQWE7RUFDYixnQkFBZTtFQUNmLHlCQUF1QjtVQUF2Qix3QkFBdUIsRUFrRnhCOztBQXJGRDtJQU1JLGNBQWE7SUFDYixlQUFjO0lBQ2QsMEJBeERVO0lBeURWLHFCQUFvQjtJQUNwQixvQ0FBbUM7SUFDbkMsa0JBQWlCO0lBQ2pCLGdCQUFlLEVBd0VoQjs7QUFwRkg7TUFlTSxtQkFBa0IsRUF1Q25COztBQXRETDtRQWlCUSxxQkFBb0I7UUFDcEIsYUFBWSxFQUNiOztBQW5CUDtRQXNCUSxtQkFBa0I7UUFDbEIsVUFBUztRQUNULFVBQVM7UUFDVCx3Q0FBK0I7Z0JBQS9CLGdDQUErQjtRQUMvQixrQkFBaUI7UUFDakIsZUFBYztRQUNkLG1CQUFrQjtRQUNsQixxQkFBb0I7UUFDcEIsaUJBQWdCO1FBQ2hCLGlCQUFnQjtRQUNoQixlQWxGVSxFQW1GWDs7QUFqQ1A7UUFvQ1EsbUJBQWtCO1FBQ2xCLE9BQU07UUFDTixhQUFZO1FBQ1osZUFBYztRQUNkLGtCQUFpQjtRQUNqQixXQUFVO1FBQ1YsbUJBQWtCLEVBQ25COztBQTNDUDtRQThDUSxtQkFBa0I7UUFDbEIsYUFBWTtRQUNaLFdBQVU7UUFDVixrQ0FBeUI7Z0JBQXpCLDBCQUF5QjtRQUN6QixpQkFBZ0I7UUFDaEIsZUFuR00sRUFvR1A7O0FBcERQO01BeURNLHFCQUFhO01BQWIsY0FBYTtNQUNiLGdCQUFlO01BQ2YseUJBQXVCO2NBQXZCLHdCQUF1QjtNQUN2QixnQkFBZSxFQXVCaEI7O0FBbkZMO1FBK0RRLFdBQVU7UUFDVixtQkFBa0I7UUFDbEIsbUJBQWtCO1FBQ2xCLGVBQWMsRUFnQmY7O0FBbEZQO1VBcUVVLGVBQWM7VUFDZCxlQXhIUSxFQXlIVDs7QUF2RVQ7VUEwRVUsbUJBQWtCO1VBQ2xCLFNBQVE7VUFDUixvQ0FBMkI7a0JBQTNCLDRCQUEyQjtVQUMzQixlQUFjO1VBQ2QsZUEvSFM7VUFnSVQsaUJBQWdCO1VBQ2hCLGlCQUFnQixFQUNqQjs7QUFPVDtFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsYUFBWTtFQUNaLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFdBQVU7RUFDVixTQUFRO0VBQ1IsVUFBUyxFQUNWOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULHVCQUFzQjtFQUN0Qix5QkFBd0I7RUFDeEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxlQUFjO0VBQ2QsY0FBYTtFQUNiLFlBQVc7RUFDWCxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLHlCQUF3QjtFQUN4QixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSwwQkE5S1ksRUErS2I7O0FBRUQ7RUFDRSxxQ0FBb0M7RUFFcEMsNkJBQTRCLEVBQzdCOztBQUVELHFCQUFxQjs7QUFDckI7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRTtJQUNFLFdBQVUsRUFDWCxFQUFBOztBQUdIO0VBQ0U7SUFDRSxXQUFVLEVBQ1gsRUFBQTs7QUFHSDtFQUNFO0lBQ0UsV0FBVSxFQUNYLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9DaXRpZXNDb21wb25lbnQvY2l0aWVzSW5kZXguc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9ycyBVc2VkIGluIENpdHkgUGFnZVxuJGRhcmtHcmV5OiAjNjA1ZDVkO1xuJGxpZ2h0R3JleTogIzk4OGI4YjtcbiRibHVlOiAjNmFhM2U5O1xuXG5oMS5oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogJGRhcmtHcmV5O1xufVxuXG5kaXYud3JhcHBlciB7XG4gIG1heC13aWR0aDogNDRlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcbn1cblxuZGl2LmZpbHRlci1zZWN0aW9uIHtcbiAgcGFkZGluZzogMCAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxZW0gMDtcblxuICAuZmlsdGVyLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDFlbSAxZW07XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG5cbiAgLmZpbHRlci1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEuM2VtO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdG9wOiAwLjNlbTtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuZGl2LmJvb2ttYXJrLXNlY3Rpb24ge1xuICBtYXJnaW46IDFlbSAwO1xuICBwYWRkaW5nOiAwIDFlbTtcblxuICAuYm9va21hcmstdGV4dCB7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxufVxuXG5kaXYuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAuY2l0aWVzIHtcbiAgICBtYXJnaW46IDAuNWVtO1xuICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggOHB4IDBweCAjZDVjZGNkO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5pbWctc2VjdGlvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAuY2l0eS1pbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuXG4gICAgICAuY2l0eS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDE1JSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICRkYXJrR3JleTtcbiAgICAgIH1cblxuICAgICAgLmJvb2ttYXJre1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDAuMmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjhlbTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cblxuICAgICAgLmJvb2ttYXJrLWljb257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMC4yNWVtO1xuICAgICAgICByaWdodDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUpO1xuICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgICBjb2xvcjogJGJsdWU7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAuY29udGVudC1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMWVtIDBweDtcblxuICAgICAgLmNvbnRlbnQtaXRlbSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAwLjFlbTtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgY29sb3I6ICRkYXJrR3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjAlKTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICBjb2xvcjogJGxpZ2h0R3JleTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gdG9nZ2xlIHN3aXRjaCBzdHlsZVxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMi45ZW07XG4gIGhlaWdodDogMS41ZW07XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxLjE1ZW07XG4gIHdpZHRoOiAxLjE1ZW07XG4gIGxlZnQ6IDAuMmVtO1xuICBib3R0b206IDAuMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjNlbSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4zZW0pO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4zZW0pO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAyZW07XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyOTZweCkge1xuICAuY2l0aWVzIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI5NnB4KSBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLmNpdGllcyB7XG4gICAgd2lkdGg6IDQ0JTtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA1NDBweCkge1xuICAuY2l0aWVzIHtcbiAgICB3aWR0aDogMjIlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/services/city.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/city.service.ts ***!
  \******************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityService = /** @class */ (function () {
    function CityService(_http) {
        this._http = _http;
    }
    CityService.prototype.getAllCities = function () {
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_domain + "/api/cities.json");
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ })

}]);
//# sourceMappingURL=CitiesComponent-cities-module.js.map