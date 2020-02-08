(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NewsfeedComponent-newsfeed-module"],{

/***/ "./src/app/NewsfeedComponent/homefeed.page.ts":
/*!****************************************************!*\
  !*** ./src/app/NewsfeedComponent/homefeed.page.ts ***!
  \****************************************************/
/*! exports provided: HomefeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomefeedPage", function() { return HomefeedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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
        // logg('HomefeedPage.constructor()');
        appService.setTitle('Homefeed!');
        this.ngOnInit();
    }
    HomefeedPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_5__["ApiRouter"].homefeed).toPromise()];
                    case 1:
                        answer = _a.sent();
                        // logg(answer, 'answer');
                        this.newsitems = answer['newsitems'];
                        return [2 /*return*/];
                }
            });
        });
    };
    HomefeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'homefeed',
            template: __webpack_require__(/*! ./newsfeed.page.html */ "./src/app/NewsfeedComponent/newsfeed.page.html"),
            styles: [__webpack_require__(/*! ./newsfeed.page.scss */ "./src/app/NewsfeedComponent/newsfeed.page.scss")],
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

/***/ "./src/app/NewsfeedComponent/newsfeed.module.ts":
/*!******************************************************!*\
  !*** ./src/app/NewsfeedComponent/newsfeed.module.ts ***!
  \******************************************************/
/*! exports provided: NewsfeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPageModule", function() { return NewsfeedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homefeed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homefeed.page */ "./src/app/NewsfeedComponent/homefeed.page.ts");
/* harmony import */ var _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LayoutSidemenu/LayoutSidemenu.module */ "./src/app/LayoutSidemenu/LayoutSidemenu.module.ts");
/* harmony import */ var _newsfeed_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newsfeed.page */ "./src/app/NewsfeedComponent/newsfeed.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _homefeed_page__WEBPACK_IMPORTED_MODULE_5__["HomefeedPage"] },
    { path: 'news', component: _newsfeed_page__WEBPACK_IMPORTED_MODULE_7__["NewsfeedPage"] },
];
var NewsfeedPageModule = /** @class */ (function () {
    function NewsfeedPageModule() {
    }
    NewsfeedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_6__["LayoutSidemenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_homefeed_page__WEBPACK_IMPORTED_MODULE_5__["HomefeedPage"], _newsfeed_page__WEBPACK_IMPORTED_MODULE_7__["NewsfeedPage"]],
        })
    ], NewsfeedPageModule);
    return NewsfeedPageModule;
}());



/***/ }),

/***/ "./src/app/NewsfeedComponent/newsfeed.page.html":
/*!******************************************************!*\
  !*** ./src/app/NewsfeedComponent/newsfeed.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<layout-sidemenu>\n  <ion-content>\n\n    <div *ngIf=\"newsitems.length == 0\" >\n      <br /><br /><br />\n      <h1>Loading...</h1>\n      <br /><br /><br />\n    </div>\n\n    \n      <div class=\"a-1\" *ngFor=\"let n of newsitems\">\n\n        <div class='row' *ngIf=\"n.item_type=='gallery'\" >\n          <div class='title-card'>\n            <div class='title-card-inner'>\n              <h1><ion-icon slot=\"start\" name='camera'></ion-icon> &nbsp; {{ n.name }} ({{ n.photos.length }})</h1>\n              <p>{{ n.created_at.substring(0,10) }}</p>\n            </div>\n          </div>\n          <div class='card' *ngFor=\"let ph of n.photos | slice:0:3\">\n            <div class='card-inner'>\n              <div class='img'\n                [ngStyle]=\"{ background: '#cccccc url('+ph.large_url+')', \n                  'background-repeat': 'no-repeat', 'background-position': 'center',\n                  'background-size': 'contain' }\" \n              >&nbsp;</div>\n            </div>\n          </div>\n        </div>\n\n        <div class='row-newsitems-video' *ngIf=\"n.item_type=='video'\" >\n          <div class='title-card'>\n            <div class='title-card-inner'>\n              <h1><ion-icon slot=\"start\" name='videocam'></ion-icon> &nbsp; {{ n.name }}</h1>\n              <p><i>{{ n.created_at.substring(0,10) }}</i></p>\n            </div>\n          </div>\n          <div class='card'>\n            <div class='card-inner'>\n              <div *ngIf=\"n.youtube_id\" >\n                <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/{{n.youtube_id}}\" \n                  frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n              </div>\n              <!-- <video src=\"{{ n.url }}\" width=\"100%\" controls ></video> -->\n            </div>\n          </div>\n        </div>\n\n        <div class='row' *ngIf=\"n.item_type=='report'\" >\n          <div class='title-card'>\n            <div class='title-card-inner'>\n              <h1><ion-icon slot=\"start\" name='today' ></ion-icon> &nbsp; <a [routerLink]=\"['/en/reports/show/'+n.reportname]\" >{{ n.name }}</a></h1>\n              <p>{{ n.created_at.substring(0,10) }}</p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    \n    \n  </ion-content>\n</layout-sidemenu>\n\n"

/***/ }),

