(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AccountComponent-account-module"],{

/***/ "./src/app/AccountComponent/account.module.ts":
/*!****************************************************!*\
  !*** ./src/app/AccountComponent/account.module.ts ***!
  \****************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.page */ "./src/app/AccountComponent/account.page.ts");
/* harmony import */ var _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LayoutSidemenu/LayoutSidemenu.module */ "./src/app/LayoutSidemenu/LayoutSidemenu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _account_page__WEBPACK_IMPORTED_MODULE_5__["AccountPage"], },
];
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_6__["LayoutSidemenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_5__["AccountPage"]],
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/AccountComponent/account.page.html":
/*!****************************************************!*\
  !*** ./src/app/AccountComponent/account.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<layout-fab>\n  <ion-content>\n    <div class='body'>\n\n      <section class=\"sectionOne\">\n        <img src=\"../../assets/src/default-avatar.png\" alt=\"profile pic\" />\n        <div class=\"userName\">\n          <h4>Jamie Kavanaugh</h4>\n          <img src=\"../../assets/accounts/edit.png\" alt=\"edit pic\" />\n          <p>Jamie_kv@gmail.com</p>\n        </div>\n      </section>\n\n      <section class=\"sectionTwo\">\n        <div class=\"account-tabs\" (click)=\"changeSection('reports-new')\">\n\n          <img [src]=\"selectedSection=='reports-new' ? '../../assets/accounts/addReportSelected.png' : '../../assets/accounts/addReport.png'\" alt=\"Add Report\" />\n          <p>Add Report</p>\n          <span [ngClass]=\"{'activeSpan': selectedSection=='reports-new'}\"></span>\n        \n        </div>\n        <div class=\"account-tabs\" (click)=\"changeSection('galleries-new')\">\n\n          <img [src]=\"selectedSection=='galleries-new' ? '../../assets/accounts/addGallerySelected.png' : '../../assets/accounts/addGallery.png'\" alt=\"Add Image\" />\n          <p class=\"active\">Add Gallery</p>\n          <span [ngClass]=\"{'activeSpan': selectedSection=='galleries-new'}\"></span>\n        \n        </div>\n        <div class=\"account-tabs\" (click)=\"changeSection('videos-new')\">\n        \n          <img [src]=\"selectedSection=='videos-new' ? '../../assets/accounts/addVideoSelected.png' : '../../assets/accounts/addVideo.png'\" alt=\"Add Video\" />\n          <p>Add Video</p>\n          <span [ngClass]=\"{'activeSpan': selectedSection=='videos-new'}\"></span>\n        \n        </div>\n      </section>\n\n      <section class=\"sectionThree\">\n        <div [ngSwitch]=\"selectedSection\">\n\n\n          <div *ngSwitchCase=\"'reports-new'\">\n            <div class=\"group\">\n              <label class=\"placeholder\">Title</label>\n              <input type=\"text\" placeholder=\"\" class=\"firstInput\">\n            </div>\n\n            <div class=\"group\">\n              <label class=\"placeholder\">Subtitle</label>\n              <textarea placeholder=\"\"></textarea>\n            </div>\n\n            <div class=\"group\">\n              <label class=\"placeholder\">Body</label>\n              <textarea placeholder=\"\"></textarea>\n            </div>\n\n            <button class=\"btnCreate\">Publish</button>\n          </div>\n\n          <div *ngSwitchCase=\"'galleries-new'\">\n\n            <div class=\"group\">\n              <label class=\"placeholder\">Gallery Name</label>\n              <input type=\"text\" placeholder=\"\" class=\"firstInput\">\n            </div>\n            <div class=\"selectDiv\">\n              <label class=\"placeholder\">City</label>\n              <select name=\"city\" id=\"city\" class=\"firstSelect\">\n                <option value=\"Venice, Italy\" selected>\n                  Venice, Italy\n                </option>\n                <option value=\"Venice, Italy\">\n                  Venice, Italy\n                </option>\n              </select>\n            </div>\n\n            <div>\n              <div class=\"btnGrid\">\n                <h3>Post <span class=\"postTo\">to</span></h3>\n                <button class=\"btn btnRight\">\n                  <img src=\"../../assets/accounts/public.JPG\" alt=\"public pic\" />\n                </button>\n                <button class=\"btn btnLeft\">\n                  <img src=\".../../assets/accounts/friend.JPG\" alt=\"public pic\" />\n                </button>\n              </div>\n            </div>\n            <div class=\"selectImageGrid\">\n              <img src=\"../../assets/accounts/camera.JPG\" alt=\"Select Images\" />\n              <p>Select images</p>\n            </div>\n            <button class=\"btnCreate\">Create</button>\n\n          </div>\n\n          <div *ngSwitchCase=\"'videos-new'\">\n            <div class=\"group\">\n              <label class=\"placeholder\">Title</label>\n              <input type=\"text\" placeholder=\"\" class=\"firstInput\">\n            </div>\n\n            <div class=\"selectImageGrid\">\n              <img src=\"../../assets/accounts/camera.JPG\" alt=\"Select Images\" />\n              <p>Choose Files</p>\n            </div>\n\n            <!-- <div class=\"group\">\n              <input type=\"file\" placeholder=\"\" class=\"firstInput\">\n            </div> -->\n\n            <button class=\"btnCreate\">Publish</button>\n          </div>\n\n        </div>\n      </section>\n\n    </div>\n  </ion-content>\n</layout-fab>"

/***/ }),

