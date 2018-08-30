(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-home></app-home> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'RSKA';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/instructors/instructors.component */ "./src/app/components/instructors/instructors.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_classdetails_classdetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/classdetails/classdetails.component */ "./src/app/components/classdetails/classdetails.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/description/description.component */ "./src/app/components/description/description.component.ts");
/* harmony import */ var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-twitter-timeline */ "./node_modules/ngx-twitter-timeline/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_gallerymanager_gallerymanager_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/gallerymanager/gallerymanager.component */ "./src/app/components/gallerymanager/gallerymanager.component.ts");
/* harmony import */ var _components_newsflashmanager_newsflashmanager_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/newsflashmanager/newsflashmanager.component */ "./src/app/components/newsflashmanager/newsflashmanager.component.ts");
/* harmony import */ var _components_locationmanager_locationmanager_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/locationmanager/locationmanager.component */ "./src/app/components/locationmanager/locationmanager.component.ts");
/* harmony import */ var _components_classmanager_classmanager_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/classmanager/classmanager.component */ "./src/app/components/classmanager/classmanager.component.ts");
/* harmony import */ var _components_instructorsmanager_instructorsmanager_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/instructorsmanager/instructorsmanager.component */ "./src/app/components/instructorsmanager/instructorsmanager.component.ts");
/* harmony import */ var _components_copyrightmanager_copyrightmanager_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/copyrightmanager/copyrightmanager.component */ "./src/app/components/copyrightmanager/copyrightmanager.component.ts");
/* harmony import */ var _components_albummanager_albummanager_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/albummanager/albummanager.component */ "./src/app/components/albummanager/albummanager.component.ts");
/* harmony import */ var _components_gallery_galleryitem_galleryitem_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/gallery/galleryitem/galleryitem.component */ "./src/app/components/gallery/galleryitem/galleryitem.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { AppRoutingModule } from './app-routing.module';























