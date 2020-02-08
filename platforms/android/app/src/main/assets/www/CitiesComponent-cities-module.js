(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CitiesComponent-cities-module"],{

/***/ "./src/app/CitiesComponent/CitiesIndex.page.html":
/*!*******************************************************!*\
  !*** ./src/app/CitiesComponent/CitiesIndex.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<layout-sidemenu>\n  <ion-content fullscreen>\n    <h1>Cities index</h1>\n    <ion-list>\n      <ion-item class='item-borderless' *ngFor=\"let city of cities\" (click)=\"navigateToCity(city)\"> \n        <div>{{ city.name }}</div>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</layout-sidemenu>\n"

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








var CitiesIndexPage = /** @class */ (function () {
    function CitiesIndexPage(nativeStorage, appService, router, httpClient, toastController) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        this.appService = appService;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.cities = [];
        var answer = this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_5__["ApiRouter"].citiesindex);
        answer.subscribe(function (data) {
            if (data) {
                _this.cities = data;
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
        Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])(c, 'c');
        this.router.navigate([_app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouter"].cityPath(c)]);
    };
    CitiesIndexPage.prototype.ngOnInit = function () {
    };
    CitiesIndexPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cities-index',
            template: __webpack_require__(/*! ./CitiesIndex.page.html */ "./src/app/CitiesComponent/CitiesIndex.page.html"),
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

module.exports = "\n<layout-sidemenu>\n  <ion-content padding >\n    <h1>City page! {{ city.name }}</h1>\n    <ul>\n      <li>{{ appRouter.cityPath(city) }}</li>\n    </ul>\n  </ion-content>\n</layout-sidemenu>\n"

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







var CitiesShowPage = /** @class */ (function () {
    function CitiesShowPage(nativeStorage, appService, route, router, httpClient, _cityService) {
        this.nativeStorage = nativeStorage;
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this._cityService = _cityService;
        this.city = {};
        this.ngOnInit();
        this.appRouter = _app_router__WEBPACK_IMPORTED_MODULE_4__["AppRouter"];
    }
    CitiesShowPage.prototype.ngOnInit = function () {
        this.city = { cityname: this.route.snapshot.paramMap.get('cityname') };
        // this._cityService.getCity(this._id).subscribe( city => this.city = city);
    };
    CitiesShowPage.prototype.navigate = function (where) { };
    CitiesShowPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cities-show',
            template: __webpack_require__(/*! ./CitiesShow.page.html */ "./src/app/CitiesComponent/CitiesShow.page.html"),
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _CitiesIndex_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CitiesIndex.page */ "./src/app/CitiesComponent/CitiesIndex.page.ts");
/* harmony import */ var _CitiesShow_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CitiesShow.page */ "./src/app/CitiesComponent/CitiesShow.page.ts");
/* harmony import */ var _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LayoutSidemenu/LayoutSidemenu.module */ "./src/app/LayoutSidemenu/LayoutSidemenu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _CitiesIndex_page__WEBPACK_IMPORTED_MODULE_5__["CitiesIndexPage"], },
    { path: 'travel-to/:cityname', component: _CitiesShow_page__WEBPACK_IMPORTED_MODULE_6__["CitiesShowPage"], },
];
var CitiesModule = /** @class */ (function () {
    function CitiesModule() {
    }
    CitiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_7__["LayoutSidemenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_CitiesIndex_page__WEBPACK_IMPORTED_MODULE_5__["CitiesIndexPage"], _CitiesShow_page__WEBPACK_IMPORTED_MODULE_6__["CitiesShowPage"],]
        })
    ], CitiesModule);
    return CitiesModule;
}());



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