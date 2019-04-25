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

/***/ "./src/app/api_doc/api_doc.module.ts":
/*!*******************************************!*\
  !*** ./src/app/api_doc/api_doc.module.ts ***!
  \*******************************************/
/*! exports provided: ApiDocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDocModule", function() { return ApiDocModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_doc/api_doc.component */ "./src/app/api_doc/api_doc/api_doc.component.ts");
/* harmony import */ var _api_doc_detail_api_doc_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api_doc_detail/api_doc_detail.component */ "./src/app/api_doc/api_doc_detail/api_doc_detail.component.ts");
/* harmony import */ var _api_doc_admin_api_doc_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api_doc_admin/api_doc_admin.component */ "./src/app/api_doc/api_doc_admin/api_doc_admin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");









var routes = [
    {
        path: 'api-document',
        component: _api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_2__["ApiDocComponent"],
        pathMatch: 'full'
    },
    {
        path: 'api-document/admin',
        component: _api_doc_admin_api_doc_admin_component__WEBPACK_IMPORTED_MODULE_4__["ApiDocAdmiComponent"],
        pathMatch: 'full'
    },
    {
        path: 'api-document/detail/:id',
        component: _api_doc_detail_api_doc_detail_component__WEBPACK_IMPORTED_MODULE_3__["ApiDocDetailComponent"],
        pathMatch: 'full'
    }
];
var ApiDocModule = /** @class */ (function () {
    function ApiDocModule() {
    }
    ApiDocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"]
            ],
            declarations: [
                _api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_2__["ApiDocComponent"],
                _api_doc_admin_api_doc_admin_component__WEBPACK_IMPORTED_MODULE_4__["ApiDocAdmiComponent"],
                _api_doc_detail_api_doc_detail_component__WEBPACK_IMPORTED_MODULE_3__["ApiDocDetailComponent"]
            ]
        })
    ], ApiDocModule);
    return ApiDocModule;
}());



/***/ }),

/***/ "./src/app/api_doc/api_doc/api_doc.component.css":
/*!*******************************************************!*\
  !*** ./src/app/api_doc/api_doc/api_doc.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGlfZG9jL2FwaV9kb2MvYXBpX2RvYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJhcHAvYXBpX2RvYy9hcGlfZG9jL2FwaV9kb2MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/api_doc/api_doc/api_doc.component.html":
/*!********************************************************!*\
  !*** ./src/app/api_doc/api_doc/api_doc.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <a routerLink='/home' class=\"btn btn-secondary\">Back to home</a> - \n    <a routerLink='/api-document/admin' class=\"btn btn-success\">Go to admin</a>\n    <hr>\n    <div class=\"card\">\n        <div class=\"card-header bg-primary text-white\">\n            <h3>Api document</h3>\n        </div>\n        <div class=\"card-body\">\n            <ul class=\"list-group\" *ngFor=\"let project of data\">\n                <li class=\"list-group-item\">\n                    {{ project.project_name }}\n                    <span class=\"badge badge-success badge-pill\">{{ project.count_project }}</span> - \n                    <a class=\"btn btn-primary\" routerLink=\"/api-document/detail/{{ project.project_id }}\">Detail</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/api_doc/api_doc/api_doc.component.ts":
/*!******************************************************!*\
  !*** ./src/app/api_doc/api_doc/api_doc.component.ts ***!
  \******************************************************/
/*! exports provided: ApiDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDocComponent", function() { return ApiDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_doc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_doc.service */ "./src/app/api_doc/api_doc/api_doc.service.ts");



var ApiDocComponent = /** @class */ (function () {
    function ApiDocComponent(api_doc_service) {
        this.api_doc_service = api_doc_service;
        this.data = [];
    }
    ApiDocComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api_doc_service.showProject()
            .then(function (res) {
            _this.data = res['data'];
        })
            .catch(function (err) {
        });
    };
    ApiDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-doc',
            template: __webpack_require__(/*! ./api_doc.component.html */ "./src/app/api_doc/api_doc/api_doc.component.html"),
            providers: [_api_doc_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocService"]],
            styles: [__webpack_require__(/*! ./api_doc.component.css */ "./src/app/api_doc/api_doc/api_doc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_doc_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocService"]])
    ], ApiDocComponent);
    return ApiDocComponent;
}());



/***/ }),

/***/ "./src/app/api_doc/api_doc/api_doc.service.ts":
/*!****************************************************!*\
  !*** ./src/app/api_doc/api_doc/api_doc.service.ts ***!
  \****************************************************/
/*! exports provided: ApiDocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDocService", function() { return ApiDocService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
var ApiDocService = /** @class */ (function () {
    function ApiDocService(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
    }
    ApiDocService.prototype.showProject = function () {
        return this.http.get(BASE_URL + "/api-doc/project", {
            headers: this.header
        }).toPromise();
    };
    ApiDocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiDocService);
    return ApiDocService;
}());



/***/ }),

