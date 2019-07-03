(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routeAnimations]=\"prepareRoute(outlet)\" >\n        <router-outlet #outlet=\"outlet\"></router-outlet>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n<div class=\"dashboard\">\n    <mat-toolbar>\n      <mat-toolbar-row>\n        <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow=\"true\" fxHide.gt-sm>\n          <mat-icon>menu</mat-icon>          \n        </button>\n        <span  fxShow=\"true\" fxHide.lt-md><img src=\"assets/images/menu logo.png\" width=\"48px\"></span>\n        <span style=\"padding-left:2%\">Anunta</span>\n        <span class=\"menu-spacer\"></span>\n        <div fxShow=\"true\" fxHide.lt-md>\n          <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n          <a routerLink=\"/dashboard\" mat-button>Home</a>\n          <a href=\"#\" mat-button>Monitoring</a>\n          <a href=\"#\" mat-button>Diagnostics</a>\n          <a href=\"#\" mat-button>Advisories</a>\n          <a mat-button>\n          <button mat-button [matMenuTriggerFor]=\"menu\"><mat-icon>account_circle</mat-icon></button>\n            <mat-menu #menu=\"matMenu\"> <a routerLink=\"/login\" mat-menu-item>Logout</a></mat-menu>\n        </a>\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  \n    <mat-sidenav-container fxFlexFill>\n      <mat-sidenav #sidenav>\n        <mat-nav-list >         \n          <a routerLink=\"/dashboard\" mat-list-item>Home</a>\n          <a href=\"#\" mat-list-item>Monitoring</a>\n          <a href=\"#\" mat-list-item>Diagnostics</a>\n          <a href=\"#\" mat-list-item>Advisories </a>\n          <hr>\n          <a routerLink=\"/login\" mat-list-item>Logout</a>\n          \n        </mat-nav-list>\n      </mat-sidenav>\n<mat-sidenav-content>\n          <div class=\"row web col-lg-12 col-md-12 col-xs-12 col-sm-12\" >\n<div class=\"webDial col-lg-5 col-md-5 col-xs-12 col-sm-12\">\n    <img src=\"assets/images/web_dial.png\">\n</div>    \n<div class=\"webComponent row col-lg-7 col-md-7 col-xs-12 col-sm-12\">\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\" routerLink=\"/webComponent\">\n            <img src=\"assets/images/VDI.png\">\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\" routerLink=\"/webComponent\">\n            <img src=\"assets/images/enterprise app.png\">\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\" routerLink=\"/webComponent\">\n            <img src=\"assets/images/physical_infra.png\">\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\" routerLink=\"/webComponent\">\n            <img src=\"assets/images/server.png\">\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\" routerLink=\"/webComponent\">\n            <img src=\"assets/images/database.png\">\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\" routerLink=\"/webComponent\">\n            <img src=\"assets/images/security.png\">\n    </div>\n</div>  \n</div>\n</mat-sidenav-content>\n\n    </mat-sidenav-container>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginPage\">\n<div class=\" row  \">\n<div class=\"loginSection col-lg-6 col-md-6 col-xs-12 col-sm-12\">\n<div class=\"logo\" align=\"center\"><img src=\"assets/images/anuntaColor.png\"></div>\n\n<p class=\"logoText\">ANUNTA INTELLIGENCE</p>\n<p class=\"welcome\">Welcome back! Please login to your account.</p>\n<div class=\"loginForm\">\n  <mat-form-field class=\"loginFormFeild\">\n    <input matInput [(ngModel)]=\"userName\" placeholder=\"User Name\" type=\"text\" value=\"\" autocomplete=\"off\">\n  </mat-form-field>\n  <mat-form-field class=\"loginFormFeild\">\n    <input matInput [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\" value=\"\" autocomplete=\"off\">\n  </mat-form-field>\n  <button mat-raised-button (click)=\"login()\" class=\"loginBut\">Login</button>\n</div>\n</div>\n\n<div class=\"col-lg-6 col-md-6 hidden-xs hidden-sm hideItems\">\n<p class=\"heading\">JOIN AS MEMBER</p>\n<p class=\"content\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>\n<div><img src=\"assets/images/desktop.png\"></div>\n<p class=\"content\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</p>\n</div>\n  \n\n</div>\n\n      </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/web-comp/web-comp.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web-comp/web-comp.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n<div class=\"webComp\">\n    <mat-toolbar>\n      <mat-toolbar-row>\n        <button mat-icon-button routerLink=\"/dashboard\" fxShow=\"true\" fxHide.gt-sm>\n          <mat-icon>keyboard_backspace</mat-icon>          \n        </button>\n        <span  fxShow=\"true\" fxHide.lt-md><img src=\"assets/images/menu logo.png\" width=\"48px\"></span>\n        <span fxShow=\"true\" fxHide.lt-md style=\"padding-left:2%\">Anunta</span>\n        <span fxShow=\"true\" fxHide.gt-sm style=\"padding-left:2%\">Back</span>\n        <span class=\"menu-spacer\"></span>\n        <div fxShow=\"true\" fxHide.lt-md>\n          <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n          <a routerLink=\"/dashboard\" mat-button>Home</a>\n          <a href=\"#\" mat-button>Monitoring</a>\n          <a href=\"#\" mat-button>Diagnostics</a>\n          <a href=\"#\" mat-button>Advisories</a>\n          <a mat-button>\n          <button mat-button [matMenuTriggerFor]=\"menu\"><mat-icon>account_circle</mat-icon></button>\n            <mat-menu #menu=\"matMenu\"> <a routerLink=\"/login\" mat-menu-item>Logout</a></mat-menu>\n        </a>\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  \n    <mat-sidenav-container fxFlexFill>\n            <mat-sidenav-content>\n                    <div class=\"row web col-lg-12 col-md-12 col-xs-12 col-sm-12\" >\n          <div class=\"webDial col-lg-5 col-md-5 col-xs-12 col-sm-12\">\n              <img src=\"assets/images/web_dial_VDI.png\">\n          </div>    \n          <div class=\"webComponent row col-lg-7 col-md-7 col-xs-12 col-sm-12\">\n              <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\">\n                      <img src=\"assets/images/nutanix.png\">\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\" >\n                      <img src=\"assets/images/horizon.png\">\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\">\n                      <img src=\"assets/images/citrix.png\">\n              </div>\n              \n              \n              </div>\n          </div>  \n          </mat-sidenav-content>\n\n\n    </mat-sidenav-container>\n  </div>\n"

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('DashPage <=> WebPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _web_comp_web_comp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-comp/web-comp.component */ "./src/app/web-comp/web-comp.component.ts");






let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], data: { animation: 'DashPage' } },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], data: { animation: 'LoginPage' } },
                { path: "webComponent", component: _web_comp_web_comp_component__WEBPACK_IMPORTED_MODULE_5__["WebCompComponent"], data: { animation: 'WebPage' } },
                { path: '', redirectTo: 'login', pathMatch: 'full' }
            ])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{background-image: linear-gradient(180deg, #781E59, #200C2F);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSywyREFBMkQ7QUFDaEUiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzc4MUU1OSwgIzIwMEMyRik7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");




let AppComponent = class AppComponent {
    constructor(swUpdate) {
        this.swUpdate = swUpdate;
        this.title = 'Anunta Intelligence';
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    ngOnInit() {
        console.log("new version");
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if (confirm("New version available. Load New Version?")) {
                    window.location.reload();
                }
            });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        animations: [
            _animations__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"]
        ],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _web_comp_web_comp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web-comp/web-comp.component */ "./src/app/web-comp/web-comp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            _web_comp_web_comp_component__WEBPACK_IMPORTED_MODULE_13__["WebCompComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-spacer {\r\n  flex: 1 1 auto;\r\n}\r\nmat-toolbar{\r\n  background-color: #2D1443 !important;\r\n  color: #fff !important;\r\n  font-family: 'Poppins', sans-serif !important;\r\n}\r\nmat-sidenav-content{\r\n  background-image: linear-gradient(180deg, #781E59, #200C2F);\r\n  color: #fff !important;\r\n}\r\n.dashboard{\r\n  height: 100vh;\r\n  font-family: 'Poppins', sans-serif;\r\n  color: #fff !important;\r\n}\r\n.webDial{\r\n  text-align: center;\r\n}\r\n.web {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100%;\r\n  justify-content: center;\r\n  margin: auto;\r\n  align-content: flex-start;\r\n  padding-top: 3%;\r\n}\r\n.webDial img{\r\n  width:80%;\r\n}\r\n.webComponent{\r\n  text-align: center;\r\n  border-radius: 2rem;\r\n  padding: 1% 2%;\r\n  background: rgba(255, 255, 255, 0.2);\r\n  height: -webkit-min-content;\r\n  height: -moz-min-content;\r\n  height: min-content;\r\n}\r\n.webComponent div img {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.mat-drawer{\r\nbackground-color: #2d1443;\r\n    \r\n  }\r\nmat-nav-list a{\r\n    padding: 0 36px !important;\r\n    color:#fff !important;\r\n    font-family: 'Poppins', sans-serif !important;\r\n  }\r\nhr{\r\n  border-color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7QUFFQTtFQUNFLDJEQUEyRDtFQUMzRCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0FBQ0EseUJBQXlCOztFQUV2QjtBQUNEO0lBQ0csMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiw2Q0FBNkM7RUFDL0M7QUFDRjtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxubWF0LXRvb2xiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJEMTQ0MyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM3ODFFNTksICMyMDBDMkYpO1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRhc2hib2FyZHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4ud2ViRGlhbHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndlYiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbn1cclxuLndlYkRpYWwgaW1ne1xyXG4gIHdpZHRoOjgwJTtcclxufVxyXG5cclxuLndlYkNvbXBvbmVudHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBwYWRkaW5nOiAxJSAyJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxufVxyXG4ud2ViQ29tcG9uZW50IGRpdiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWF0LWRyYXdlcntcclxuYmFja2dyb3VuZC1jb2xvcjogIzJkMTQ0MztcclxuICAgIFxyXG4gIH1cclxuIG1hdC1uYXYtbGlzdCBhe1xyXG4gICAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5ocntcclxuICBib3JkZXItY29sb3I6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginPage{\r\n padding: 5% 7% 0% 10%;\r\n font-family: Source Sans Pro; \r\n height: 100vh;\r\n}\r\n.loginSection{\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  padding:6%;\r\npadding-bottom:8%;\r\n}\r\n.logo img{\r\n  width:130px;\r\n}\r\n.logoText {\r\ncolor: hsla(290, 86%, 20%, 1);\r\nletter-spacing: 0.2em;\r\nfont-family: Source Sans Pro; \r\nfont-weight: 700;\r\ntext-align: center;\r\npadding-top:5%;\r\nfont-size: 1.5rem;\r\n}\r\n.welcome{\r\n  color: hsla(231, 8%, 33%, 1);\r\n    font-family: Source Sans Pro;\r\n    font-weight: 100;\r\n    font-size: 0.6rem;\r\n    text-align: center;\r\n    opacity: 0.6;\r\n    letter-spacing: 1px;\r\n  }\r\n.loginForm {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n.loginFormFeild{\r\n    width: 100%;\r\n    color: hsla(290, 86%, 20%, 1);\r\n  }\r\n::ng-deep .mat-focused .mat-form-field-label {\r\n  /*change color of label*/\r\n  color: hsla(290, 86%, 20%, 1) !important;\r\n }\r\n::ng-deep.mat-form-field-underline {\r\n  /*change color of underline*/\r\n  background-color: hsla(290, 86%, 20%, 1) !important;\r\n}\r\n::ng-deep.mat-form-field-ripple {\r\n /*change color of underline when focused*/\r\n background-color: hsla(290, 86%, 20%, 1) !important;\r\n}\r\n.loginBut{\r\n  background-color:  hsla(290, 86%, 20%, 1) !important;\r\n  color: #fff !important;\r\n}\r\n.hideItems{\r\n  color: #fff;\r\n  text-align: center;\r\n  padding-top:8%;\r\n  padding-left:9%;\r\n \r\n}\r\n.heading{\r\n  font-size:32px;\r\n  font-weight: 200;\r\n}\r\n.content{\r\n  font-size:13px;\r\n  padding:4% 0%;\r\n}\r\n@media only screen and (max-width : 755px){\r\n.hideItems{\r\n  display: none !important;\r\n}\r\n.loginSection{\r\n  margin-bottom:6%;\r\n}\r\n.loginPage{\r\n  height: 120vh;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQiw0QkFBNEI7Q0FDNUIsYUFBYTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWixpQkFBaUI7QUFDakI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCO0FBQ0E7RUFDRSw0QkFBNEI7SUFDMUIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjtBQUVGO0VBQ0Usd0JBQXdCO0VBQ3hCLHdDQUF3QztDQUN6QztBQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLG1EQUFtRDtBQUNyRDtBQUVBO0NBQ0MseUNBQXlDO0NBQ3pDLG1EQUFtRDtBQUNwRDtBQUNBO0VBQ0Usb0RBQW9EO0VBQ3BELHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTs7QUFFakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7QUFDQTtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpblBhZ2V7XHJcbiBwYWRkaW5nOiA1JSA3JSAwJSAxMCU7XHJcbiBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvOyBcclxuIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmxvZ2luU2VjdGlvbntcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzo2JTtcclxucGFkZGluZy1ib3R0b206OCU7XHJcbn1cclxuXHJcbi5sb2dvIGltZ3tcclxuICB3aWR0aDoxMzBweDtcclxufVxyXG4ubG9nb1RleHQge1xyXG5jb2xvcjogaHNsYSgyOTAsIDg2JSwgMjAlLCAxKTtcclxubGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG5mb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvOyBcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5wYWRkaW5nLXRvcDo1JTtcclxuZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLndlbGNvbWV7XHJcbiAgY29sb3I6IGhzbGEoMjMxLCA4JSwgMzMlLCAxKTtcclxuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm87XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luRm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW5Gb3JtRmVpbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBoc2xhKDI5MCwgODYlLCAyMCUsIDEpO1xyXG4gIH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbiAgY29sb3I6IGhzbGEoMjkwLCA4NiUsIDIwJSwgMSkgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjkwLCA4NiUsIDIwJSwgMSkgIWltcG9ydGFudDtcclxufSBcclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDI5MCwgODYlLCAyMCUsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ2luQnV0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICBoc2xhKDI5MCwgODYlLCAyMCUsIDEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uaGlkZUl0ZW1ze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDo4JTtcclxuICBwYWRkaW5nLWxlZnQ6OSU7XHJcbiBcclxufVxyXG4uaGVhZGluZ3tcclxuICBmb250LXNpemU6MzJweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIGZvbnQtc2l6ZToxM3B4O1xyXG4gIHBhZGRpbmc6NCUgMCU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzU1cHgpe1xyXG4uaGlkZUl0ZW1ze1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5TZWN0aW9ue1xyXG4gIG1hcmdpbi1ib3R0b206NiU7XHJcbn1cclxuLmxvZ2luUGFnZXtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        if (this.userName == "Admin" && this.password == "admin@123") {
            this.router.navigate(['/', 'dashboard']);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/web-comp/web-comp.component.css":
/*!*************************************************!*\
  !*** ./src/app/web-comp/web-comp.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  mat-toolbar{\r\n    background-color: #2D1443 !important;\r\n    color: #fff !important;\r\n    font-family: 'Poppins', sans-serif !important;\r\n  }\r\n  mat-sidenav-content{\r\n    background-image: linear-gradient(180deg, #781E59, #200C2F);\r\n    color: #fff !important;\r\n  }\r\n  .webComp{\r\n      \r\n  height: 100vh;\r\n  font-family: 'Poppins', sans-serif;\r\n  color: #fff !important;\r\n  }\r\n  .webDial{\r\n    text-align: center;\r\n  }\r\n  .web {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    justify-content: center;\r\n    margin: auto;\r\n    align-content: flex-start;\r\n    padding-top: 3%;\r\n  }\r\n  .webDial img{\r\n    width:80%;\r\n  }\r\n  .webComponent{\r\n    text-align: center;\r\n    border-radius: 2rem;\r\n    padding: 1% 2%;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    height: -webkit-min-content;\r\n    height: -moz-min-content;\r\n    height: min-content;\r\n  }\r\n  .webComponent div img {\r\n    width: 100%;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWNvbXAvd2ViLWNvbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsNkNBQTZDO0VBQy9DO0VBRUE7SUFDRSwyREFBMkQ7SUFDM0Qsc0JBQXNCO0VBQ3hCO0VBQ0E7O0VBRUEsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2ViLWNvbXAvd2ViLWNvbXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgbWF0LXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQxNDQzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBtYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzc4MUU1OSwgIzIwMEMyRik7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2ViQ29tcHtcclxuICAgICAgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53ZWJEaWFse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAud2ViIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG4gIH1cclxuICAud2ViRGlhbCBpbWd7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWJDb21wb25lbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgcGFkZGluZzogMSUgMiU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIH1cclxuICAud2ViQ29tcG9uZW50IGRpdiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/web-comp/web-comp.component.ts":
/*!************************************************!*\
  !*** ./src/app/web-comp/web-comp.component.ts ***!
  \************************************************/
/*! exports provided: WebCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebCompComponent", function() { return WebCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WebCompComponent = class WebCompComponent {
    constructor() { }
    ngOnInit() {
    }
};
WebCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-web-comp',
        template: __webpack_require__(/*! raw-loader!./web-comp.component.html */ "./node_modules/raw-loader/index.js!./src/app/web-comp/web-comp.component.html"),
        styles: [__webpack_require__(/*! ./web-comp.component.css */ "./src/app/web-comp/web-comp.component.css")]
    })
], WebCompComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vikkram.sriram\samplePWA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map