var appRoutes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"] },
    {
        path: 'admin',
        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
        children: [
            { path: 'gallerymanager', component: _components_gallerymanager_gallerymanager_component__WEBPACK_IMPORTED_MODULE_20__["GallerymanagerComponent"] },
            { path: 'newsflashmanager', component: _components_newsflashmanager_newsflashmanager_component__WEBPACK_IMPORTED_MODULE_21__["NewsflashmanagerComponent"] },
            { path: 'locationmanager', component: _components_locationmanager_locationmanager_component__WEBPACK_IMPORTED_MODULE_22__["LocationmanagerComponent"] },
            { path: 'classmanager', component: _components_classmanager_classmanager_component__WEBPACK_IMPORTED_MODULE_23__["ClassmanagerComponent"] },
            { path: 'instructorsmanager', component: _components_instructorsmanager_instructorsmanager_component__WEBPACK_IMPORTED_MODULE_24__["InstructorsmanagerComponent"] },
            { path: 'copyrightmanager', component: _components_copyrightmanager_copyrightmanager_component__WEBPACK_IMPORTED_MODULE_25__["CopyrightmanagerComponent"] },
            { path: 'albummanager', component: _components_albummanager_albummanager_component__WEBPACK_IMPORTED_MODULE_26__["AlbummanagerComponent"] }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_9__["InstructorsComponent"],
                _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _components_classdetails_classdetails_component__WEBPACK_IMPORTED_MODULE_12__["ClassdetailsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _components_description_description_component__WEBPACK_IMPORTED_MODULE_14__["DescriptionComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _components_gallerymanager_gallerymanager_component__WEBPACK_IMPORTED_MODULE_20__["GallerymanagerComponent"],
                _components_newsflashmanager_newsflashmanager_component__WEBPACK_IMPORTED_MODULE_21__["NewsflashmanagerComponent"],
                _components_locationmanager_locationmanager_component__WEBPACK_IMPORTED_MODULE_22__["LocationmanagerComponent"],
                _components_classmanager_classmanager_component__WEBPACK_IMPORTED_MODULE_23__["ClassmanagerComponent"],
                _components_instructorsmanager_instructorsmanager_component__WEBPACK_IMPORTED_MODULE_24__["InstructorsmanagerComponent"],
                _components_copyrightmanager_copyrightmanager_component__WEBPACK_IMPORTED_MODULE_25__["CopyrightmanagerComponent"],
                _components_albummanager_albummanager_component__WEBPACK_IMPORTED_MODULE_26__["AlbummanagerComponent"],
                _components_gallery_galleryitem_galleryitem_component__WEBPACK_IMPORTED_MODULE_27__["GalleryitemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__["AngularFontAwesomeModule"],
                ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_15__["NgxTwitterTimelineModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBtrDbB-MSzw_x1RVpT074tdx228oYXTKI',
                    libraries: ['places']
                })
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"aboutIndicators\" class=\"carousel slide about-slider\" data-ride=\"carousel\" data-interval=\"3000\">\n    <ol class=\"carousel-indicators\">\n        <li data-target=\"#aboutIndicators\"\n            *ngFor=\"let slide of slides; let i = index\"\n            attr.data-slide-to=\"{{i}}\"\n            class=\"{{ (i == 0) ? 'active' : '' }}\"></li>\n      </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div [class]=\"i == 0? 'carousel-item active' : 'carousel-item'\" *ngFor=\"let slide of slides; let i = index\">\n        <img class= \"d-block w-100 about-slider-img\" [src]=\"slide.image\" alt=\"\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h5>{{\"Main Title #\"+(i+1)}}</h5>\n            <p>{{ \"Subtitle #\"+(i+1) }}</p>\n          </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#aboutIndicators\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#aboutIndicators\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        // The time to show the next photo
        this.nextSlideInterval = 3000;
        // Looping or not
        this.noLoopSlides = false;
        // Photos
        this.slides = [];
        this.slides.push({ image: '../../../assets/images/about/1.jpg', text: 'Caption #1' }, { image: '../../../assets/images/about/2.jpg', text: 'Caption #2' }, { image: '../../../assets/images/about/3.jpg', text: 'Caption #3' });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-navbar\">\n  <span><fa [name]=\"'user'\" [size]=5></fa></span>\n  <span><p> Welcome RSKA Admin</p></span>\n  <span class=\"logout-span\"><a [routerLink]=\"['']\" class=\"btn btn-block\" id=\"logout-button\">Logout</a></span>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2\">\n      <ul class=\"admin-list\">\n          <li class=\"admin-list-item\">\n            <a class = \"btn btn-primary\" [routerLink]=\"['gallerymanager']\">Gallery</a>\n          </li>\n          <li class=\"admin-list-item\">\n            <a class = \"btn btn-primary\" [routerLink]=\"['newsflashmanager']\">News Flash</a>\n          </li>\n          <li class=\"admin-list-item\">\n            <a class = \"btn btn-primary\" [routerLink]=\"['locationmanager']\">Location</a>\n          </li>\n          <li class=\"admin-list-item\">\n            <a class = \"btn btn-primary\" [routerLink]=\"['classmanager']\">Class</a>\n          </li>\n          <li class=\"admin-list-item\">\n            <a class = \"btn btn-primary\" [routerLink]=\"['instructorsmanager']\">Instructors</a>\n          </li>\n          <li class=\"admin-list-item\">\n            <a class = \"btn btn-primary\" [routerLink]=\"['copyrightmanager']\">Copyright Text</a>\n          </li>\n        </ul>\n  </div>\n  <div class=\"col-sm-8 admin-container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/components/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/albummanager/albummanager.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/albummanager/albummanager.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card manager-container\">\n  <div class=\"card-header\">\n      Album Manager\n  </div>\n  <div class=\"card-body\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/albummanager/albummanager.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/albummanager/albummanager.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/albummanager/albummanager.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/albummanager/albummanager.component.ts ***!
  \*******************************************************************/
/*! exports provided: AlbummanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbummanagerComponent", function() { return AlbummanagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlbummanagerComponent = /** @class */ (function () {
    function AlbummanagerComponent() {
    }
    AlbummanagerComponent.prototype.ngOnInit = function () {
    };
    AlbummanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-albummanager',
            template: __webpack_require__(/*! ./albummanager.component.html */ "./src/app/components/albummanager/albummanager.component.html"),
            styles: [__webpack_require__(/*! ./albummanager.component.scss */ "./src/app/components/albummanager/albummanager.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlbummanagerComponent);
    return AlbummanagerComponent;
}());



/***/ }),

/***/ "./src/app/components/classdetails/classdetails.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/classdetails/classdetails.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm\">\n    <div class=\"container\">\n      <h1 class=\"main-header\">CLASS</h1>\n      <div class=\"container\">\n          <p><strong>Venue</strong> : Royston Leisure Centre,</p>\n          <p>Woodcock Rd, Royston SG8 7XT</p>\n          <br>\n          <br>\n          <p><strong>Time:</strong></p>\n          <p>Friday 6 PM to 7 PM   : Beginner lesson</p>\n          <p>Friday 7 PM to 8 PM   : Advanced lesson</p>\n          <br>\n          <br>\n          <p>Ages from 6 onwards and all abilities are welcome.</p>\n          <br>\n          <p>The classes are designed to learn self-defense in a perfectly controlled environment,\n              ensuring safety , discipline and respect; making it suitable for everyone.</p>\n          <br>\n          <br>\n          <p><strong>About your first lesson</strong></p>\n          <br>\n          <p>First lesson is free. No preparation needed , please come in loose clothes.\n              Also bring a drink with you.</p>\n          <br>\n          <p><strong>Fee is pay as you go.</strong></p>\n          <p>Beginner   : £5</p>\n          <p>Advanced   : £7.5</p>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm\">\n      <img src=\"../../../assets/images/class.JPG\" alt=\"\" class=\"img-fluid\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/classdetails/classdetails.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/classdetails/classdetails.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/classdetails/classdetails.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/classdetails/classdetails.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClassdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassdetailsComponent", function() { return ClassdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassdetailsComponent = /** @class */ (function () {
    function ClassdetailsComponent() {
    }
    ClassdetailsComponent.prototype.ngOnInit = function () {
    };
    ClassdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classdetails',
            template: __webpack_require__(/*! ./classdetails.component.html */ "./src/app/components/classdetails/classdetails.component.html"),
            styles: [__webpack_require__(/*! ./classdetails.component.scss */ "./src/app/components/classdetails/classdetails.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassdetailsComponent);
    return ClassdetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/classmanager/classmanager.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/classmanager/classmanager.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  classmanager works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/classmanager/classmanager.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/classmanager/classmanager.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/classmanager/classmanager.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/classmanager/classmanager.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClassmanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassmanagerComponent", function() { return ClassmanagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassmanagerComponent = /** @class */ (function () {
    function ClassmanagerComponent() {
    }
    ClassmanagerComponent.prototype.ngOnInit = function () {
    };
    ClassmanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classmanager',
            template: __webpack_require__(/*! ./classmanager.component.html */ "./src/app/components/classmanager/classmanager.component.html"),
            styles: [__webpack_require__(/*! ./classmanager.component.scss */ "./src/app/components/classmanager/classmanager.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassmanagerComponent);
    return ClassmanagerComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <h1 class=\"main-header\">CONTACT US</h1>\n    <form novalidate [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Full Name *</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required>\n            <div class=\"alert alert-danger\"\n                *ngIf=\"name.errors && (name.dirty || name.touched)\">Full Name is required\n            </div>\n          </div>\n        </div>\n      <div class=\"col-sm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n          <div class=\"alert alert-danger\"\n               *ngIf=\"email.errors && (email.dirty || email.touched)\">Invalid Email address\n          </div>\n      </div>\n      </div>\n      <div class=\"col-sm\">\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone *</label>\n        <input type=\"phone\" class=\"form-control\" id=\"phone\" formControlName=\"phone\" required>\n          <div class=\"alert alert-danger\"\n               *ngIf=\"phone.errors && (phone.dirty || phone.touched)\">Invalid phone number\n          </div>\n      </div>\n      </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"message\">Message *</label>\n        <textarea class=\"form-control\" id=\"message\" formControlName=\"message\" required></textarea>\n          <div class=\"alert alert-danger\"\n               *ngIf=\"message.errors && (message.dirty || message.touched)\">Message is required\n          </div>\n      </div>\n      <button type=\"submit\"\n              class=\"btn btn-primary generic-btn generic-form-btn\"\n              id=\"contact-form-btn\">SEND</button>\n    </form>\n  </div>\n  <div class=\"container\">\n      <div class=\"alert alert-success alert-dismissible\" *ngIf=\"shouldShowSuccessMessage\">\n          <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n          {{ successMessage }}\n        </div>\n        <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"shouldShowErrorMessage\">\n            <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n          {{ errorMessage }}\n        </div>\n  </div>\n  <div class=\"container\">\n    <agm-map [latitude]=\"51.509865\" [longitude]=\"-0.118092\" class=\"agm-map\">\n      <agm-marker [latitude]=\"52.6522568\" [longitude]=\"1.2870537\"></agm-marker>\n    </agm-map>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder, apiService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.successMessage = 'Thank You for reaching out to us. We will be contacting you soon.';
        this.errorMessage = '';
        this.shouldShowSuccessMessage = false;
        this.shouldShowErrorMessage = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
        this.contactForm.reset();
    };
    ContactComponent.prototype.createFormControls = function () {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'));
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    };
    ContactComponent.prototype.createForm = function () {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Submit tapped ...');
        if (this.contactForm.valid) {
            this.apiService.postContactUs(this.name.value, this.phone.value, this.email.value, this.message.value).subscribe(function (res) {
                console.dir(res);
                if (res.status === 200) {
                    alert(_this.successMessage);
                }
                else {
                    alert(res.error);
                }
            });
        }
        else {
            console.log('Form not valid');
            this.validateAllFormFields(this.contactForm);
        }
    };
    ContactComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(this.contactForm.controls).forEach(function (field) {
            var control = _this.contactForm.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/copyrightmanager/copyrightmanager.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/copyrightmanager/copyrightmanager.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  copyrightmanager works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/copyrightmanager/copyrightmanager.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/copyrightmanager/copyrightmanager.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/copyrightmanager/copyrightmanager.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/copyrightmanager/copyrightmanager.component.ts ***!
  \***************************************************************************/
/*! exports provided: CopyrightmanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightmanagerComponent", function() { return CopyrightmanagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CopyrightmanagerComponent = /** @class */ (function () {
    function CopyrightmanagerComponent() {
    }
    CopyrightmanagerComponent.prototype.ngOnInit = function () {
    };
    CopyrightmanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-copyrightmanager',
            template: __webpack_require__(/*! ./copyrightmanager.component.html */ "./src/app/components/copyrightmanager/copyrightmanager.component.html"),
            styles: [__webpack_require__(/*! ./copyrightmanager.component.scss */ "./src/app/components/copyrightmanager/copyrightmanager.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CopyrightmanagerComponent);
    return CopyrightmanagerComponent;
}());



/***/ }),

/***/ "./src/app/components/description/description.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/description/description.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\n    <div class=\"row\">\n        <div class=\"col-sm\">\n          <img src=\"../../../assets/images/about-image.JPG\" alt=\"\" class=\"img-fluid\">\n        </div>\n        <div class=\"col-sm about-content-view\">\n          <h1 class=\"main-header\">ABOUT</h1>\n          <p align=\"justify\" class=\"text-style\">\n              We are a family friendly Karate club based in Royston , Hertfordshire in the UK.\n              Our aim is to teach Shotokan style of karate with emphasis to self-defense and fitness.\n              The classes run in a safe and friendly environment, with paramount importance to safety,\n              respect and discipline; making it comfortable for everyone to learn and enjoy the training.\n\n\n          </p>\n          <p align=\"justify\" class=\"text-style\">\n          We have students of all ages, including adult beginners. The club accepts the students\n          from the age of six onwards.\n          </p>\n        </div>\n        <div class=\"col-sm twitter-feed-enclosing\">\n          <!-- <h1 class=\"main-header\">Twitter Feed</h1> -->\n          <div class=\"twitter-feed-container\">\n            <ngx-twitter-timeline\n              [data]=\"twitterData\"\n              [opts]= \"twitterOptions\"\n            ></ngx-twitter-timeline>\n          </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/description/description.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/description/description.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/description/description.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/description/description.component.ts ***!
  \*****************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
        this.twitterOptions = {
            tweetLimit: 5
        };
        this.twitterData = {
            sourceType: 'url',
            url: 'https://twitter.com/twitterdev'
        };
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/components/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.scss */ "./src/app/components/description/description.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-title\">\n    <p class=\"section-title-text\">Coypright | <a routerLink=\"/login\">RSKA Admin</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"main-header\">GALLERY</h1>\n\n  <div *ngFor=\"let album of albums\">\n    <app-galleryitem [album]=\"album\"></app-galleryitem>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(apiService) {
        this.apiService = apiService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllAlbums().subscribe(function (res) {
            _this.albums = res;
            console.log(_this.albums);
        });
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/galleryitem/galleryitem.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/gallery/galleryitem/galleryitem.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n      <h4>{{ albumName }}</h4>\n    </div>\n    <div class=\"card-body\">\n       <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gallery/galleryitem/galleryitem.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/gallery/galleryitem/galleryitem.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gallery/galleryitem/galleryitem.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/gallery/galleryitem/galleryitem.component.ts ***!
  \*************************************************************************/
/*! exports provided: GalleryitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryitemComponent", function() { return GalleryitemComponent; });
/* harmony import */ var _model_album__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../model/album */ "./src/app/model/album.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryitemComponent = /** @class */ (function () {
    function GalleryitemComponent() {
    }
    GalleryitemComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        for (var i = 0; i < this.images.length; i++) {
            var imgObj = {
                small: this.images[i].photourl,
                medium: this.images[i].photourl,
                big: this.images[i].photourl
            };
            this.galleryImages.push(imgObj);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], GalleryitemComponent.prototype, "images", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _model_album__WEBPACK_IMPORTED_MODULE_0__["Album"])
    ], GalleryitemComponent.prototype, "album", void 0);
    GalleryitemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-galleryitem',
            template: __webpack_require__(/*! ./galleryitem.component.html */ "./src/app/components/gallery/galleryitem/galleryitem.component.html"),
            styles: [__webpack_require__(/*! ./galleryitem.component.scss */ "./src/app/components/gallery/galleryitem/galleryitem.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryitemComponent);
    return GalleryitemComponent;
}());



/***/ }),

/***/ "./src/app/components/gallerymanager/gallerymanager.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/gallerymanager/gallerymanager.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card manager-container\" *ngIf=\"!isPhotoManagerActive\">\n    <div class=\"card-header\">\n        <div>\n          <span>Album Manager</span>\n          <span class=\"album-add-btn\"><button class=\"btn btn-primary\"\n                (click)=\"addNewAlbum($event)\">New</button></span>\n        </div>\n    </div>\n    <div class=\"card-body\">\n      <ul class=\"album-manager-list\">\n        <li *ngFor=\"let album of albums; let i=index\">\n          <div class=\"album-manager-list-container\">\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <a class=\"btn\" (click)=\"onViewAlbum($event, i)\">\n                <img class = \"album-manager-cover\" src=\"../../../assets/images/album-cover.jpg\">\n              </a>\n            </div>\n            <div class=\"col-8\">\n              <div *ngIf=\"!album.isEditing\">\n                <p><b>{{album.name}}</b></p>\n                <p>{{album.description}}</p>\n                <br>\n                <button class=\"btn btn-primary btn-album-operation\"\n                        (click)=\"onModifyAlbum($event, i)\">Modify</button>\n\n                <button class=\"btn btn-primary btn-album-operation\"\n                        (click)=\"onViewAlbum($event, i)\">View</button>\n\n                <button class=\"btn btn-danger btn-album-operation\"\n                        (click)=\"onDeleteAlbum($event, i)\">Delete</button>\n              </div>\n              <div *ngIf=\"album.isEditing\">\n                <input type=\"text\"\n                       [(ngModel)]=\"modifiedAlbumName\"\n                       class=\"form-control\"\n                       placeholder=\"Album Name\">\n                <textarea name=\"albumDescription\"\n                          [(ngModel)]=\"modifiedAlbumDescription\"\n                          class=\"form-control\"\n                          placeholder=\"Descriiption\"></textarea>\n                <button class=\"btn btn-primary btn-album-operation\"\n                        (click)=\"onEditAlbum($event, i)\">OK</button>\n                <button class=\"btn btn-default btn-album-operation\"\n                        (click)=\"onCancel($event, i)\">Cancel</button>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        </li>\n      </ul>\n    </div>\n</div>\n<div class=\"card manager-container\" *ngIf=\"isPhotoManagerActive\">\n  <div class=\"card-header\">\n    <div>\n      <span>Photo Manager</span>\n      <span class=\"album-add-btn\">\n        <button class=\"btn btn-danger album-add-btn\"\n        (click)=\"backToAlbumManager()\">\n          Close\n        </button>\n      </span>\n    </div>\n    <div>\n      <p class=\"photo-title-text\">{{ selectedAlbum.name }}</p>\n    </div>\n  </div>\n  <div class=\"card-body\">\n      <input #myUpload\n             type=\"file\"\n             accept=\"image/*\"\n             (change)=\"selectImageListener($event)\">\n      <button *ngIf=\"showUploadButton\"\n             class=\"btn btn-primary album-add-btn\"\n             (click)=\"addNewPhoto($event)\">\n             Upload\n      </button>\n  </div>\n  <div class=\"card-body\">\n    <ul class=\"album-manager-list\">\n      <li *ngFor=\"let photo of photos; let i=index\">\n        <div class=\"album-manager-list-container\">\n          <div class=\"row\">\n            <div class=\"col-4\">\n                <img class = \"album-manager-cover\" [src]=\"photo.photourl\">\n            </div>\n            <div class=\"col-8\">\n              <p>{{photo.id}}</p>\n              <p>{{photo.photourl}}</p>\n              <br>\n              <button class=\"btn btn-danger btn-album-operation\"\n              (click)=\"onDeletePhoto($event, i)\">Delete</button>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gallerymanager/gallerymanager.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/gallerymanager/gallerymanager.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gallerymanager/gallerymanager.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/gallerymanager/gallerymanager.component.ts ***!
  \***********************************************************************/
/*! exports provided: GallerymanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerymanagerComponent", function() { return GallerymanagerComponent; });
/* harmony import */ var _model_album__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../model/album */ "./src/app/model/album.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GallerymanagerComponent = /** @class */ (function () {
    function GallerymanagerComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    GallerymanagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllAlbums().subscribe(function (res) {
            _this.albums = res;
            _this.isPhotoManagerActive = false;
            _this.showUploadButton = false;
            console.log(_this.albums);
        });
    };
    GallerymanagerComponent.prototype.onModifyAlbum = function ($event, index) {
        $event.stopPropagation();
        var album = this.albums[index];
        album.isEditing = true;
        this.selectedAlbum = album;
        this.modifiedAlbumName = album.name;
        this.modifiedAlbumDescription = album.description;
        console.log('Modifying album' + album.name);
    };
    GallerymanagerComponent.prototype.onDeleteAlbum = function ($event, index) {
        var _this = this;
        $event.stopPropagation();
        var album = this.albums[index];
        console.log('Deleting album' + album.name);
        this.apiService.deleteAlbum(album.id).subscribe(function (resp) {
            console.log(resp);
            if (resp['status'] && resp['status'] === 200) {
                console.log('Deleted album successfully');
                _this.albums.splice(index, 1);
            }
            else {
                console.log('Error deleting album');
                alert('Could not delete album. Please try again later.');
            }
        });
    };
    GallerymanagerComponent.prototype.onEditAlbum = function ($event, index) {
        var _this = this;
        $event.stopPropagation();
        var album = this.albums[index];
        album.name = this.modifiedAlbumName;
        album.description = this.modifiedAlbumDescription;
        if (album.id !== -1) {
            console.log('Going to edit ...');
            this.apiService.updateAlbum(this.selectedAlbum).subscribe(function (resp) {
                if (resp['status'] && resp['status'] === 200) {
                    console.log(resp);
                    console.log(resp['status']);
                    console.log(resp['album']);
                    var modifiedAlbumObj = resp['album'];
                    var modifiedAlbum = new _model_album__WEBPACK_IMPORTED_MODULE_0__["Album"](modifiedAlbumObj['id'], modifiedAlbumObj['name'], modifiedAlbumObj['description'], modifiedAlbumObj['thumbnailId']);
                    _this.albums[index] = modifiedAlbum;
                }
                else {
                    console.log('Update album error');
                }
            });
        }
        else {
            console.log('Creating new album ...');
            this.apiService.createAlbum(this.albums[0]).subscribe(function (resp) {
                console.log(resp);
                if (resp['status'] && resp['status'] === 200) {
                    var createdAlbum = resp['album'];
                    createdAlbum.isEditing = false;
                    _this.albums.splice(0, 1, createdAlbum);
                }
                else {
                    alert('Failed to creat album. Please try again later.');
                }
            });
        }
    };
    GallerymanagerComponent.prototype.onCancel = function ($event, index) {
        $event.stopPropagation();
        var album = this.albums[index];
        album.isEditing = false;
        if (album.id < 0) {
            this.albums.splice(0, 1);
        }
    };
    GallerymanagerComponent.prototype.onViewAlbum = function ($event, i) {
        var _this = this;
        $event.stopPropagation();
        this.selectedAlbum = this.albums[i];
        this.isPhotoManagerActive = true;
        this.apiService.getPhotos(this.selectedAlbum.id).subscribe(function (resp) {
            if (resp['status'] && resp['status'] === 200) {
                _this.photos = resp['photos'];
                console.log(_this.photos);
            }
            else {
                console.log(resp['error']);
            }
        });
    };
    GallerymanagerComponent.prototype.addNewAlbum = function ($event) {
        $event.stopPropagation();
        var album = new _model_album__WEBPACK_IMPORTED_MODULE_0__["Album"](-1, '', '', -1);
        album.isEditing = true;
        this.albums.splice(0, 0, album);
    };
    GallerymanagerComponent.prototype.addNewPhoto = function ($event) {
        var _this = this;
        this.apiService.uploadPhoto(this.selectedAlbum.id, this.uploadFileName, this.uploadImage).subscribe(function (resp) {
            if (resp['status'] && resp['status'] === 200) {
                console.log('Uploaded photo successfully ...');
                var photo = resp['photo'];
                _this.photos.push(photo);
                _this.myUploadVar.nativeElement.value = '';
                _this.showUploadButton = false;
            }
            else {
                console.log('Failed to upload photo ...');
                alert(resp['error']);
            }
        });
    };
    GallerymanagerComponent.prototype.backToAlbumManager = function () {
        this.isPhotoManagerActive = false;
    };
    GallerymanagerComponent.prototype.selectImageListener = function ($event) {
        this.readThis($event.target);
    };
    GallerymanagerComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        this.myReader = new FileReader();
        this.myReader.onloadend = function (e) {
            _this.uploadImage = _this.myReader.result;
            _this.uploadFileName = file.name;
            console.log(_this.uploadFileName);
            _this.showUploadButton = true;
        };
        this.myReader.readAsDataURL(file);
    };
    GallerymanagerComponent.prototype.onDeletePhoto = function ($event, i) {
        var _this = this;
        var photoDeleted = this.photos[i];
        var albumId = this.selectedAlbum.id;
        this.apiService.deletePhoto(photoDeleted.id, albumId).subscribe(function (resp) {
            if (resp['status'] && resp['status'] === 200) {
                console.log('Photo deleted successfully.');
                _this.photos.splice(i, 1);
            }
            else {
                console.log('Failed to delete photo');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('myUpload'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], GallerymanagerComponent.prototype, "myUploadVar", void 0);
    GallerymanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-gallerymanager',
            template: __webpack_require__(/*! ./gallerymanager.component.html */ "./src/app/components/gallerymanager/gallerymanager.component.html"),
            styles: [__webpack_require__(/*! ./gallerymanager.component.scss */ "./src/app/components/gallerymanager/gallerymanager.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GallerymanagerComponent);
    return GallerymanagerComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark form-inline\" role=\"navigation\">\n    <div class=\"container-fluid\">\n    <button class=\"navbar-toggler\"\n            type=\"button\"\n            data-toggle=\"collapse\"\n            data-target=\"#navbarsExampleDefault\"\n            aria-controls=\"navbarsExampleDefault\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n      <img class =\"icon-image logo-img\" src=\"../../../assets/images/logo.jpg\">\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#classDetailsSection\">CLASS</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#instructorsSection\">INSTRUCTORS</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#gallerySection\">GALLERY</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#contactSection\">CONTACT</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav flex-row justify-content-between ml-auto\">\n          <li class=\"nav-item order-2 order-md-1\">\n            <a href=\"#\" class=\"nav-link\" title=\"settings\"><fa [name]=\"'facebook-square'\" [size]=5></fa></a>\n          </li>\n          <li class=\"nav-item order-2 order-md-1\">\n            <a href=\"#\" class=\"nav-link\" title=\"settings\"><fa [name]=\"'twitter-square'\" [size]=5></fa></a>\n          </li>\n      </ul>\n      </div>\n    </div>\n  </nav>\n  <app-about></app-about>\n  <app-description id=\"aboutSection\"></app-description>\n  <app-classdetails id=\"classDetailsSection\"></app-classdetails>\n  <br>\n  <app-instructors id=\"instructorsSection\"></app-instructors>\n  <br>\n  <app-gallery id=\"gallerySection\"></app-gallery>\n  <br>\n  <app-contact id=\"contactSection\"></app-contact>\n  <br>\n  <app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/instructors/instructors.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/instructors/instructors.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-title\">\n  <p class=\"section-title-text\">Place holder for Instructors</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/instructors/instructors.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/instructors/instructors.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/instructors/instructors.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/instructors/instructors.component.ts ***!
  \*****************************************************************/
/*! exports provided: InstructorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorsComponent", function() { return InstructorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstructorsComponent = /** @class */ (function () {
    function InstructorsComponent() {
    }
    InstructorsComponent.prototype.ngOnInit = function () {
    };
    InstructorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instructors',
            template: __webpack_require__(/*! ./instructors.component.html */ "./src/app/components/instructors/instructors.component.html"),
            styles: [__webpack_require__(/*! ./instructors.component.scss */ "./src/app/components/instructors/instructors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InstructorsComponent);
    return InstructorsComponent;
}());



/***/ }),

/***/ "./src/app/components/instructorsmanager/instructorsmanager.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/instructorsmanager/instructorsmanager.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  instructorsmanager works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/instructorsmanager/instructorsmanager.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/instructorsmanager/instructorsmanager.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/instructorsmanager/instructorsmanager.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/instructorsmanager/instructorsmanager.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InstructorsmanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorsmanagerComponent", function() { return InstructorsmanagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstructorsmanagerComponent = /** @class */ (function () {
    function InstructorsmanagerComponent() {
    }
    InstructorsmanagerComponent.prototype.ngOnInit = function () {
    };
    InstructorsmanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instructorsmanager',
            template: __webpack_require__(/*! ./instructorsmanager.component.html */ "./src/app/components/instructorsmanager/instructorsmanager.component.html"),
            styles: [__webpack_require__(/*! ./instructorsmanager.component.scss */ "./src/app/components/instructorsmanager/instructorsmanager.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InstructorsmanagerComponent);
    return InstructorsmanagerComponent;
}());



/***/ }),

/***/ "./src/app/components/locationmanager/locationmanager.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/locationmanager/locationmanager.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  locationmanager works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/locationmanager/locationmanager.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/locationmanager/locationmanager.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/locationmanager/locationmanager.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/locationmanager/locationmanager.component.ts ***!
  \*************************************************************************/
/*! exports provided: LocationmanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationmanagerComponent", function() { return LocationmanagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationmanagerComponent = /** @class */ (function () {
    function LocationmanagerComponent() {
    }
    LocationmanagerComponent.prototype.ngOnInit = function () {
    };
    LocationmanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locationmanager',
            template: __webpack_require__(/*! ./locationmanager.component.html */ "./src/app/components/locationmanager/locationmanager.component.html"),
            styles: [__webpack_require__(/*! ./locationmanager.component.scss */ "./src/app/components/locationmanager/locationmanager.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationmanagerComponent);
    return LocationmanagerComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container login-container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      RSKA LOGIN\n    </div>\n    <div class=\"card-body\">\n    <div class=\"login-form-container\">\n    <form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n        <div class=\"form-group\">\n            <label for=\"userName\">User Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"userName\" formControlName=\"userName\" required>\n              <div class=\"alert alert-danger\"\n                   *ngIf=\"userName.errors && (userName.dirty || userName.touched)\">Invalid user name.\n              </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" required>\n                <div class=\"alert alert-danger\"\n                     *ngIf=\"password.errors && (password.dirty || password.touched)\">Invalid user name.\n                </div>\n          </div>\n          <button type=\"submit\"\n                  class=\"btn btn-primary generic-btn generic-form-btn\"\n                  id=\"contact-form-btn\">Login</button>\n\n          <div class=\"container\">\n            <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"shouldShowErrorMessage\">\n                <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n              {{ errorMessage }}\n            </div>\n          </div>\n    </form>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, apiService, utilityService, route, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.utilityService = utilityService;
        this.route = route;
        this.router = router;
        this.errorMessage = '';
        this.shouldShowErrorMessage = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
        this.loginForm.reset();
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.shouldShowErrorMessage = false;
        console.log('Login tapped ...');
        var userName = this.userName.value;
        var password = this.password.value;
        if (this.loginForm.valid) {
            console.log('Valid login form ...');
            this.apiService.postLogin(userName, password).subscribe(function (res) {
                console.dir(res);
                if (res.status === 200) {
                    console.log('Login success ...');
                    _this.utilityService.saveToken(res.token);
                    _this.router.navigate(['admin']);
                }
                else {
                    _this.shouldShowErrorMessage = true;
                    _this.errorMessage = res.error;
                }
            });
        }
    };
    LoginComponent.prototype.createFormControls = function () {
        this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            userName: this.userName,
            password: this.password,
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _services_utility_service__WEBPACK_IMPORTED_MODULE_0__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/newsflashmanager/newsflashmanager.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/newsflashmanager/newsflashmanager.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  newsflashmanager works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/newsflashmanager/newsflashmanager.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/newsflashmanager/newsflashmanager.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/newsflashmanager/newsflashmanager.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/newsflashmanager/newsflashmanager.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewsflashmanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsflashmanagerComponent", function() { return NewsflashmanagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsflashmanagerComponent = /** @class */ (function () {
    function NewsflashmanagerComponent() {
    }
    NewsflashmanagerComponent.prototype.ngOnInit = function () {
    };
    NewsflashmanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsflashmanager',
            template: __webpack_require__(/*! ./newsflashmanager.component.html */ "./src/app/components/newsflashmanager/newsflashmanager.component.html"),
            styles: [__webpack_require__(/*! ./newsflashmanager.component.scss */ "./src/app/components/newsflashmanager/newsflashmanager.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsflashmanagerComponent);
    return NewsflashmanagerComponent;
}());



/***/ }),

/***/ "./src/app/model/album.ts":
/*!********************************!*\
  !*** ./src/app/model/album.ts ***!
  \********************************/
/*! exports provided: Album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
var Album = /** @class */ (function () {
    function Album(id, name, description, thumbnailId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbnailid = thumbnailId;
        this.isEditing = false;
    }
    return Album;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.service */ "./src/app/services/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var publicURL = '/public';
var ApiService = /** @class */ (function () {
    function ApiService(http, utilityService) {
        this.http = http;
        this.utilityService = utilityService;
    }
    /* Unprotected public api */
    ApiService.prototype.getPublic = function (method) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var url = publicURL + method;
        return this.http.get(url, httpOptions);
    };
    ApiService.prototype.postPublic = function (body, method) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var url = publicURL + method;
        return this.http.post(url, body, httpOptions);
    };
    /* API's protected with web token */
    ApiService.prototype.getProtected = function (body, method) {
    };
    ApiService.prototype.postProtected = function (body, method) {
        var url = method;
        var token = this.utilityService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': token }),
        };
        return this.http.post(url, body, httpOptions);
    };
    ApiService.prototype.postContactUs = function (name, phone, email, message) {
        var body = {
            'phone': phone,
            'email': email,
            'name': name,
            'message': message
        };
        return this.postPublic(body, '/contact-email');
    };
    ApiService.prototype.postLogin = function (userName, password) {
        var body = {
            'userName': userName,
            'password': password
        };
        return this.postPublic(body, '/login');
    };
    ApiService.prototype.getAllAlbums = function () {
        return this.getPublic('/getalbums').map(function (res) { return res['albums']; });
    };
    ApiService.prototype.updateAlbum = function (album) {
        var body = JSON.stringify(album);
        console.log('Update body content ...');
        console.log(body);
        return this.postProtected(body, '/album/update');
    };
    ApiService.prototype.deleteAlbum = function (id) {
        var body = { 'id': id };
        return this.postProtected(body, '/album/delete');
    };
    ApiService.prototype.createAlbum = function (album) {
        console.log(album);
        var body = {
            'name': album.name,
            'description': album.description
        };
        console.log('body ...');
        console.log(body);
        return this.postProtected(body, '/album/create');
    };
    ApiService.prototype.uploadPhoto = function (albumId, fileName, fileData) {
        var body = {
            imagedata: fileData,
            filename: fileName,
            albumid: albumId
        };
        return this.postProtected(body, '/album/upload');
    };
    ApiService.prototype.getPhotos = function (albumId) {
        var method = '/getphotos/' + albumId;
        return this.getPublic(method);
    };
    ApiService.prototype.deletePhoto = function (photoId, albumId) {
        var methodName = '/album/remove';
        var body = {
            id: photoId,
            photoalbum: albumId
        };
        return this.postProtected(body, methodName);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/utility.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var tokenKey = 'AppToken';
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.getToken = function () {
        var token = window.localStorage.getItem(tokenKey);
        return token;
    };
    UtilityService.prototype.saveToken = function (token) {
        window.localStorage.setItem(tokenKey, token);
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jubin/Documents/Projects/rska/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map