/***/ "./src/app/api_doc/api_doc_admin/api_doc_admin.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/api_doc/api_doc_admin/api_doc_admin.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 10px\n}\n\n#select-project {\n    margin-left: 1%;\n    margin-right: 1%;\n}\n\n#form-search {\n    margin-bottom: 20px\n}\n\n.card {\n    margin-top: 10px;\n    margin-bottom: 30px;\n}\n\n#txt-add-project {\n    margin-left:10px;\n    margin-right:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGlfZG9jL2FwaV9kb2NfYWRtaW4vYXBpX2RvY19hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiYXBwL2FwaV9kb2MvYXBpX2RvY19hZG1pbi9hcGlfZG9jX2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4XG59XG5cbiNzZWxlY3QtcHJvamVjdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbiNmb3JtLXNlYXJjaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jdHh0LWFkZC1wcm9qZWN0IHtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/api_doc/api_doc_admin/api_doc_admin.component.html":
/*!********************************************************************!*\
  !*** ./src/app/api_doc/api_doc_admin/api_doc_admin.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>Admin api document</h3>\n    <div class=\"form-inline\" id=\"form-search\">\n        <span>Select project: </span>\n        <select \n            [(ngModel)]=\"project_check\" \n            id=\"select-project\" \n            class=\"form-control\">\n            <option \n                *ngFor='let data of project_list' \n                value=\"{{ data.project_id }}\">\n                {{ data.project_name }}\n            </option>\n        </select>\n        <button \n            class=\"btn btn-success\" \n            (click)=\"handleShowProject()\">\n            Show\n        </button> \n        <input \n            type=\"text\" \n            class=\"form-control\" \n            id=\"txt-add-project\"\n            [(ngModel)]=\"txt_project\"\n            [ngModelOptions]=\"{standalone: true}\">\n        <button \n            class=\"btn btn-primary\" \n            (click)=\"handleAddProject()\">\n            Add project\n        </button> \n    </div>\n\n    <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#addModal\">\n        Add api\n    </button>\n    <hr>\n    <a class=\"btn btn-success\" routerLink=\"/api-document\"> Api document </a>\n\n    <div class=\"card\" *ngFor=\"let pro_detail of project_detail\">\n        <div class=\"card-header\">\n            <b>{{ pro_detail.api_method }}: </b>{{ pro_detail.api_name }}\n        </div>\n        <div class=\"card-body\">\n            <span [innerHTML]=\"pro_detail.api_content\"></span>\n            <br>\n            <b><span>Params: </span></b><br>\n            <span [innerHTML]=\"pro_detail.api_params\"></span>\n            <b><span>Respone: </span></b><br>\n            <span [innerHTML]=\"pro_detail.api_response\"></span>\n            <button class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"handleShowOneApi(pro_detail.api_id)\">Edit</button> - \n            <button class=\"btn btn-danger\" (click)=\"handleDeleteApi(pro_detail.api_id)\">Delete</button>\n        </div>\n    </div>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add new API</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <form action=\"\">\n                    <div class=\"form-group\">\n                        <label for=\"\">Method</label>\n                        <select class=\"form-control\" \n                            [(ngModel)]=\"method\"\n                            [ngModelOptions]=\"{standalone: true}\">\n                            <option value=\"Post\">Post</option>\n                            <option value=\"Get\">Get</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Name</label>\n                        <input \n                            class=\"form-control\" \n                            type=\"text\" \n                            [(ngModel)]=\"name\"\n                            [ngModelOptions]=\"{standalone: true}\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Content</label>\n                        <ckeditor \n                            [editor]=\"editor_content\" \n                            data=\"\" \n                            [(ngModel)]=\"content\" \n                            [ngModelOptions]=\"{standalone: true}\">\n                        </ckeditor>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Params</label>\n                        <ckeditor \n                            [editor]=\"editor_params\" \n                            data=\"\" \n                            [(ngModel)]=\"params\" \n                            [ngModelOptions]=\"{standalone: true}\">\n                        </ckeditor>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Response</label>\n                        <ckeditor \n                            [editor]=\"editor_response\" \n                            data=\"\" \n                            [(ngModel)]=\"response\" \n                            [ngModelOptions]=\"{standalone: true}\">\n                        </ckeditor>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"handleAddApi()\">Save changes</button>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit API</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form action=\"\">\n                        <div class=\"form-group\">\n                            <label for=\"\">Method</label>\n                            <select class=\"form-control\" \n                                [(ngModel)]=\"method_edit\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                                <option value=\"Post\">Post</option>\n                                <option value=\"Get\">Get</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\">Name</label>\n                            <input \n                                class=\"form-control\" \n                                type=\"text\" \n                                [(ngModel)]=\"name_edit\"\n                                [ngModelOptions]=\"{standalone: true}\"/>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\">Content</label>\n                            <ckeditor \n                                [editor]=\"editor_content_edit\" \n                                data=\"\" \n                                [(ngModel)]=\"content_edit\" \n                                [ngModelOptions]=\"{standalone: true}\">\n                            </ckeditor>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\">Params</label>\n                            <ckeditor \n                                [editor]=\"editor_params_edit\" \n                                data=\"\" \n                                [(ngModel)]=\"params_edit\" \n                                [ngModelOptions]=\"{standalone: true}\">\n                            </ckeditor>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\">Response</label>\n                            <ckeditor \n                                [editor]=\"editor_response_edit\" \n                                data=\"\" \n                                [(ngModel)]=\"response_edit\" \n                                [ngModelOptions]=\"{standalone: true}\">\n                            </ckeditor>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"handleEditApi()\">Save changes</button>\n                </div>\n            </div>\n        </div>\n    </div>      \n</div>"

/***/ }),

/***/ "./src/app/api_doc/api_doc_admin/api_doc_admin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/api_doc/api_doc_admin/api_doc_admin.component.ts ***!
  \******************************************************************/
