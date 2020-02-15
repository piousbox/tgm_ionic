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

module.exports = "\n<layout-sidemenu>\n  <ion-content >\n    <div class='body' >\n\n      <section class=\"sectionOne\">\n        <img src=\"../../assets/src/default-avatar.png\" alt=\"profile pic\" />\n        <div class=\"userName\">\n          <h4>Jamie Kavanaugh</h4>\n          <img src=\"../../assets/accounts/edit.png\" alt=\"edit pic\" />\n          <p>Jamie_kv@gmail.com</p>\n        </div>\n      </section>\n\n      <section class=\"sectionTwo\">\n        <div>\n          <img src=\"../../assets/accounts/addReport.JPG\" alt=\"Add Report\" />\n          <p>Add Report</p>\n          <span></span>\n        </div>\n        <div>\n          <img src=\"../../assets/accounts/addImg.JPG\" alt=\"Add Image\" />\n          <p class=\"active\">Add Gallery</p>\n          <span class=\"activeSpan\"></span>\n        </div>\n        <div>\n          <img src=\"../../assets/accounts/addVideo.JPG\" alt=\"Add Video\" />\n          <p>Add Video</p>\n          <span></span>\n        </div>\n      </section>\n      \n      <section class=\"sectionThree\">\n        <div class=\"group\">\n          <label class=\"placeholder\">Gallery Name</label>\n          <input type=\"text\" placeholder=\"\" class=\"firstInput\">\n        </div>\n        <div class=\"selectDiv\">\n          <label class=\"placeholder\">City</label>\n          <select name=\"city\" id=\"city\" class=\"firstSelect\">\n            <option value=\"Venice, Italy\" selected>\n              Venice, Italy\n            </option>\n            <option value=\"Venice, Italy\">\n              Venice, Italy\n            </option>\n          </select>\n        </div>\n        <div>\n          <div class=\"btnGrid\">\n            <h3>Post <span class=\"postTo\">to</span></h3>\n            <button class=\"btn btnRight\">\n              <img src=\"../../assets/accounts/public.JPG\" alt=\"public pic\" />\n            </button>\n            <button class=\"btn btnLeft\">\n              <img src=\".../../assets/accounts/friend.JPG\" alt=\"public pic\" />\n            </button>\n          </div>\n        </div>\n        <div class=\"selectImageGrid\">\n          <img src=\"../../assets/accounts/camera.JPG\" alt=\"Select Images\" />\n          <p>Select images</p>\n        </div>\n        <button class=\"btnCreate\">Create</button>\n      </section>\n\n    </div>\n  </ion-content>\n</layout-sidemenu>\n"

/***/ }),

