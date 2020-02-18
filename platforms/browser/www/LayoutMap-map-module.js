(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LayoutMap-map-module"],{

/***/ "./src/app/LayoutMap/GetStars.html":
/*!*****************************************!*\
  !*** ./src/app/LayoutMap/GetStars.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div padding >\n  <h1 class='center' >Get more stars!</h1>\n\n  <div class='stripeWidget'>\n    <div id=\"stripeElements\">\n      <ion-label>cc number</ion-label>\n      <ion-input class=\"cc-number\" [(ngModel)]=\"ccNumber\"></ion-input>\n\n      <ion-label>exp month</ion-label>\n      <ion-input class=\"cc-number\" [(ngModel)]=\"ccExpMonth\"></ion-input>\n\n      <ion-label>exp year</ion-label>\n      <ion-input class=\"cc-number\" [(ngModel)]=\"ccExpYear\"></ion-input>\n\n      <ion-label>cvc</ion-label>\n      <ion-input class=\"cc-number\" [(ngModel)]=\"ccCvc\"></ion-input>\n\n    </div>\n    <div (click)=\"payMini()\"><ion-button>Test Stripe</ion-button></div>\n  </div>\n\n  <ion-button (click)=\"close()\">[X]</ion-button>\n  <div>{{newNStars}}</div>\n</div>"

/***/ }),

/***/ "./src/app/LayoutMap/GetStars.scss":
/*!*****************************************!*\
  !*** ./src/app/LayoutMap/GetStars.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * stripe widget\n */\n.stripeWidget {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n.stripeWidget .cc-number {\n    border: 1px solid blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL3RnbV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9HZXRTdGFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOztHQUVHO0FBQ0g7RUFDRSxxQkFBYTtFQUFiLGNBQWE7RUFDYiwrQkFBbUI7RUFBbkIsOEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQix5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLHdCQUEyQjtVQUEzQiw0QkFBMkIsRUFLNUI7QUFURDtJQU9JLHVCQUFzQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL0xheW91dE1hcC9HZXRTdGFycy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIHN0cmlwZSB3aWRnZXRcbiAqL1xuLnN0cmlwZVdpZGdldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgLmNjLW51bWJlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/LayoutMap/GetStars.ts":
/*!***************************************!*\
  !*** ./src/app/LayoutMap/GetStars.ts ***!
  \***************************************/
/*! exports provided: GetStars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStars", function() { return GetStars; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-router */ "./src/app/app-router.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
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









var GetStars = /** @class */ (function () {
    function GetStars(appService, httpClient, modalController, nativeStorage, stripe) {
        this.appService = appService;
        this.httpClient = httpClient;
        this.modalController = modalController;
        this.nativeStorage = nativeStorage;
        this.stripe = stripe;
        this.ccNumber = '4242424242424242';
        this.ccExpMonth = 11;
        this.ccExpYear = 2021;
        this.ccCvc = '212';
        this.currentUser = false;
        this.stripe.setPublishableKey(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].stripePublishableKey);
        this.setCurrentUser();
    }
    GetStars.prototype.close = function () {
        this.modalController.dismiss();
    };
    GetStars.prototype.payMini = function () {
        var _this = this;
        Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])(this.ccNumber, 'ccNumber');
        var card = {
            number: this.ccNumber,
            expMonth: this.ccExpMonth,
            expYear: this.ccExpYear,
            cvc: this.ccCvc,
        };
        this.stripe.createCardToken(card).then(function (token) { return __awaiter(_this, void 0, void 0, function () {
            var cu, answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(token.id);
                        return [4 /*yield*/, this.nativeStorage.getItem('current_user').then(function (u) { return JSON.parse(u); })];
                    case 1:
                        cu = _a.sent();
                        Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])(cu, 'cu');
                        return [4 /*yield*/, this.httpClient.post(_app_router__WEBPACK_IMPORTED_MODULE_5__["ApiRouter"].getStars, {
                                accessToken: cu.longTermToken,
                                amount: 101,
                                stripeToken: token.id,
                                kind: _const__WEBPACK_IMPORTED_MODULE_7__["C"].oneStar,
                            }).toPromise()];
                    case 2:
                        answer = _a.sent();
                        Object(_const__WEBPACK_IMPORTED_MODULE_7__["logg"])(answer, 'answer');
                        this.newNStars = answer['n_stars'];
                        this.appService.setNStars(answer['n_stars']);
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (error) { return console.error(error); });
    };
    GetStars.prototype.setCurrentUser = function () {
        var _this = this;
        this.nativeStorage.getItem('current_user').then(function (u) { return JSON.parse(u); }).then(function (data) {
            _this.currentUser = data;
        }).catch(function (e) {
            console.log('+++ currentUser() error:', e);
        });
    };
    GetStars = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'get-stars',
            template: __webpack_require__(/*! ./GetStars.html */ "./src/app/LayoutMap/GetStars.html"),
            styles: [__webpack_require__(/*! ./GetStars.scss */ "./src/app/LayoutMap/GetStars.scss")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__["Stripe"]])
    ], GetStars);
    return GetStars;
}());



/***/ }),

