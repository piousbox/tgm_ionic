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

module.exports = "/**\n * stripe widget\n */\n.stripeWidget {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n.stripeWidget .cc-number {\n    border: 1px solid blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGF5L0Rlc2t0b3AvdGdtX2lvbmljL3NyYy9hcHAvTGF5b3V0TWFwL0dldFN0YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0dBRUc7QUFDSDtFQUNFLHFCQUFhO0VBQWIsY0FBYTtFQUNiLCtCQUFtQjtFQUFuQiw4QkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLHlCQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIsd0JBQTJCO1VBQTNCLDRCQUEyQixFQUs1QjtBQVREO0lBT0ksdUJBQXNCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvTGF5b3V0TWFwL0dldFN0YXJzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogc3RyaXBlIHdpZGdldFxuICovXG4uc3RyaXBlV2lkZ2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAuY2MtbnVtYmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICB9XG59XG4iXX0= */"

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

module.exports = "/**\n * footer\n */\n.main-footer {\n  height: 100px;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  padding: .5em; }\n.main-footer-inner {\n  border: 1px solid grey;\n  height: 100%;\n  background: #ededde;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n.footer-collapse {\n  position: absolute;\n  background: url('hamburger.png');\n  width: 1em;\n  height: 1em;\n  margin-top: -1em;\n  background-size: cover; }\n.footer-collapsed .main-footer {\n  height: 2em; }\n.main-footer-overlay {\n  display: none; }\n.footer-collapsed .main-footer-inner {\n  /* padding: 0; */\n  height: 0;\n  display: none; }\n.footer-collapsed .main-footer-overlay {\n  display: block;\n  background: #ededde;\n  height: 1em;\n  border: 1px solid gray; }\n.img-avatar {\n  margin: auto 0 auto 1em;\n  width: calc(100px - 1em - 2px);\n  height: calc(100px - 1em - 2px - 1em);\n  /* .5em on top, bottom */\n  background: url('default-avatar.png');\n  background-size: cover; }\n/**\n * inventory\n */\n.img-gem {\n  background: url('gem.png');\n  background-size: cover;\n  width: calc(100px - 4em);\n  height: calc(100px - 4em); }\n.img-star {\n  background: url('star.png');\n  background-size: cover;\n  width: calc(100px - 4em);\n  height: calc(100px - 4em);\n  cursor: pointer; }\n.widget-stars {\n  line-height: calc(100px - 4em);\n  height: 100%;\n  padding: 0 2em;\n  display: -webkit-box;\n  display: flex; }\n.widget-stars-inner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-items: center; }\n.widget-stars .count {\n  line-height: calc(100px - 4em);\n  margin-right: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGF5L0Rlc2t0b3AvdGdtX2lvbmljL3NyYy9hcHAvTGF5b3V0TWFwL2ludmVudG9yeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOztHQUVHO0FBQ0g7RUFDRSxjQUFhO0VBQ2IsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFFBQU87RUFDUCxjQUFhLEVBQ2Q7QUFDRDtFQUNFLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osb0JBQW1CO0VBRW5CLHFCQUFhO0VBQWIsY0FBYTtFQUNiLCtCQUFtQjtFQUFuQiw4QkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLHlCQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIsd0JBQTJCO1VBQTNCLDRCQUEyQixFQUM1QjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLGlDQUFtRDtFQUNuRCxXQUFVO0VBQ1YsWUFBVztFQUNYLGlCQUFnQjtFQUNoQix1QkFBc0IsRUFDdkI7QUFFRDtFQUNFLFlBQVcsRUFDWjtBQUNEO0VBQ0UsY0FBYSxFQUNkO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsVUFBUztFQUNULGNBQWEsRUFDZDtBQUNEO0VBQ0UsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsdUJBQXNCLEVBQ3ZCO0FBRUQ7RUFDRSx3QkFBdUI7RUFFdkIsK0JBQThCO0VBQzlCLHNDQUFxQztFQUFFLHlCQUF5QjtFQUdoRSxzQ0FBc0Q7RUFDdEQsdUJBQXNCLEVBQ3ZCO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLDJCQUErQztFQUMvQyx1QkFBc0I7RUFDdEIseUJBQXdCO0VBQ3hCLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0UsNEJBQWdEO0VBQ2hELHVCQUFzQjtFQUN0Qix5QkFBd0I7RUFDeEIsMEJBQXlCO0VBQ3pCLGdCQUFlLEVBQ2hCO0FBRUQ7RUFDRSwrQkFBOEI7RUFDOUIsYUFBWTtFQUVaLGVBQWM7RUFDZCxxQkFBYTtFQUFiLGNBQWEsRUFDZDtBQUNEO0VBQ0UscUJBQWE7RUFBYixjQUFhO0VBQ2IsK0JBQW1CO0VBQW5CLDhCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixzQkFBcUIsRUFDdEI7QUFDRDtFQUNFLCtCQUE4QjtFQUM5QixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9MYXlvdXRNYXAvaW52ZW50b3J5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogZm9vdGVyXG4gKi9cbi5tYWluLWZvb3RlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IC41ZW07XG59XG4ubWFpbi1mb290ZXItaW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgXG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2VkZWRkZTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmZvb3Rlci1jb2xsYXBzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvaGFtYnVyZ2VyLnBuZycpO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLXRvcDogLTFlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZvb3Rlci1jb2xsYXBzZWQgLm1haW4tZm9vdGVyIHtcbiAgaGVpZ2h0OiAyZW07XG59XG4ubWFpbi1mb290ZXItb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZm9vdGVyLWNvbGxhcHNlZCAubWFpbi1mb290ZXItaW5uZXIge1xuICAvKiBwYWRkaW5nOiAwOyAqL1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZm9vdGVyLWNvbGxhcHNlZCAubWFpbi1mb290ZXItb3ZlcmxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZWRlZGRlO1xuICBoZWlnaHQ6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cblxuLmltZy1hdmF0YXIge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIDFlbTtcblxuICB3aWR0aDogY2FsYygxMDBweCAtIDFlbSAtIDJweCk7XG4gIGhlaWdodDogY2FsYygxMDBweCAtIDFlbSAtIDJweCAtIDFlbSk7IC8qIC41ZW0gb24gdG9wLCBib3R0b20gKi9cblxuXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3NyYy9kZWZhdWx0LWF2YXRhci5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi8qKlxuICogaW52ZW50b3J5XG4gKi9cbi5pbWctZ2VtIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvMjU2eDI1Ni9nZW0ucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMHB4IC0gNGVtKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHB4IC0gNGVtKTtcbn1cbi5pbWctc3RhciB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzI1NngyNTYvc3Rhci5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IGNhbGMoMTAwcHggLSA0ZW0pO1xuICBoZWlnaHQ6IGNhbGMoMTAwcHggLSA0ZW0pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53aWRnZXQtc3RhcnMge1xuICBsaW5lLWhlaWdodDogY2FsYygxMDBweCAtIDRlbSk7XG4gIGhlaWdodDogMTAwJTtcbiAgXG4gIHBhZGRpbmc6IDAgMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndpZGdldC1zdGFycy1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi53aWRnZXQtc3RhcnMgLmNvdW50IHtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMTAwcHggLSA0ZW0pO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/LayoutMap/mainfold.scss":
/*!*****************************************!*\
  !*** ./src/app/LayoutMap/mainfold.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * From: https://jsfiddle.net/MadLittleMods/LmYay/\n */\n*, *:before, *:after {\n  box-sizing: border-box; }\n.debug {\n  border: 1px solid red; }\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden; }\n.mainfold-parent {\n  height: 100%; }\n.main-header {\n  height: 40px;\n  width: 100%;\n  padding-top: .5em;\n  padding-left: .5em;\n  line-height: 40px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.main-text {\n  padding: .5em;\n  width: 100%;\n  height: 100%; }\n.main-twofold {\n  height: 100%;\n  padding-top: 40px;\n  padding-bottom: 100px;\n  /* display: flex;\n  flex-flow: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: stretch;\n  */ }\n.header-collapsed .main-twofold {\n  padding-top: 0; }\n.footer-collapsed .main-twofold {\n  padding-bottom: 2em; }\n.main-twofold-inner {\n  height: 100%;\n  position: relative; }\n.main-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  padding: 0.5em; }\n.main-left-inner {\n  /* background: white; */\n  background: #d2d2d2;\n  border: 1px solid grey;\n  width: 100%;\n  height: 100%;\n  /* padding: .5em; */\n  overflow: scroll;\n  position: relative;\n  top: 0;\n  left: 0; }\n.main-right {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  padding: 0.5em; }\n.main-right-inner {\n  background: white;\n  width: 100%;\n  height: 100%;\n  border: 1px solid grey;\n  /* padding: .5em; */\n  overflow: scroll; }\n/*\n * collapse\n */\n.main-collapse {\n  position: absolute;\n  /* top: 2em; */\n  background: url('hamburger.png');\n  width: 1em;\n  height: 1em;\n  margin-left: -1em;\n  background-size: cover; }\n.main-collapse-left {\n  position: absolute;\n  bottom: 2em;\n  background: url('arrow-left.png');\n  width: 1em;\n  height: 1em;\n  margin-left: -1em;\n  background-size: cover; }\n.main-collapse-right {\n  position: absolute;\n  bottom: 1em;\n  background: url('arrow-right.png');\n  width: 1em;\n  height: 1em;\n  margin-left: -1em;\n  background-size: cover; }\n.left-collapsed .main-left {\n  width: 1em; }\n.left-collapsed .main-right {\n  width: calc(100% - 2em);\n  left: 2em; }\n.left-collapsed .main-left-inner {\n  display: none; }\n.left-collapsed .zoom-control {\n  display: none; }\n.main-left-overlay {\n  display: none; }\n.left-collapsed .main-left-overlay {\n  display: block;\n  background: #ededde;\n  width: 1em;\n  border: 1px solid gray;\n  height: 100%; }\n.main-right-overlay {\n  display: none; }\n/**\n * right-collapsed\n */\n.right-collapsed .main-right {\n  left: calc(100% - 2em); }\n.right-collapsed .main-right-inner {\n  display: none; }\n.right-collapsed .main-right-overlay {\n  display: block;\n  background: #ededde;\n  width: 1em;\n  border: 1px solid gray;\n  height: 100%; }\n.right-collapsed .main-left {\n  width: calc(100% - 2em); }\n/**\n * header\n */\n.header-collapsed .main-header {\n  display: none; }\n.header-control {\n  display: none;\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n  z-index: 2; }\n.header-collapsed .header-control {\n  display: block; }\n.header-control-inner {\n  background: white url('hamburger.png');\n  background-size: cover;\n  width: 1em;\n  height: 1em; }\n.main-header {\n  display: -webkit-box;\n  display: flex; }\n.main-header .img {\n  margin-left: 10px;\n  background-size: cover;\n  height: 30px;\n  width: 30px; }\n.img-swords {\n  background: url('swords.png'); }\n.img-news {\n  background: url('news.png'); }\n.img-city {\n  background: url('city.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGF5L0Rlc2t0b3AvdGdtX2lvbmljL3NyYy9hcHAvTGF5b3V0TWFwL21haW5mb2xkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtFQUdFLHVCQUFzQixFQUN2QjtBQUNEO0VBQ0Usc0JBQXFCLEVBQ3RCO0FBQ0Q7RUFDRSxVQUFTO0VBQ1QsV0FBVTtFQUNWLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLGFBQVksRUFDYjtBQUlEO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUVqQixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU8sRUFDUjtBQUNEO0VBQ0UsY0FBYTtFQUNiLFlBQVc7RUFDWCxhQUFZLEVBQ2I7QUFHRDtFQUNFLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsc0JBQXFCO0VBRXJCOzs7OztJQUtFLEVBQ0g7QUFDRDtFQUNFLGVBQWMsRUFDZjtBQUNEO0VBQ0Usb0JBQW1CLEVBQ3BCO0FBQ0Q7RUFDRSxhQUFZO0VBQ1osbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsUUFBTztFQUNQLE9BQU07RUFFTixXQUFVO0VBQ1YsYUFBWTtFQUNaLGVBQWMsRUFDZjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFtQjtFQUNuQix1QkFBc0I7RUFFdEIsWUFBVztFQUNYLGFBQVk7RUFFWixvQkFBb0I7RUFDcEIsaUJBQWdCO0VBRWhCLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTyxFQUNSO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULE9BQU07RUFFTixXQUFVO0VBQ1YsYUFBWTtFQUNaLGVBQWMsRUFDZjtBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixpQkFBZ0IsRUFDakI7QUFFRDs7R0FFRztBQUNIO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQ0FBbUQ7RUFDbkQsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsdUJBQXNCLEVBQ3ZCO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGtDQUFvRDtFQUNwRCxXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsbUNBQXFEO0VBQ3JELFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHVCQUFzQixFQUN2QjtBQUlEO0VBQ0UsV0FBVSxFQUNYO0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsVUFBUyxFQUNWO0FBRUQ7RUFBbUMsY0FBYSxFQUFJO0FBQ3BEO0VBQWdDLGNBQWEsRUFBSTtBQUNqRDtFQUFxQixjQUFhLEVBQUk7QUFFdEM7RUFDRSxlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLFdBQVU7RUFDVix1QkFBc0I7RUFDdEIsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7QUFDRDs7R0FFRztBQUNIO0VBQ0UsdUJBQXNCLEVBQ3ZCO0FBQ0Q7RUFBcUMsY0FBYSxFQUFJO0FBQ3REO0VBQ0UsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixXQUFVO0VBQ1YsdUJBQXNCO0VBQ3RCLGFBQVksRUFDYjtBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCO0FBRUQ7O0dBRUc7QUFDSDtFQUNFLGNBQWEsRUFDZDtBQUNEO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBVztFQUNYLFdBQVUsRUFDWDtBQUNEO0VBQ0UsZUFBYyxFQUNmO0FBQ0Q7RUFDRSx1Q0FBeUQ7RUFDekQsdUJBQXNCO0VBQ3RCLFdBQVU7RUFDVixZQUFXLEVBQ1o7QUFFRDtFQUNFLHFCQUFhO0VBQWIsY0FBYSxFQUNkO0FBQ0Q7RUFDRSxrQkFBaUI7RUFFakIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixZQUFXLEVBQ1o7QUFDRDtFQUNFLDhCQUFnRCxFQUNqRDtBQUNEO0VBQ0UsNEJBQThDLEVBQy9DO0FBQ0Q7RUFDRSw0QkFBOEMsRUFDL0MiLCJmaWxlIjoic3JjL2FwcC9MYXlvdXRNYXAvbWFpbmZvbGQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRnJvbTogaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvTWFkTGl0dGxlTW9kcy9MbVlheS9cbiAqL1xuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5kZWJ1ZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbmh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluZm9sZC1wYXJlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbmZvbGQtaXRlbSB7XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IC41ZW07XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLm1haW4tdGV4dCB7XG4gIHBhZGRpbmc6IC41ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLm1haW4tdHdvZm9sZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcblxuICAvKiBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgKi9cbn1cbi5oZWFkZXItY29sbGFwc2VkIC5tYWluLXR3b2ZvbGQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5mb290ZXItY29sbGFwc2VkIC5tYWluLXR3b2ZvbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xufVxuLm1haW4tdHdvZm9sZC1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4tbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuXG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMC41ZW07XG59XG4ubWFpbi1sZWZ0LWlubmVyIHtcbiAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXG4gIGJhY2tncm91bmQ6ICNkMmQyZDI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgXG4gIC8qIHBhZGRpbmc6IC41ZW07ICovXG4gIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ubWFpbi1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDA7XG5cbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5tYWluLXJpZ2h0LWlubmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIC8qIHBhZGRpbmc6IC41ZW07ICovXG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8qXG4gKiBjb2xsYXBzZVxuICovXG4ubWFpbi1jb2xsYXBzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogdG9wOiAyZW07ICovXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzY0eDY0L2hhbWJ1cmdlci5wbmcnKTtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm1haW4tY29sbGFwc2UtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyZW07XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzE2eDE2L2Fycm93LWxlZnQucG5nJyk7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluLWNvbGxhcHNlLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFlbTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvMTZ4MTYvYXJyb3ctcmlnaHQucG5nJyk7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluLWNvbGxhcHNlLXJpZ2h0IHtcbn1cblxuLmxlZnQtY29sbGFwc2VkIC5tYWluLWxlZnQge1xuICB3aWR0aDogMWVtO1xufVxuLmxlZnQtY29sbGFwc2VkIC5tYWluLXJpZ2h0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJlbSk7XG4gIGxlZnQ6IDJlbTtcbn1cblxuLmxlZnQtY29sbGFwc2VkIC5tYWluLWxlZnQtaW5uZXIgeyBkaXNwbGF5OiBub25lOyB9XG4ubGVmdC1jb2xsYXBzZWQgLnpvb20tY29udHJvbCB7IGRpc3BsYXk6IG5vbmU7IH1cbi5tYWluLWxlZnQtb3ZlcmxheSB7IGRpc3BsYXk6IG5vbmU7IH1cblxuLmxlZnQtY29sbGFwc2VkIC5tYWluLWxlZnQtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZWRlZGRlO1xuICB3aWR0aDogMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbi1yaWdodC1vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qKlxuICogcmlnaHQtY29sbGFwc2VkXG4gKi9cbi5yaWdodC1jb2xsYXBzZWQgLm1haW4tcmlnaHQge1xuICBsZWZ0OiBjYWxjKDEwMCUgLSAyZW0pO1xufVxuLnJpZ2h0LWNvbGxhcHNlZCAubWFpbi1yaWdodC1pbm5lciB7IGRpc3BsYXk6IG5vbmU7IH1cbi5yaWdodC1jb2xsYXBzZWQgLm1haW4tcmlnaHQtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZWRlZGRlO1xuICB3aWR0aDogMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucmlnaHQtY29sbGFwc2VkIC5tYWluLWxlZnQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcbn1cblxuLyoqXG4gKiBoZWFkZXJcbiAqL1xuLmhlYWRlci1jb2xsYXBzZWQgLm1haW4taGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXItY29udHJvbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjVlbTtcbiAgbGVmdDogMC41ZW07XG4gIHotaW5kZXg6IDI7XG59XG4uaGVhZGVyLWNvbGxhcHNlZCAuaGVhZGVyLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXItY29udHJvbC1pbm5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlIHVybCgnLi4vLi4vYXNzZXRzLzY0eDY0L2hhbWJ1cmdlci5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbi1oZWFkZXIgLmltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG4uaW1nLXN3b3JkcyB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzY0eDY0L3N3b3Jkcy5wbmcnKTtcbn1cbi5pbWctbmV3cyB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzY0eDY0L25ld3MucG5nJyk7XG59XG4uaW1nLWNpdHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9jaXR5LnBuZycpO1xufVxuXG5cblxuXG5cblxuXG4iXX0= */"

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
/* harmony import */ var _GetStars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GetStars */ "./src/app/LayoutMap/GetStars.ts");
/* harmony import */ var _NewsitemsComponent_Newsitems_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NewsitemsComponent/Newsitems.module */ "./src/app/NewsitemsComponent/Newsitems.module.ts");
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
                _NewsitemsComponent_Newsitems_module__WEBPACK_IMPORTED_MODULE_8__["NewsitemsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_GetStars__WEBPACK_IMPORTED_MODULE_7__["GetStars"], _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]],
            entryComponents: [_GetStars__WEBPACK_IMPORTED_MODULE_7__["GetStars"]],
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

module.exports = "\n<ion-content class='n-debug' >\n  <div class=\"mainfold-parent \n    {{ this.footerCollapsed ? 'footer-collapsed' : '' }} \n    {{ this.halfCollapsed }} \n    {{ this.headerCollapsed ? 'header-collapsed' : '' }} \">\n    <div class=\"mainfold-item main-header\">\n      <div (click)=\"collapseHeader()\">[X]</div>\n      &nbsp; &nbsp;\n      <div (click)=\"navigateToMap('map-world')\" >Header</div>\n      <div (click)=\"navigate('maps')\" class='img img-swords' ></div>\n      <div (click)=\"navigate(appRouter.citiesPath)\" class='img img-city' ></div>\n      <div (click)=\"navigate(appRouter.homefeedPath)\" class='img img-news' ></div>\n    </div>\n    <div class='header-control'>\n      <!-- <div class='header-control-inner' (click)=\"collapseHeader()\"></div> -->\n      <ion-menu-toggle>\n        <div class='header-control-inner'></div>\n      </ion-menu-toggle>\n    </div>\n    \n    <div class=\"mainfold-item main-twofold\">\n      <div class='main-twofold-inner'>\n        <div id='mainLeft' class='main-left main-half' >\n          <div class='zoom-control'>\n            <div (click)=\"zoomIn()\" class='in'>[+]</div>\n            <div (click)=\"zoomOut()\" class='out'>[-]</div>\n          </div>\n          <div class='main-left-overlay'></div>\n          <div class='main-left-inner'>\n\n            <div class='main-map'>\n              <div class='main-map-inner'>\n\n                <div class='img-bg' \n                  [style.background-image]=\"'url('+map['img_path']+')'\" \n                  [style.width]=\"map['w'] * zoomFactor + 'px'\" \n                  [style.height]=\"map['h'] * zoomFactor + 'px'\"\n                >\n\n                  <ng-container *ngFor=\"let marker of map['markers']\" >\n\n                    <div class=\"img-marker {{marker_slug==marker.slug ? 'is-selected' : ''}}\" \n                      *ngIf=\"C.item_type_map == marker.item_type\" \n                      [style.width]=\"marker['w']*zoomFactor + 'px'\"\n                      [style.height]=\"marker['h']*zoomFactor + 'px'\"\n                      [style.left]=\"marker['x']*zoomFactor + 'px'\"\n                      [style.top]=\"marker['y']*zoomFactor + 'px'\"\n                      [style.background-image]=\"'url('+marker['img_path']+')'\"\n                      (click)=\"navigateToMap(marker['slug'])\" ></div>\n\n                    <div class=\"img-marker {{marker_slug==marker.slug ? 'is-selected' : ''}}\" \n                      *ngIf=\"C.item_type_location == marker.item_type\" \n                      [style.width]=\"marker['w']*zoomFactor + 'px'\"\n                      [style.height]=\"marker['h']*zoomFactor + 'px'\"\n                      [style.left]=\"marker['x']*zoomFactor + 'px'\"\n                      [style.top]=\"marker['y']*zoomFactor + 'px'\"\n                      [style.background-image]=\"'url('+marker['img_path']+')'\"\n                      (click)=\"navigateToLocation(map['slug'], marker['slug'])\" ></div>\n                  </ng-container>\n\n\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--\n          -- mainRight\n          -->\n        <div id='mainRight' class='main-right main-half' >\n          <div class='main-collapse' (click)=\"collapseMain()\" ></div>\n          <div class='main-collapse-2'>\n            <div class='main-collapse-left' (click)=\"collapseLeft()\"></div>\n            <div class='main-collapse-right' (click)=\"collapseRight()\"></div>\n          </div>\n          <div class='main-right-overlay'></div>\n          <div class='main-right-inner'>\n\n            <div class='main-text' *ngIf=\"!this.location\" >\n\n              <div class='breadcrumbs'>\n                <span (click)=navigateToMap(map.parent_slug) >{{map.parent_slug}}</span> &gt; \n                <b>{{map.slug}}</b>\n              </div>\n\n              <div class='descr'>{{ map['description'] }}</div>\n\n              <div class=\"markers-list\" >\n                \n                  <div class=\"item\"\n                    *ngFor=\"let marker of map['markers']\"\n                    (click)=\"navigateToLocation2(map.slug, marker.slug, marker.item_type)\"\n                  >\n                    <ion-img [src]=\"marker.title_img_path\" alt='' ></ion-img>\n                    <span class='label'>{{ marker.name }}</span>\n                  </div>\n                \n              </div>\n\n              <newsitems-list [newsitems]=map.newsitems ></newsitems-list>\n            </div>\n\n            <div class='main-text' *ngIf=\"this.location\">\n              <div class='breadcrumbs'>\n                <span (click)=navigateToMap(map.parent_slug) >{{map.parent_slug}}</span> &gt; \n                <span (click)=navigateToMap(map.slug)        >{{map.slug}}</span> &gt;\n                <b>{{this.location.slug}}</b>\n              </div>\n\n              <div [innerHTML]=location.description ></div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <!--\n      -- bottom panel\n      -->\n    <div class=\"mainfold-item main-footer\">\n      <div class='footer-collapse' (click)=\"collapseFooter()\" ></div>\n      <div class='main-footer-overlay'></div>\n      <div class='main-footer-inner'>\n\n        <div class='img img-avatar' ></div>\n\n        <div class='widget-stars'>\n          <div class='widget-stars-inner'>\n            <div (click)=\"showGetStars()\" class='img img-star' >{{nStars}}</div>\n            <!-- <ion-button (click)=\"showGetStars()\" >Get more stars</ion-button> -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

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
                        console.log('+++ map:', this.map);
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

module.exports = ".main-map {\n  background: #d2d2d2;\n  height: 100%;\n  /* overflow: hidden; */ }\n\n.main-map-inner {\n  /* vertical align of map smaller than screen */\n  /* trash */\n  /* display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; */\n  overflow: scroll;\n  /* doesn't work... */\n  /* position: relative;\n  top: 50%; left: 50%;\n  transform: translate(-50%,-50%); */ }\n\n.img-map-1 {\n  background: url('3.jpg');\n  width: 800px;\n  height: 800px; }\n\n.img-bg {\n  background-size: cover;\n  position: relative;\n  margin: auto; }\n\n.img-world-1 {\n  /* background: red url('../../assets/maps/1200x1200/world-1.jpg'); */\n  /* width: 600px;\n  height: 600px; */ }\n\n.zoom-control {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  font-family: monospace;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 40px;\n  justify-content: space-around;\n  align-content: space-around;\n  z-index: 2;\n  background: white; }\n\n.main-right-inner .descr {\n  padding: 0.5em 0 1em 0; }\n\n/**\n * markers \n */\n\n.img-marker {\n  position: absolute;\n  background-size: cover; }\n\n.debug .img-marker {\n  border: 1px solid yellow; }\n\n#marker1 {\n  top: 200px;\n  left: 240px;\n  width: 64px;\n  height: 64px;\n  background: url('marker.png'); }\n\n.markers-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap; }\n\n.markers-list .item {\n    /* width: 100px;\n    height: 100px; */\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 0 1em 1em 0; }\n\n.markers-list .item .label {\n      text-align: center; }\n\n.debug .markers-list .item {\n  border: 1px solid green; }\n\n.is-selected {\n  border: 2px solid yellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGF5L0Rlc2t0b3AvdGdtX2lvbmljL3NyYy9hcHAvTGF5b3V0TWFwL21hcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQW1CO0VBQ25CLGFBQVk7RUFDWix1QkFBdUIsRUFDeEI7O0FBQ0Q7RUFBa0IsK0NBQStDO0VBQy9ELFdBQVc7RUFDWDs7OzZCQUcyQjtFQUUzQixpQkFBZ0I7RUFFaEIscUJBQXFCO0VBQ3JCOztxQ0FFbUMsRUFFcEM7O0FBQ0Q7RUFDQyx5QkFBa0Q7RUFDbEQsYUFBWTtFQUNaLGNBQWEsRUFDYjs7QUFDRDtFQUNFLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsYUFBWSxFQUNiOztBQUNEO0VBQ0UscUVBQXFFO0VBQ3JFO21CQUNpQixFQUNsQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsU0FBUTtFQUVSLHVCQUFzQjtFQUV0QixxQkFBYTtFQUFiLGNBQWE7RUFDYiw2QkFBc0I7RUFBdEIsOEJBQXNCO1VBQXRCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osOEJBQTZCO0VBQzdCLDRCQUEyQjtFQUMzQixXQUFVO0VBQ1Ysa0JBQWlCLEVBQ2xCOztBQUVEO0VBRUksdUJBQXNCLEVBQ3ZCOztBQUdIOztHQUVHOztBQUNIO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLHlCQUF3QixFQUN6Qjs7QUFDRDtFQUNFLFdBQVU7RUFDVixZQUFXO0VBQ1gsWUFBVztFQUNYLGFBQVk7RUFDWiw4QkFBZ0QsRUFDakQ7O0FBQ0Q7RUFDRSxxQkFBYTtFQUFiLGNBQWE7RUFDYiwrQkFBbUI7RUFBbkIsOEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixnQkFBZSxFQWVoQjs7QUFsQkQ7SUFNSTtxQkFDaUI7SUFFakIscUJBQWE7SUFBYixjQUFhO0lBQ2IsNkJBQXNCO0lBQXRCLDhCQUFzQjtZQUF0Qix1QkFBc0I7SUFFdEIscUJBQW9CLEVBS3JCOztBQWpCSDtNQWVNLG1CQUFrQixFQUNuQjs7QUFHTDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHlCQUF3QixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL0xheW91dE1hcC9tYXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW4tbWFwIHtcbiAgYmFja2dyb3VuZDogI2QyZDJkMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xufVxuLm1haW4tbWFwLWlubmVyIHsgLyogdmVydGljYWwgYWxpZ24gb2YgbWFwIHNtYWxsZXIgdGhhbiBzY3JlZW4gKi9cbiAgLyogdHJhc2ggKi9cbiAgLyogZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG5cbiAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAvKiBkb2Vzbid0IHdvcmsuLi4gKi9cbiAgLyogcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTsgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpOyAqL1xuXG59XG4uaW1nLW1hcC0xIHtcbiBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9tYXBzLzgwMHg4MDAvMy5qcGcnKTtcbiB3aWR0aDogODAwcHg7XG4gaGVpZ2h0OiA4MDBweDtcbn1cbi5pbWctYmcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5pbWctd29ybGQtMSB7XG4gIC8qIGJhY2tncm91bmQ6IHJlZCB1cmwoJy4uLy4uL2Fzc2V0cy9tYXBzLzEyMDB4MTIwMC93b3JsZC0xLmpwZycpOyAqL1xuICAvKiB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7ICovXG59XG4uem9vbS1jb250cm9sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xuICB0b3A6IDFlbTtcblxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tYWluLXJpZ2h0LWlubmVyIHtcbiAgLmRlc2NyIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAwIDFlbSAwO1xuICB9XG59XG5cbi8qKlxuICogbWFya2VycyBcbiAqL1xuLmltZy1tYXJrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uZGVidWcgLmltZy1tYXJrZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XG59XG4jbWFya2VyMSB7IFxuICB0b3A6IDIwMHB4O1xuICBsZWZ0OiAyNDBweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvbWFya2VyLnBuZycpO1xufVxuLm1hcmtlcnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuaXRlbSB7XG4gICAgLyogd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7ICovXG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBwYWRkaW5nOiAwIDFlbSAxZW0gMDtcblxuICAgIC5sYWJlbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4uZGVidWcgLm1hcmtlcnMtbGlzdCAuaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xufVxuLmlzLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xufVxuXG5cblxuIl19 */"

/***/ })

}]);
//# sourceMappingURL=LayoutMap-map-module.js.map