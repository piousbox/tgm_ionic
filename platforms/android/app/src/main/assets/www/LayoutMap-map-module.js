(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LayoutMap-map-module"],{

/***/ "./src/app/LayoutMap/inventory.scss":
/*!******************************************!*\
  !*** ./src/app/LayoutMap/inventory.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * footer\n */\n.main-footer {\n  height: 100px;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  padding: .5em; }\n.main-footer-inner {\n  border: 1px solid grey;\n  height: 100%;\n  background: #ededde;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n.footer-collapse {\n  position: absolute;\n  background: url('hamburger.png');\n  width: 1em;\n  height: 1em;\n  margin-top: -1em;\n  background-size: cover; }\n.footer-collapsed .main-footer {\n  height: 2em; }\n.main-footer-overlay {\n  display: none; }\n.footer-collapsed .main-footer-inner {\n  /* padding: 0; */\n  height: 0;\n  display: none; }\n.footer-collapsed .main-footer-overlay {\n  display: block;\n  background: #ededde;\n  height: 1em;\n  border: 1px solid gray; }\n.img-avatar {\n  width: calc(100px - 1em - 2px);\n  height: calc(100px - 1em - 2px);\n  background: url('avatar.png');\n  background-size: cover; }\n/**\n * inventory\n */\n.img-gem {\n  background: url('gem.png');\n  background-size: cover;\n  width: calc(100px - 4em);\n  height: calc(100px - 4em); }\n.img-star {\n  background: url('star.png');\n  background-size: cover;\n  width: calc(100px - 4em);\n  height: calc(100px - 4em); }\n.widget-stars {\n  line-height: calc(100px - 4em);\n  height: 100%;\n  padding: 0 2em;\n  display: -webkit-box;\n  display: flex; }\n.widget-stars-inner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-items: center; }\n.widget-stars .count {\n  line-height: calc(100px - 4em);\n  margin-right: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL2dhbWV1aV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9pbnZlbnRvcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7R0FFRztBQUNIO0VBQ0UsY0FBYTtFQUNiLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxRQUFPO0VBQ1AsY0FBYSxFQUNkO0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLG9CQUFtQjtFQUVuQixxQkFBYTtFQUFiLGNBQWE7RUFDYiwrQkFBbUI7RUFBbkIsOEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQix5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLHdCQUEyQjtVQUEzQiw0QkFBMkIsRUFDNUI7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixpQ0FBbUQ7RUFDbkQsV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsdUJBQXNCLEVBQ3ZCO0FBRUQ7RUFDRSxZQUFXLEVBQ1o7QUFDRDtFQUNFLGNBQWEsRUFDZDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVM7RUFDVCxjQUFhLEVBQ2Q7QUFDRDtFQUNFLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsWUFBVztFQUNYLHVCQUFzQixFQUN2QjtBQUVEO0VBQ0UsK0JBQThCO0VBQzlCLGdDQUErQjtFQUMvQiw4QkFBa0Q7RUFDbEQsdUJBQXNCLEVBQ3ZCO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLDJCQUErQztFQUMvQyx1QkFBc0I7RUFDdEIseUJBQXdCO0VBQ3hCLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0UsNEJBQWdEO0VBQ2hELHVCQUFzQjtFQUN0Qix5QkFBd0I7RUFDeEIsMEJBQXlCLEVBQzFCO0FBRUQ7RUFDRSwrQkFBOEI7RUFDOUIsYUFBWTtFQUVaLGVBQWM7RUFDZCxxQkFBYTtFQUFiLGNBQWEsRUFDZDtBQUNEO0VBQ0UscUJBQWE7RUFBYixjQUFhO0VBQ2IsK0JBQW1CO0VBQW5CLDhCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixzQkFBcUIsRUFDdEI7QUFDRDtFQUNFLCtCQUE4QjtFQUM5QixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9MYXlvdXRNYXAvaW52ZW50b3J5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogZm9vdGVyXG4gKi9cbi5tYWluLWZvb3RlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IC41ZW07XG59XG4ubWFpbi1mb290ZXItaW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgXG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2VkZWRkZTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmZvb3Rlci1jb2xsYXBzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvaGFtYnVyZ2VyLnBuZycpO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLXRvcDogLTFlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZvb3Rlci1jb2xsYXBzZWQgLm1haW4tZm9vdGVyIHtcbiAgaGVpZ2h0OiAyZW07XG59XG4ubWFpbi1mb290ZXItb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZm9vdGVyLWNvbGxhcHNlZCAubWFpbi1mb290ZXItaW5uZXIge1xuICAvKiBwYWRkaW5nOiAwOyAqL1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZm9vdGVyLWNvbGxhcHNlZCAubWFpbi1mb290ZXItb3ZlcmxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZWRlZGRlO1xuICBoZWlnaHQ6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cblxuLmltZy1hdmF0YXIge1xuICB3aWR0aDogY2FsYygxMDBweCAtIDFlbSAtIDJweCk7XG4gIGhlaWdodDogY2FsYygxMDBweCAtIDFlbSAtIDJweCk7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzEwMHgxMDAvYXZhdGFyLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLyoqXG4gKiBpbnZlbnRvcnlcbiAqL1xuLmltZy1nZW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy8yNTZ4MjU2L2dlbS5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IGNhbGMoMTAwcHggLSA0ZW0pO1xuICBoZWlnaHQ6IGNhbGMoMTAwcHggLSA0ZW0pO1xufVxuLmltZy1zdGFyIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvMjU2eDI1Ni9zdGFyLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogY2FsYygxMDBweCAtIDRlbSk7XG4gIGhlaWdodDogY2FsYygxMDBweCAtIDRlbSk7XG59XG5cbi53aWRnZXQtc3RhcnMge1xuICBsaW5lLWhlaWdodDogY2FsYygxMDBweCAtIDRlbSk7XG4gIGhlaWdodDogMTAwJTtcbiAgXG4gIHBhZGRpbmc6IDAgMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndpZGdldC1zdGFycy1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi53aWRnZXQtc3RhcnMgLmNvdW50IHtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMTAwcHggLSA0ZW0pO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/LayoutMap/mainfold.scss":
/*!*****************************************!*\
  !*** ./src/app/LayoutMap/mainfold.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * From: https://jsfiddle.net/MadLittleMods/LmYay/\n */\n*, *:before, *:after {\n  box-sizing: border-box; }\n.debug {\n  border: 1px solid red; }\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden; }\n.mainfold-parent {\n  height: 100%; }\n.main-header {\n  height: 40px;\n  width: 100%;\n  padding-top: .5em;\n  padding-left: .5em;\n  line-height: 40px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.main-text {\n  padding: .5em; }\n.main-twofold {\n  height: 100%;\n  padding-top: 40px;\n  padding-bottom: 100px;\n  /* display: flex;\n  flex-flow: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: stretch;\n  */ }\n.header-collapsed .main-twofold {\n  padding-top: 0; }\n.footer-collapsed .main-twofold {\n  padding-bottom: 2em; }\n.main-twofold-inner {\n  height: 100%;\n  position: relative; }\n.main-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  padding: 0.5em; }\n.main-left-inner {\n  /* background: white; */\n  background: #d2d2d2;\n  border: 1px solid grey;\n  width: 100%;\n  height: 100%;\n  /* padding: .5em; */\n  overflow: scroll;\n  position: relative;\n  top: 0;\n  left: 0; }\n.main-right {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  padding: 0.5em; }\n.main-right-inner {\n  background: white;\n  width: 100%;\n  height: 100%;\n  border: 1px solid grey;\n  /* padding: .5em; */\n  overflow: scroll; }\n/*\n * collapse\n */\n.main-collapse {\n  position: absolute;\n  /* top: 2em; */\n  background: url('hamburger.png');\n  width: 1em;\n  height: 1em;\n  margin-left: -1em;\n  background-size: cover; }\n.left-collapsed .main-left {\n  width: 1em; }\n.left-collapsed .main-right {\n  width: calc(100% - 2em);\n  left: 2em; }\n.left-collapsed .main-left-inner {\n  display: none; }\n.left-collapsed .zoom-control {\n  display: none; }\n.main-left-overlay {\n  display: none; }\n.left-collapsed .main-left-overlay {\n  display: block;\n  background: #ededde;\n  width: 1em;\n  border: 1px solid gray;\n  height: 100%; }\n.main-right-overlay {\n  display: none; }\n/**\n * right-collapsed\n */\n.right-collapsed .main-right {\n  left: calc(100% - 2em); }\n.right-collapsed .main-right-inner {\n  display: none; }\n.right-collapsed .main-right-overlay {\n  display: block;\n  background: #ededde;\n  width: 1em;\n  border: 1px solid gray;\n  height: 100%; }\n.right-collapsed .main-left {\n  width: calc(100% - 2em); }\n/**\n * header\n */\n.header-collapsed .main-header {\n  display: none; }\n.header-control {\n  display: none;\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n  z-index: 2; }\n.header-collapsed .header-control {\n  display: block; }\n.header-control-inner {\n  background: white url('hamburger.png');\n  background-size: cover;\n  width: 1em;\n  height: 1em; }\n.main-header {\n  display: -webkit-box;\n  display: flex; }\n.main-header .img {\n  margin-left: 10px;\n  background-size: cover;\n  height: 30px;\n  width: 30px; }\n.img-swords {\n  background: url('swords.png'); }\n.img-news {\n  background: url('news.png'); }\n.img-city {\n  background: url('city.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL2dhbWV1aV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9tYWluZm9sZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7RUFHRSx1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsVUFBUztFQUNULFdBQVU7RUFDVixhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7QUFJRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFFakIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPLEVBQ1I7QUFDRDtFQUNFLGNBQWEsRUFDZDtBQUdEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFFckI7Ozs7O0lBS0UsRUFDSDtBQUNEO0VBQ0UsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7QUFDRDtFQUNFLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsT0FBTTtFQUVOLFdBQVU7RUFDVixhQUFZO0VBQ1osZUFBYyxFQUNmO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUV0QixZQUFXO0VBQ1gsYUFBWTtFQUVaLG9CQUFvQjtFQUNwQixpQkFBZ0I7RUFFaEIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPLEVBQ1I7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsT0FBTTtFQUVOLFdBQVU7RUFDVixhQUFZO0VBQ1osZUFBYyxFQUNmO0FBQ0Q7RUFDRSxrQkFBaUI7RUFDakIsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGlCQUFnQixFQUNqQjtBQUVEOztHQUVHO0FBQ0g7RUFDRSxtQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlDQUFtRDtFQUNuRCxXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLFdBQVUsRUFDWDtBQUNEO0VBQ0Usd0JBQXVCO0VBQ3ZCLFVBQVMsRUFDVjtBQUVEO0VBQW1DLGNBQWEsRUFBSTtBQUNwRDtFQUFnQyxjQUFhLEVBQUk7QUFDakQ7RUFBcUIsY0FBYSxFQUFJO0FBRXRDO0VBQ0UsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixXQUFVO0VBQ1YsdUJBQXNCO0VBQ3RCLGFBQVksRUFDYjtBQUNEO0VBQ0UsY0FBYSxFQUNkO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLHVCQUFzQixFQUN2QjtBQUNEO0VBQXFDLGNBQWEsRUFBSTtBQUN0RDtFQUNFLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsV0FBVTtFQUNWLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2I7QUFDRDtFQUNFLHdCQUF1QixFQUN4QjtBQUVEOztHQUVHO0FBQ0g7RUFDRSxjQUFhLEVBQ2Q7QUFDRDtFQUNFLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVc7RUFDWCxXQUFVLEVBQ1g7QUFDRDtFQUNFLGVBQWMsRUFDZjtBQUNEO0VBQ0UsdUNBQXlEO0VBQ3pELHVCQUFzQjtFQUN0QixXQUFVO0VBQ1YsWUFBVyxFQUNaO0FBRUQ7RUFDRSxxQkFBYTtFQUFiLGNBQWEsRUFDZDtBQUNEO0VBQ0Usa0JBQWlCO0VBRWpCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osWUFBVyxFQUNaO0FBQ0Q7RUFDRSw4QkFBZ0QsRUFDakQ7QUFDRDtFQUNFLDRCQUE4QyxFQUMvQztBQUNEO0VBQ0UsNEJBQThDLEVBQy9DIiwiZmlsZSI6InNyYy9hcHAvTGF5b3V0TWFwL21haW5mb2xkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZyb206IGh0dHBzOi8vanNmaWRkbGUubmV0L01hZExpdHRsZU1vZHMvTG1ZYXkvXG4gKi9cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZGVidWcge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5odG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbmZvbGQtcGFyZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5mb2xkLWl0ZW0ge1xufVxuXG4ubWFpbi1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogLjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAuNWVtO1xuICBsaW5lLWhlaWdodDogNDBweDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5tYWluLXRleHQge1xuICBwYWRkaW5nOiAuNWVtO1xufVxuXG5cbi5tYWluLXR3b2ZvbGQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG5cbiAgLyogZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICovXG59XG4uaGVhZGVyLWNvbGxhcHNlZCAubWFpbi10d29mb2xkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uZm9vdGVyLWNvbGxhcHNlZCAubWFpbi10d29mb2xkIHtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbn1cbi5tYWluLXR3b2ZvbGQtaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcblxuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuLm1haW4tbGVmdC1pbm5lciB7XG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xuICBiYWNrZ3JvdW5kOiAjZDJkMmQyO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIFxuICAvKiBwYWRkaW5nOiAuNWVtOyAqL1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLm1haW4tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuXG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMC41ZW07XG59XG4ubWFpbi1yaWdodC1pbm5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAvKiBwYWRkaW5nOiAuNWVtOyAqL1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vKlxuICogY29sbGFwc2VcbiAqL1xuLm1haW4tY29sbGFwc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIHRvcDogMmVtOyAqL1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9oYW1idXJnZXIucG5nJyk7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5sZWZ0LWNvbGxhcHNlZCAubWFpbi1sZWZ0IHtcbiAgd2lkdGg6IDFlbTtcbn1cbi5sZWZ0LWNvbGxhcHNlZCAubWFpbi1yaWdodCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xuICBsZWZ0OiAyZW07XG59XG5cbi5sZWZ0LWNvbGxhcHNlZCAubWFpbi1sZWZ0LWlubmVyIHsgZGlzcGxheTogbm9uZTsgfVxuLmxlZnQtY29sbGFwc2VkIC56b29tLWNvbnRyb2wgeyBkaXNwbGF5OiBub25lOyB9XG4ubWFpbi1sZWZ0LW92ZXJsYXkgeyBkaXNwbGF5OiBub25lOyB9XG5cbi5sZWZ0LWNvbGxhcHNlZCAubWFpbi1sZWZ0LW92ZXJsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2VkZWRkZTtcbiAgd2lkdGg6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW4tcmlnaHQtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKipcbiAqIHJpZ2h0LWNvbGxhcHNlZFxuICovXG4ucmlnaHQtY29sbGFwc2VkIC5tYWluLXJpZ2h0IHtcbiAgbGVmdDogY2FsYygxMDAlIC0gMmVtKTtcbn1cbi5yaWdodC1jb2xsYXBzZWQgLm1haW4tcmlnaHQtaW5uZXIgeyBkaXNwbGF5OiBub25lOyB9XG4ucmlnaHQtY29sbGFwc2VkIC5tYWluLXJpZ2h0LW92ZXJsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2VkZWRkZTtcbiAgd2lkdGg6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJpZ2h0LWNvbGxhcHNlZCAubWFpbi1sZWZ0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJlbSk7XG59XG5cbi8qKlxuICogaGVhZGVyXG4gKi9cbi5oZWFkZXItY29sbGFwc2VkIC5tYWluLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyLWNvbnRyb2wge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41ZW07XG4gIGxlZnQ6IDAuNWVtO1xuICB6LWluZGV4OiAyO1xufVxuLmhlYWRlci1jb2xsYXBzZWQgLmhlYWRlci1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyLWNvbnRyb2wtaW5uZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9oYW1idXJnZXIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xufVxuXG4ubWFpbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4taGVhZGVyIC5pbWcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcblxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuLmltZy1zd29yZHMge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9zd29yZHMucG5nJyk7XG59XG4uaW1nLW5ld3Mge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9uZXdzLnBuZycpO1xufVxuLmltZy1jaXR5IHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvY2l0eS5wbmcnKTtcbn1cblxuXG5cblxuXG5cblxuIl19 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"] },
    { path: ':slug', component: _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"] },
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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]]
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

module.exports = "\n<ion-content >\n  <div class=\"mainfold-parent \n    {{ this.footerCollapsed ? 'footer-collapsed' : '' }} \n    {{ this.halfCollapsed }} \n    {{ this.headerCollapsed ? 'header-collapsed' : '' }} \">\n    <div class=\"mainfold-item main-header\">\n      <div (click)=\"collapseHeader()\">[X]</div>\n      &nbsp; &nbsp;\n      <div (click)=\"navigateToMap('map-world')\" >Header</div>\n      <div (click)=\"navigate('maps')\" class='img img-swords' ></div>\n      <div (click)=\"navigate(appRouter.citiesPath)\" class='img img-city' ></div>\n      <div (click)=\"navigate(appRouter.homefeedPath)\" class='img img-news' ></div>\n    </div>\n    <div class='header-control'>\n      <div class='header-control-inner' (click)=\"collapseHeader()\"></div>\n    </div>\n    \n    <div class=\"mainfold-item main-twofold\">\n      <div class='main-twofold-inner'>\n        <div id='mainLeft' class='main-left main-half' >\n          <div class='zoom-control'>\n            <div (click)=\"zoomIn()\" class='in'>[+]</div>\n            <div (click)=\"zoomOut()\" class='out'>[-]</div>\n          </div>\n          <div class='main-left-overlay'></div>\n          <div class='main-left-inner'>\n\n            <div class='main-map'>\n              <div class='main-map-inner'>\n\n                <div class='img-bg' \n                  [style.background-image]=\"'url('+thisMap['img']+')'\" \n                  [style.width]=\"thisMap['w'] * zoomFactor + 'px'\" \n                  [style.height]=\"thisMap['h'] * zoomFactor + 'px'\"\n                >\n\n                  <div class='img-marker' *ngFor=\"let marker of markers\"\n                    [style.width]=\"marker['w']*zoomFactor + 'px'\"\n                    [style.height]=\"marker['h']*zoomFactor + 'px'\"\n                    [style.top]=\"marker['top']*zoomFactor + 'px'\"\n                    [style.left]=\"marker['left']*zoomFactor + 'px'\"\n                    [style.background-image]=\"'url('+marker['img']+')'\"\n                    (click)=\"navigateToMap(marker['slug'])\"\n                  ></div>\n\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id='mainRight' class='main-right main-half' >\n          <div class='main-collapse' (click)=\"collapseMain()\" ></div>\n          <div class='main-right-overlay'></div>\n          <div class='main-right-inner'>\n            <div class='main-text'>\n              {{ thisMap['description'] }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"mainfold-item main-footer\">\n      <div class='footer-collapse' (click)=\"collapseFooter()\" ></div>\n      <div class='main-footer-overlay'></div>\n      <div class='main-footer-inner'>\n\n        <div *ngIf=\"currentUser\">\n          <div class='img img-avatar'  ></div>\n          <div class='widget-stars'>\n            <div class='widget-stars-inner'>\n              <!-- <div class='count'>5</div> -->\n              <div class='img img-star' >5</div>\n            </div>\n          </div>\n          {{ currentUser }}\n          <br /><br />\n          {{ currentUserStr }}\n        </div>\n\n        <div *ngIf=\"!currentUser\" >\n          <div class='widget-login' (click)=\"doLogin()\">Please Login</div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

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
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-router */ "./src/app/app-router.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
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






// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';






var MapPage = /** @class */ (function () {
    function MapPage(appService, 
    // private fb: Facebook,
    httpClient, loadingController, menu, nativeStorage, ngZone, platform, route, router, splashScreen, statusBar, toastController) {
        this.appService = appService;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.menu = menu;
        this.nativeStorage = nativeStorage;
        this.ngZone = ngZone;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.toastController = toastController;
        this.collapseDirection = 'right'; // 'left' or 'right'
        this.currentUser = {};
        this.currentUserStr = "";
        this.footerCollapsed = false;
        this.halfCollapsed = "none-collapsed"; // 'none-collapsed', 'left-collapsed', 'right-collapsed'
        this.headerCollapsed = true;
        this.maps = {
            'map-world': { w: 1200, h: 1200, description: 'World', img: '../assets/maps/1200x1200/world-1.jpg',
                markers: [
                    { top: 650, left: 210, w: 70, h: 90, img: '../assets/maps/v1/co.png', slug: 'map-colombia' },
                    { top: 475, left: 184, w: 64, h: 64, img: '../assets/64x64/marker-city.png', slug: 'map-chicago' },
                ] },
            'map-colombia': { w: 500, h: 600, description: 'Colombia', img: '../assets/maps/500x600_colombia.png' },
            'map-chicago': { w: 630, h: 472, description: 'Chicago', img: '../assets/src/chicago.jpg' },
        };
        this.thisMap = {};
        this.zoomFactor = 1.0;
        this.markers = [];
        this.markerCo = {};
        var slug = this.route.snapshot.paramMap.get('slug') || 'map-world';
        this.thisMap = this.maps[slug];
        this.markers = this.thisMap['markers'];
        this.setCurrentUser();
        this.appRouter = _app_router__WEBPACK_IMPORTED_MODULE_7__["AppRouter"];
    }
    MapPage.prototype.collapseFooter = function () {
        this.footerCollapsed = this.footerCollapsed ? false : true;
    };
    MapPage.prototype.collapseHeader = function () {
        this.headerCollapsed = this.headerCollapsed ? false : true;
    };
    MapPage.prototype.collapseMain = function () {
        Object(_const__WEBPACK_IMPORTED_MODULE_9__["logg"])('collapseMain()');
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
    MapPage.prototype.doLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MapPage.prototype.navigate = function (where) {
        // this.ngZone.run(() => {
        this.router.navigate([where]);
        // })
    };
    MapPage.prototype.navigateToMap = function (slug) {
        if (slug === void 0) { slug = 'map-world'; }
        this.router.navigate(["/maps/" + slug]);
        this.thisMap = this.maps[slug];
        this.markers = this.thisMap['markers'];
    };
    MapPage.prototype.ngOnInit = function () { };
    MapPage.prototype.setCurrentUser = function () {
        var _this = this;
        this.nativeStorage.getItem('current_user').then(function (u) { return JSON.parse(u); }).then(function (data) {
            _this.currentUser = data;
            _this.currentUserStr = JSON.stringify(Object.keys(data).map(function (k) { return k + "::" + data[k].toString().substring(0, 10); }));
        }).catch(function (e) {
            _this.currentUser = false;
            _this.currentUserStr = "";
            console.log('+++ currentUser() error:', e);
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
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
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

module.exports = ".main-map {\n  background: #d2d2d2;\n  height: 100%;\n  /* overflow: hidden; */ }\n\n.main-map-inner {\n  /* vertical align of map smaller than screen */\n  /* trash */\n  /* display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; */\n  overflow: scroll;\n  /* doesn't work... */\n  /* position: relative;\n  top: 50%; left: 50%;\n  transform: translate(-50%,-50%); */ }\n\n.img-map-1 {\n  background: url('3.jpg');\n  width: 800px;\n  height: 800px; }\n\n.img-bg {\n  background-size: cover;\n  position: relative;\n  margin: auto; }\n\n.img-world-1 {\n  /* background: red url('../../assets/maps/1200x1200/world-1.jpg'); */\n  /* width: 600px;\n  height: 600px; */ }\n\n.zoom-control {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  font-family: monospace;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 40px;\n  justify-content: space-around;\n  align-content: space-around;\n  z-index: 2;\n  background: white; }\n\n/**\n * markers \n */\n\n.img-marker {\n  position: absolute;\n  background-size: cover; }\n\n#marker1 {\n  top: 200px;\n  left: 240px;\n  width: 64px;\n  height: 64px;\n  background: url('marker.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL2dhbWV1aV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9tYXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osdUJBQXVCLEVBQ3hCOztBQUNEO0VBQWtCLCtDQUErQztFQUMvRCxXQUFXO0VBQ1g7Ozs2QkFHMkI7RUFFM0IsaUJBQWdCO0VBRWhCLHFCQUFxQjtFQUNyQjs7cUNBRW1DLEVBQ3BDOztBQUNEO0VBQ0MseUJBQWtEO0VBQ2xELGFBQVk7RUFDWixjQUFhLEVBQ2I7O0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLGFBQVksRUFDYjs7QUFDRDtFQUNFLHFFQUFxRTtFQUNyRTttQkFDaUIsRUFDbEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFNBQVE7RUFFUix1QkFBc0I7RUFFdEIscUJBQWE7RUFBYixjQUFhO0VBQ2IsNkJBQXNCO0VBQXRCLDhCQUFzQjtVQUF0Qix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLDhCQUE2QjtFQUM3Qiw0QkFBMkI7RUFDM0IsV0FBVTtFQUNWLGtCQUFpQixFQUNsQjs7QUFFRDs7R0FFRzs7QUFDSDtFQUNFLG1CQUFrQjtFQUNsQix1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsWUFBVztFQUNYLFlBQVc7RUFDWCxhQUFZO0VBQ1osOEJBQWdELEVBQ2pEIiwiZmlsZSI6InNyYy9hcHAvTGF5b3V0TWFwL21hcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbi1tYXAge1xuICBiYWNrZ3JvdW5kOiAjZDJkMmQyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG59XG4ubWFpbi1tYXAtaW5uZXIgeyAvKiB2ZXJ0aWNhbCBhbGlnbiBvZiBtYXAgc21hbGxlciB0aGFuIHNjcmVlbiAqL1xuICAvKiB0cmFzaCAqL1xuICAvKiBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cblxuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIC8qIGRvZXNuJ3Qgd29yay4uLiAqL1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlOyBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7ICovXG59XG4uaW1nLW1hcC0xIHtcbiBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9tYXBzLzgwMHg4MDAvMy5qcGcnKTtcbiB3aWR0aDogODAwcHg7XG4gaGVpZ2h0OiA4MDBweDtcbn1cbi5pbWctYmcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5pbWctd29ybGQtMSB7XG4gIC8qIGJhY2tncm91bmQ6IHJlZCB1cmwoJy4uLy4uL2Fzc2V0cy9tYXBzLzEyMDB4MTIwMC93b3JsZC0xLmpwZycpOyAqL1xuICAvKiB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7ICovXG59XG4uem9vbS1jb250cm9sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xuICB0b3A6IDFlbTtcblxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi8qKlxuICogbWFya2VycyBcbiAqL1xuLmltZy1tYXJrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4jbWFya2VyMSB7IFxuICB0b3A6IDIwMHB4O1xuICBsZWZ0OiAyNDBweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvbWFya2VyLnBuZycpO1xufVxuI21hcmtlckNvIHtcbiAgXG59XG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=LayoutMap-map-module.js.map