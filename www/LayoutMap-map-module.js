(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LayoutMap-map-module"],{

/***/ "./src/app/LayoutMap/inventory.scss":
/*!******************************************!*\
  !*** ./src/app/LayoutMap/inventory.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * footer\n */\n.main-footer {\n  height: 100px;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  padding: .5em; }\n.main-footer-inner {\n  border: 1px solid grey;\n  height: 100%;\n  background: #ededde;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start; }\n.footer-collapse {\n  position: absolute;\n  background: url('hamburger.png');\n  width: 1em;\n  height: 1em;\n  margin-top: -1em;\n  background-size: cover; }\n.footer-collapsed .main-footer {\n  height: 2em; }\n.main-footer-overlay {\n  display: none; }\n.footer-collapsed .main-footer-inner {\n  /* padding: 0; */\n  height: 0;\n  display: none; }\n.footer-collapsed .main-footer-overlay {\n  display: block;\n  background: #ededde;\n  height: 1em;\n  border: 1px solid gray; }\n.img-avatar {\n  width: calc(100px - 1em - 2px);\n  height: calc(100px - 1em - 2px);\n  background: url('avatar.png');\n  background-size: cover; }\n/**\n * inventory\n */\n.img-gem {\n  background: url('gem.png');\n  background-size: cover;\n  width: calc(100px - 4em);\n  height: calc(100px - 4em); }\n.img-star {\n  background: url('star.png');\n  background-size: cover;\n  width: calc(100px - 4em);\n  height: calc(100px - 4em); }\n.widget-stars {\n  line-height: calc(100px - 4em);\n  height: 100%;\n  padding: 0 2em;\n  display: flex; }\n.widget-stars-inner {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-items: center; }\n.widget-stars .count {\n  line-height: calc(100px - 4em);\n  margin-right: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL2dhbWV1aV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9pbnZlbnRvcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7R0FFRztBQUNIO0VBQ0UsY0FBYTtFQUNiLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxRQUFPO0VBQ1AsY0FBYSxFQUNkO0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLG9CQUFtQjtFQUVuQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2Qiw0QkFBMkIsRUFDNUI7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixpQ0FBbUQ7RUFDbkQsV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsdUJBQXNCLEVBQ3ZCO0FBRUQ7RUFDRSxZQUFXLEVBQ1o7QUFDRDtFQUNFLGNBQWEsRUFDZDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVM7RUFDVCxjQUFhLEVBQ2Q7QUFDRDtFQUNFLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsWUFBVztFQUNYLHVCQUFzQixFQUN2QjtBQUVEO0VBQ0UsK0JBQThCO0VBQzlCLGdDQUErQjtFQUMvQiw4QkFBa0Q7RUFDbEQsdUJBQXNCLEVBQ3ZCO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLDJCQUErQztFQUMvQyx1QkFBc0I7RUFDdEIseUJBQXdCO0VBQ3hCLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0UsNEJBQWdEO0VBQ2hELHVCQUFzQjtFQUN0Qix5QkFBd0I7RUFDeEIsMEJBQXlCLEVBQzFCO0FBRUQ7RUFDRSwrQkFBOEI7RUFDOUIsYUFBWTtFQUVaLGVBQWM7RUFDZCxjQUFhLEVBQ2Q7QUFDRDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsK0JBQThCO0VBQzlCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL0xheW91dE1hcC9pbnZlbnRvcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBmb290ZXJcbiAqL1xuLm1haW4tZm9vdGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogLjVlbTtcbn1cbi5tYWluLWZvb3Rlci1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICBcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWRlZGRlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uZm9vdGVyLWNvbGxhcHNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9oYW1idXJnZXIucG5nJyk7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBtYXJnaW4tdG9wOiAtMWVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZm9vdGVyLWNvbGxhcHNlZCAubWFpbi1mb290ZXIge1xuICBoZWlnaHQ6IDJlbTtcbn1cbi5tYWluLWZvb3Rlci1vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mb290ZXItY29sbGFwc2VkIC5tYWluLWZvb3Rlci1pbm5lciB7XG4gIC8qIHBhZGRpbmc6IDA7ICovXG4gIGhlaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mb290ZXItY29sbGFwc2VkIC5tYWluLWZvb3Rlci1vdmVybGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNlZGVkZGU7XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4uaW1nLWF2YXRhciB7XG4gIHdpZHRoOiBjYWxjKDEwMHB4IC0gMWVtIC0gMnB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHB4IC0gMWVtIC0gMnB4KTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvMTAweDEwMC9hdmF0YXIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4vKipcbiAqIGludmVudG9yeVxuICovXG4uaW1nLWdlbSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzI1NngyNTYvZ2VtLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogY2FsYygxMDBweCAtIDRlbSk7XG4gIGhlaWdodDogY2FsYygxMDBweCAtIDRlbSk7XG59XG4uaW1nLXN0YXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy8yNTZ4MjU2L3N0YXIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMHB4IC0gNGVtKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHB4IC0gNGVtKTtcbn1cblxuLndpZGdldC1zdGFycyB7XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEwMHB4IC0gNGVtKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBcbiAgcGFkZGluZzogMCAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2lkZ2V0LXN0YXJzLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLndpZGdldC1zdGFycyAuY291bnQge1xuICBsaW5lLWhlaWdodDogY2FsYygxMDBweCAtIDRlbSk7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/LayoutMap/mainfold.scss":
/*!*****************************************!*\
  !*** ./src/app/LayoutMap/mainfold.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * From: https://jsfiddle.net/MadLittleMods/LmYay/\n */\n*, *:before, *:after {\n  box-sizing: border-box; }\n.debug {\n  border: 1px solid red; }\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden; }\n.mainfold-parent {\n  height: 100%; }\n.main-header {\n  height: 40px;\n  width: 100%;\n  padding-top: .5em;\n  padding-left: .5em;\n  line-height: 40px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.main-text {\n  padding: .5em; }\n.main-twofold {\n  height: 100%;\n  padding-top: 40px;\n  padding-bottom: 100px;\n  /* display: flex;\n  flex-flow: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: stretch;\n  */ }\n.header-collapsed .main-twofold {\n  padding-top: 0; }\n.footer-collapsed .main-twofold {\n  padding-bottom: 2em; }\n.main-twofold-inner {\n  height: 100%;\n  position: relative; }\n.main-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  padding: 0.5em; }\n.main-left-inner {\n  /* background: white; */\n  background: #d2d2d2;\n  border: 1px solid grey;\n  width: 100%;\n  height: 100%;\n  /* padding: .5em; */\n  overflow: scroll;\n  position: relative;\n  top: 0;\n  left: 0; }\n.main-right {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  padding: 0.5em; }\n.main-right-inner {\n  background: white;\n  width: 100%;\n  height: 100%;\n  border: 1px solid grey;\n  /* padding: .5em; */\n  overflow: scroll; }\n/*\n * collapse\n */\n.main-collapse {\n  position: absolute;\n  /* top: 2em; */\n  background: url('hamburger.png');\n  width: 1em;\n  height: 1em;\n  margin-left: -1em;\n  background-size: cover; }\n.left-collapsed .main-left {\n  width: 1em; }\n.left-collapsed .main-right {\n  width: calc(100% - 2em);\n  left: 2em; }\n.left-collapsed .main-left-inner {\n  display: none; }\n.left-collapsed .zoom-control {\n  display: none; }\n.main-left-overlay {\n  display: none; }\n.left-collapsed .main-left-overlay {\n  display: block;\n  background: #ededde;\n  width: 1em;\n  border: 1px solid gray;\n  height: 100%; }\n.main-right-overlay {\n  display: none; }\n/**\n * right-collapsed\n */\n.right-collapsed .main-right {\n  left: calc(100% - 2em); }\n.right-collapsed .main-right-inner {\n  display: none; }\n.right-collapsed .main-right-overlay {\n  display: block;\n  background: #ededde;\n  width: 1em;\n  border: 1px solid gray;\n  height: 100%; }\n.right-collapsed .main-left {\n  width: calc(100% - 2em); }\n/**\n * header\n */\n.header-collapsed .main-header {\n  display: none; }\n.header-control {\n  display: none;\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n  z-index: 2; }\n.header-collapsed .header-control {\n  display: block; }\n.header-control-inner {\n  background: white url('hamburger.png');\n  background-size: cover;\n  width: 1em;\n  height: 1em; }\n.main-header {\n  display: flex; }\n.main-header .img {\n  margin-left: 10px;\n  background-size: cover;\n  height: 30px;\n  width: 30px; }\n.img-swords {\n  background: url('swords.png'); }\n.img-news {\n  background: url('news.png'); }\n.img-city {\n  background: url('city.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL2dhbWV1aV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9tYWluZm9sZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7RUFHRSx1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsVUFBUztFQUNULFdBQVU7RUFDVixhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7QUFJRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFFakIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPLEVBQ1I7QUFDRDtFQUNFLGNBQWEsRUFDZDtBQUdEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFFckI7Ozs7O0lBS0UsRUFDSDtBQUNEO0VBQ0UsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7QUFDRDtFQUNFLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsT0FBTTtFQUVOLFdBQVU7RUFDVixhQUFZO0VBQ1osZUFBYyxFQUNmO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUV0QixZQUFXO0VBQ1gsYUFBWTtFQUVaLG9CQUFvQjtFQUNwQixpQkFBZ0I7RUFFaEIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPLEVBQ1I7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsT0FBTTtFQUVOLFdBQVU7RUFDVixhQUFZO0VBQ1osZUFBYyxFQUNmO0FBQ0Q7RUFDRSxrQkFBaUI7RUFDakIsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGlCQUFnQixFQUNqQjtBQUVEOztHQUVHO0FBQ0g7RUFDRSxtQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlDQUFtRDtFQUNuRCxXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLFdBQVUsRUFDWDtBQUNEO0VBQ0Usd0JBQXVCO0VBQ3ZCLFVBQVMsRUFDVjtBQUVEO0VBQW1DLGNBQWEsRUFBSTtBQUNwRDtFQUFnQyxjQUFhLEVBQUk7QUFDakQ7RUFBcUIsY0FBYSxFQUFJO0FBRXRDO0VBQ0UsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixXQUFVO0VBQ1YsdUJBQXNCO0VBQ3RCLGFBQVksRUFDYjtBQUNEO0VBQ0UsY0FBYSxFQUNkO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLHVCQUFzQixFQUN2QjtBQUNEO0VBQXFDLGNBQWEsRUFBSTtBQUN0RDtFQUNFLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsV0FBVTtFQUNWLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2I7QUFDRDtFQUNFLHdCQUF1QixFQUN4QjtBQUVEOztHQUVHO0FBQ0g7RUFDRSxjQUFhLEVBQ2Q7QUFDRDtFQUNFLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVc7RUFDWCxXQUFVLEVBQ1g7QUFDRDtFQUNFLGVBQWMsRUFDZjtBQUNEO0VBQ0UsdUNBQXlEO0VBQ3pELHVCQUFzQjtFQUN0QixXQUFVO0VBQ1YsWUFBVyxFQUNaO0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7QUFDRDtFQUNFLGtCQUFpQjtFQUVqQix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLFlBQVcsRUFDWjtBQUNEO0VBQ0UsOEJBQWdELEVBQ2pEO0FBQ0Q7RUFDRSw0QkFBOEMsRUFDL0M7QUFDRDtFQUNFLDRCQUE4QyxFQUMvQyIsImZpbGUiOiJzcmMvYXBwL0xheW91dE1hcC9tYWluZm9sZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGcm9tOiBodHRwczovL2pzZmlkZGxlLm5ldC9NYWRMaXR0bGVNb2RzL0xtWWF5L1xuICovXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmRlYnVnIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW5mb2xkLXBhcmVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluZm9sZC1pdGVtIHtcbn1cblxuLm1haW4taGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IC41ZW07XG4gIHBhZGRpbmctbGVmdDogLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ubWFpbi10ZXh0IHtcbiAgcGFkZGluZzogLjVlbTtcbn1cblxuXG4ubWFpbi10d29mb2xkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuXG4gIC8qIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAqL1xufVxuLmhlYWRlci1jb2xsYXBzZWQgLm1haW4tdHdvZm9sZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmZvb3Rlci1jb2xsYXBzZWQgLm1haW4tdHdvZm9sZCB7XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG59XG4ubWFpbi10d29mb2xkLWlubmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbi1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG5cbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5tYWluLWxlZnQtaW5uZXIge1xuICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZTsgKi9cbiAgYmFja2dyb3VuZDogI2QyZDJkMjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBcbiAgLyogcGFkZGluZzogLjVlbTsgKi9cbiAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5tYWluLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMDtcblxuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuLm1haW4tcmlnaHQtaW5uZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgLyogcGFkZGluZzogLjVlbTsgKi9cbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLypcbiAqIGNvbGxhcHNlXG4gKi9cbi5tYWluLWNvbGxhcHNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiB0b3A6IDJlbTsgKi9cbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvaGFtYnVyZ2VyLnBuZycpO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubGVmdC1jb2xsYXBzZWQgLm1haW4tbGVmdCB7XG4gIHdpZHRoOiAxZW07XG59XG4ubGVmdC1jb2xsYXBzZWQgLm1haW4tcmlnaHQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcbiAgbGVmdDogMmVtO1xufVxuXG4ubGVmdC1jb2xsYXBzZWQgLm1haW4tbGVmdC1pbm5lciB7IGRpc3BsYXk6IG5vbmU7IH1cbi5sZWZ0LWNvbGxhcHNlZCAuem9vbS1jb250cm9sIHsgZGlzcGxheTogbm9uZTsgfVxuLm1haW4tbGVmdC1vdmVybGF5IHsgZGlzcGxheTogbm9uZTsgfVxuXG4ubGVmdC1jb2xsYXBzZWQgLm1haW4tbGVmdC1vdmVybGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNlZGVkZGU7XG4gIHdpZHRoOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluLXJpZ2h0LW92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLyoqXG4gKiByaWdodC1jb2xsYXBzZWRcbiAqL1xuLnJpZ2h0LWNvbGxhcHNlZCAubWFpbi1yaWdodCB7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDJlbSk7XG59XG4ucmlnaHQtY29sbGFwc2VkIC5tYWluLXJpZ2h0LWlubmVyIHsgZGlzcGxheTogbm9uZTsgfVxuLnJpZ2h0LWNvbGxhcHNlZCAubWFpbi1yaWdodC1vdmVybGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNlZGVkZGU7XG4gIHdpZHRoOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5yaWdodC1jb2xsYXBzZWQgLm1haW4tbGVmdCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xufVxuXG4vKipcbiAqIGhlYWRlclxuICovXG4uaGVhZGVyLWNvbGxhcHNlZCAubWFpbi1oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlci1jb250cm9sIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNWVtO1xuICBsZWZ0OiAwLjVlbTtcbiAgei1pbmRleDogMjtcbn1cbi5oZWFkZXItY29sbGFwc2VkIC5oZWFkZXItY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhlYWRlci1jb250cm9sLWlubmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvaGFtYnVyZ2VyLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbn1cblxuLm1haW4taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluLWhlYWRlciAuaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cbi5pbWctc3dvcmRzIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvc3dvcmRzLnBuZycpO1xufVxuLmltZy1uZXdzIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvNjR4NjQvbmV3cy5wbmcnKTtcbn1cbi5pbWctY2l0eSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzLzY0eDY0L2NpdHkucG5nJyk7XG59XG5cblxuXG5cblxuXG5cbiJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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

module.exports = ".main-map {\n  background: #d2d2d2;\n  height: 100%;\n  /* overflow: hidden; */ }\n\n.main-map-inner {\n  /* vertical align of map smaller than screen */\n  /* trash */\n  /* display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; */\n  overflow: scroll;\n  /* doesn't work... */\n  /* position: relative;\n  top: 50%; left: 50%;\n  transform: translate(-50%,-50%); */ }\n\n.img-map-1 {\n  background: url('3.jpg');\n  width: 800px;\n  height: 800px; }\n\n.img-bg {\n  background-size: cover;\n  position: relative;\n  margin: auto; }\n\n.img-world-1 {\n  /* background: red url('../../assets/maps/1200x1200/world-1.jpg'); */\n  /* width: 600px;\n  height: 600px; */ }\n\n.zoom-control {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  font-family: monospace;\n  display: flex;\n  flex-direction: column;\n  height: 40px;\n  justify-content: space-around;\n  align-content: space-around;\n  z-index: 2;\n  background: white; }\n\n/**\n * markers \n */\n\n.img-marker {\n  position: absolute;\n  background-size: cover; }\n\n#marker1 {\n  top: 200px;\n  left: 240px;\n  width: 64px;\n  height: 64px;\n  background: url('marker.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW91c2JveC9wcm9qZWN0cy9ub2RlLmpzL2dhbWV1aV9pb25pYy9zcmMvYXBwL0xheW91dE1hcC9tYXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osdUJBQXVCLEVBQ3hCOztBQUNEO0VBQWtCLCtDQUErQztFQUMvRCxXQUFXO0VBQ1g7Ozs2QkFHMkI7RUFFM0IsaUJBQWdCO0VBRWhCLHFCQUFxQjtFQUNyQjs7cUNBRW1DLEVBQ3BDOztBQUNEO0VBQ0MseUJBQWtEO0VBQ2xELGFBQVk7RUFDWixjQUFhLEVBQ2I7O0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLGFBQVksRUFDYjs7QUFDRDtFQUNFLHFFQUFxRTtFQUNyRTttQkFDaUIsRUFDbEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFNBQVE7RUFFUix1QkFBc0I7RUFFdEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osOEJBQTZCO0VBQzdCLDRCQUEyQjtFQUMzQixXQUFVO0VBQ1Ysa0JBQWlCLEVBQ2xCOztBQUVEOztHQUVHOztBQUNIO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLFdBQVU7RUFDVixZQUFXO0VBQ1gsWUFBVztFQUNYLGFBQVk7RUFDWiw4QkFBZ0QsRUFDakQiLCJmaWxlIjoic3JjL2FwcC9MYXlvdXRNYXAvbWFwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYWluLW1hcCB7XG4gIGJhY2tncm91bmQ6ICNkMmQyZDI7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbn1cbi5tYWluLW1hcC1pbm5lciB7IC8qIHZlcnRpY2FsIGFsaWduIG9mIG1hcCBzbWFsbGVyIHRoYW4gc2NyZWVuICovXG4gIC8qIHRyYXNoICovXG4gIC8qIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuXG4gIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgLyogZG9lc24ndCB3b3JrLi4uICovXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgKi9cbn1cbi5pbWctbWFwLTEge1xuIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL21hcHMvODAweDgwMC8zLmpwZycpO1xuIHdpZHRoOiA4MDBweDtcbiBoZWlnaHQ6IDgwMHB4O1xufVxuLmltZy1iZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmltZy13b3JsZC0xIHtcbiAgLyogYmFja2dyb3VuZDogcmVkIHVybCgnLi4vLi4vYXNzZXRzL21hcHMvMTIwMHgxMjAwL3dvcmxkLTEuanBnJyk7ICovXG4gIC8qIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDsgKi9cbn1cbi56b29tLWNvbnRyb2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG4gIHRvcDogMWVtO1xuXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLyoqXG4gKiBtYXJrZXJzIFxuICovXG4uaW1nLW1hcmtlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNtYXJrZXIxIHsgXG4gIHRvcDogMjAwcHg7XG4gIGxlZnQ6IDI0MHB4O1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy82NHg2NC9tYXJrZXIucG5nJyk7XG59XG4jbWFya2VyQ28ge1xuICBcbn1cbiJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=LayoutMap-map-module.js.map