/***/ "./src/app/AccountComponent/account.page.scss":
/*!****************************************************!*\
  !*** ./src/app/AccountComponent/account.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.body {\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 17px;\n  background-color: #f4f4f4; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  padding: 0;\n  margin: 0; }\n\nheader {\n  padding: 12px 12px;\n  margin: 0px 0px 20px 0px;\n  display: grid;\n  grid-template-columns: 80px 1fr;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  box-shadow: 1px 1px 5px #0000008f;\n  width: 100%; }\n\nheader nav span {\n  display: block;\n  width: 30px;\n  height: 3px;\n  background-color: #23a158;\n  margin: 4px; }\n\n.smallSpan {\n  width: 25px; }\n\nheader h1 {\n  display: inline;\n  font-size: 26px;\n  margin: 5px;\n  color: #131313; }\n\n/* header end */\n\n.sectionOne {\n  padding: 15px;\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  height: 150px;\n  justify-items: center;\n  grid-gap: 10px;\n  margin: auto;\n  max-width: 600px; }\n\n.sectionOne img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%; }\n\n.userName {\n  display: grid;\n  grid-template-columns: 1fr 30px;\n  -webkit-box-align: center;\n          align-items: center;\n  grid-gap: 5px; }\n\n.userName img {\n  width: 24px;\n  height: 24px;\n  justify-self: end; }\n\n.userName p {\n  align-self: start;\n  padding: 5px; }\n\n.userName .pen {\n  align-self: start; }\n\n.sectionTwo {\n  padding: 25px 10px;\n  grid-template-columns: repeat(3, minmax(100px, 1fr));\n  justify-items: center;\n  margin: auto;\n  max-width: 400px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.sectionTwo div.account-tabs {\n  text-align: center; }\n\n.sectionTwo img {\n  width: 60px;\n  height: 50px; }\n\n.sectionTwo p {\n  color: #6a6666;\n  font-weight: 600;\n  font-size: 16px; }\n\n.activeSpan {\n  display: block;\n  padding: 2px;\n  margin: 10px;\n  width: 70%;\n  height: 3px;\n  background-color: #1fb1c4; }\n\np.active {\n  color: #1fb1c4; }\n\n.sectionThree {\n  margin-top: 15px;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  grid-row-gap: 25px;\n  padding-bottom: 100px; }\n\n.group {\n  position: relative; }\n\n.firstInput {\n  padding: 14px 3px 10px 5px;\n  margin: 5px;\n  border: none;\n  font-size: 16px;\n  color: #131313; }\n\n.placeholder {\n  position: absolute;\n  font-size: 9px;\n  top: 0px;\n  padding: 1px;\n  margin: 4px 6px;\n  color: #00000080; }\n\n.firstSelect {\n  padding: 14px 3px 10px 3px;\n  width: 200px;\n  margin: 3px;\n  border: none;\n  font-size: 16px;\n  color: #131313;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.selectDiv {\n  position: relative; }\n\n.selectDiv:after {\n  content: \">\";\n  font-size: 20px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  right: 15px;\n  top: 12px;\n  position: absolute;\n  pointer-events: none;\n  color: #131313b0;\n  font-weight: 600; }\n\n.btn {\n  background: none;\n  padding: 2px;\n  border: 2px solid #1fb1c4;\n  width: 60px; }\n\n.btnGrid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px; }\n\n.btnGrid h3 {\n  color: #7b7373; }\n\n.btnGrid img {\n  width: 100%;\n  height: 100%; }\n\n.postTo {\n  font-size: 16px;\n  font-weight: 100;\n  padding: 0 3px;\n  color: #7b7373; }\n\n.btnRight {\n  justify-self: end;\n  border-right: none; }\n\n.btnLeft {\n  justify-self: start;\n  padding: 4px; }\n\n.selectImageGrid {\n  display: grid;\n  padding: 10px 45px 10px 1px;\n  grid-template-columns: 50px 1fr;\n  justify-items: start;\n  -webkit-box-align: center;\n          align-items: center;\n  grid-gap: 15px; }\n\n.selectImageGrid p {\n  font-size: 14px;\n  color: #6a6666; }\n\n.btnCreate {\n  background-color: #1fb1c4;\n  color: #fff;\n  border: none;\n  width: 160px;\n  height: 40px;\n  text-align: center;\n  border-radius: 50px;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 1px 5px 5px #1fb1c459;\n  letter-spacing: 1.5px; }\n\n.account-tabs {\n  cursor: pointer; }\n\n@media (max-width: 370px) {\n  body {\n    font-size: 13px; }\n  .sectionOne {\n    padding: 2px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGF5L0Rlc2t0b3AvdGdtX2lvbmljL3NyYy9hcHAvQWNjb3VudENvbXBvbmVudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLFdBQVU7RUFDVixVQUFTO0VBQ1QsMENBQXlDO0VBQ3pDLGdCQUFlO0VBQ2YsMEJBQXlCLEVBQzFCOztBQUNEOzs7Ozs7O0VBT0UsV0FBVTtFQUNWLFVBQVMsRUFDVjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsY0FBYTtFQUNiLGdDQUErQjtFQUMvQiwwQkFBa0I7VUFBbEIsb0JBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixrQ0FBaUM7RUFDakMsWUFBVSxFQUNYOztBQUVEO0VBQ0UsZUFBYztFQUNkLFlBQVk7RUFDWixZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLFlBQVksRUFDYjs7QUFDRDtFQUNFLFlBQVksRUFDYjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsZUFBYyxFQUNmOztBQUVELGdCQUFnQjs7QUFFaEI7RUFDRSxjQUFhO0VBQ2IsY0FBYTtFQUNiLGlDQUFnQztFQUNoQyxjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLGVBQWM7RUFFZCxhQUFXO0VBQ1gsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsZ0NBQStCO0VBQy9CLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsYUFBWSxFQUNiOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHFEQUFtRDtFQUNuRCxzQkFBcUI7RUFFckIsYUFBVztFQUNYLGlCQUFnQjtFQUNoQixxQkFBYTtFQUFiLGNBQWE7RUFDYiwwQkFBOEI7VUFBOUIsK0JBQThCLEVBQy9COztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQVksRUFHYjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsYUFBWTtFQUNaLGFBQVk7RUFDWixXQUFVO0VBQ1YsWUFBVztFQUNYLDBCQUF3QixFQUV6Qjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2IsMkJBQTBCO0VBQzFCLHNCQUFxQjtFQUNyQiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSwyQkFBMEI7RUFDMUIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLGVBQWMsRUFDZjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsU0FBTztFQUNQLGFBQVk7RUFDWixnQkFBZTtFQUNmLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLDJCQUEwQjtFQUMxQixhQUFZO0VBQ1osWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLGVBQWM7RUFDZCx5QkFBd0I7RUFDeEIsc0JBQXFCO0VBQ3JCLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZTtFQUNmLGlDQUFnQztFQUdoQyx5QkFBd0I7RUFDeEIsWUFBVztFQUNYLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isc0NBQW9DO0VBQ3BDLHNCQUFxQjtFQUNyQiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGFBQVksRUFDYjs7QUFDRDtFQUNFLGVBQWEsRUFFZDs7QUFDRDtFQUNFLFlBQVU7RUFDVixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsZUFBZSxFQUNoQjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsY0FBYTtFQUNiLDRCQUEyQjtFQUMzQixnQ0FBK0I7RUFDL0IscUJBQW1CO0VBQ25CLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsZUFBYyxFQUNmOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsWUFBVztFQUNYLGFBQWE7RUFDYixhQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsa0NBQWlDO0VBQ2pDLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0U7SUFDRSxnQkFBZSxFQUNoQjtFQUNEO0lBQ0UsYUFBWSxFQUNiLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9BY2NvdW50Q29tcG9uZW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xufVxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5oZWFkZXJ7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMWZyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDhmO1xuICB3aWR0aDoxMDAlO1xufVxuXG5oZWFkZXIgbmF2IHNwYW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aCA6IDMwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNhMTU4O1xuICBtYXJnaW46IDRweCA7XG59XG4uc21hbGxTcGFue1xuICB3aWR0aCA6IDI1cHg7XG59XG5cbmhlYWRlciBoMSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW46IDVweDtcbiAgY29sb3I6ICMxMzEzMTM7XG59XG5cbi8qIGhlYWRlciBlbmQgKi9cblxuLnNlY3Rpb25PbmV7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTMwcHggMWZyO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuXG4gIG1hcmdpbjphdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uc2VjdGlvbk9uZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi51c2VyTmFtZXtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDVweDtcbn1cblxuLnVzZXJOYW1lIGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4udXNlck5hbWUgcCB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBwYWRkaW5nOiA1cHg7XG59XG4udXNlck5hbWUgLnBlbntcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG59XG5cbi5zZWN0aW9uVHdve1xuICBwYWRkaW5nOiAyNXB4IDEwcHg7IFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICBtYXJnaW46YXV0bztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2VjdGlvblR3byBkaXYuYWNjb3VudC10YWJze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uVHdvIGltZ3tcbiAgd2lkdGggOiA2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG5cblxufVxuXG4uc2VjdGlvblR3byBwIHtcbiAgY29sb3I6ICM2YTY2NjY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFjdGl2ZVNwYW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGggOjcwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzFmYjFjNDtcblxufVxuXG5wLmFjdGl2ZXtcbiAgY29sb3I6ICMxZmIxYzQ7XG59XG5cbi5zZWN0aW9uVGhyZWV7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtcm93LWdhcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4uZ3JvdXB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpcnN0SW5wdXR7XG4gIHBhZGRpbmc6IDE0cHggM3B4IDEwcHggNXB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMTMxMzEzO1xufVxuLnBsYWNlaG9sZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0b3A6MHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbjogNHB4IDZweDtcbiAgY29sb3I6ICMwMDAwMDA4MDtcbn1cblxuLmZpcnN0U2VsZWN0e1xuICBwYWRkaW5nOiAxNHB4IDNweCAxMHB4IDNweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMTMxMzEzO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5zZWxlY3REaXZ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3REaXY6YWZ0ZXIge1xuICBjb250ZW50IDogXCI+XCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjMTMxMzEzYjA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxZmIxYzQ7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uYnRuR3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5idG5HcmlkIGgzIHtcbiAgY29sb3I6IzdiNzM3MztcblxufVxuLmJ0bkdyaWQgaW1ne1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucG9zdFRve1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBjb2xvciA6ICM3YjczNzM7XG59XG4uYnRuUmlnaHR7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uYnRuTGVmdCB7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLnNlbGVjdEltYWdlR3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMTBweCA0NXB4IDEwcHggMXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOnN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgZ3JpZC1nYXA6IDE1cHg7ICAgXG59XG5cbi5zZWxlY3RJbWFnZUdyaWQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2YTY2NjY7XG59XG5cbi5idG5DcmVhdGV7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZiMWM0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyIDogbm9uZTtcbiAgd2lkdGg6MTYwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggNXB4ICMxZmIxYzQ1OTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxuXG4uYWNjb3VudC10YWJze1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYShtYXgtd2lkdGggOiAzNzBweCl7XG4gIGJvZHl7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5zZWN0aW9uT25le1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/AccountComponent/account.page.ts":
/*!**************************************************!*\
  !*** ./src/app/AccountComponent/account.page.ts ***!
  \**************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
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







var AccountPage = /** @class */ (function () {
    function AccountPage(appService, httpClient, nativeStorage, router, toastController) {
        var _this = this;
        this.appService = appService;
        this.httpClient = httpClient;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.toastController = toastController;
        this.currentUser = {};
        this.selectedSection = "galleries-new";
        this.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Object(_const__WEBPACK_IMPORTED_MODULE_6__["logg"])('AccountPage constructor()');
        this.appService.currentUser.subscribe(function (msg) {
            Object(_const__WEBPACK_IMPORTED_MODULE_6__["logg"])(msg, 'AccountPage got currentUser');
            _this.currentUser = msg;
            _this.ngOnInit();
        });
    }
    AccountPage.prototype.navigate = function (where) {
        this.router.navigate([where]);
    };
    AccountPage.prototype.changeSection = function (section) {
        console.log(section);
        this.selectedSection = section;
    };
    AccountPage.prototype.ngOnInit = function () {
        Object(_const__WEBPACK_IMPORTED_MODULE_6__["logg"])('AccountPage ngOnInit()');
    };
    AccountPage.prototype.doFacebookLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.nativeStorage.remove('current_user');
                        return [4 /*yield*/, this.toastController.create({ message: 'Logged out.', duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        // this.eventEmitter.emit(C.didLogout);
                        this.appService.changeMessage(_const__WEBPACK_IMPORTED_MODULE_6__["C"].didLogout);
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.payMicro = function () {
        Object(_const__WEBPACK_IMPORTED_MODULE_6__["logg"])('AccountPage payMicro()');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "eventEmitter", void 0);
    AccountPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/AccountComponent/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/AccountComponent/account.page.scss")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=AccountComponent-account-module.js.map