/*! exports provided: ApiDocAdmiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDocAdmiComponent", function() { return ApiDocAdmiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_doc_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_doc_admin.service */ "./src/app/api_doc/api_doc_admin/api_doc_admin.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var ApiDocAdmiComponent = /** @class */ (function () {
    function ApiDocAdmiComponent(api_doc_admin_service) {
        this.api_doc_admin_service = api_doc_admin_service;
        this.project_check = '';
        this.txt_project = '';
        this.content = '';
        this.params = '';
        this.response = '';
        this.method = '';
        this.name = '';
        this.editor_content = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.editor_params = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.editor_response = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.id_edit = '';
        this.content_edit = '';
        this.params_edit = '';
        this.response_edit = '';
        this.method_edit = '';
        this.name_edit = '';
        this.editor_content_edit = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.editor_params_edit = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.editor_response_edit = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
    }
    ApiDocAdmiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api_doc_admin_service.getAllProject()
            .then(function (res) {
            console.log(res);
            _this.project_list = res['data'];
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ApiDocAdmiComponent.prototype.handleShowProject = function () {
        var _this = this;
        this.api_doc_admin_service.getDetailProject(this.project_check)
            .then(function (res) {
            _this.project_detail = res['data'];
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ApiDocAdmiComponent.prototype.handleAddApi = function () {
        var _this = this;
        this.api_doc_admin_service.addApi(this.project_check, this.method, this.name, this.content, this.params, this.response)
            .then(function (res) {
            console.log(res);
            _this.handleShowProject();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Add api success', 'success');
        })
            .catch(function (err) {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Add api err', 'error');
        });
    };
    ApiDocAdmiComponent.prototype.handleAddProject = function () {
        var _this = this;
        this.api_doc_admin_service.addProject(this.txt_project)
            .then(function (res) {
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Add project success', 'success');
            _this.ngOnInit();
        })
            .catch(function (err) {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Add project err', 'error');
        });
    };
    ApiDocAdmiComponent.prototype.handleShowOneApi = function (id) {
        var _this = this;
        this.api_doc_admin_service.getOneApi(id)
            .then(function (res) {
            var data = res['data'][0];
            _this.method_edit = data.api_method;
            _this.content_edit = data.api_content;
            _this.name_edit = data.api_name;
            _this.params_edit = data.api_params;
            _this.response_edit = data.api_response;
            _this.id_edit = data.api_id;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ApiDocAdmiComponent.prototype.handleEditApi = function () {
        var _this = this;
        this.api_doc_admin_service.editApi(this.id_edit, this.method_edit, this.name_edit, this.content_edit, this.params_edit, this.response_edit)
            .then(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Edit api success', 'success');
            _this.handleShowProject();
        })
            .catch(function (err) {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Edit api err', 'error');
        });
    };
    ApiDocAdmiComponent.prototype.handleDeleteApi = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: 'You will not be delete this work?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.api_doc_admin_service.deleteApi(id)
                    .then(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Delete api success', 'success');
                    _this.handleShowProject();
                })
                    .catch(function (err) {
                    console.log(err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Delete api err', 'error');
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    ApiDocAdmiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-doc',
            template: __webpack_require__(/*! ./api_doc_admin.component.html */ "./src/app/api_doc/api_doc_admin/api_doc_admin.component.html"),
            providers: [_api_doc_admin_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocAdminService"]],
            styles: [__webpack_require__(/*! ./api_doc_admin.component.css */ "./src/app/api_doc/api_doc_admin/api_doc_admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_doc_admin_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocAdminService"]])
    ], ApiDocAdmiComponent);
    return ApiDocAdmiComponent;
}());



/***/ }),

/***/ "./src/app/api_doc/api_doc_admin/api_doc_admin.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/api_doc/api_doc_admin/api_doc_admin.service.ts ***!
  \****************************************************************/
/*! exports provided: ApiDocAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDocAdminService", function() { return ApiDocAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
var ApiDocAdminService = /** @class */ (function () {
    function ApiDocAdminService(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
    }
    ApiDocAdminService.prototype.getAllProject = function () {
        return this.http.get(BASE_URL + "/api-doc/project", { headers: this.header }).toPromise();
    };
    ApiDocAdminService.prototype.getDetailProject = function (id) {
        return this.http.get(BASE_URL + "/api-doc/project/" + id, { headers: this.header }).toPromise();
    };
    ApiDocAdminService.prototype.addApi = function (project_id, method, name, content, params, response) {
        return this.http.post(BASE_URL + "/api-doc/api/add", JSON.stringify({
            'project_id': project_id,
            'method': method,
            'name': name,
            'content': content,
            'params': params,
            'response': response
        }), {
            headers: this.header
        }).toPromise();
    };
    ApiDocAdminService.prototype.addProject = function (name) {
        return this.http.post(BASE_URL + "/api-doc/project/add", JSON.stringify({ name: name }), { headers: this.header }).toPromise();
    };
    ApiDocAdminService.prototype.getOneApi = function (id) {
        return this.http.get(BASE_URL + "/api-doc/api/" + id, { headers: this.header }).toPromise();
    };
    ApiDocAdminService.prototype.editApi = function (api_id, method, name, content, params, response) {
        return this.http.post(BASE_URL + "/api-doc/api/edit", JSON.stringify({
            'api_id': api_id,
            'method': method,
            'name': name,
            'content': content,
            'params': params,
            'response': response
        }), {
            headers: this.header
        }).toPromise();
    };
    ApiDocAdminService.prototype.deleteApi = function (id) {
        return this.http.post(BASE_URL + "/api-doc/api/delete", JSON.stringify({ 'id': id }), { headers: this.header }).toPromise();
    };
    ApiDocAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiDocAdminService);
    return ApiDocAdminService;
}());



/***/ }),

/***/ "./src/app/api_doc/api_doc_detail/api_doc_detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/api_doc/api_doc_detail/api_doc_detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 10px\n}\n\n.api-detail{\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGlfZG9jL2FwaV9kb2NfZGV0YWlsL2FwaV9kb2NfZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJhcHAvYXBpX2RvYy9hcGlfZG9jX2RldGFpbC9hcGlfZG9jX2RldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTBweFxufVxuXG4uYXBpLWRldGFpbHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/api_doc/api_doc_detail/api_doc_detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/api_doc/api_doc_detail/api_doc_detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <a routerLink=\"/api-document\">Back to home</a>\n    <h3>Api doc detail</h3>\n\n    <div class=\"card api-detail\" *ngFor=\"let pro_detail of data\">\n        <div class=\"card-header bg-info text-white\">\n            <b>{{ pro_detail.api_method }}: </b>{{ pro_detail.api_name }}\n        </div>\n        <div class=\"card-body\">\n            <span [innerHTML]=\"pro_detail.api_content\"></span>\n            <br>\n            <b><span>Params: </span></b><br>\n            <pre [innerHTML]=\"pro_detail.api_params\"></pre>\n            <b><span>Respone: </span></b><br>\n            <pre [innerHTML]=\"pro_detail.api_response\"></pre>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/api_doc/api_doc_detail/api_doc_detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/api_doc/api_doc_detail/api_doc_detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ApiDocDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDocDetailComponent", function() { return ApiDocDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_doc_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_doc_detail.service */ "./src/app/api_doc/api_doc_detail/api_doc_detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ApiDocDetailComponent = /** @class */ (function () {
    function ApiDocDetailComponent(route, api_doc_detail_service) {
        this.route = route;
        this.api_doc_detail_service = api_doc_detail_service;
        this.data = [];
    }
    ApiDocDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.api_doc_detail_service.getDetailProject(this.id)
            .then(function (res) {
            _this.data = res['data'];
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ApiDocDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-doc-detail',
            template: __webpack_require__(/*! ./api_doc_detail.component.html */ "./src/app/api_doc/api_doc_detail/api_doc_detail.component.html"),
            providers: [_api_doc_detail_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocDetailService"]],
            styles: [__webpack_require__(/*! ./api_doc_detail.component.css */ "./src/app/api_doc/api_doc_detail/api_doc_detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _api_doc_detail_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocDetailService"]])
    ], ApiDocDetailComponent);
    return ApiDocDetailComponent;
}());