/***/ "./src/app/NewsfeedComponent/newsfeed.page.scss":
/*!******************************************************!*\
  !*** ./src/app/NewsfeedComponent/newsfeed.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  overflow: scroll; }\n\n.a-1 {\n  width: 100%;\n  height: 100%; }\n\n.row {\n  height: calc(100% - 40px);\n  overflow-x: scroll;\n  overflow-y: hidden;\n  /* margin: 20px; */\n  display: flex;\n  /* align-items: center;\n  justify-content: center; */\n  width: auto; }\n\n.title-card {\n  width: 35vw;\n  min-width: 250px;\n  margin-right: 40px; }\n\n.title-card-inner {\n  /* border: 2px solid green; */\n  width: 100%;\n  background: #eee;\n  height: calc(100% - 80px);\n  margin: 20px;\n  padding: 20px; }\n\n.card-inner {\n  /* border: 1px solid red; */\n  padding: 10px;\n  height: 100%; }\n\n.card img {\n  max-height: calc(100% - 20px);\n  max-width: calc(100vw - 40px);\n  /* max-height: 100%;\n  max-width: 100%; */ }\n\n.img {\n  width: calc(100vw - 1em);\n  /* height: calc(100% - 1em); */\n  height: 100%; }\n\n/**\n * newsitems-video\n */\n\n.row-newsitems-video {\n  height: calc(100% - 100px);\n  overflow-x: scroll;\n  overflow-y: hidden;\n  margin: 20px;\n  display: flex;\n  /* align-items: center;\n  justify-content: center; */\n  width: auto; }\n\n.row-newsitems-video .card {\n    /* max-height: calc(100% - 20px);\n    max-width: calc(100vw - 40px); */\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.row-newsitems-video .card-inner {\n    /* border: 1px solid red; */\n    background: #eee;\n    margin: 0;\n    padding: 0;\n    min-width: 90vw;\n    /* max-height: calc(100% - 100px); */\n    height: calc(100% - 20px);\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.row-newsitems-video .card-inner video {\n    margin: auto;\n    max-width: 100%;\n    max-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL2dhbWV1aV9pb25pYy9zcmMvYXBwL05ld3NmZWVkQ29tcG9uZW50L25ld3NmZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUI7RUFFekIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUVsQixtQkFBbUI7RUFFbkIsY0FBYTtFQUNiOzZCQUMyQjtFQUUzQixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDhCQUE4QjtFQUM5QixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osY0FBYSxFQUNkOztBQUdEO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWE7RUFDYixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSw4QkFBNkI7RUFDN0IsOEJBQTZCO0VBQzdCO3FCQUNtQixFQUNwQjs7QUFFRDtFQUNFLHlCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsYUFBWSxFQUNiOztBQUVEOztHQUVHOztBQUNIO0VBQ0UsMkJBQTBCO0VBRTFCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFFbEIsYUFBWTtFQUVaLGNBQWE7RUFDYjs2QkFDMkI7RUFFM0IsWUFBVyxFQTRCWjs7QUF4Q0Q7SUFlSTtxQ0FDaUM7SUFFakMsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQix3QkFBdUIsRUFDeEI7O0FBckJIO0lBdUJJLDRCQUE0QjtJQUM1QixpQkFBZ0I7SUFDaEIsVUFBUztJQUNULFdBQVU7SUFDVixnQkFBZTtJQUNmLHFDQUFxQztJQUNyQywwQkFBeUI7SUFFekIsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQix3QkFBdUIsRUFDeEI7O0FBbENIO0lBb0NJLGFBQVk7SUFDWixnQkFBZTtJQUNmLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL05ld3NmZWVkQ29tcG9uZW50L25ld3NmZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5hLTEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucm93IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcblxuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICAvKiBtYXJnaW46IDIwcHg7ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG5cbiAgd2lkdGg6IGF1dG87XG59XG5cbi50aXRsZS1jYXJkIHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi50aXRsZS1jYXJkLWlubmVyIHtcbiAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY2FyZCB7XG59XG4uY2FyZC1pbm5lciB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xuICAvKiBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7ICovXG59XG5cbi5pbWcge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDFlbSk7XG4gIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMWVtKTsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKipcbiAqIG5ld3NpdGVtcy12aWRlb1xuICovXG4ucm93LW5ld3NpdGVtcy12aWRlbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuXG4gIG1hcmdpbjogMjBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cblxuICB3aWR0aDogYXV0bztcblxuICAuY2FyZCB7XG4gICAgLyogbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7ICovXG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmNhcmQtaW5uZXIge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgICAvKiBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7ICovXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY2FyZC1pbm5lciB2aWRlbyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/NewsfeedComponent/newsfeed.page.ts":
/*!****************************************************!*\
  !*** ./src/app/NewsfeedComponent/newsfeed.page.ts ***!
  \****************************************************/
/*! exports provided: NewsfeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPage", function() { return NewsfeedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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
        this.currentUser = false;
        this.newsitems = [];
        Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])('NewsfeedPage#constructor');
        // appService.setTitle('Newsfeed');
        /* router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.ngOnInit();
          }
        }); */
        // this.render();
    }
    NewsfeedPage.prototype.ngOnInit = function () { };
    NewsfeedPage.prototype.render = function () {
        var _this = this;
        Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])('newsfeed.page#render');
        this.nativeStorage.getItem('current_user').then(function (a) { return JSON.parse(a); }).then(function (data) {
            Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])(data, 'current_user 5');
            _this.currentUser = data;
            if ('facebook' == data.type) {
                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accessToken', data.accessToken);
                Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])(params, 'params');
                var answer = _this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_5__["ApiRouter"].newsfeed, { params: params });
                // logg(answer, 'answer');
                answer.subscribe(function (data) {
                    if (data['newsitems']) {
                        _this.newsitems = data['newsitems'];
                    }
                }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    var toast;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('+++ error from m3 1-:', JSON.stringify(error));
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'The token has expired? Please login.',
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
        }, function (error) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('+++ newsfeed doesnt have current_user:', error);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'You are not logged in - please login.',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    NewsfeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsfeed',
            template: __webpack_require__(/*! ./newsfeed.page.html */ "./src/app/NewsfeedComponent/newsfeed.page.html"),
            styles: [__webpack_require__(/*! ./newsfeed.page.scss */ "./src/app/NewsfeedComponent/newsfeed.page.scss")],
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
//# sourceMappingURL=NewsfeedComponent-newsfeed-module.js.map