/***/ "./src/app/LayoutMap/inventory.scss":
/*!******************************************!*\
  !*** ./src/app/LayoutMap/inventory.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * footer\n */\n.main-footer {\n  height: 100px;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  padding: .5em; }\n.main-footer-inner {\n  border: 1px solid grey;\n  height: 100%;\n  background: #ededde;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n.footer-collapse {\n  position: absolute;\n  background: url('hamburger.png');\n  width: 1em;\n  height: 1em;\n  margin-top: -1em;\n  background-size: cover; }\n.footer-collapsed .main-footer {\n  height: 2em; }\n.main-footer-overlay {\n  display: none; }\n.footer-collapsed .main-footer-inner {\n  /* padding: 0; */\n  height: 0;\n  display: none; }\n.footer-collapsed .main-footer-overlay {\n  display: block;\n  background: #ededde;\n  height: 1em;\n  border: 1px solid gray; }\n.img-avatar {\n  margin: auto 0 auto 1em;\n  width: calc(100px - 1em - 2px);\n  height: calc(100px - 1em - 2px - 1em);\n  /* .5em on top, bottom */\n  background: url('default-avatar.png');\n  background-size: cover; }\n/**\n * inventory\n */\n.img-gem {\n  background: url('gem.png');\n  background-size: cover;\n  width: calc(100px - 4em);\n  height: calc(100px - 4em); }\n.img-star {\n  background: url('star.png');\n  background-size: cover;\n  width: calc(100px - 4em);\n  height: calc(100px - 4em);\n  cursor: pointer; }\n.widget-stars {\n  line-height: calc(100px - 4em);\n  height: 100%;\n  padding: 0 2em;\n  display: -webkit-box;\n  display: flex; }\n.widget-stars-inner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-items: center; }\n.widget-stars .count {\n  line-height: calc(100px - 4em);\n  margin-right: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL3RnbV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9pbnZlbnRvcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7R0FFRztBQUNIO0VBQ0UsY0FBYTtFQUNiLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxRQUFPO0VBQ1AsY0FBYSxFQUNkO0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLG9CQUFtQjtFQUVuQixxQkFBYTtFQUFiLGNBQWE7RUFDYiwrQkFBbUI7RUFBbkIsOEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQix5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLHdCQUEyQjtVQUEzQiw0QkFBMkIsRUFDNUI7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixpQ0FBbUQ7RUFDbkQsV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsdUJBQXNCLEVBQ3ZCO0FBRUQ7RUFDRSxZQUFXLEVBQ1o7QUFDRDtFQUNFLGNBQWEsRUFDZDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVM7RUFDVCxjQUFhLEVBQ2Q7QUFDRDtFQUNFLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsWUFBVztFQUNYLHVCQUFzQixFQUN2QjtBQUVEO0VBQ0Usd0JBQXVCO0VBRXZCLCtCQUE4QjtFQUM5QixzQ0FBcUM7RUFBRSx5QkFBeUI7RUFHaEUsc0NBQXNEO0VBQ3RELHVCQUFzQixFQUN2QjtBQUNEOztHQUVHO0FBQ0g7RUFDRSwyQkFBK0M7RUFDL0MsdUJBQXNCO0VBQ3RCLHlCQUF3QjtFQUN4QiwwQkFBeUIsRUFDMUI7QUFDRDtFQUNFLDRCQUFnRDtFQUNoRCx1QkFBc0I7RUFDdEIseUJBQXdCO0VBQ3hCLDBCQUF5QjtFQUN6QixnQkFBZSxFQUNoQjtBQUVEO0VBQ0UsK0JBQThCO0VBQzlCLGFBQVk7RUFFWixlQUFjO0VBQ2QscUJBQWE7RUFBYixjQUFhLEVBQ2Q7QUFDRDtFQUNFLHFCQUFhO0VBQWIsY0FBYTtFQUNiLCtCQUFtQjtFQUFuQiw4QkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsc0JBQXFCLEVBQ3RCO0FBQ0Q7RUFDRSwrQkFBOEI7RUFDOUIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvTGF5b3V0TWFwL2ludmVudG9yeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIGZvb3RlclxuICovXG4ubWFpbi1mb290ZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAuNWVtO1xufVxuLm1haW4tZm9vdGVyLWlubmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTsgIFxuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlZGVkZGU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5mb290ZXItY29sbGFwc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzY0eDY0L2hhbWJ1cmdlci5wbmcnKTtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIG1hcmdpbi10b3A6IC0xZW07XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5mb290ZXItY29sbGFwc2VkIC5tYWluLWZvb3RlciB7XG4gIGhlaWdodDogMmVtO1xufVxuLm1haW4tZm9vdGVyLW92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvb3Rlci1jb2xsYXBzZWQgLm1haW4tZm9vdGVyLWlubmVyIHtcbiAgLyogcGFkZGluZzogMDsgKi9cbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvb3Rlci1jb2xsYXBzZWQgLm1haW4tZm9vdGVyLW92ZXJsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2VkZWRkZTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5pbWctYXZhdGFyIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxZW07XG5cbiAgd2lkdGg6IGNhbGMoMTAwcHggLSAxZW0gLSAycHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwcHggLSAxZW0gLSAycHggLSAxZW0pOyAvKiAuNWVtIG9uIHRvcCwgYm90dG9tICovXG5cblxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9zcmMvZGVmYXVsdC1hdmF0YXIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4vKipcbiAqIGludmVudG9yeVxuICovXG4uaW1nLWdlbSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzI1NngyNTYvZ2VtLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogY2FsYygxMDBweCAtIDRlbSk7XG4gIGhlaWdodDogY2FsYygxMDBweCAtIDRlbSk7XG59XG4uaW1nLXN0YXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy8yNTZ4MjU2L3N0YXIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMHB4IC0gNGVtKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHB4IC0gNGVtKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2lkZ2V0LXN0YXJzIHtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMTAwcHggLSA0ZW0pO1xuICBoZWlnaHQ6IDEwMCU7XG4gIFxuICBwYWRkaW5nOiAwIDJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53aWRnZXQtc3RhcnMtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4ud2lkZ2V0LXN0YXJzIC5jb3VudCB7XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEwMHB4IC0gNGVtKTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/LayoutMap/mainfold.scss":
/*!*****************************************!*\
  !*** ./src/app/LayoutMap/mainfold.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * From: https://jsfiddle.net/MadLittleMods/LmYay/\n */\n*, *:before, *:after {\n  box-sizing: border-box; }\n.debug {\n  border: 1px solid red; }\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden; }\n.mainfold-parent {\n  height: 100%; }\n.main-header {\n  height: 40px;\n  width: 100%;\n  padding-top: .5em;\n  padding-left: .5em;\n  line-height: 40px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.main-text {\n  padding: .5em;\n  width: 100%;\n  height: 100%; }\n.main-twofold {\n  height: 100%;\n  padding-top: 40px;\n  padding-bottom: 100px;\n  /* display: flex;\n  flex-flow: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: stretch;\n  */ }\n.header-collapsed .main-twofold {\n  padding-top: 0; }\n.footer-collapsed .main-twofold {\n  padding-bottom: 2em; }\n.main-twofold-inner {\n  height: 100%;\n  position: relative; }\n.main-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  padding: 0.5em; }\n.main-left-inner {\n  /* background: white; */\n  background: #d2d2d2;\n  border: 1px solid grey;\n  width: 100%;\n  height: 100%;\n  /* padding: .5em; */\n  overflow: scroll;\n  position: relative;\n  top: 0;\n  left: 0; }\n.main-right {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  padding: 0.5em; }\n.main-right-inner {\n  background: white;\n  width: 100%;\n  height: 100%;\n  border: 1px solid grey;\n  /* padding: .5em; */\n  overflow: scroll; }\n/*\n * collapse\n */\n.main-collapse {\n  position: absolute;\n  /* top: 2em; */\n  background: url('hamburger.png');\n  width: 1em;\n  height: 1em;\n  margin-left: -1em;\n  background-size: cover; }\n.main-collapse-left {\n  position: absolute;\n  bottom: 2em;\n  background: url('arrow-left.png');\n  width: 1em;\n  height: 1em;\n  margin-left: -1em;\n  background-size: cover; }\n.main-collapse-right {\n  position: absolute;\n  bottom: 1em;\n  background: url('arrow-right.png');\n  width: 1em;\n  height: 1em;\n  margin-left: -1em;\n  background-size: cover; }\n.left-collapsed .main-left {\n  width: 1em; }\n.left-collapsed .main-right {\n  width: calc(100% - 2em);\n  left: 2em; }\n.left-collapsed .main-left-inner {\n  display: none; }\n.left-collapsed .zoom-control {\n  display: none; }\n.main-left-overlay {\n  display: none; }\n.left-collapsed .main-left-overlay {\n  display: block;\n  background: #ededde;\n  width: 1em;\n  border: 1px solid gray;\n  height: 100%; }\n.main-right-overlay {\n  display: none; }\n/**\n * right-collapsed\n */\n.right-collapsed .main-right {\n  left: calc(100% - 2em); }\n.right-collapsed .main-right-inner {\n  display: none; }\n.right-collapsed .main-right-overlay {\n  display: block;\n  background: #ededde;\n  width: 1em;\n  border: 1px solid gray;\n  height: 100%; }\n.right-collapsed .main-left {\n  width: calc(100% - 2em); }\n/**\n * header\n */\n.header-collapsed .main-header {\n  display: none; }\n.header-control {\n  display: none;\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n  z-index: 2; }\n.header-collapsed .header-control {\n  display: block; }\n.header-control-inner {\n  background: white url('hamburger.png');\n  background-size: cover;\n  width: 1em;\n  height: 1em; }\n.main-header {\n  display: -webkit-box;\n  display: flex; }\n.main-header .img {\n  margin-left: 10px;\n  background-size: cover;\n  height: 30px;\n  width: 30px; }\n.img-swords {\n  background: url('swords.png'); }\n.img-news {\n  background: url('news.png'); }\n.img-city {\n  background: url('city.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL3RnbV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9tYWluZm9sZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7RUFHRSx1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsVUFBUztFQUNULFdBQVU7RUFDVixhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7QUFJRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFFakIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPLEVBQ1I7QUFDRDtFQUNFLGNBQWE7RUFDYixZQUFXO0VBQ1gsYUFBWSxFQUNiO0FBR0Q7RUFDRSxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHNCQUFxQjtFQUVyQjs7Ozs7SUFLRSxFQUNIO0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7QUFDRDtFQUNFLG9CQUFtQixFQUNwQjtBQUNEO0VBQ0UsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxPQUFNO0VBRU4sV0FBVTtFQUNWLGFBQVk7RUFDWixlQUFjLEVBQ2Y7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixvQkFBbUI7RUFDbkIsdUJBQXNCO0VBRXRCLFlBQVc7RUFDWCxhQUFZO0VBRVosb0JBQW9CO0VBQ3BCLGlCQUFnQjtFQUVoQixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU8sRUFDUjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxPQUFNO0VBRU4sV0FBVTtFQUNWLGFBQVk7RUFDWixlQUFjLEVBQ2Y7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsaUJBQWdCLEVBQ2pCO0FBRUQ7O0dBRUc7QUFDSDtFQUNFLG1CQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUNBQW1EO0VBQ25ELFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHVCQUFzQixFQUN2QjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxrQ0FBb0Q7RUFDcEQsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsdUJBQXNCLEVBQ3ZCO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLG1DQUFxRDtFQUNyRCxXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDdkI7QUFJRDtFQUNFLFdBQVUsRUFDWDtBQUNEO0VBQ0Usd0JBQXVCO0VBQ3ZCLFVBQVMsRUFDVjtBQUVEO0VBQW1DLGNBQWEsRUFBSTtBQUNwRDtFQUFnQyxjQUFhLEVBQUk7QUFDakQ7RUFBcUIsY0FBYSxFQUFJO0FBRXRDO0VBQ0UsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixXQUFVO0VBQ1YsdUJBQXNCO0VBQ3RCLGFBQVksRUFDYjtBQUNEO0VBQ0UsY0FBYSxFQUNkO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLHVCQUFzQixFQUN2QjtBQUNEO0VBQXFDLGNBQWEsRUFBSTtBQUN0RDtFQUNFLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsV0FBVTtFQUNWLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2I7QUFDRDtFQUNFLHdCQUF1QixFQUN4QjtBQUVEOztHQUVHO0FBQ0g7RUFDRSxjQUFhLEVBQ2Q7QUFDRDtFQUNFLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVc7RUFDWCxXQUFVLEVBQ1g7QUFDRDtFQUNFLGVBQWMsRUFDZjtBQUNEO0VBQ0UsdUNBQXlEO0VBQ3pELHVCQUFzQjtFQUN0QixXQUFVO0VBQ1YsWUFBVyxFQUNaO0FBRUQ7RUFDRSxxQkFBYTtFQUFiLGNBQWEsRUFDZDtBQUNEO0VBQ0Usa0JBQWlCO0VBRWpCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osWUFBVyxFQUNaO0FBQ0Q7RUFDRSw4QkFBZ0QsRUFDakQ7QUFDRDtFQUNFLDRCQUE4QyxFQUMvQztBQUNEO0VBQ0UsNEJBQThDLEVBQy9DIiwiZmlsZSI6InNyYy9hcHAvTGF5b3V0TWFwL21haW5mb2xkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZyb206IGh0dHBzOi8vanNmaWRkbGUubmV0L01hZExpdHRsZU1vZHMvTG1ZYXkvXG4gKi9cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZGVidWcge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5odG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbmZvbGQtcGFyZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5mb2xkLWl0ZW0ge1xufVxuXG4ubWFpbi1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogLjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAuNWVtO1xuICBsaW5lLWhlaWdodDogNDBweDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5tYWluLXRleHQge1xuICBwYWRkaW5nOiAuNWVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5tYWluLXR3b2ZvbGQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG5cbiAgLyogZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICovXG59XG4uaGVhZGVyLWNvbGxhcHNlZCAubWFpbi10d29mb2xkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uZm9vdGVyLWNvbGxhcHNlZCAubWFpbi10d29mb2xkIHtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbn1cbi5tYWluLXR3b2ZvbGQtaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcblxuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuLm1haW4tbGVmdC1pbm5lciB7XG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xuICBiYWNrZ3JvdW5kOiAjZDJkMmQyO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIFxuICAvKiBwYWRkaW5nOiAuNWVtOyAqL1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLm1haW4tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuXG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMC41ZW07XG59XG4ubWFpbi1yaWdodC1pbm5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAvKiBwYWRkaW5nOiAuNWVtOyAqL1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vKlxuICogY29sbGFwc2VcbiAqL1xuLm1haW4tY29sbGFwc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIHRvcDogMmVtOyAqL1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9oYW1idXJnZXIucG5nJyk7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluLWNvbGxhcHNlLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy8xNngxNi9hcnJvdy1sZWZ0LnBuZycpO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbi1jb2xsYXBzZS1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxZW07XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzE2eDE2L2Fycm93LXJpZ2h0LnBuZycpO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbi1jb2xsYXBzZS1yaWdodCB7XG59XG5cbi5sZWZ0LWNvbGxhcHNlZCAubWFpbi1sZWZ0IHtcbiAgd2lkdGg6IDFlbTtcbn1cbi5sZWZ0LWNvbGxhcHNlZCAubWFpbi1yaWdodCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xuICBsZWZ0OiAyZW07XG59XG5cbi5sZWZ0LWNvbGxhcHNlZCAubWFpbi1sZWZ0LWlubmVyIHsgZGlzcGxheTogbm9uZTsgfVxuLmxlZnQtY29sbGFwc2VkIC56b29tLWNvbnRyb2wgeyBkaXNwbGF5OiBub25lOyB9XG4ubWFpbi1sZWZ0LW92ZXJsYXkgeyBkaXNwbGF5OiBub25lOyB9XG5cbi5sZWZ0LWNvbGxhcHNlZCAubWFpbi1sZWZ0LW92ZXJsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2VkZWRkZTtcbiAgd2lkdGg6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW4tcmlnaHQtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKipcbiAqIHJpZ2h0LWNvbGxhcHNlZFxuICovXG4ucmlnaHQtY29sbGFwc2VkIC5tYWluLXJpZ2h0IHtcbiAgbGVmdDogY2FsYygxMDAlIC0gMmVtKTtcbn1cbi5yaWdodC1jb2xsYXBzZWQgLm1haW4tcmlnaHQtaW5uZXIgeyBkaXNwbGF5OiBub25lOyB9XG4ucmlnaHQtY29sbGFwc2VkIC5tYWluLXJpZ2h0LW92ZXJsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2VkZWRkZTtcbiAgd2lkdGg6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJpZ2h0LWNvbGxhcHNlZCAubWFpbi1sZWZ0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJlbSk7XG59XG5cbi8qKlxuICogaGVhZGVyXG4gKi9cbi5oZWFkZXItY29sbGFwc2VkIC5tYWluLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyLWNvbnRyb2wge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41ZW07XG4gIGxlZnQ6IDAuNWVtO1xuICB6LWluZGV4OiAyO1xufVxuLmhlYWRlci1jb2xsYXBzZWQgLmhlYWRlci1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyLWNvbnRyb2wtaW5uZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9oYW1idXJnZXIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xufVxuXG4ubWFpbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4taGVhZGVyIC5pbWcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcblxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuLmltZy1zd29yZHMge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9zd29yZHMucG5nJyk7XG59XG4uaW1nLW5ld3Mge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9uZXdzLnBuZycpO1xufVxuLmltZy1jaXR5IHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvY2l0eS5wbmcnKTtcbn1cblxuXG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/LayoutMap/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/LayoutMap/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.page */ "./src/app/LayoutMap/map.page.ts");
/* harmony import */ var _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LayoutSidemenu/LayoutSidemenu.module */ "./src/app/LayoutSidemenu/LayoutSidemenu.module.ts");
/* harmony import */ var _NewsitemsComponent_Newsitems_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NewsitemsComponent/Newsitems.module */ "./src/app/NewsitemsComponent/Newsitems.module.ts");
/* harmony import */ var _GetStars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GetStars */ "./src/app/LayoutMap/GetStars.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { NewsitemsList } from '../NewsitemsComponent/newsitems.list';