/***/ }),

/***/ "./src/app/api_doc/api_doc_detail/api_doc_detail.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/api_doc/api_doc_detail/api_doc_detail.service.ts ***!
  \******************************************************************/
/*! exports provided: ApiDocDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDocDetailService", function() { return ApiDocDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
var ApiDocDetailService = /** @class */ (function () {
    function ApiDocDetailService(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
    }
    ApiDocDetailService.prototype.getDetailProject = function (id) {
        return this.http.get(BASE_URL + "/api-doc/project/" + id, { headers: this.header }).toPromise();
    };
    ApiDocDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiDocDetailService);
    return ApiDocDetailService;
}());



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todolist/todolist.module */ "./src/app/todolist/todolist.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _api_doc_api_doc_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api_doc/api_doc.module */ "./src/app/api_doc/api_doc.module.ts");










var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_7__["TodolistModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
                _api_doc_api_doc_module__WEBPACK_IMPORTED_MODULE_9__["ApiDocModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(app_service) {
        this.app_service = app_service;
        this.title = 'myweb';
    }
    AppComponent.prototype.ngOnInit = function () {
        // let that = this;
        // this.time = setInterval(() => {
        //   this.subcCription = that.app_service.refreshToken()
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        // .then(res => {
        //   localStorage.token = res['data']['token'];
        // })
        // .catch(err => {
        //   console.log(err)
        // });
        // }, 1000);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // clearInterval(this.time);
        // if (this.subcCription) {
        //     this.subcCription.unsubscribe();
        // }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.token = '';
        this.header = null;
        if (localStorage.getItem('token') != null) {
            this.token = localStorage.getItem('token');
        }
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'token': this.token,
            'content-type': 'application/json'
        });
    }
    AppService.prototype.refreshToken = function () {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/user/refresh-token", null, { headers: this.header });
    };
    AppService.prototype.test = function () {
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 10px;\n\n}\n\n.row {\nmin-height: 200px;\n}\n\n#left-menu {\n    background-color: azure;\n}\n\n#content {\n    background-color: azure;\n}\n\n#right-menu {\n    background-color: azure;\n}\n\n#nav {\n    min-height: 100px;\n    margin-bottom: 20px;\n    background-image: url('title_background.jpg')\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CO0FBQ0oiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxufVxuXG4ucm93IHtcbm1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4jbGVmdC1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xufVxuXG4jcmlnaHQtbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG59XG5cbiNuYXYge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvaW1hZ2UvdGl0bGVfYmFja2dyb3VuZC5qcGcnKVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" id=\"nav\">\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3\" id=\"left-menu\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"><a routerLink=\"/\">Trang chủ</a></li>\n                <li class=\"list-group-item\"><a routerLink=\"/to-do-list\">Ghi chú cá nhân</a></li>\n                <li class=\"list-group-item\"><a routerLink=\"/api-document\">Tài liệu api</a></li>\n            </ul>\n        </div>\n        <div class=\"col-6\" id=\"content\">\n            <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active\">\n                        <img src=\"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg\" class=\"d-block w-100\" alt=\"...\">\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img src=\"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg\" class=\"d-block w-100\" alt=\"...\">\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img src=\"https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg?cs=srgb&dl=asphalt-autumn-beauty-237018.jpg&fm=jpg\" class=\"d-block w-100\" alt=\"...\">\n                    </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Next</span>\n                </a>\n            </div>\n        </div>\n        <div class=\"col-3\" id=\"right-menu\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"><a routerLink=\"/change-info\">Thay đổi thông tin</a></li>\n                <li class=\"list-group-item\"><a routerLink=\"/change-pass\">Thay đổi mật khẩu</a></li>\n                <li class=\"list-group-item\" (click)=\"handleLogout()\">Đăng xuất</li>\n            </ul>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //check user
        if (localStorage.token === undefined) {
            this.router.navigate(['/login']);
            return;
        }
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/user/check-user", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'content-type': 'application/json',
                'token': localStorage.token
            })
        })
            .toPromise()
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) {
            localStorage.removeItem('token');
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Eror', 'Token invalid', 'error');
            _this.router.navigate(['/login']);
        });
    };
    HomeComponent.prototype.handleLogout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <hr>\n    <button class=\"btn btn-primary\" routerLink=\"/sign-up\">Sign up</button>\n\n    <div class=\"card\" style=\"margin-top: 10px\">\n        <div class=\"card-header\">\n            Login\n        </div>\n        <div class=\"card-body\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"\">Username</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=username [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Password</label>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=password [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"handleLogin()\">Login</button>    \n            </form>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.token !== undefined) {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.handleLogin = function () {
        var _this = this;
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json'
        });
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/user/login", JSON.stringify({
            username: this.username,
            password: this.password
        }), {
            headers: header
        })
            .toPromise()
            .then(function (res) {
            localStorage.token = res['data'].token;
            _this.router.navigate(['/home']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Success', 'Login success!');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <button class=\"btn btn-primary\" routerLink=\"/login\">Login</button>\n\n    <div class=\"card\" style=\"margin-top: 10px\">\n        <div class=\"card-header\">\n            Sign up\n        </div>\n        <div class=\"card-body\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"\">Username</label>\n                    <input type=\"text\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Username</label>\n                    <input type=\"text\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Username</label>\n                    <input type=\"text\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Username</label>\n                    <input type=\"text\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Password</label>\n                    <input type=\"password\" class=\"form-control\">\n                </div>\n                <button type=\"button\" class=\"btn btn-success\">Login</button>    \n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
        if (localStorage.token !== undefined) {
            this.router.navigate(['/home']);
        }
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/todolist/ToDoListAdmin/todolistadmin.component.css":
/*!********************************************************************!*\
  !*** ./src/app/todolist/ToDoListAdmin/todolistadmin.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin: 10px\n}\n\n#title-page {\n    text-align: center;\n    font-weight: bold;\n    color: #b1b1b1;\n}\n\n/* .modal{\n    display: block !important; /* I added this to see the modal, you don't need this\n} */\n\n/* Important part */\n\n.modal-dialog{\n    overflow-y: initial !important\n}\n\n.modal-body{\n    height: 400px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC9Ub0RvTGlzdEFkbWluL3RvZG9saXN0YWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7O0dBRUc7O0FBRUgsbUJBQW1COztBQUNuQjtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFwcC90b2RvbGlzdC9Ub0RvTGlzdEFkbWluL3RvZG9saXN0YWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBtYXJnaW46IDEwcHhcbn1cblxuI3RpdGxlLXBhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2IxYjFiMTtcbn1cblxuLyogLm1vZGFse1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IC8qIEkgYWRkZWQgdGhpcyB0byBzZWUgdGhlIG1vZGFsLCB5b3UgZG9uJ3QgbmVlZCB0aGlzXG59ICovXG5cbi8qIEltcG9ydGFudCBwYXJ0ICovXG4ubW9kYWwtZGlhbG9ne1xuICAgIG92ZXJmbG93LXk6IGluaXRpYWwgIWltcG9ydGFudFxufVxuLm1vZGFsLWJvZHl7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/todolist/ToDoListAdmin/todolistadmin.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/todolist/ToDoListAdmin/todolistadmin.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 id=\"title-page\">QUẢN LÍ GHI CHÚ CÁ NHÂN</h3>\n\n<div class=\"container\">\n  <a routerLink=\"/home\" class=\"btn btn-sm btn-primary\">Trở về trang chủ <i class=\"fas fa-home\"></i></a> -\n  <a routerLink=\"/to-do-list\" class=\"btn btn-sm btn-primary\">Trở về trang trước <i class=\"fas fa-chevron-circle-right\"></i></a> - \n  <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#add-note\"><i class=\"fas fa-database\"></i> Thêm công việc mới</button>\n\n  <table class=\"table table-bordered table-striped table-hover\" id=\"to-do-list\">\n    <thead class=\"bg-info text-white\">\n      <tr>\n        <th scope=\"col\">No</th>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Created at</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let val of datas\">\n        <td>{{ val.note_id }}</td>\n        <td><i class=\"fas fa-sticky-note\"></i> {{ val.title }}</td>\n        <td><i class=\"fas fa-calendar-alt\"></i> {{ val.date | date:'dd/MM/yyyy' }}</td>\n        <td><i class=\"fas fa-calendar-alt\"></i> {{ val.created_at | date:'dd/MM/yyyy HH:mm:ss' }}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-primary btn-edit\" data-toggle=\"modal\" data-target=\"#edit-note\" (click)=\" handleShowOneWork(val.note_id)\">\n            <i class=\"fas fa-edit\"></i> Edit\n          </button> - \n          <button type=\"button\" class=\"btn btn-danger btn-delete\" (click)=\" handleDeleteWork(val.note_id)\">\n            <i class=\"fas fa-trash\"></i> Delete\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"add-note\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Thêm công việc mới</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"\">Tiêu đề</label>\n              <input \n                class=\"form-control\" \n                type=\"text\" \n                [(ngModel)]=\"title\" \n                [ngModelOptions]=\"{standalone: true}\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Nội dung</label>\n              <ckeditor \n                [editor]=\"Editor\" \n                data=\"\" \n                [(ngModel)]=\"content\" \n                [ngModelOptions]=\"{standalone: true}\">\n              </ckeditor>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Ngày hết hạn</label>\n              <input \n                type=\"date\" \n                class=\"datepicker form-control\" \n                [(ngModel)]=\"date\" \n                [ngModelOptions]=\"{standalone: true}\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Mức độ</label>\n              <select \n                class=\"form-control\" \n                [(ngModel)]=\"level\" \n                [ngModelOptions]=\"{standalone: true}\">\n                <option \n                  value=\"{{ level.level_id }}\" \n                  *ngFor=\"let level of level_list\">\n                  {{ level.level_name}}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Sắp xếp</label>\n              <input \n                class=\"form-control\" \n                value=\"-1\" \n                type=\"number\"\n                [(ngModel)]=\"order\"\n                [ngModelOptions]=\"{standalone: true}\"/>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"handleAddWork()\" data-dismiss=\"modal\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"edit-note\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Chỉnh sửa công việc</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"\">Tiêu đề</label>\n              <input \n                class=\"form-control\" \n                type=\"text\" \n                [(ngModel)]=\"title_edit\" \n                [ngModelOptions]=\"{standalone: true}\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Nội dung</label>\n              <ckeditor \n                [editor]=\"Editor_edit\" \n                data=\"\" \n                [(ngModel)]=\"content_edit\" \n                [ngModelOptions]=\"{standalone: true}\">\n              </ckeditor>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Ngày hết hạn</label>\n              <input \n                type=\"date\" \n                class=\"form-control\" \n                [(ngModel)]=\"date_edit\" \n                [ngModelOptions]=\"{standalone: true}\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Mức độ</label>\n              <select \n                class=\"form-control\" \n                [(ngModel)]=\"level_edit\" \n                [ngModelOptions]=\"{standalone: true}\">\n                <option \n                  value=\"{{ level.level_id }}\" \n                  *ngFor=\"let level of level_list\" \n                  [selected]=\"level.level_id==level_edit\"\n                  >\n                    {{ level.level_name}}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Sắp xếp</label>\n              <input \n                class=\"form-control\" \n                value=\"-1\" \n                type=\"number\"\n                [(ngModel)]=\"order_edit\"\n                [ngModelOptions]=\"{standalone: true}\"/>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"handleEditWork()\" data-dismiss=\"modal\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todolist/ToDoListAdmin/todolistadmin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/todolist/ToDoListAdmin/todolistadmin.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodolistadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistadminComponent", function() { return TodolistadminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todolistadmin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolistadmin.service */ "./src/app/todolist/ToDoListAdmin/todolistadmin.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var TodolistadminComponent = /** @class */ (function () {
    function TodolistadminComponent(todolist, router) {
        this.todolist = todolist;
        this.router = router;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.Editor_edit = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.datas = [];
        this.level_list = [];
        this.title = '';
        this.content = '';
        this.date = '';
        this.level = 0;
        this.order = 0;
        this.title_edit = '';
        this.content_edit = '';
        this.date_edit = Date();
        this.level_edit = 0;
        this.order_edit = 0;
        this.id_edit = 0;
    }
    TodolistadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todolist.getAll()
            .then(function (res) {
            _this.datas = res['data'];
        })
            .catch(function (err) { return console.log(err); });
        this.todolist.getLevel()
            .then(function (res) {
            _this.level_list = res['data'];
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TodolistadminComponent.prototype.handleAddWork = function () {
        var _this = this;
        this.todolist.addWork(this.title, this.content, this.date, this.level, this.order)
            .then(function (res) {
            _this.todolist.getAll()
                .then(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'Add note success', 'success');
                _this.datas = res['data'];
            })
                .catch(function (err) { return console.log(err); });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TodolistadminComponent.prototype.handleShowOneWork = function (id) {
        var _this = this;
        this.todolist.getOne(id)
            .then(function (res) {
            var data = res['data'][0];
            var date_pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
            _this.title_edit = data['title'];
            _this.content_edit = data['content'];
            _this.date_edit = date_pipe.transform(data['date'], 'yyyy-MM-dd');
            _this.order_edit = data['orders'];
            _this.level_edit = data['level_id'];
            _this.id_edit = data['note_id'];
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TodolistadminComponent.prototype.handleEditWork = function () {
        var _this = this;
        this.todolist.editWork(this.id_edit, this.title_edit, this.content_edit, this.date_edit, this.level_edit, this.order_edit)
            .then(function (res) {
            _this.todolist.getAll()
                .then(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'Update note success', 'success');
                _this.datas = res['data'];
            })
                .catch(function (err) { return console.log(err); });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TodolistadminComponent.prototype.handleDeleteWork = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: 'You will not be delete this work?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.todolist.deleteWork(id)
                    .then(function (res) {
                    _this.todolist.getAll()
                        .then(function (res) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'Update note success', 'success');
                        _this.datas = res['data'];
                    })
                        .catch(function (err) { return console.log(err); });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'Delete success', 'success');
                })
                    .catch(function (err) { return console.log(err); });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    TodolistadminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todolist',
            template: __webpack_require__(/*! ./todolistadmin.component.html */ "./src/app/todolist/ToDoListAdmin/todolistadmin.component.html"),
            providers: [
                _todolistadmin_service__WEBPACK_IMPORTED_MODULE_2__["ToDoListAdminService"]
            ],
            styles: [__webpack_require__(/*! ./todolistadmin.component.css */ "./src/app/todolist/ToDoListAdmin/todolistadmin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todolistadmin_service__WEBPACK_IMPORTED_MODULE_2__["ToDoListAdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TodolistadminComponent);
    return TodolistadminComponent;
}());



/***/ }),

/***/ "./src/app/todolist/ToDoListAdmin/todolistadmin.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/todolist/ToDoListAdmin/todolistadmin.service.ts ***!
  \*****************************************************************/
/*! exports provided: ToDoListAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoListAdminService", function() { return ToDoListAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ToDoListAdminService = /** @class */ (function () {
    function ToDoListAdminService(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
    }
    ToDoListAdminService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/note/show-all", { headers: this.header }).toPromise();
    };
    ToDoListAdminService.prototype.getLevel = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/note/show-level", { headers: this.header }).toPromise();
    };
    ToDoListAdminService.prototype.getOne = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/note/show/" + id, { headers: this.header }).toPromise();
    };
    ToDoListAdminService.prototype.addWork = function (title, content, date, level, order) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/note/add", JSON.stringify({
            title: title,
            content: content,
            date: date,
            level: level,
            orders: order
        }), {
            headers: this.header
        }).toPromise();
    };
    ToDoListAdminService.prototype.editWork = function (id, title, content, date, level, order) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/note/update", JSON.stringify({
            id: id,
            title: title,
            content: content,
            date: date,
            level: level,
            orders: order
        }), {
            headers: this.header
        }).toPromise();
    };
    ToDoListAdminService.prototype.deleteWork = function (id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/note/delete", JSON.stringify({
            id: id
        }), {
            headers: this.header
        }).toPromise();
    };
    ToDoListAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ToDoListAdminService);
    return ToDoListAdminService;
}());



