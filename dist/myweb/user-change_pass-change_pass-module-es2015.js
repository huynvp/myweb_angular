(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-change_pass-change_pass-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/change_pass/change_pass.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/change_pass/change_pass.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container fadeIn first\">\n    <div class=\"card\">\n        <div class=\"card-header bg-primary text-white\">\n            <h3>Change password</h3>\n        </div>\n        <div class=\"card-body\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"\">Old password</label>\n                    <input \n                        type=\"password\" \n                        class=\"form-control\" \n                        [(ngModel)]=\"old_pass\" \n                        [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">New password</label>\n                    <input \n                        type=\"password\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"new_pass\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        (change)=\"handleChangeInput()\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Retype new password</label>\n                    <input \n                        type=\"password\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"retype_new_pass\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        (change)=\"handleChangeInput()\">\n                </div>\n                <button class=\"btn btn-success\" (click)=\"handleChangePass()\">Change infomation</button>\n                 - \n                <a class=\"btn btn-warning\" routerLink=\"/home\">Back to home</a>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/user/change_pass/change_pass.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/change_pass/change_pass.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    margin-top: 100px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaGFuZ2VfcGFzcy9jaGFuZ2VfcGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hhbmdlX3Bhc3MvY2hhbmdlX3Bhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _change_pass_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change_pass.service */ "./src/app/user/change_pass/change_pass.service.ts");



let ChangePassComponent = class ChangePassComponent {
    constructor(change_pass_service) {
        this.change_pass_service = change_pass_service;
        this.old_pass = '';
        this.new_pass = '';
        this.retype_new_pass = '';
    }
    ngOnInit() {
    }
    handleChangeInput() {
        // if(this.new_pass !== this.retype_new_pass && this.retype_new_pass !== "")
        //   Swal.fire('Error', 'New password and retype is not valid', 'error');
        // if(this.old_pass === this.new_pass && this.new_pass !== '')
        //   Swal.fire('Error', 'New password must be different from old password', 'error');
    }
    handleChangePass() {
        this.change_pass_service.changePass(this.old_pass, this.new_pass)
            .then(res => {
            $.notify({
                icon: 'glyphicon glyphicon-remove',
                title: 'Success: ',
                message: res['message'],
            }, {
                type: 'success',
            });
        })
            .catch(err => {
            $.notify({
                icon: 'glyphicon glyphicon-remove',
                title: 'Error: ',
                message: err['error']['message'],
            }, {
                type: 'danger',
            });
        });
    }
};
ChangePassComponent.ctorParameters = () => [
    { type: _change_pass_service__WEBPACK_IMPORTED_MODULE_2__["ChangePassService"] }
];
ChangePassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-pass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change_pass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/change_pass/change_pass.component.html")).default,
        providers: [_change_pass_service__WEBPACK_IMPORTED_MODULE_2__["ChangePassService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change_pass.component.css */ "./src/app/user/change_pass/change_pass.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_change_pass_service__WEBPACK_IMPORTED_MODULE_2__["ChangePassService"]])
], ChangePassComponent);



/***/ }),

/***/ "./src/app/user/change_pass/change_pass.module.ts":
/*!********************************************************!*\
  !*** ./src/app/user/change_pass/change_pass.module.ts ***!
  \********************************************************/
/*! exports provided: ChangePassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassModule", function() { return ChangePassModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _change_pass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change_pass.component */ "./src/app/user/change_pass/change_pass.component.ts");




// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


const routes = [
    {
        path: '',
        component: _change_pass_component__WEBPACK_IMPORTED_MODULE_5__["ChangePassComponent"],
    },
];
let ChangePassModule = class ChangePassModule {
};
ChangePassModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ],
        declarations: [
            _change_pass_component__WEBPACK_IMPORTED_MODULE_5__["ChangePassComponent"],
        ]
    })
], ChangePassModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let ChangePassService = class ChangePassService {
    constructor(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.access_token
        });
    }
    changePass(old_pass, new_pass) {
        console.log(localStorage.access_token);
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/user/password`, JSON.stringify({
            'OldPass': old_pass,
            'NewPass': new_pass,
        }), { headers: this.header }).toPromise();
    }
};
ChangePassService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChangePassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ChangePassService);



/***/ })

}]);
//# sourceMappingURL=user-change_pass-change_pass-module-es2015.js.map