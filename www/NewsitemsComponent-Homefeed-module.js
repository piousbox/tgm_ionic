(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NewsitemsComponent-Homefeed-module"],{

/***/ "./src/app/NewsitemsComponent/Homefeed.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/NewsitemsComponent/Homefeed.module.ts ***!
  \*******************************************************/
/*! exports provided: HomefeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomefeedModule", function() { return HomefeedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homefeed_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homefeed.page */ "./src/app/NewsitemsComponent/homefeed.page.ts");
/* harmony import */ var _newsfeed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsfeed.page */ "./src/app/NewsitemsComponent/newsfeed.page.ts");
/* harmony import */ var _Newsitems_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Newsitems.module */ "./src/app/NewsitemsComponent/Newsitems.module.ts");
/* harmony import */ var _GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GalleriesComponent/GalleriesShow */ "./src/app/GalleriesComponent/GalleriesShow.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _homefeed_page__WEBPACK_IMPORTED_MODULE_2__["HomefeedPage"] },
    { path: 'news', component: _newsfeed_page__WEBPACK_IMPORTED_MODULE_3__["NewsfeedPage"] },
];
var HomefeedModule = /** @class */ (function () {
    function HomefeedModule() {
    }
    HomefeedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_5__["GalleriesShow"], _homefeed_page__WEBPACK_IMPORTED_MODULE_2__["HomefeedPage"], _newsfeed_page__WEBPACK_IMPORTED_MODULE_3__["NewsfeedPage"]],
            entryComponents: [_GalleriesComponent_GalleriesShow__WEBPACK_IMPORTED_MODULE_5__["GalleriesShow"],],
            imports: [
                _Newsitems_module__WEBPACK_IMPORTED_MODULE_4__["NewsitemsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ]
        })
    ], HomefeedModule);
    return HomefeedModule;
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

module.exports = "\n<layout-fab>\n  <!-- <ion-content> -->\n\n  <div class='wrapper'>\n    <div class='hero-wrapper'><div class='hero' ></div></div>\n\n    <newsitems-list [newsitems]=\"newsitems\" ></newsitems-list>  \n  </div>\n    \n  <!-- </ion-content> -->\n</layout-fab>\n\n"

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



/***/ })

}]);
//# sourceMappingURL=NewsitemsComponent-Homefeed-module.js.map