/***/ }),

/***/ "./src/app/todolist/ToDoListIndex/todolist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/todolist/ToDoListIndex/todolist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin: 10px\n}\n\n#title {\n    text-align: center;\n    font-weight: bold;\n    color: #b1b1b1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC9Ub0RvTGlzdEluZGV4L3RvZG9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6ImFwcC90b2RvbGlzdC9Ub0RvTGlzdEluZGV4L3RvZG9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4XG59XG5cbiN0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjYjFiMWIxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/todolist/ToDoListIndex/todolist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/todolist/ToDoListIndex/todolist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 id=\"title\">GHI CHÚ CÁ NHÂN</h3>\n<a routerLink=\"/home\" class=\"btn btn-sm btn-primary\">Trở về trang chủ <i class=\"fas fa-home\"></i></a> -\n<a routerLink=\"/to-do-list/admin\" class=\"btn btn-sm btn-primary\">Quản lí ghi chú <i class=\"fas fa-chevron-circle-right\"></i></a>\n<div class=\"row d-flex justify-content-center\" id=\"work-list\">\n  <div class=\"col-8\" *ngFor=\"let data of datas\">\n    <div class=\"card\">\n      <div [ngSwitch]=\"data.level_id\">\n        <div *ngSwitchCase=\"1\">\n          <div class=\"card-header bg-info\"><b>{{ data.title }}</b></div>\n        </div>\n        <div *ngSwitchCase=\"2\">\n          <div class=\"card-header bg-success\"><b>{{ data.title }}</b></div>\n        </div>\n        <div *ngSwitchCase=\"3\">\n          <div class=\"card-header bg-warning\"><b>{{ data.title }}</b></div>\n        </div>\n        <div *ngSwitchDefault>\n            <div class=\"card-header bg-danger\"><b>{{ data.title }}</b></div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <p [innerHTML]=\"data.content\"></p>\n        <p><b><i>Deadline:</i></b> {{ data.date }}</p>\n        <p><b><i>Tình trạng:</i></b>{{ data.level_name}}</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todolist/ToDoListIndex/todolist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/todolist/ToDoListIndex/todolist.component.ts ***!
  \**************************************************************/