/***/ "./src/app/AccountComponent/account.page.scss":
/*!****************************************************!*\
  !*** ./src/app/AccountComponent/account.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.body {\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 17px;\n  background-color: #f4f4f4; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  padding: 0;\n  margin: 0; }\n\nheader {\n  padding: 12px 12px;\n  margin: 0px 0px 20px 0px;\n  display: grid;\n  grid-template-columns: 80px 1fr;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  box-shadow: 1px 1px 5px #0000008f;\n  width: 100%; }\n\nheader nav span {\n  display: block;\n  width: 30px;\n  height: 3px;\n  background-color: #23a158;\n  margin: 4px; }\n\n.smallSpan {\n  width: 25px; }\n\nheader h1 {\n  display: inline;\n  font-size: 26px;\n  margin: 5px;\n  color: #131313; }\n\n/* header end */\n\n.sectionOne {\n  padding: 15px;\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  height: 150px;\n  justify-items: center;\n  grid-gap: 10px;\n  margin: auto;\n  max-width: 600px; }\n\n.sectionOne img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%; }\n\n.userName {\n  display: grid;\n  grid-template-columns: 1fr 30px;\n  -webkit-box-align: center;\n          align-items: center;\n  grid-gap: 5px; }\n\n.userName img {\n  width: 24px;\n  height: 24px;\n  justify-self: end; }\n\n.userName p {\n  align-self: start;\n  padding: 5px; }\n\n.userName .pen {\n  align-self: start; }\n\n.sectionTwo {\n  padding: 25px 10px;\n  grid-template-columns: repeat(3, minmax(100px, 1fr));\n  justify-items: center;\n  margin: auto;\n  max-width: 400px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.sectionTwo img {\n  width: 80px;\n  height: 50px; }\n\n.sectionTwo p {\n  color: #6a6666;\n  font-weight: 600;\n  font-size: 16px; }\n\n.activeSpan {\n  display: block;\n  padding: 2px;\n  margin: 10px;\n  width: 70%;\n  height: 3px;\n  background-color: #1fb1c4; }\n\np.active {\n  color: #1fb1c4; }\n\n.sectionThree {\n  margin-top: 15px;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  grid-row-gap: 25px;\n  padding-bottom: 100px; }\n\n.group {\n  position: relative; }\n\n.firstInput {\n  padding: 14px 3px 10px 5px;\n  margin: 5px;\n  border: none;\n  font-size: 16px;\n  color: #131313; }\n\n.placeholder {\n  position: absolute;\n  font-size: 9px;\n  top: 0px;\n  padding: 1px;\n  margin: 4px 6px;\n  color: #00000080; }\n\n.firstSelect {\n  padding: 14px 3px 10px 3px;\n  width: 200px;\n  margin: 3px;\n  border: none;\n  font-size: 16px;\n  color: #131313;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.selectDiv {\n  position: relative; }\n\n.selectDiv:after {\n  content: \">\";\n  font-size: 20px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  right: 15px;\n  top: 12px;\n  position: absolute;\n  pointer-events: none;\n  color: #131313b0;\n  font-weight: 600; }\n\n.btn {\n  background: none;\n  padding: 2px;\n  border: 2px solid #1fb1c4;\n  width: 60px; }\n\n.btnGrid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px; }\n\n.btnGrid h3 {\n  color: #7b7373; }\n\n.btnGrid img {\n  width: 100%;\n  height: 100%; }\n\n.postTo {\n  font-size: 16px;\n  font-weight: 100;\n  padding: 0 3px;\n  color: #7b7373; }\n\n.btnRight {\n  justify-self: end;\n  border-right: none; }\n\n.btnLeft {\n  justify-self: start;\n  padding: 4px; }\n\n.selectImageGrid {\n  display: grid;\n  padding: 10px 45px 10px 1px;\n  grid-template-columns: 50px 1fr;\n  justify-items: start;\n  -webkit-box-align: center;\n          align-items: center;\n  grid-gap: 15px; }\n\n.selectImageGrid p {\n  font-size: 14px;\n  color: #6a6666; }\n\n.btnCreate {\n  background-color: #1fb1c4;\n  color: #fff;\n  border: none;\n  width: 160px;\n  height: 40px;\n  text-align: center;\n  border-radius: 50px;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 1px 5px 5px #1fb1c459;\n  letter-spacing: 1.5px; }\n\n@media (max-width: 370px) {\n  body {\n    font-size: 13px; }\n  .sectionOne {\n    padding: 2px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL3RnbV9pb25pYy9zcmMvYXBwL0FjY291bnRDb21wb25lbnQvYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsVUFBUztFQUNULDBDQUF5QztFQUN6QyxnQkFBZTtFQUNmLDBCQUF5QixFQUMxQjs7QUFDRDs7Ozs7OztFQU9FLFdBQVU7RUFDVixVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGNBQWE7RUFDYixnQ0FBK0I7RUFDL0IsMEJBQWtCO1VBQWxCLG9CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsa0NBQWlDO0VBQ2pDLFlBQVUsRUFDWDs7QUFFRDtFQUNFLGVBQWM7RUFDZCxZQUFZO0VBQ1osWUFBVztFQUNYLDBCQUF5QjtFQUN6QixZQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxZQUFZLEVBQ2I7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGVBQWMsRUFDZjs7QUFFRCxnQkFBZ0I7O0FBRWhCO0VBQ0UsY0FBYTtFQUNiLGNBQWE7RUFDYixpQ0FBZ0M7RUFDaEMsY0FBYTtFQUNiLHNCQUFxQjtFQUNyQixlQUFjO0VBRWQsYUFBVztFQUNYLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsY0FBYTtFQUNiLGdDQUErQjtFQUMvQiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGFBQVksRUFDYjs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixxREFBbUQ7RUFDbkQsc0JBQXFCO0VBRXJCLGFBQVc7RUFDWCxpQkFBZ0I7RUFDaEIscUJBQWE7RUFBYixjQUFhO0VBQ2IsMEJBQThCO1VBQTlCLCtCQUE4QixFQUMvQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFZLEVBR2I7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsZUFBYztFQUNkLGFBQVk7RUFDWixhQUFZO0VBQ1osV0FBVTtFQUNWLFlBQVc7RUFDWCwwQkFBd0IsRUFFekI7O0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLDJCQUEwQjtFQUMxQixzQkFBcUI7RUFDckIsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsMkJBQTBCO0VBQzFCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLFNBQU87RUFDUCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSwyQkFBMEI7RUFDMUIsYUFBWTtFQUNaLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixlQUFjO0VBQ2QseUJBQXdCO0VBQ3hCLHNCQUFxQjtFQUNyQixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWU7RUFDZixpQ0FBZ0M7RUFHaEMseUJBQXdCO0VBQ3hCLFlBQVc7RUFDWCxVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWiwwQkFBeUI7RUFDekIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHNDQUFvQztFQUNwQyxzQkFBcUI7RUFDckIsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxlQUFhLEVBRWQ7O0FBQ0Q7RUFDRSxZQUFVO0VBQ1YsYUFBWSxFQUNiOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLGVBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usb0JBQW1CO0VBQ25CLGFBQVksRUFDYjs7QUFFRDtFQUNFLGNBQWE7RUFDYiw0QkFBMkI7RUFDM0IsZ0NBQStCO0VBQy9CLHFCQUFtQjtFQUNuQiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsZUFBYyxFQUNmOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtDQUFpQztFQUNqQyxzQkFBcUIsRUFDdEI7O0FBR0Q7RUFDRTtJQUNFLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSxhQUFZLEVBQ2IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0FjY291bnRDb21wb25lbnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG59XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5we1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmhlYWRlcntcbiAgcGFkZGluZzogMTJweCAxMnB4O1xuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxZnI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjsgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwMDAwOGY7XG4gIHdpZHRoOjEwMCU7XG59XG5cbmhlYWRlciBuYXYgc3BhbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoIDogMzBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2ExNTg7XG4gIG1hcmdpbjogNHB4IDtcbn1cbi5zbWFsbFNwYW57XG4gIHdpZHRoIDogMjVweDtcbn1cblxuaGVhZGVyIGgxIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogIzEzMTMxMztcbn1cblxuLyogaGVhZGVyIGVuZCAqL1xuXG4uc2VjdGlvbk9uZXtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMzBweCAxZnI7XG4gIGhlaWdodDogMTUwcHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG5cbiAgbWFyZ2luOmF1dG87XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5zZWN0aW9uT25lIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXJOYW1le1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWdhcDogNXB4O1xufVxuXG4udXNlck5hbWUgaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi51c2VyTmFtZSBwIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi51c2VyTmFtZSAucGVue1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbn1cblxuLnNlY3Rpb25Ud297XG4gIHBhZGRpbmc6IDI1cHggMTBweDsgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gIG1hcmdpbjphdXRvO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWN0aW9uVHdvIGltZ3tcbiAgd2lkdGggOiA4MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG5cblxufVxuXG4uc2VjdGlvblR3byBwIHtcbiAgY29sb3I6ICM2YTY2NjY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFjdGl2ZVNwYW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGggOjcwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzFmYjFjNDtcblxufVxuXG5wLmFjdGl2ZXtcbiAgY29sb3I6ICMxZmIxYzQ7XG59XG5cbi5zZWN0aW9uVGhyZWV7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtcm93LWdhcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4uZ3JvdXB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpcnN0SW5wdXR7XG4gIHBhZGRpbmc6IDE0cHggM3B4IDEwcHggNXB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMTMxMzEzO1xufVxuLnBsYWNlaG9sZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0b3A6MHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbjogNHB4IDZweDtcbiAgY29sb3I6ICMwMDAwMDA4MDtcbn1cblxuLmZpcnN0U2VsZWN0e1xuICBwYWRkaW5nOiAxNHB4IDNweCAxMHB4IDNweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMTMxMzEzO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5zZWxlY3REaXZ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3REaXY6YWZ0ZXIge1xuICBjb250ZW50IDogXCI+XCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjMTMxMzEzYjA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxZmIxYzQ7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uYnRuR3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5idG5HcmlkIGgzIHtcbiAgY29sb3I6IzdiNzM3MztcblxufVxuLmJ0bkdyaWQgaW1ne1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucG9zdFRve1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBjb2xvciA6ICM3YjczNzM7XG59XG4uYnRuUmlnaHR7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uYnRuTGVmdCB7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLnNlbGVjdEltYWdlR3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMTBweCA0NXB4IDEwcHggMXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOnN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgZ3JpZC1nYXA6IDE1cHg7ICAgXG59XG5cbi5zZWxlY3RJbWFnZUdyaWQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2YTY2NjY7XG59XG5cbi5idG5DcmVhdGV7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZiMWM0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyIDogbm9uZTtcbiAgd2lkdGg6MTYwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggNXB4ICMxZmIxYzQ1OTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxuXG5cbkBtZWRpYShtYXgtd2lkdGggOiAzNzBweCl7XG4gIGJvZHl7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5zZWN0aW9uT25le1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxuXG59Il19 */"

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