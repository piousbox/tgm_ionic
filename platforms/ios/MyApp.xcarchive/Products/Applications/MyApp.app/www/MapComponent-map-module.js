(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MapComponent-map-module"],{

/***/ "./src/app/MapComponent/map.module.ts":
/*!********************************************!*\
  !*** ./src/app/MapComponent/map.module.ts ***!
  \********************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.page */ "./src/app/MapComponent/map.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"],
    },
];
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "./src/app/MapComponent/map.page.html":
/*!********************************************!*\
  !*** ./src/app/MapComponent/map.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"newsitems.length == 0\" >\n  <br /><br /><br />\n  <h1>&nbsp; &nbsp; &nbsp; Loading...</h1>\n  <br /><br /><br />\n</div>\n\n<ion-content *ngIf='newsitems' >\n  <ion-list lines=\"none\" >\n    <ion-item class='item-borderless' *ngFor=\"let n of newsitems\">\n\n      <div padding class='flex-scroll-container' *ngIf=\"n.photos\" >\n        <ion-list lines=\"none\" class='flex-scroll' >\n          <ion-card padding class='medium-cover'>\n            <p><ion-icon slot=\"start\" name='camera'></ion-icon> &nbsp; {{ n.name }} ({{ n.photos.length }})</p>\n            <p>{{ n.created_at }}</p>\n          </ion-card>\n          <ion-item class='flex-scroll-inner' *ngFor=\"let ph of n.photos\">\n\n            <ion-card padding class='medium-photo'>\n              <img [src]=\"ph.small_url\" />\n            </ion-card>\n\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div padding class='flex-scroll-container' *ngIf=\"n.item_type=='video'\" >\n        <ion-list lines=\"none\" class='flex-scroll' >\n          <ion-card padding class='medium-cover'>\n            <p><ion-icon slot=\"start\" name='videocam'></ion-icon> &nbsp; {{ n.name }}</p>\n            <p>{{ n.created_at }}</p>\n          </ion-card>\n          <ion-card padding class='medium-video'>\n            <video src=\"{{ n.url }}\" width=\"100%\" controls ></video>\n          </ion-card>\n        </ion-list>\n      </div>\n\n    </ion-item>\n  </ion-list>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/MapComponent/map.page.scss":
/*!********************************************!*\
  !*** ./src/app/MapComponent/map.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.thumb {\n  height: 2rem;\n  float: left; }\n.flex-scroll-container {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  width: 100%;\n  height: 80vh;\n  padding-right: 0;\n  padding: 0;\n  margin-bottom: 15px; }\n/*\n[1]: Make a flex container so all our items align as necessary\n[2]: Prevent items from wrapping\n[3]: Automatic overflow means a scroll bar won’t be present if it isn’t needed\n[4]: Make it smooth scrolling on iOS devices\n[5]: Hide the ugly scrollbars in Edge until the scrollable area is hovered\n[6]: Hide the scroll bar in WebKit browsers\n*/\n.flex-scroll {\n  min-width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  /* [1] */\n  flex-wrap: nowrap;\n  /* [2] */\n  overflow-x: auto;\n  /* [3] */\n  -webkit-overflow-scrolling: touch;\n  /* [4] */\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  /* [5] */\n  padding: 0;\n  margin: 0; }\n.flex-scroll::-webkit-scrollbar {\n  display: none;\n  /* [6] */\n  height: 80vh; }\n.flex-scroll-inner {\n  padding-right: 0;\n  border: 0;\n  margin: auto; }\n.medium-cover {\n  background: #cecece;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-box-flex: 0;\n          flex: 0 0 0;\n  min-width: 16em;\n  height: 100%;\n  margin: 0; }\n.medium-photo {\n  padding: 2vh;\n  max-height: 80vh;\n  min-width: 20em;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid red;\n  /* flex: 0 0 0; */\n  margin: 0; }\n.medium-photo img {\n    margin: auto; }\n.medium-video {\n  background: #cecece;\n  min-height: 100%;\n  height: 100%;\n  min-width: 30em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 0 0 2em; }\n.medium-video video {\n  max-height: 70vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWFwQ29tcG9uZW50L21hcC5wYWdlLnNjc3MiLCIvVXNlcnMvcGlvdXNib3gvcHJvamVjdHMvbm9kZS5qcy9nYW1ldWlfaW9uaWMvc3JjL2FwcC9NYXBDb21wb25lbnQvbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNDakI7RUFDRSxhQUFZO0VBQ1osWUFBVyxFQUNaO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLFdBQVU7RUFDVixvQkFBbUIsRUFDcEI7QUFFRDs7Ozs7OztFQU9FO0FBQ0Y7RUFDRSxnQkFBZTtFQUNmLGFBQVk7RUFDWixxQkFBYTtFQUFiLGNBQWE7RUFBRSxTQUFTO0VBQ3hCLGtCQUFpQjtFQUFFLFNBQVM7RUFDNUIsaUJBQWdCO0VBQUUsU0FBUztFQUMzQixrQ0FBaUM7RUFBRSxTQUFTO0VBQzVDLDZDQUE0QztFQUFFLFNBQVM7RUFFdkQsV0FBVTtFQUNWLFVBQVMsRUFDVjtBQUNEO0VBQ0UsY0FBYTtFQUFFLFNBQVM7RUFDeEIsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsVUFBUztFQUNULGFBQVksRUFDYjtBQUtEO0VBQ0Usb0JBQW1CO0VBQ25CLHFCQUFpQjtLQUFqQixrQkFBaUI7RUFDakIsb0JBQVc7VUFBWCxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixhQUFZO0VBQ1osVUFBUyxFQUNWO0FBRUQ7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YscUJBQWlCO0tBQWpCLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVMsRUFJVjtBQVhEO0lBU0ksYUFBWSxFQUNiO0FBRUg7RUFDRSxvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixnQkFBZTtFQUNmLHFCQUFhO0VBQWIsY0FBYTtFQUNiLHlCQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixrQkFBaUIsRUFDbEI7QUFHRDtFQUNFLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL01hcENvbXBvbmVudC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRodW1iIHtcbiAgaGVpZ2h0OiAycmVtO1xuICBmbG9hdDogbGVmdDsgfVxuXG4uZmxleC1zY3JvbGwtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cblxuLypcblsxXTogTWFrZSBhIGZsZXggY29udGFpbmVyIHNvIGFsbCBvdXIgaXRlbXMgYWxpZ24gYXMgbmVjZXNzYXJ5XG5bMl06IFByZXZlbnQgaXRlbXMgZnJvbSB3cmFwcGluZ1xuWzNdOiBBdXRvbWF0aWMgb3ZlcmZsb3cgbWVhbnMgYSBzY3JvbGwgYmFyIHdvbuKAmXQgYmUgcHJlc2VudCBpZiBpdCBpc27igJl0IG5lZWRlZFxuWzRdOiBNYWtlIGl0IHNtb290aCBzY3JvbGxpbmcgb24gaU9TIGRldmljZXNcbls1XTogSGlkZSB0aGUgdWdseSBzY3JvbGxiYXJzIGluIEVkZ2UgdW50aWwgdGhlIHNjcm9sbGFibGUgYXJlYSBpcyBob3ZlcmVkXG5bNl06IEhpZGUgdGhlIHNjcm9sbCBiYXIgaW4gV2ViS2l0IGJyb3dzZXJzXG4qL1xuLmZsZXgtc2Nyb2xsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIFsxXSAqL1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgLyogWzJdICovXG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC8qIFszXSAqL1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC8qIFs0XSAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgLyogWzVdICovXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDsgfVxuXG4uZmxleC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogWzZdICovXG4gIGhlaWdodDogODB2aDsgfVxuXG4uZmxleC1zY3JvbGwtaW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG4ubWVkaXVtLWNvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NlY2VjZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGZsZXg6IDAgMCAwO1xuICBtaW4td2lkdGg6IDE2ZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwOyB9XG5cbi5tZWRpdW0tcGhvdG8ge1xuICBwYWRkaW5nOiAydmg7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIG1pbi13aWR0aDogMjBlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgLyogZmxleDogMCAwIDA7ICovXG4gIG1hcmdpbjogMDsgfVxuICAubWVkaXVtLXBob3RvIGltZyB7XG4gICAgbWFyZ2luOiBhdXRvOyB9XG5cbi5tZWRpdW0tdmlkZW8ge1xuICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzBlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDAgMmVtOyB9XG5cbi5tZWRpdW0tdmlkZW8gdmlkZW8ge1xuICBtYXgtaGVpZ2h0OiA3MHZoOyB9XG4iLCJcbi50aHVtYiB7XG4gIGhlaWdodDogMnJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mbGV4LXNjcm9sbC1jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLypcblsxXTogTWFrZSBhIGZsZXggY29udGFpbmVyIHNvIGFsbCBvdXIgaXRlbXMgYWxpZ24gYXMgbmVjZXNzYXJ5XG5bMl06IFByZXZlbnQgaXRlbXMgZnJvbSB3cmFwcGluZ1xuWzNdOiBBdXRvbWF0aWMgb3ZlcmZsb3cgbWVhbnMgYSBzY3JvbGwgYmFyIHdvbuKAmXQgYmUgcHJlc2VudCBpZiBpdCBpc27igJl0IG5lZWRlZFxuWzRdOiBNYWtlIGl0IHNtb290aCBzY3JvbGxpbmcgb24gaU9TIGRldmljZXNcbls1XTogSGlkZSB0aGUgdWdseSBzY3JvbGxiYXJzIGluIEVkZ2UgdW50aWwgdGhlIHNjcm9sbGFibGUgYXJlYSBpcyBob3ZlcmVkXG5bNl06IEhpZGUgdGhlIHNjcm9sbCBiYXIgaW4gV2ViS2l0IGJyb3dzZXJzXG4qL1xuLmZsZXgtc2Nyb2xsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7IC8qIFsxXSAqL1xuICBmbGV4LXdyYXA6IG5vd3JhcDsgLyogWzJdICovXG4gIG92ZXJmbG93LXg6IGF1dG87IC8qIFszXSAqL1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IC8qIFs0XSAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjsgLyogWzVdICovXG5cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmZsZXgtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIFs2XSAqL1xuICBoZWlnaHQ6IDgwdmg7XG59XG4uZmxleC1zY3JvbGwtaW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuXG5cblxuLm1lZGl1bS1jb3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjZWNlY2U7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmbGV4OiAwIDAgMDtcbiAgbWluLXdpZHRoOiAxNmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lZGl1bS1waG90byB7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgbWluLXdpZHRoOiAyMGVtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAwIDAgMDsgKi9cbiAgbWFyZ2luOiAwO1xuICBpbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuLm1lZGl1bS12aWRlbyB7XG4gIGJhY2tncm91bmQ6ICNjZWNlY2U7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMCAyZW07XG59XG4ubWVkaXVtLXZpZGVvLWlubmVyIHtcbn1cbi5tZWRpdW0tdmlkZW8gdmlkZW8ge1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/MapComponent/map.page.ts":
/*!******************************************!*\
  !*** ./src/app/MapComponent/map.page.ts ***!
  \******************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapPage = /** @class */ (function () {
    function MapPage(appService, nativeStorage, router, httpClient, toastController) {
        this.appService = appService;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
    }
    MapPage.prototype.ngOnInit = function () {
    };
    MapPage.prototype.render = function () {
    };
    MapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/MapComponent/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/MapComponent/map.page.scss")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=MapComponent-map-module.js.map