/*! exports provided: TodolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistComponent", function() { return TodolistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todolist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist.service */ "./src/app/todolist/ToDoListIndex/todolist.service.ts");



var TodolistComponent = /** @class */ (function () {
    function TodolistComponent(todolist) {
        this.todolist = todolist;
        this.datas = [];
    }
    TodolistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todolist.getAll()
            .then(function (res) {
            _this.datas = res['data'];
        })
            .catch(function (err) { return console.log(err); });
    };
    TodolistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todolist',
            template: __webpack_require__(/*! ./todolist.component.html */ "./src/app/todolist/ToDoListIndex/todolist.component.html"),
            providers: [
                _todolist_service__WEBPACK_IMPORTED_MODULE_2__["ToDoListService"]
            ],
            styles: [__webpack_require__(/*! ./todolist.component.css */ "./src/app/todolist/ToDoListIndex/todolist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todolist_service__WEBPACK_IMPORTED_MODULE_2__["ToDoListService"]])
    ], TodolistComponent);
    return TodolistComponent;
}());



/***/ }),

/***/ "./src/app/todolist/ToDoListIndex/todolist.service.ts":
/*!************************************************************!*\
  !*** ./src/app/todolist/ToDoListIndex/todolist.service.ts ***!
  \************************************************************/