var routes = [
    { path: '', component: _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"] },
    { path: ':map_slug/markers/:marker_slug', component: _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"] },
    { path: ':map_slug', component: _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"] },
];
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_6__["LayoutSidemenuModule"],
                _NewsitemsComponent_Newsitems_module__WEBPACK_IMPORTED_MODULE_7__["NewsitemsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_GetStars__WEBPACK_IMPORTED_MODULE_8__["GetStars"], _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]],
            entryComponents: [_GetStars__WEBPACK_IMPORTED_MODULE_8__["GetStars"]],
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "./src/app/LayoutMap/map.page.html":
/*!*****************************************!*\
  !*** ./src/app/LayoutMap/map.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class='n-debug' >\n  <div class=\"mainfold-parent \n    {{ this.footerCollapsed ? 'footer-collapsed' : '' }} \n    {{ this.halfCollapsed }} \n    {{ this.headerCollapsed ? 'header-collapsed' : '' }} \">\n    <div class=\"mainfold-item main-header\">\n      <div (click)=\"collapseHeader()\">[X]</div>\n      &nbsp; &nbsp;\n      <div (click)=\"navigateToMap('map-world')\" >Header</div>\n      <div (click)=\"navigate('maps')\" class='img img-swords' ></div>\n      <div (click)=\"navigate(appRouter.citiesPath)\" class='img img-city' ></div>\n      <div (click)=\"navigate(appRouter.homefeedPath)\" class='img img-news' ></div>\n    </div>\n    <div class='header-control'>\n      <!-- <div class='header-control-inner' (click)=\"collapseHeader()\"></div> -->\n      <ion-menu-toggle>\n        <div class='header-control-inner'></div>\n      </ion-menu-toggle>\n    </div>\n    \n    <div class=\"mainfold-item main-twofold\">\n      <div class='main-twofold-inner'>\n        <div id='mainLeft' class='main-left main-half' >\n          <div class='zoom-control'>\n            <div (click)=\"zoomIn()\" class='in'>[+]</div>\n            <div (click)=\"zoomOut()\" class='out'>[-]</div>\n          </div>\n          <div class='main-left-overlay'></div>\n          <div class='main-left-inner'>\n\n            <div class='main-map'>\n              <div class='main-map-inner'>\n\n                <div class='img-bg' \n                  [style.background-image]=\"'url('+map['img_path']+')'\" \n                  [style.width]=\"map['w'] * zoomFactor + 'px'\" \n                  [style.height]=\"map['h'] * zoomFactor + 'px'\"\n                >\n\n                  <ng-container *ngFor=\"let marker of map['markers']\" >\n\n                    <div class=\"img-marker {{marker_slug==marker.slug ? 'is-selected' : ''}}\" \n                      *ngIf=\"C.item_type_map == marker.item_type\" \n                      [style.width]=\"marker['w']*zoomFactor + 'px'\"\n                      [style.height]=\"marker['h']*zoomFactor + 'px'\"\n                      [style.left]=\"marker['x']*zoomFactor + 'px'\"\n                      [style.top]=\"marker['y']*zoomFactor + 'px'\"\n                      [style.background-image]=\"'url('+marker['img_path']+')'\"\n                      (click)=\"navigateToMap(marker['slug'])\" ></div>\n\n                    <div class=\"img-marker {{marker_slug==marker.slug ? 'is-selected' : ''}}\" \n                      *ngIf=\"C.item_type_location == marker.item_type\" \n                      [style.width]=\"marker['w']*zoomFactor + 'px'\"\n                      [style.height]=\"marker['h']*zoomFactor + 'px'\"\n                      [style.left]=\"marker['x']*zoomFactor + 'px'\"\n                      [style.top]=\"marker['y']*zoomFactor + 'px'\"\n                      [style.background-image]=\"'url('+marker['img_path']+')'\"\n                      (click)=\"navigateToLocation(map['slug'], marker['slug'])\" ></div>\n                  </ng-container>\n\n\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--\n          -- mainRight\n          -->\n        <div id='mainRight' class='main-right main-half' >\n          <div class='main-collapse' (click)=\"collapseMain()\" ></div>\n          <div class='main-collapse-2'>\n            <div class='main-collapse-left' (click)=\"collapseLeft()\"></div>\n            <div class='main-collapse-right' (click)=\"collapseRight()\"></div>\n          </div>\n          <div class='main-right-overlay'></div>\n          <div class='main-right-inner'>\n\n            <div class='main-text' *ngIf=\"!this.location\" >\n\n              <div class='breadcrumbs'>\n                <span (click)=navigateToMap(map.parent_slug) >{{map.parent_slug}}</span> &gt; \n                <b>{{map.slug}}</b>\n              </div>\n\n              <div class='descr'>{{ map['description'] }}</div>\n\n              <div class=\"markers-list\" >\n                \n                  <div class=\"item\"\n                    *ngFor=\"let marker of map['markers']\"\n                    (click)=\"navigateToLocation2(map.slug, marker.slug, marker.item_type)\"\n                  >\n                    <ion-img [src]=\"marker.title_img_path\" alt='' ></ion-img>\n                    <span class='label'>{{ marker.name }}</span>\n                  </div>\n                \n              </div>\n\n              <newsitems-list [newsitems]=\"map.newsitems\" ></newsitems-list>\n            </div>\n\n            <div class='main-text' *ngIf=\"this.location\">\n              <div class='breadcrumbs'>\n                <span (click)=navigateToMap(map.parent_slug) >{{map.parent_slug}}</span> &gt; \n                <span (click)=navigateToMap(map.slug)        >{{map.slug}}</span> &gt;\n                <b>{{this.location.slug}}</b>\n              </div>\n\n              <div [innerHTML]=location.description ></div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <!--\n      -- bottom panel\n      -->\n    <div class=\"mainfold-item main-footer\">\n      <div class='footer-collapse' (click)=\"collapseFooter()\" ></div>\n      <div class='main-footer-overlay'></div>\n      <div class='main-footer-inner'>\n\n        <div class='img img-avatar' ></div>\n\n        <div class='widget-stars'>\n          <div class='widget-stars-inner'>\n            <div (click)=\"showGetStars()\" class='img img-star' >{{nStars}}</div>\n            <!-- <ion-button (click)=\"showGetStars()\" >Get more stars</ion-button> -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/LayoutMap/map.page.ts":
/*!***************************************!*\
  !*** ./src/app/LayoutMap/map.page.ts ***!
  \***************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _GetStars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GetStars */ "./src/app/LayoutMap/GetStars.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-router */ "./src/app/app-router.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
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













var MapPage = /** @class */ (function () {
    function MapPage(appService, httpClient, loadingController, menu, modalController, nativeStorage, platform, route, router, splashScreen, statusBar, stripe, toastController) {
        var _this = this;
        this.appService = appService;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.menu = menu;
        this.modalController = modalController;
        this.nativeStorage = nativeStorage;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.stripe = stripe;
        this.toastController = toastController;
        this.collapseDirection = 'right'; // 'left' or 'right'
        this.currentUser = {};
        this.currentUserStr = "";
        this.footerCollapsed = true;
        this.halfCollapsed = "left-collapsed"; // 'none-collapsed', 'left-collapsed', 'right-collapsed'
        this.headerCollapsed = true;
        this.location = false;
        this.map = false;
        this.map_slug = '';
        this.marker_slug = '';
        this.markers = [];
        this.newsitems = [];
        this.nStars = 0;
        this.zoomFactor = 1.0;
        Object(_const__WEBPACK_IMPORTED_MODULE_12__["logg"])('MapPage constructor()');
        this.C = _const__WEBPACK_IMPORTED_MODULE_12__["C"];
        this.setCurrentUser();
        this.appRouter = _app_router__WEBPACK_IMPORTED_MODULE_10__["AppRouter"];
        this.appService.nStars.subscribe(function (n) {
            _this.nStars = parseInt(n);
        });
        this.platform.ready().then(function () {
            _this.stripe.setPublishableKey(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].stripePublishableKey);
            _this.getStars();
            _this.ngOnInit();
        });
    }
    MapPage.prototype.collapseFooter = function () {
        this.footerCollapsed = this.footerCollapsed ? false : true;
    };
    MapPage.prototype.collapseHeader = function () {
        this.headerCollapsed = this.headerCollapsed ? false : true;
    };
    MapPage.prototype.collapseLeft = function () {
        if ('none-collapsed' == this.halfCollapsed) {
            this.halfCollapsed = 'left-collapsed';
            this.collapseDirection = 'right';
        }
        else {
            this.halfCollapsed = 'none-collapsed';
            this.collapseDirection = 'left';
        }
    };
    MapPage.prototype.collapseMain = function () {
        if ('left-collapsed' === this.halfCollapsed) {
            this.halfCollapsed = 'none-collapsed';
            this.collapseDirection = 'right';
        }
        else if ('none-collapsed' === this.halfCollapsed && 'right' === this.collapseDirection) {
            this.halfCollapsed = 'right-collapsed';
            this.collapseDirection = 'left';
        }
        else if ('right-collapsed' === this.halfCollapsed) {
            this.halfCollapsed = 'none-collapsed';
            this.collapseDirection = 'left';
        }
        else if ('none-collapsed' === this.halfCollapsed && 'left' === this.collapseDirection) {
            this.halfCollapsed = 'left-collapsed';
            this.collapseDirection = 'right';
        }
    };
    MapPage.prototype.collapseRight = function () {
        if ('none-collapsed' == this.halfCollapsed) {
            this.halfCollapsed = 'right-collapsed';
            this.collapseDirection = 'left';
        }
        else {
            this.halfCollapsed = 'none-collapsed';
            this.collapseDirection = 'right';
        }
    };
    MapPage.prototype.getStars = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nativeStorage.getItem('current_user').then(function (a) { return JSON.parse(a); }).then(function (cu) {
                            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('accessToken', cu.longTermToken);
                        }).then(function (params) { return __awaiter(_this, void 0, void 0, function () {
                            var account;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_10__["ApiRouter"].account, { params: params }).toPromise()];
                                    case 1:
                                        account = _a.sent();
                                        this.nStars = account['n_stars'];
                                        return [2 /*return*/];
                                }
                            });
                        }); }).catch(function (e) {
                            Object(_const__WEBPACK_IMPORTED_MODULE_12__["logg"])(e, 'the - error');
                        })];
                    case 1:
                        params = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.navigate = function (where) {
        this.router.navigate([where]);
    };
    MapPage.prototype.navigateToLocation = function (map_slug, marker_slug) {
        this.marker_slug = marker_slug;
        this.map_slug = map_slug;
        this.router.navigate(["/maps/" + map_slug + "/markers/" + marker_slug]);
        this.ngOnInit();
    };
    MapPage.prototype.navigateToLocation2 = function (ms, m2s, tt) {
        // logg([ms, m2s, tt], "navigateToLocation2()");
        if (_const__WEBPACK_IMPORTED_MODULE_12__["C"].item_type_location == tt) {
            this.navigateToLocation(ms, m2s);
        }
        else if (_const__WEBPACK_IMPORTED_MODULE_12__["C"].item_type_map == tt) {
            this.navigateToMap(m2s);
        }
    };
    MapPage.prototype.navigateToMap = function (slug) {
        if (slug === void 0) { slug = 'map-world'; }
        this.router.navigate(["/maps/" + slug]);
        this.ngOnInit();
    };
    MapPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, mapp, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        Object(_const__WEBPACK_IMPORTED_MODULE_12__["logg"])([this.marker_slug], 'MapPage ngOnInit()');
                        return [4 /*yield*/, this.setCurrentUser()];
                    case 1:
                        _b.sent();
                        this.map_slug = this.route.snapshot.paramMap.get('map_slug') || _const__WEBPACK_IMPORTED_MODULE_12__["C"].worldMapSlug;
                        this.marker_slug = this.route.snapshot.paramMap.get('marker_slug') || false;
                        if (!this.map_slug) return [3 /*break*/, 3];
                        path = _app_router__WEBPACK_IMPORTED_MODULE_10__["ApiRouter"].map(this.map_slug);
                        return [4 /*yield*/, this.httpClient.get(path, { params: this.params }).toPromise()];
                    case 2:
                        mapp = _b.sent();
                        this.map = mapp['map'];
                        _b.label = 3;
                    case 3:
                        if (!this.marker_slug) return [3 /*break*/, 5];
                        _a = this;
                        return [4 /*yield*/, this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_10__["ApiRouter"].marker(this.marker_slug), { params: this.params }).toPromise()];
                    case 4:
                        _a.location = _b.sent();
                        Object(_const__WEBPACK_IMPORTED_MODULE_12__["logg"])(this.location, 'location!');
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.setCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nativeStorage.getItem('current_user').then(function (u) { return JSON.parse(u); }).then(function (data) {
                            _this.currentUser = data;
                            _this.params = { accessToken: data.longTermToken };
                            // this.currentUserStr = JSON.stringify(Object.keys(data).map( k => `${k}::${data[k].toString().substring(0,10)}` ));
                        }).catch(function (e) {
                            _this.currentUser = false;
                            _this.currentUserStr = "";
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.showGetStars = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _GetStars__WEBPACK_IMPORTED_MODULE_8__["GetStars"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MapPage.prototype.zoomIn = function () {
        this.zoomFactor = this.zoomFactor * 2;
    };
    MapPage.prototype.zoomOut = function () {
        this.zoomFactor = this.zoomFactor / 2;
    };
    MapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/LayoutMap/map.page.html"),
            styles: [__webpack_require__(/*! ./mainfold.scss */ "./src/app/LayoutMap/mainfold.scss"), __webpack_require__(/*! ./inventory.scss */ "./src/app/LayoutMap/inventory.scss"), __webpack_require__(/*! ./map.scss */ "./src/app/LayoutMap/map.scss")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_7__["Stripe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], MapPage);
    return MapPage;
}());



/***/ }),

/***/ "./src/app/LayoutMap/map.scss":
/*!************************************!*\
  !*** ./src/app/LayoutMap/map.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-map {\n  background: #d2d2d2;\n  height: 100%;\n  /* overflow: hidden; */ }\n\n.main-map-inner {\n  /* vertical align of map smaller than screen */\n  /* trash */\n  /* display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; */\n  overflow: scroll;\n  /* doesn't work... */\n  /* position: relative;\n  top: 50%; left: 50%;\n  transform: translate(-50%,-50%); */ }\n\n.img-map-1 {\n  background: url('3.jpg');\n  width: 800px;\n  height: 800px; }\n\n.img-bg {\n  background-size: cover;\n  position: relative;\n  margin: auto; }\n\n.img-world-1 {\n  /* background: red url('../../assets/maps/1200x1200/world-1.jpg'); */\n  /* width: 600px;\n  height: 600px; */ }\n\n.zoom-control {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  font-family: monospace;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 40px;\n  justify-content: space-around;\n  align-content: space-around;\n  z-index: 2;\n  background: white; }\n\n.main-right-inner .descr {\n  padding: 0.5em 0 1em 0; }\n\n/**\n * markers \n */\n\n.img-marker {\n  position: absolute;\n  background-size: cover; }\n\n.debug .img-marker {\n  border: 1px solid yellow; }\n\n#marker1 {\n  top: 200px;\n  left: 240px;\n  width: 64px;\n  height: 64px;\n  background: url('marker.png'); }\n\n.markers-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap; }\n\n.markers-list .item {\n    /* width: 100px;\n    height: 100px; */\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 0 1em 1em 0; }\n\n.markers-list .item .label {\n      text-align: center; }\n\n.debug .markers-list .item {\n  border: 1px solid green; }\n\n.is-selected {\n  border: 2px solid yellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL3RnbV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9tYXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osdUJBQXVCLEVBQ3hCOztBQUNEO0VBQWtCLCtDQUErQztFQUMvRCxXQUFXO0VBQ1g7Ozs2QkFHMkI7RUFFM0IsaUJBQWdCO0VBRWhCLHFCQUFxQjtFQUNyQjs7cUNBRW1DLEVBRXBDOztBQUNEO0VBQ0MseUJBQWtEO0VBQ2xELGFBQVk7RUFDWixjQUFhLEVBQ2I7O0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLGFBQVksRUFDYjs7QUFDRDtFQUNFLHFFQUFxRTtFQUNyRTttQkFDaUIsRUFDbEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFNBQVE7RUFFUix1QkFBc0I7RUFFdEIscUJBQWE7RUFBYixjQUFhO0VBQ2IsNkJBQXNCO0VBQXRCLDhCQUFzQjtVQUF0Qix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLDhCQUE2QjtFQUM3Qiw0QkFBMkI7RUFDM0IsV0FBVTtFQUNWLGtCQUFpQixFQUNsQjs7QUFFRDtFQUVJLHVCQUFzQixFQUN2Qjs7QUFHSDs7R0FFRzs7QUFDSDtFQUNFLG1CQUFrQjtFQUNsQix1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSx5QkFBd0IsRUFDekI7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsWUFBVztFQUNYLFlBQVc7RUFDWCxhQUFZO0VBQ1osOEJBQWdELEVBQ2pEOztBQUNEO0VBQ0UscUJBQWE7RUFBYixjQUFhO0VBQ2IsK0JBQW1CO0VBQW5CLDhCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsZ0JBQWUsRUFlaEI7O0FBbEJEO0lBTUk7cUJBQ2lCO0lBRWpCLHFCQUFhO0lBQWIsY0FBYTtJQUNiLDZCQUFzQjtJQUF0Qiw4QkFBc0I7WUFBdEIsdUJBQXNCO0lBRXRCLHFCQUFvQixFQUtyQjs7QUFqQkg7TUFlTSxtQkFBa0IsRUFDbkI7O0FBR0w7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx5QkFBd0IsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9MYXlvdXRNYXAvbWFwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYWluLW1hcCB7XG4gIGJhY2tncm91bmQ6ICNkMmQyZDI7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbn1cbi5tYWluLW1hcC1pbm5lciB7IC8qIHZlcnRpY2FsIGFsaWduIG9mIG1hcCBzbWFsbGVyIHRoYW4gc2NyZWVuICovXG4gIC8qIHRyYXNoICovXG4gIC8qIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuXG4gIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgLyogZG9lc24ndCB3b3JrLi4uICovXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgKi9cblxufVxuLmltZy1tYXAtMSB7XG4gYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbWFwcy84MDB4ODAwLzMuanBnJyk7XG4gd2lkdGg6IDgwMHB4O1xuIGhlaWdodDogODAwcHg7XG59XG4uaW1nLWJnIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG59XG4uaW1nLXdvcmxkLTEge1xuICAvKiBiYWNrZ3JvdW5kOiByZWQgdXJsKCcuLi8uLi9hc3NldHMvbWFwcy8xMjAweDEyMDAvd29ybGQtMS5qcGcnKTsgKi9cbiAgLyogd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4OyAqL1xufVxuLnpvb20tY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFlbTtcbiAgdG9wOiAxZW07XG5cbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubWFpbi1yaWdodC1pbm5lciB7XG4gIC5kZXNjciB7XG4gICAgcGFkZGluZzogMC41ZW0gMCAxZW0gMDtcbiAgfVxufVxuXG4vKipcbiAqIG1hcmtlcnMgXG4gKi9cbi5pbWctbWFya2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmRlYnVnIC5pbWctbWFya2VyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xufVxuI21hcmtlcjEgeyBcbiAgdG9wOiAyMDBweDtcbiAgbGVmdDogMjQwcHg7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzY0eDY0L21hcmtlci5wbmcnKTtcbn1cbi5tYXJrZXJzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLml0ZW0ge1xuICAgIC8qIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4OyAqL1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgcGFkZGluZzogMCAxZW0gMWVtIDA7XG5cbiAgICAubGFiZWwge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuLmRlYnVnIC5tYXJrZXJzLWxpc3QgLml0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cbi5pcy1zZWxlY3RlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcbn1cblxuXG5cbiJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=LayoutMap-map-module.js.map