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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar -->\r\n<nav class=\"navbar navbar-dark\" style=\"background: red; width: 100%;\">\r\n  <a class=\"navbar-brand\" href=\"#\">Bulky Test</a>\r\n  <a class=\"nav-link\" class=\"float-right\" (click)=\"openDialog()\">\r\n    <img [src]='avatar' class=\"rounded-circle z-depth-0\"\r\n      alt=\"avatar image\" height=\"35\">\r\n  </a>\r\n</nav>\r\n<app-home></app-home>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-detail/user-detail.service */ "./src/app/user-detail/user-detail.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(userService, dialog) {
        this.userService = userService;
        this.dialog = dialog;
        this.title = 'bulkyTest';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.queryUser();
    };
    AppComponent.prototype.queryUser = function () {
        var _this = this;
        this.userService
            .query()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (res) { return res.ok; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.body; }) // userService
        )
            .subscribe(function (res) {
            _this.user = res.results;
            _this.user = _this.user[0];
            console.log(_this.user);
            _this.avatar = _this.user.picture.large;
            console.log(_this.avatar);
        }, function (res) { return console.log('error'); });
    };
    AppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"], {
            width: '250px',
            data: {
                user: this.user
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-detail/user-detail.service */ "./src/app/user-detail/user-detail.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ],
            providers: [
                _home_home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"],
                _user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <h4>Game of Thrones</h4>\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n    </div>\r\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n    <!-- image Column -->\r\n    <ng-container matColumnDef=\"image\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n      <td mat-cell *matCellDef=\"let data\" style=\"width:100px;\">\r\n        <img src={{data.image.medium}} style=\"width: 40px; height: 40px;\">\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Title Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n      <td mat-cell *matCellDef=\"let data\" style=\"width:200px;\"> {{data.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Description Column -->\r\n    <ng-container matColumnDef=\"summary\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n        <td mat-cell *matCellDef=\"let data\" style=\"max-width: 300px; min-height: 300px;\"><div [innerHTML]=\"data.summary\"></div> </td>\r\n      </ng-container>\r\n      \r\n    <!-- season Column -->\r\n    <ng-container matColumnDef=\"season\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Season </th>\r\n      <td mat-cell *matCellDef=\"let data\"> {{data.season}} </td>\r\n    </ng-container>\r\n\r\n    <!-- number Column -->\r\n    <ng-container matColumnDef=\"number\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Episode </th>\r\n      <td mat-cell *matCellDef=\"let data\"> {{data.number}} </td>\r\n    </ng-container>\r\n\r\n    <!-- runtime Column -->\r\n    <ng-container matColumnDef=\"runtime\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Duration </th>\r\n      <td mat-cell *matCellDef=\"let data\"> {{data.runtime}} mins </td>\r\n    </ng-container>\r\n\r\n    <!-- url Column -->\r\n    <ng-container matColumnDef=\"url\">\r\n      <th mat-header-cell *matHeaderCellDef> URL </th>\r\n      <td mat-cell *matCellDef=\"let data\"><a href={{data.url}} target=\"_blank\">link</a> </td>\r\n    </ng-container>\r\n\r\n    <!-- airtime Column -->\r\n    <ng-container matColumnDef=\"airtime\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Airtime </th>\r\n      <td mat-cell *matCellDef=\"let data\"> {{data.airtime}} </td>\r\n    </ng-container>\r\n\r\n    <!-- airdate Column -->\r\n    <ng-container matColumnDef=\"airdate\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Airdate </th>\r\n      <td mat-cell *matCellDef=\"let data\"> {{data.airdate}} </td>\r\n    </ng-container>\r\n\r\n    <!-- airstamp Column -->\r\n    <!-- <ng-container matColumnDef=\"airstamp\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> airstamp </th>\r\n      <td mat-cell *matCellDef=\"let data\"> {{data.airstamp}} </td>\r\n    </ng-container> -->\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[25, 15, 5]\" showFirstLastButtons></mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  float: left;\n  margin: 20px 0 0 95px; }\n\n.mat-form-field {\n  max-width: 200px; }\n\ntable {\n  margin: 0 auto;\n  width: 90%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJvamVjdHNcXEdpdEh1YlxcSGVyb2t1VGVzdC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMjBweCAwIDAgOTVweDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGR7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG50YWJsZSB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-detail/user-detail.service */ "./src/app/user-detail/user-detail.service.ts");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService, userService) {
        this.homeService = homeService;
        this.userService = userService;
        this.displayedColumns = ['image', 'name', 'summary', 'season', 'number',
            'runtime', 'url', 'airtime',
            'airdate' // , 'airstamp'
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.queryEpisode();
    };
    HomeComponent.prototype.queryEpisode = function () {
        var _this = this;
        this.homeService
            .query()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (res) { return res.ok; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.body; }))
            .subscribe(function (res) {
            _this.episodes = res;
            console.log(_this.episodes);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.episodes);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (res) { return console.log('error'); });
    };
    HomeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], HomeComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], HomeComponent.prototype, "paginator", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.resourceUrl = 'http://api.tvmaze.com/shows/82/episodes';
    }
    HomeService.prototype.query = function (req) {
        return this.http.get("" + this.resourceUrl, { observe: 'response' });
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/user-detail/user-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row login_box\">\r\n    <div class=\"col-md-12 col-xs-12\" align=\"center\">\r\n      <div class=\"outter\"><img src={{user.picture.large}} class=\"image-circle\" /></div>\r\n      <h1>{{user.name.first | titlecase }} {{user.name.last | titlecase }}</h1>\r\n      <h1>{{user.cell}}</h1>\r\n    </div>\r\n    <div class=\"col-md-12 col-xs-12 login_control\">\r\n\r\n      <div class=\"control\">\r\n        <div class=\"label\">Email Address</div>\r\n        <input type=\"text\" class=\"form-control\" value=\"{{user.email}}\" disabled />\r\n      </div>\r\n\r\n      <div class=\"control\">\r\n        <div class=\"label\">Address</div>\r\n        <input type=\"text\" class=\"form-control\"\r\n          value=\"{{user.location.street | titlecase}}, {{user.location.city | titlecase}}, {{user.location.state | uppercase }}, {{user.location.postcode }}\"\r\n          disabled />\r\n      </div>\r\n      <div align=\"center\">\r\n        <button class=\"btn btn-orange\" mat-dialog-close>CLOSE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #2B2B2B; }\n\n* {\n  font-family: 'Raleway', sans-serif;\n  color: #FFF; }\n\ndiv h3 span {\n  color: #FFF;\n  font-size: 14px; }\n\ndiv span {\n  font-weight: 200; }\n\nh1 {\n  font-weight: 200; }\n\n.login_box {\n  background: #f32d27;\n  /* Old browsers */\n  /* IE9 SVG, needs conditional override of 'filter' to 'none' */\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZjMyZDI3IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iOTklIiBzdG9wLWNvbG9yPSIjZmY2YjQ1IiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(45deg, #f32d27 5%, #ff6b45 99%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f32d27', endColorstr='#ff6b45',GradientType=1 );\n  /* IE6-8 fallback on horizontal gradient */\n  width: 35%;\n  /* height:70%; */\n  position: absolute;\n  top: 15%;\n  left: 32.5%;\n  box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54); }\n\n@media (max-width: 767px) {\n  .login_box {\n    background: #f32d27;\n    /* Old browsers */\n    /* IE9 SVG, needs conditional override of 'filter' to 'none' */\n    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZjMyZDI3IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iOTklIiBzdG9wLWNvbG9yPSIjZmY2YjQ1IiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);\n    /* FF3.6+ */\n    /* Chrome,Safari4+ */\n    /* Chrome10+,Safari5.1+ */\n    /* Opera 11.10+ */\n    /* IE10+ */\n    background: linear-gradient(45deg, #f32d27 5%, #ff6b45 99%);\n    /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f32d27', endColorstr='#ff6b45',GradientType=1 );\n    /* IE6-8 fallback on horizontal gradient */\n    width: 90%;\n    height: 80%;\n    position: absolute;\n    top: 10%;\n    left: 5%;\n    box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54); } }\n\n.image-circle {\n  border-radius: 50%;\n  width: 175px;\n  height: 175px;\n  border: 4px solid #FFF;\n  margin: 10px; }\n\n.follow {\n  background-color: #FC563B;\n  height: 80px;\n  cursor: pointer; }\n\n.follow:hover {\n  background-color: #F22F26;\n  height: 80px;\n  cursor: pointer; }\n\n.login_control {\n  background-color: #FFF;\n  padding: 10px; }\n\n.control {\n  color: #000;\n  margin: 10px; }\n\n.label {\n  color: #EB4F26;\n  font-size: 18px;\n  font-weight: 500; }\n\n.form-control {\n  color: #000000 !important;\n  border: none;\n  padding: 25px;\n  padding-left: 10px;\n  border-bottom: 1px solid #CCC;\n  margin-bottom: 10px;\n  outline: none;\n  box-shadow: none !important; }\n\n.form-control:focus {\n  border-radius: 0px;\n  border-bottom: 1px solid #FC563B;\n  margin-bottom: 10px;\n  outline: none;\n  box-shadow: none !important; }\n\n.btn-orange {\n  background-color: #FC563B;\n  border-radius: 0px;\n  margin: 5px;\n  padding: 5px;\n  width: 150px;\n  font-size: 20px;\n  font-weight: inherit; }\n\n.btn-orange:hover {\n  background-color: #F22F26;\n  border-radius: 0px;\n  margin: 5px;\n  padding: 5px;\n  width: 150px;\n  font-size: 20px;\n  font-weight: inherit;\n  color: #FFF !important; }\n\n.line {\n  border-bottom: 2px solid #F32D27; }\n\n.outter {\n  padding: 0px;\n  border: 1px solid rgba(255, 255, 255, 0.29);\n  border-radius: 50%;\n  width: 200px;\n  height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWwvRDpcXFByb2plY3RzXFxHaXRIdWJcXEhlcm9rdVRlc3Qvc3JjXFxhcHBcXHVzZXItZGV0YWlsXFx1c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBOztBQUcxQjtFQUNJLGtDQUFrQztFQUNsQyxXQUFZLEVBQUE7O0FBS2hCO0VBQ0ssV0FBWTtFQUNaLGVBQWMsRUFBQTs7QUFHbkI7RUFDSyxnQkFBZ0IsRUFBQTs7QUFHckI7RUFDSyxnQkFBZ0IsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUI7RUFBRSxpQkFBQTtFQUNyQiw4REFBQTtFQUNBLHVxQkFBdXFCO0VBQ3BtQixXQUFBO0VBQzRDLG9CQUFBO0VBQzFDLHlCQUFBO0VBQ0wsaUJBQUE7RUFDQyxVQUFBO0VBQ2pFLDJEQUEyRDtFQUFFLFFBQUE7RUFDN0QsbUhBQW1IO0VBQUUsMENBQUE7RUFFckgsVUFBUztFQUNWLGdCQUFBO0VBQ0Msa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxXQUFVO0VBSWQsa0RBQTBELEVBQUE7O0FBRzFEO0VBQ0k7SUFDSSxtQkFBbUI7SUFBRSxpQkFBQTtJQUNyQiw4REFBQTtJQUNBLHVxQkFBdXFCO0lBQ3BtQixXQUFBO0lBQzRDLG9CQUFBO0lBQzFDLHlCQUFBO0lBQ0wsaUJBQUE7SUFDQyxVQUFBO0lBQ2pFLDJEQUEyRDtJQUFFLFFBQUE7SUFDN0QsbUhBQW1IO0lBQUUsMENBQUE7SUFFckgsVUFBUztJQUNULFdBQVU7SUFDVixrQkFBaUI7SUFDakIsUUFBTztJQUNQLFFBQU87SUFJZixrREFBMEQsRUFBQSxFQUNyRDs7QUFHTDtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0kseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFjLEVBQUE7O0FBR2xCO0VBQ0kseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFjLEVBQUE7O0FBR2xCO0VBQ0ksc0JBQXFCO0VBQ3JCLGFBQVksRUFBQTs7QUFJaEI7RUFDSSxXQUFVO0VBQ1YsWUFBVyxFQUFBOztBQUdmO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBR2IsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUdiLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixzQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxnQ0FBaUMsRUFBQTs7QUFJckM7RUFDSSxZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkIyQjsgICBcclxuICAgfVxyXG4gICBcclxuICAgKntcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICBjb2xvciA6ICNGRkY7XHJcbiAgICAgICBcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIGRpdiBoMyBzcGFue1xyXG4gICAgICAgIGNvbG9yIDogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgfVxyXG4gICBcclxuICAgZGl2IHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgIH1cclxuICAgXHJcbiAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sb2dpbl9ib3h7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjZjMyZDI3OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgIC8qIElFOSBTVkcsIG5lZWRzIGNvbmRpdGlvbmFsIG92ZXJyaWRlIG9mICdmaWx0ZXInIHRvICdub25lJyAqL1xyXG4gICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlBL1BnbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJakV3TUNVaUlHaGxhV2RvZEQwaU1UQXdKU0lnZG1sbGQwSnZlRDBpTUNBd0lERWdNU0lnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWJtOXVaU0krQ2lBZ1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSm5jbUZrTFhWaloyY3RaMlZ1WlhKaGRHVmtJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2VERTlJakFsSWlCNU1UMGlNVEF3SlNJZ2VESTlJakV3TUNVaUlIa3lQU0l3SlNJK0NpQWdJQ0E4YzNSdmNDQnZabVp6WlhROUlqVWxJaUJ6ZEc5d0xXTnZiRzl5UFNJalpqTXlaREkzSWlCemRHOXdMVzl3WVdOcGRIazlJakVpTHo0S0lDQWdJRHh6ZEc5d0lHOW1abk5sZEQwaU9Ua2xJaUJ6ZEc5d0xXTnZiRzl5UFNJalptWTJZalExSWlCemRHOXdMVzl3WVdOcGRIazlJakVpTHo0S0lDQThMMnhwYm1WaGNrZHlZV1JwWlc1MFBnb2dJRHh5WldOMElIZzlJakFpSUhrOUlqQWlJSGRwWkhSb1BTSXhJaUJvWldsbmFIUTlJakVpSUdacGJHdzlJblZ5YkNnalozSmhaQzExWTJkbkxXZGxibVZ5WVhSbFpDa2lJQzgrQ2p3dmMzWm5QZz09KTtcclxuICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAgI2YzMmQyNyA1JSwgI2ZmNmI0NSA5OSUpOyAvKiBGRjMuNisgKi9cclxuICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDUlLCNmMzJkMjcpLCBjb2xvci1zdG9wKDk5JSwjZmY2YjQ1KSk7IC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG4gICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICAjZjMyZDI3IDUlLCNmZjZiNDUgOTklKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cclxuICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgICNmMzJkMjcgNSUsI2ZmNmI0NSA5OSUpOyAvKiBPcGVyYSAxMS4xMCsgKi9cclxuICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICAjZjMyZDI3IDUlLCNmZjZiNDUgOTklKTsgLyogSUUxMCsgKi9cclxuICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgICNmMzJkMjcgNSUsI2ZmNmI0NSA5OSUpOyAvKiBXM0MgKi9cclxuICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZjMyZDI3JywgZW5kQ29sb3JzdHI9JyNmZjZiNDUnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi04IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cclxuICAgICAgIFxyXG4gICAgICAgd2lkdGg6MzUlO1xyXG4gICAgICAvKiBoZWlnaHQ6NzAlOyAqL1xyXG4gICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICB0b3A6MTUlO1xyXG4gICAgICAgbGVmdDozMi41JTtcclxuICAgICAgIFxyXG4gICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjU0KTtcclxuICAgLW1vei1ib3gtc2hhZG93OiAgICAwcHggMHB4IDhweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjU0KTtcclxuICAgYm94LXNoYWRvdzogICAgICAgICAwcHggMHB4IDhweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjU0KTtcclxuICAgfVxyXG4gICBcclxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAubG9naW5fYm94e1xyXG4gICAgICAgICAgIGJhY2tncm91bmQ6ICNmMzJkMjc7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgICAgICAgIC8qIElFOSBTVkcsIG5lZWRzIGNvbmRpdGlvbmFsIG92ZXJyaWRlIG9mICdmaWx0ZXInIHRvICdub25lJyAqL1xyXG4gICAgICAgICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQS9QZ284YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2QybGtkR2c5SWpFd01DVWlJR2hsYVdkb2REMGlNVEF3SlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREVnTVNJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGlibTl1WlNJK0NpQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0puY21Ga0xYVmpaMmN0WjJWdVpYSmhkR1ZrSWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdlREU5SWpBbElpQjVNVDBpTVRBd0pTSWdlREk5SWpFd01DVWlJSGt5UFNJd0pTSStDaUFnSUNBOGMzUnZjQ0J2Wm1aelpYUTlJalVsSWlCemRHOXdMV052Ykc5eVBTSWpaak15WkRJM0lpQnpkRzl3TFc5d1lXTnBkSGs5SWpFaUx6NEtJQ0FnSUR4emRHOXdJRzltWm5ObGREMGlPVGtsSWlCemRHOXdMV052Ykc5eVBTSWpabVkyWWpRMUlpQnpkRzl3TFc5d1lXTnBkSGs5SWpFaUx6NEtJQ0E4TDJ4cGJtVmhja2R5WVdScFpXNTBQZ29nSUR4eVpXTjBJSGc5SWpBaUlIazlJakFpSUhkcFpIUm9QU0l4SWlCb1pXbG5hSFE5SWpFaUlHWnBiR3c5SW5WeWJDZ2paM0poWkMxMVkyZG5MV2RsYm1WeVlYUmxaQ2tpSUM4K0Nqd3ZjM1puUGc9PSk7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsICAjZjMyZDI3IDUlLCAjZmY2YjQ1IDk5JSk7IC8qIEZGMy42KyAqL1xyXG4gICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDUlLCNmMzJkMjcpLCBjb2xvci1zdG9wKDk5JSwjZmY2YjQ1KSk7IC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG4gICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAgI2YzMmQyNyA1JSwjZmY2YjQ1IDk5JSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAgI2YzMmQyNyA1JSwjZmY2YjQ1IDk5JSk7IC8qIE9wZXJhIDExLjEwKyAqL1xyXG4gICAgICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICAjZjMyZDI3IDUlLCNmZjZiNDUgOTklKTsgLyogSUUxMCsgKi9cclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICAjZjMyZDI3IDUlLCNmZjZiNDUgOTklKTsgLyogVzNDICovXHJcbiAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmMzJkMjcnLCBlbmRDb2xvcnN0cj0nI2ZmNmI0NScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTggZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgICBoZWlnaHQ6ODAlO1xyXG4gICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgIHRvcDoxMCU7XHJcbiAgICAgICAgICAgbGVmdDo1JTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNTQpO1xyXG4gICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAwcHggOHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNTQpO1xyXG4gICBib3gtc2hhZG93OiAgICAgICAgIDBweCAwcHggOHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNTQpO1xyXG4gICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gICAuaW1hZ2UtY2lyY2xle1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgICAgaGVpZ2h0OiAxNzVweDtcclxuICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNGRkY7XHJcbiAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5mb2xsb3d7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGQzU2M0I7XHJcbiAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgfVxyXG4gICBcclxuICAgLmZvbGxvdzpob3ZlciB7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGMjJGMjY7XHJcbiAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgfVxyXG4gICBcclxuICAgLmxvZ2luX2NvbnRyb2x7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7XHJcbiAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICBcclxuICAgfVxyXG4gICBcclxuICAgLmNvbnRyb2wge1xyXG4gICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGFiZWwge1xyXG4gICAgICAgY29sb3I6ICNFQjRGMjY7XHJcbiAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkM1NjNCO1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIC5idG4tb3Jhbmdle1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDNTYzQjtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5idG4tb3JhbmdlOmhvdmVyIHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMjJGMjY7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgY29sb3I6I0ZGRiAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGluZXtcclxuICAgICAgIGJvcmRlci1ib3R0b20gOiAycHggc29saWQgI0YzMkQyNztcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIC5vdXR0ZXJ7XHJcbiAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjkpO1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgfVxyXG4gICAiXX0= */"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.user = this.data.user;
        console.log(this.user);
    };
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/user-detail/user-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/user-detail/user-detail.service.ts":
/*!****************************************************!*\
  !*** ./src/app/user-detail/user-detail.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = 'https://randomuser.me/api/';
    }
    UserService.prototype.query = function (req) {
        return this.http.get("" + this.resourceUrl, { observe: 'response' });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\GitHub\HerokuTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map