/*! exports provided: ToDoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoListService", function() { return ToDoListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ToDoListService = /** @class */ (function () {
    function ToDoListService(http) {
        this.http = http;
    }
    ToDoListService.prototype.getAll = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/note/show-all", { headers: header }).toPromise();
    };
    ToDoListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ToDoListService);
    return ToDoListService;
}());



/***/ }),

/***/ "./src/app/todolist/todolist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/todolist/todolist.module.ts ***!
  \*********************************************/
/*! exports provided: TodolistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistModule", function() { return TodolistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ToDoListIndex_todolist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoListIndex/todolist.component */ "./src/app/todolist/ToDoListIndex/todolist.component.ts");
/* harmony import */ var _ToDoListAdmin_todolistadmin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToDoListAdmin/todolistadmin.component */ "./src/app/todolist/ToDoListAdmin/todolistadmin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var routes = [
    {
        path: 'to-do-list',
        component: _ToDoListIndex_todolist_component__WEBPACK_IMPORTED_MODULE_2__["TodolistComponent"]
    },
    {
        path: 'to-do-list/admin',
        component: _ToDoListAdmin_todolistadmin_component__WEBPACK_IMPORTED_MODULE_3__["TodolistadminComponent"]
    },
];
var TodolistModule = /** @class */ (function () {
    function TodolistModule() {
    }
    TodolistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ],
            declarations: [
                _ToDoListIndex_todolist_component__WEBPACK_IMPORTED_MODULE_2__["TodolistComponent"],
                _ToDoListAdmin_todolistadmin_component__WEBPACK_IMPORTED_MODULE_3__["TodolistadminComponent"]
            ]
        })
    ], TodolistModule);
    return TodolistModule;
}());



/***/ }),

/***/ "./src/app/user/change_info/change_info.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/change_info/change_info.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 100px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2NoYW5nZV9pbmZvL2NoYW5nZV9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6ImFwcC91c2VyL2NoYW5nZV9pbmZvL2NoYW5nZV9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/change_info/change_info.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/change_info/change_info.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card\">\n        <div class=\"card-header bg-primary text-white\">\n            <h3>Change infomation</h3>\n        </div>\n        <div class=\"card-body\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"\">Name</label>\n                    <input \n                        type=\"text\" \n                        class=\"form-control\" \n                        [(ngModel)]=\"name\" \n                        [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Email</label>\n                    <input \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"email\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        readonly>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Birthday</label>\n                    <input \n                        type=\"date\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"birthday\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Address</label>\n                    <input \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"address\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Phone</label>\n                    <input \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"phone\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <button class=\"btn btn-success\" (click)=\"handleChangeInfo()\">Change infomation</button>\n                 - \n                <a class=\"btn btn-warning\" routerLink=\"/home\">Back to home</a>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/change_info/change_info.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/change_info/change_info.component.ts ***!
  \***********************************************************/
/*! exports provided: ChangeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeInfoComponent", function() { return ChangeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _change_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change_info.service */ "./src/app/user/change_info/change_info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ChangeInfoComponent = /** @class */ (function () {
    function ChangeInfoComponent(change_info_service, router) {
        this.change_info_service = change_info_service;
        this.router = router;
        this.name = '';
        this.address = '';
        this.email = '';
        this.birthday = '';
        this.phone = '';
    }
    ChangeInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.change_info_service.getInfo()
            .then(function (res) {
            var date = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
            _this.name = res['data']['user_name'];
            _this.address = res['data']['user_address'];
            _this.email = res['data']['user_email'];
            _this.birthday = date.transform(res['data']['user_birthday'], 'yyyy-MM-dd');
            _this.phone = res['data']['user_phone'];
        })
            .catch(function (err) {
            if (err['status'] === 401) {
                _this.router.navigate(['/login']);
            }
        });
    };
    ChangeInfoComponent.prototype.handleChangeInfo = function () {
        var _this = this;
        this.change_info_service.changeInfo(this.name, this.birthday, this.address, this.phone)
            .then(function (res) {
            console.log(res);
            _this.ngOnInit();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ChangeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-info',
            template: __webpack_require__(/*! ./change_info.component.html */ "./src/app/user/change_info/change_info.component.html"),
            providers: [_change_info_service__WEBPACK_IMPORTED_MODULE_2__["ChangeInfoService"]],
            styles: [__webpack_require__(/*! ./change_info.component.css */ "./src/app/user/change_info/change_info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_change_info_service__WEBPACK_IMPORTED_MODULE_2__["ChangeInfoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChangeInfoComponent);
    return ChangeInfoComponent;
}());



/***/ }),

/***/ "./src/app/user/change_info/change_info.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/change_info/change_info.service.ts ***!
  \*********************************************************/
/*! exports provided: ChangeInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeInfoService", function() { return ChangeInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
var ChangeInfoService = /** @class */ (function () {
    function ChangeInfoService(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
    }
    ChangeInfoService.prototype.getInfo = function () {
        return this.http.get(base_url + "/user/show-user", { headers: this.header }).toPromise();
    };
    ChangeInfoService.prototype.changeInfo = function (name, birthday, address, phone) {
        return this.http.post(base_url + "/user/change-info", JSON.stringify({
            name: name,
            address: address,
            birthday: birthday,
            phone: phone
        }), { headers: this.header }).toPromise();
    };
    ChangeInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChangeInfoService);
    return ChangeInfoService;
}());



/***/ }),

/***/ "./src/app/user/change_pass/change_pass.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/change_pass/change_pass.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 100px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2NoYW5nZV9wYXNzL2NoYW5nZV9wYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6ImFwcC91c2VyL2NoYW5nZV9wYXNzL2NoYW5nZV9wYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/change_pass/change_pass.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/change_pass/change_pass.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card\">\n        <div class=\"card-header bg-primary text-white\">\n            <h3>Change password</h3>\n        </div>\n        <div class=\"card-body\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"\">Old password</label>\n                    <input \n                        type=\"password\" \n                        class=\"form-control\" \n                        [(ngModel)]=\"old_pass\" \n                        [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">New password</label>\n                    <input \n                        type=\"password\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"new_pass\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        (change)=\"handleChangeInput()\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Retype new password</label>\n                    <input \n                        type=\"password\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"retype_new_pass\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        (change)=\"handleChangeInput()\">\n                </div>\n                <button class=\"btn btn-success\" (click)=\"handleChangePass()\">Change infomation</button>\n                 - \n                <a class=\"btn btn-warning\" routerLink=\"/home\">Back to home</a>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/change_pass/change_pass.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/change_pass/change_pass.component.ts ***!
  \***********************************************************/
/*! exports provided: ChangePassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassComponent", function() { return ChangePassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _change_pass_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change_pass.service */ "./src/app/user/change_pass/change_pass.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var ChangePassComponent = /** @class */ (function () {
    function ChangePassComponent(change_pass_service) {
        this.change_pass_service = change_pass_service;
        this.old_pass = '';
        this.new_pass = '';
        this.retype_new_pass = '';
    }
    ChangePassComponent.prototype.ngOnInit = function () {
    };
    ChangePassComponent.prototype.handleChangeInput = function () {
        if (this.new_pass !== this.retype_new_pass && this.retype_new_pass !== "")
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error', 'New password and retype is not valid', 'error');
        if (this.old_pass === this.new_pass && this.new_pass !== '')
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error', 'New password must be different from old password', 'error');
    };
    ChangePassComponent.prototype.handleChangePass = function () {
        this.change_pass_service.changePass(this.old_pass, this.new_pass)
            .then(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Success', 'Change password success', 'success');
        })
            .catch(function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error', 'Change password error', 'error');
        });
    };
    ChangePassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-pass',
            template: __webpack_require__(/*! ./change_pass.component.html */ "./src/app/user/change_pass/change_pass.component.html"),
            providers: [_change_pass_service__WEBPACK_IMPORTED_MODULE_2__["ChangePassService"]],
            styles: [__webpack_require__(/*! ./change_pass.component.css */ "./src/app/user/change_pass/change_pass.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_change_pass_service__WEBPACK_IMPORTED_MODULE_2__["ChangePassService"]])
    ], ChangePassComponent);
    return ChangePassComponent;
}());



/***/ }),

/***/ "./src/app/user/change_pass/change_pass.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/change_pass/change_pass.service.ts ***!
  \*********************************************************/
/*! exports provided: ChangePassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassService", function() { return ChangePassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ChangePassService = /** @class */ (function () {
    function ChangePassService(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
    }
    ChangePassService.prototype.changePass = function (old_pass, new_pass) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/user/change-pass", JSON.stringify({
            'old_pass': old_pass,
            'new_pass': new_pass,
        }), { headers: this.header }).toPromise();
    };
    ChangePassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChangePassService);
    return ChangePassService;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _change_info_change_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change_info/change_info.component */ "./src/app/user/change_info/change_info.component.ts");
/* harmony import */ var _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change_pass/change_pass.component */ "./src/app/user/change_pass/change_pass.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

var routes = [
    {
        path: 'change-info',
        component: _change_info_change_info_component__WEBPACK_IMPORTED_MODULE_2__["ChangeInfoComponent"],
        pathMatch: 'full'
    },
    {
        path: 'change-pass',
        component: _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_3__["ChangePassComponent"],
        pathMatch: 'full'
    },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
            declarations: [
                _change_info_change_info_component__WEBPACK_IMPORTED_MODULE_2__["ChangeInfoComponent"],
                _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_3__["ChangePassComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
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
    production: false,
    baseUrl: 'http://myweb-local-api.huynguyen.xyz/api'
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

module.exports = __webpack_require__(/*! /var/www/html/nodejs/angular/myweb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map