(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark bg-info\">\n  <a class=\"navbar-brand\" routerLink=\"/admin\">Admin page</a>\n</nav>\n<div class=\"row\">\n  <div class=\"col-xs-2 col-md-2 left-menu fadeIn first\">\n    <div class=\"d-flex flex-column mb-3 bg-dark nav nav-tabs\">\n      <div>\n        <div class=\"p-3 text tab-title\">Tài khoản</div>\n      </div>\n      <a class=\"nav-link p-3 text\" routerLink=\"/admin/user\" routerLinkActive=\"active\">\n        <i class=\"fas fa-users\"></i> Người dùng\n      </a>\n      <a class=\"nav-link p-3 text\" routerLink=\"/admin/permission\" routerLinkActive=\"active\">\n        <i class=\"fas fa-user-shield\"></i> Quyền\n      </a>\n      <a class=\"nav-link p-3 text\" routerLink=\"/admin/log\" routerLinkActive=\"active\">\n        <i class=\"fas fa-file-alt\"></i> Nhật kí người dùng\n      </a>\n      <div>\n        <div class=\"p-3 text tab-title\">Công việc</div>\n      </div>\n      <a class=\"nav-link p-3 text\" routerLink=\"/admin/taskWork\" routerLinkActive=\"active\">\n        <i class=\"fas fa-users\"></i> Quản lí công việc\n      </a>\n      <div>\n        <div class=\"p-3 text tab-title\">Cấu hình</div>\n      </div>\n      <a class=\"nav-link p-3 text\" routerLink=\"/admin/messageLog\" routerLinkActive=\"active\">\n        <i class=\"fas fa-users\"></i> Nội dung ghi nhật kí\n      </a>\n      <a class=\"nav-link p-3 text\" routerLink=\"/admin/logDebug\" routerLinkActive=\"active\">\n        <i class=\"fas fa-users\"></i> Log debug\n      </a>\n      <a class=\"nav-link p-3 text\" routerLink=\"/index\">\n        <i class=\"fas fa-home\"></i> Trang chủ\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-10 col-md-8 right-menu\">\n    <router-outlet></router-outlet>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api_doc/api_doc/api_doc.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api_doc/api_doc/api_doc.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <a routerLink='/home' class=\"btn btn-secondary\">Back to home</a> - \n    <a routerLink='/api-document/admin' class=\"btn btn-success\">Go to admin</a>\n    <hr>\n    <div class=\"card\">\n        <div class=\"card-header bg-primary text-white\">\n            <h3>Api document</h3>\n        </div>\n        <div class=\"card-body\">\n            <ul class=\"list-group\" *ngFor=\"let project of data\">\n                <li class=\"list-group-item\">\n                    {{ project.project_name }}\n                    <span class=\"badge badge-success badge-pill\">{{ project.count_project }}</span> - \n                    <a class=\"btn btn-primary\" routerLink=\"/api-document/detail/{{ project.project_id }}\">Detail</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api_doc/api_doc_admin/api_doc_admin.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api_doc/api_doc_admin/api_doc_admin.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3>Admin api document</h3>\n    <div class=\"form-inline\" id=\"form-search\">\n        <span>Select project: </span>\n        <select \n            [(ngModel)]=\"project_check\" \n            id=\"select-project\" \n            class=\"form-control\">\n            <option \n                *ngFor='let data of project_list' \n                value=\"{{ data.project_id }}\">\n                {{ data.project_name }}\n            </option>\n        </select>\n        <button \n            class=\"btn btn-success\" \n            (click)=\"handleShowProject()\">\n            Show\n        </button> \n        <input \n            type=\"text\" \n            class=\"form-control\" \n            id=\"txt-add-project\"\n            [(ngModel)]=\"txt_project\"\n            [ngModelOptions]=\"{standalone: true}\">\n        <button \n            class=\"btn btn-primary\" \n            (click)=\"handleAddProject()\">\n            Add project\n        </button> \n    </div>\n\n    <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#addModal\">\n        Add api\n    </button>\n    <hr>\n    <a class=\"btn btn-success\" routerLink=\"/api-document\"> Api document </a>\n\n    <div class=\"card\" *ngFor=\"let pro_detail of project_detail\">\n        <div class=\"card-header\">\n            <b>{{ pro_detail.api_method }}: </b>{{ pro_detail.api_name }}\n        </div>\n        <div class=\"card-body\">\n            <span [innerHTML]=\"pro_detail.api_content\"></span>\n            <br>\n            <b><span>Params: </span></b><br>\n            <span [innerHTML]=\"pro_detail.api_params\"></span>\n            <b><span>Respone: </span></b><br>\n            <span [innerHTML]=\"pro_detail.api_response\"></span>\n            <button class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"handleShowOneApi(pro_detail.api_id)\">Edit</button> - \n            <button class=\"btn btn-danger\" (click)=\"handleDeleteApi(pro_detail.api_id)\">Delete</button>\n        </div>\n    </div>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add new API</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <form action=\"\">\n                    <div class=\"form-group\">\n                        <label for=\"\">Method</label>\n                        <select class=\"form-control\" \n                            [(ngModel)]=\"method\"\n                            [ngModelOptions]=\"{standalone: true}\">\n                            <option value=\"Post\">Post</option>\n                            <option value=\"Get\">Get</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Name</label>\n                        <input \n                            class=\"form-control\" \n                            type=\"text\" \n                            [(ngModel)]=\"name\"\n                            [ngModelOptions]=\"{standalone: true}\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Content</label>\n                        <ckeditor \n                            [editor]=\"editor_content\" \n                            data=\"\" \n                            [(ngModel)]=\"content\" \n                            [ngModelOptions]=\"{standalone: true}\">\n                        </ckeditor>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Params</label>\n                        <ckeditor \n                            [editor]=\"editor_params\" \n                            data=\"\" \n                            [(ngModel)]=\"params\" \n                            [ngModelOptions]=\"{standalone: true}\">\n                        </ckeditor>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Response</label>\n                        <ckeditor \n                            [editor]=\"editor_response\" \n                            data=\"\" \n                            [(ngModel)]=\"response\" \n                            [ngModelOptions]=\"{standalone: true}\">\n                        </ckeditor>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"handleAddApi()\">Save changes</button>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit API</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form action=\"\">\n                        <div class=\"form-group\">\n                            <label for=\"\">Method</label>\n                            <select class=\"form-control\" \n                                [(ngModel)]=\"method_edit\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                                <option value=\"Post\">Post</option>\n                                <option value=\"Get\">Get</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\">Name</label>\n                            <input \n                                class=\"form-control\" \n                                type=\"text\" \n                                [(ngModel)]=\"name_edit\"\n                                [ngModelOptions]=\"{standalone: true}\"/>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\">Content</label>\n                            <ckeditor \n                                [editor]=\"editor_content_edit\" \n                                data=\"\" \n                                [(ngModel)]=\"content_edit\" \n                                [ngModelOptions]=\"{standalone: true}\">\n                            </ckeditor>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\">Params</label>\n                            <ckeditor \n                                [editor]=\"editor_params_edit\" \n                                data=\"\" \n                                [(ngModel)]=\"params_edit\" \n                                [ngModelOptions]=\"{standalone: true}\">\n                            </ckeditor>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\">Response</label>\n                            <ckeditor \n                                [editor]=\"editor_response_edit\" \n                                data=\"\" \n                                [(ngModel)]=\"response_edit\" \n                                [ngModelOptions]=\"{standalone: true}\">\n                            </ckeditor>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"handleEditApi()\">Save changes</button>\n                </div>\n            </div>\n        </div>\n    </div>      \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api_doc/api_doc_detail/api_doc_detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api_doc/api_doc_detail/api_doc_detail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <a routerLink=\"/api-document\">Back to home</a>\n    <h3>Api doc detail</h3>\n\n    <div class=\"card api-detail\" *ngFor=\"let pro_detail of data\">\n        <div class=\"card-header bg-info text-white\">\n            <b>{{ pro_detail.api_method }}: </b>{{ pro_detail.api_name }}\n        </div>\n        <div class=\"card-body\">\n            <span [innerHTML]=\"pro_detail.api_content\"></span>\n            <br>\n            <b><span>Params: </span></b><br>\n            <pre [innerHTML]=\"pro_detail.api_params\"></pre>\n            <b><span>Respone: </span></b><br>\n            <pre [innerHTML]=\"pro_detail.api_response\"></pre>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<ngx-spinner\nbdOpacity = 0.8\nbdColor = \"#333\"\nsize = \"small\"\ncolor = \"#fff\"\ntype = \"line-scale-pulse-out\"\n[fullScreen] = \"true\"\n>\n<p style=\"color: white\" > Đang tải </p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3>Chat</h3>\n    <a routerLink=\"/home\">Go home</a>\n    <div class=\"row\">\n        <div class=\"col-3\">\n            <div class=\"card\">\n                <div class=\"card-title bg-info text-white\">\n                    <div class=\"card-header\">\n                        User online\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <ul>\n                        <li>123</li>\n                        <li>123</li>\n                        <li>123</li>\n                        <li>123</li>\n                        <li>123</li>\n                        <li>123</li>\n                        <li>123</li>\n                        <li>123</li>\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-6\">\n            <div id=\"content\">\n                List message\n            </div>\n            <div>\n                <form action=\"\">\n                    <div class=\"form-group\">\n                        <input \n                            id=\"chat-content\"\n                            [(ngModel)] = \"content_mess\"\n                            [ngModelOptions]=\"{standalone: true}\"\n                            type=\"text\" \n                            class=\"form-control\" \n                            (keyup.enter)=\"handleSendMess()\" \n                            (focusin)=\"handleFoucusIn()\"\n                            (focusout)=\"handleFoucusOut()\"\n                            />\n                        <span>Press enter to send message</span>\n                        \n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-3\">\n                <div class=\"card\">\n                    <div class=\"card-title bg-info text-white\">\n                        <div class=\"card-header\">\n                            Action\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n                        <ul>\n                            <li>123</li>\n                            <li>123</li>\n                            <li>123</li>\n                            <li>123</li>\n                            <li>123</li>\n                            <li>123</li>\n                            <li>123</li>\n                            <li>123</li>\n    \n                        </ul>\n                    </div>\n                </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark bg-info\">\n  <a class=\"navbar-brand\" routerLink=\"/index\">MyWeb</a>\n</nav>\n<div class=\"row\" style=\"margin-right: 0;\">\n  <div class=\"col-xs-2 col-md-2 left-menu fadeIn first\">\n    <div class=\"d-flex flex-column mb-3 bg-dark nav nav-tabs\">\n      <div>\n        <div class=\"p-3 text tab-title\">Trang chủ</div>\n      </div>\n      <a class=\"nav-link p-3 text\" routerLink=\"/index\" routerLinkActive=\"active\">\n        <i class=\"fas fa-users\"></i> Trang chủ\n      </a>\n      <div>\n        <div class=\"p-3 text tab-title\">Cá nhân</div>\n      </div>\n      <a class=\"nav-link p-3 text\" routerLink=\"/user/change-info\" routerLinkActive=\"active\">\n        <i class=\"fas fa-users\"></i> Thay đổi thông tin\n      </a>\n      <a class=\"nav-link p-3 text\" routerLink=\"/user/change-pass\" routerLinkActive=\"active\">\n        <i class=\"fas fa-user-shield\"></i> Thay đổi mật khẩu\n      </a>\n      <a class=\"nav-link p-3 text\" routerLink=\"/log-out\" routerLinkActive=\"active\" (click)=\"handleLogout()\">\n        <i class=\"fas fa-user-shield\"></i> Đăng xuất\n      </a>\n      <div>\n        <div class=\"p-3 text tab-title\">Quản lí</div>\n      </div>\n      <a class=\"nav-link p-3 text\" routerLink=\"/admin\" routerLinkActive=\"active\">\n        <i class=\"fas fa-user-shield\"></i> Quản trị\n      </a>\n      <a class=\"nav-link p-3 text\" routerLink=\"/moneyManage\" routerLinkActive=\"active\">\n        <i class=\"fas fa-user-shield\"></i> Quản lí thu chi\n      </a>\n      <div>\n        <div class=\"p-3 text tab-title\">Ghi chú cá nhân</div>\n      </div>\n      <a class=\"nav-link p-3 text\" routerLink=\"/to-do-list\" routerLinkActive=\"active\">\n        <i class=\"fas fa-user-shield\"></i> Ghi chú cá nhân\n      </a>\n      <div>\n        <div class=\"p-3 text tab-title\">Tài liệu API</div>\n      </div>\n      <a class=\"nav-link p-3 text\" routerLink=\"/api-document\" routerLinkActive=\"active\">\n        <i class=\"fas fa-user-shield\"></i> Tài liệu API\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-10 col-md-9 right-menu\">\n    <router-outlet></router-outlet>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"wrapper fadeInDown\">\n        <div id=\"formContent\">\n            <div class=\"fadeIn first\">\n                <h2>Login to system</h2>\n            </div>\n            <form #form_login=\"ngForm\" (keyup.enter)=\"handleLogin()\">\n                <input type=\"text\" id=\"login\" class=\"fadeIn second\" [(ngModel)]=\"username\" email required\n                    name=\"username\" placeholder=\"Username/ Tên tài khoản\" />\n                <input type=\"password\" id=\"password\" class=\"fadeIn third\" [(ngModel)]=\"password\" required\n                    name=\"password\" placeholder=\"Password/ Mật khẩu\" />\n                <button type=\"button\" class=\"btn btn-info fadeIn fourth\" [disabled]=\"form_login.invalid\" type=\"button\"\n                    (click)=\"handleLogin()\">\n                    Login / Đăng nhập\n                </button>\n            </form>\n            <div id=\"formFooter\">\n                <a class=\"underlineHover\" routerLink=\"/sign-up\">Sign up?</a><br>\n                <a class=\"underlineHover\" data-target=\"#exampleForgot\" data-toggle=\"modal\">Forgot password?</a>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"exampleForgot\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Quên mật khẩu</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form action=\"\">\n                        <div class=\"form-group\">\n                            <label for=\"\">Email</label><br>\n                            <input type=\"text\" class=\"fadeIn first\" name=\"forgotEmail\" [(ngModel)]=\"forgotEmail\">\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"hanleForgotPass()\" data-dismiss=\"modal\">Save changes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"wrapper fadeInDown\">\n        <div id=\"formContent\">\n            <div class=\"fadeIn first\">\n                <h2>Sign up</h2>\n            </div>\n            <form #form_login=\"ngForm\">\n                <input type=\"text\" id=\"name\" class=\"fadeIn second\" [(ngModel)]=\"name\" required\n                    name=\"name\" placeholder=\"Họ tên\" />\n                <input type=\"email\" id=\"email\" class=\"fadeIn second\" [(ngModel)]=\"email\" email required name=\"email\"\n                    placeholder=\"Email\" />\n                <input type=\"date\" id=\"birthday\" class=\"fadeIn second\" [(ngModel)]=\"birthday\" required name=\"birthday\"\n                    placeholder=\"Birthday/ Ngày sinh\" />\n                <input type=\"text\" id=\"address\" class=\"fadeIn second\" [(ngModel)]=\"address\" required name=\"address\"\n                    placeholder=\"Address/ Địa chỉ\" />\n                <input type=\"text\" id=\"phone\" class=\"fadeIn second\" [(ngModel)]=\"phone\" required name=\"phone\"\n                    placeholder=\"Phone/ Điện thoại\" />\n                <input type=\"password\" id=\"password\" class=\"fadeIn second\" [(ngModel)]=\"password\" required name=\"password\"\n                    placeholder=\"Password/ Mật khẩu\" />\n                <input type=\"password\" id=\"re-password\" class=\"fadeIn second\" [(ngModel)]=\"re_password\" required name=\"re_password\"\n                    placeholder=\"Password/ Nhập lại mật khẩu\" />\n                <button type=\"button\" class=\"btn btn-info fadeIn fourth\" \n                    [disabled]=\"form_login.invalid || form_login.password != form_login.re_password\" type=\"button\"\n                    (click)=\"handleSignup()\">\n                    Sign up / Đăng kí\n                </button>\n            </form>\n            <div id=\"formFooter\">\n                <a class=\"underlineHover\" routerLink=\"/login\">Login</a>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../index/index.module": [
		"./src/app/index/index.module.ts",
		"index-index-module"
	],
	"../moneyManage/moneyManage.module": [
		"./src/app/moneyManage/moneyManage.module.ts",
		"default~moneyManage-moneyManage-module~todolist-todolist-module",
		"moneyManage-moneyManage-module"
	],
	"../todolist/todolist.module": [
		"./src/app/todolist/todolist.module.ts",
		"default~moneyManage-moneyManage-module~todolist-todolist-module",
		"todolist-todolist-module"
	],
	"../user/change_info/change_info.module": [
		"./src/app/user/change_info/change_info.module.ts",
		"user-change_info-change_info-module"
	],
	"../user/change_pass/change_pass.module": [
		"./src/app/user/change_pass/change_pass.module.ts",
		"user-change_pass-change_pass-module"
	],
	"./Debug/Log/logDebug.module": [
		"./src/app/admin/Debug/Log/logDebug.module.ts",
		"common",
		"Debug-Log-logDebug-module"
	],
	"./UserAdmin/Log/loguseradmin.module": [
		"./src/app/admin/UserAdmin/Log/loguseradmin.module.ts",
		"common",
		"UserAdmin-Log-loguseradmin-module"
	],
	"./UserAdmin/MessageLog/messagelog.module": [
		"./src/app/admin/UserAdmin/MessageLog/messagelog.module.ts",
		"common",
		"UserAdmin-MessageLog-messagelog-module"
	],
	"./UserAdmin/Permission/permissionuseradmin.module": [
		"./src/app/admin/UserAdmin/Permission/permissionuseradmin.module.ts",
		"common",
		"UserAdmin-Permission-permissionuseradmin-module"
	],
	"./UserAdmin/TaskWork/taskworkadmin.module": [
		"./src/app/admin/UserAdmin/TaskWork/taskworkadmin.module.ts",
		"common",
		"UserAdmin-TaskWork-taskworkadmin-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_shread_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shread/base.component */ "./src/shread/base.component.ts");





let AdminComponent = class AdminComponent extends src_shread_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(router, http) {
        super(router, http);
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield _super.ngOnInit.call(this);
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");









const routes = [
    {
        path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
        children: [
            {
                path: 'log',
                loadChildren: './UserAdmin/Log/loguseradmin.module#LogUserAdminModule'
            },
            {
                path: 'permission',
                loadChildren: './UserAdmin/Permission/permissionuseradmin.module#PermissionUserAdminModule'
            },
            {
                path: 'taskWork',
                loadChildren: './UserAdmin/TaskWork/taskworkadmin.module#TaskWorkAdminModule'
            },
            {
                path: 'messageLog',
                loadChildren: './UserAdmin/MessageLog/messagelog.module#MessageLogModule'
            },
            {
                path: 'logDebug',
                loadChildren: './Debug/Log/logDebug.module#LogDebugUserAdminModule'
            }
        ]
    }
];
let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"],
            // DataTablesModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"]
        ],
        declarations: [
            _admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"]
        ]
    })
], AdminModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_doc/api_doc.component */ "./src/app/api_doc/api_doc/api_doc.component.ts");
/* harmony import */ var _api_doc_detail_api_doc_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api_doc_detail/api_doc_detail.component */ "./src/app/api_doc/api_doc_detail/api_doc_detail.component.ts");
/* harmony import */ var _api_doc_admin_api_doc_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api_doc_admin/api_doc_admin.component */ "./src/app/api_doc/api_doc_admin/api_doc_admin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");









const routes = [
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
let ApiDocModule = class ApiDocModule {
};
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



/***/ }),

/***/ "./src/app/api_doc/api_doc/api_doc.component.css":
/*!*******************************************************!*\
  !*** ./src/app/api_doc/api_doc/api_doc.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    margin-top: 10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpX2RvYy9hcGlfZG9jL2FwaV9kb2MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcGlfZG9jL2FwaV9kb2MvYXBpX2RvYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTBweFxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_doc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_doc.service */ "./src/app/api_doc/api_doc/api_doc.service.ts");



let ApiDocComponent = class ApiDocComponent {
    constructor(api_doc_service) {
        this.api_doc_service = api_doc_service;
        this.data = [];
    }
    ngOnInit() {
        this.api_doc_service.showProject()
            .then(res => {
            this.data = res['data'];
        })
            .catch(err => {
        });
    }
};
ApiDocComponent.ctorParameters = () => [
    { type: _api_doc_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocService"] }
];
ApiDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-api-doc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./api_doc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api_doc/api_doc/api_doc.component.html")).default,
        providers: [_api_doc_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./api_doc.component.css */ "./src/app/api_doc/api_doc/api_doc.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_doc_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocService"]])
], ApiDocComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
let ApiDocService = class ApiDocService {
    constructor(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
    }
    showProject() {
        return this.http.get(`${BASE_URL}/api-doc/project`, {
            headers: this.header
        }).toPromise();
    }
};
ApiDocService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiDocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiDocService);



/***/ }),

/***/ "./src/app/api_doc/api_doc_admin/api_doc_admin.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/api_doc/api_doc_admin/api_doc_admin.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    margin-top: 10px\n}\n\n#select-project {\n    margin-left: 1%;\n    margin-right: 1%;\n}\n\n#form-search {\n    margin-bottom: 20px\n}\n\n.card {\n    margin-top: 10px;\n    margin-bottom: 30px;\n}\n\n#txt-add-project {\n    margin-left:10px;\n    margin-right:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpX2RvYy9hcGlfZG9jX2FkbWluL2FwaV9kb2NfYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBpX2RvYy9hcGlfZG9jX2FkbWluL2FwaV9kb2NfYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHhcbn1cblxuI3NlbGVjdC1wcm9qZWN0IHtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuI2Zvcm0tc2VhcmNoIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG59XG5cbi5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiN0eHQtYWRkLXByb2plY3Qge1xuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_doc_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_doc_admin.service */ "./src/app/api_doc/api_doc_admin/api_doc_admin.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ApiDocAdmiComponent = class ApiDocAdmiComponent {
    constructor(api_doc_admin_service) {
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
    ngOnInit() {
        this.api_doc_admin_service.getAllProject()
            .then(res => {
            console.log(res);
            this.project_list = res['data'];
        })
            .catch(err => {
            console.log(err);
        });
    }
    handleShowProject() {
        this.api_doc_admin_service.getDetailProject(this.project_check)
            .then(res => {
            this.project_detail = res['data'];
        })
            .catch(err => {
            console.log(err);
        });
    }
    handleAddApi() {
        this.api_doc_admin_service.addApi(this.project_check, this.method, this.name, this.content, this.params, this.response)
            .then(res => {
            console.log(res);
            this.handleShowProject();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Add api success', 'success');
        })
            .catch(err => {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Add api err', 'error');
        });
    }
    handleAddProject() {
        this.api_doc_admin_service.addProject(this.txt_project)
            .then(res => {
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Add project success', 'success');
            this.ngOnInit();
        })
            .catch(err => {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Add project err', 'error');
        });
    }
    handleShowOneApi(id) {
        this.api_doc_admin_service.getOneApi(id)
            .then(res => {
            let data = res['data'][0];
            this.method_edit = data.api_method;
            this.content_edit = data.api_content;
            this.name_edit = data.api_name;
            this.params_edit = data.api_params;
            this.response_edit = data.api_response;
            this.id_edit = data.api_id;
        })
            .catch(err => {
            console.log(err);
        });
    }
    handleEditApi() {
        this.api_doc_admin_service.editApi(this.id_edit, this.method_edit, this.name_edit, this.content_edit, this.params_edit, this.response_edit)
            .then(res => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Edit api success', 'success');
            this.handleShowProject();
        })
            .catch(err => {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Edit api err', 'error');
        });
    }
    handleDeleteApi(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: 'You will not be delete this work?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.api_doc_admin_service.deleteApi(id)
                    .then(res => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Delete api success', 'success');
                    this.handleShowProject();
                })
                    .catch(err => {
                    console.log(err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Delete api err', 'error');
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
};
ApiDocAdmiComponent.ctorParameters = () => [
    { type: _api_doc_admin_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocAdminService"] }
];
ApiDocAdmiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-api-doc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./api_doc_admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api_doc/api_doc_admin/api_doc_admin.component.html")).default,
        providers: [_api_doc_admin_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocAdminService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./api_doc_admin.component.css */ "./src/app/api_doc/api_doc_admin/api_doc_admin.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_doc_admin_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocAdminService"]])
], ApiDocAdmiComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
let ApiDocAdminService = class ApiDocAdminService {
    constructor(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
    }
    getAllProject() {
        return this.http.get(`${BASE_URL}/api-doc/project`, { headers: this.header }).toPromise();
    }
    getDetailProject(id) {
        return this.http.get(`${BASE_URL}/api-doc/project/${id}`, { headers: this.header }).toPromise();
    }
    addApi(project_id, method, name, content, params, response) {
        return this.http.post(`${BASE_URL}/api-doc/api/add`, JSON.stringify({
            'project_id': project_id,
            'method': method,
            'name': name,
            'content': content,
            'params': params,
            'response': response
        }), {
            headers: this.header
        }).toPromise();
    }
    addProject(name) {
        return this.http.post(`${BASE_URL}/api-doc/project/add`, JSON.stringify({ name: name }), { headers: this.header }).toPromise();
    }
    getOneApi(id) {
        return this.http.get(`${BASE_URL}/api-doc/api/${id}`, { headers: this.header }).toPromise();
    }
    editApi(api_id, method, name, content, params, response) {
        return this.http.post(`${BASE_URL}/api-doc/api/edit`, JSON.stringify({
            'api_id': api_id,
            'method': method,
            'name': name,
            'content': content,
            'params': params,
            'response': response
        }), {
            headers: this.header
        }).toPromise();
    }
    deleteApi(id) {
        return this.http.post(`${BASE_URL}/api-doc/api/delete`, JSON.stringify({ 'id': id }), { headers: this.header }).toPromise();
    }
};
ApiDocAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiDocAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiDocAdminService);



/***/ }),

/***/ "./src/app/api_doc/api_doc_detail/api_doc_detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/api_doc/api_doc_detail/api_doc_detail.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    margin-top: 10px\n}\n\n.api-detail{\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpX2RvYy9hcGlfZG9jX2RldGFpbC9hcGlfZG9jX2RldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcGlfZG9jL2FwaV9kb2NfZGV0YWlsL2FwaV9kb2NfZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4XG59XG5cbi5hcGktZGV0YWlse1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_doc_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_doc_detail.service */ "./src/app/api_doc/api_doc_detail/api_doc_detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ApiDocDetailComponent = class ApiDocDetailComponent {
    constructor(route, api_doc_detail_service) {
        this.route = route;
        this.api_doc_detail_service = api_doc_detail_service;
        this.data = [];
    }
    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.api_doc_detail_service.getDetailProject(this.id)
            .then(res => {
            this.data = res['data'];
        })
            .catch(err => {
            console.log(err);
        });
    }
};
ApiDocDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _api_doc_detail_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocDetailService"] }
];
ApiDocDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-api-doc-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./api_doc_detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api_doc/api_doc_detail/api_doc_detail.component.html")).default,
        providers: [_api_doc_detail_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocDetailService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./api_doc_detail.component.css */ "./src/app/api_doc/api_doc_detail/api_doc_detail.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _api_doc_detail_service__WEBPACK_IMPORTED_MODULE_2__["ApiDocDetailService"]])
], ApiDocDetailComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
let ApiDocDetailService = class ApiDocDetailService {
    constructor(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'token': localStorage.token
        });
    }
    getDetailProject(id) {
        return this.http.get(`${BASE_URL}/api-doc/project/${id}`, { headers: this.header }).toPromise();
    }
};
ApiDocDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiDocDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiDocDetailService);



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _api_doc_api_doc_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api_doc/api_doc.module */ "./src/app/api_doc/api_doc.module.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");












const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    // { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // TodolistModule,
            _chat_chat_module__WEBPACK_IMPORTED_MODULE_7__["ChatModule"],
            _api_doc_api_doc_module__WEBPACK_IMPORTED_MODULE_6__["ApiDocModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__["AdminModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]
        ],
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");



let AppComponent = class AppComponent {
    constructor(app_service) {
        this.app_service = app_service;
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm2015/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm2015/ngApolloLinkHttp.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        imports: [
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            //Graph
            apollo_angular__WEBPACK_IMPORTED_MODULE_10__["ApolloModule"],
            apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_11__["HttpLinkModule"],
        ],
        providers: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] },
            {
                provide: apollo_angular__WEBPACK_IMPORTED_MODULE_10__["APOLLO_OPTIONS"],
                useFactory: (httpLink) => {
                    return {
                        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_12__["InMemoryCache"](),
                        link: httpLink.create({
                            uri: "http://graph.myweb-dotnet.huynguyen.xyz/graphql"
                        })
                    };
                },
                deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_11__["HttpLink"]]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.token = '';
        // protected header = null;
        this.refresh_token = '';
        this.accessToken = '';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.access_token
        });
        this.refresh_token = '';
        this.accessToken = localStorage.getItem('access_token');
        this.refresh_token = localStorage.getItem('refresh_token');
    }
    refreshToken() {
        console.log('========');
        console.log(this.accessToken);
        console.log(this.refresh_token);
        console.log('========');
        let json = JSON.stringify({
            refreshToken: this.refresh_token
        });
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/user/refresh-token`, json, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json' })
        }).subscribe(data => {
            localStorage.access_token = data['data']['accessToken'];
            localStorage.refresh_token = data['data']['refreshToken'];
            this.accessToken = data['data']['accessToken'];
            this.refresh_token = data['data']['refreshToken'];
            this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + this.accessToken
            });
        }, err => {
            console.log(err);
        });
    }
    getEvent() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/event`, {
            headers: this.header
        }).toPromise();
    }
    getDetailEvent(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/event/${id}`, {
            headers: this.header
        }).toPromise();
    }
    callApiCorona() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/event/corona`).toPromise();
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppService);



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content {\n    background-color: antiquewhite;\n    height: 100%;\n}\n\n.container {\n    height: 100%;\n}\n\n.row {\n    height: 100%;\n}\n\n#chat-content{\n    margin-top: 10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jY2hhdC1jb250ZW50e1xuICAgIG1hcmdpbi10b3A6IDEwcHhcbn0iXX0= */");

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let ChatComponent = class ChatComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"]('http://socket.local.huynguyen.com.vn', {
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            reconnectionAttempts: Infinity
        });
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl}/user/check-user`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'content-type': 'application/json',
                'token': localStorage.token
            })
        })
            .toPromise()
            .then(res => {
            console.log(res);
            this.socket.emit('send-register-user', res['data']);
        })
            .catch(err => {
            localStorage.removeItem('token');
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Eror', 'Token invalid', 'error');
            this.router.navigate(['/login']);
        });
        // this.socket.on('list-user-online', data => {
        //   console.log(data);
        //   this.user_online = data;
        // })
    }
    handleSendMess() {
        console.table(this.content_mess);
    }
    handleFoucusIn() {
        console.log('Focus in');
    }
    handleFoucusOut() {
        console.log('Focus out');
    }
    ngOnDestroy() {
        this.socket.disconnect();
    }
};
ChatComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ChatComponent);



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");






const routes = [
    {
        path: 'chat',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
        pathMatch: 'full'
    }
];
let ChatModule = class ChatModule {
};
ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ],
        declarations: [
            _chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"]
        ]
    })
], ChatModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    margin-top: 10px;\n\n}\n\n.row {\nmin-height: 200px;\n}\n\n#left-menu {\n    background-color: azure;\n}\n\n#content {\n    background-color: azure;\n}\n\n#right-menu {\n    background-color: azure;\n}\n\n#nav {\n    min-height: 100px;\n    margin-bottom: 20px;\n    background-image: url('title_background.jpg')\n}\n\n.list-group-item:hover {\n\tbackground-color: #EEEEEE;\n\tfont-weight: bold;\n\tcolor: blue;\n}\n\n.active {\n    border-left: 8px solid #17A1B8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbn1cblxuLnJvdyB7XG5taW4taGVpZ2h0OiAyMDBweDtcbn1cblxuI2xlZnQtbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG59XG5cbiNjb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuI3JpZ2h0LW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xufVxuXG4jbmF2IHtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL2ltYWdlL3RpdGxlX2JhY2tncm91bmQuanBnJylcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRjb2xvcjogYmx1ZTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjMTdBMUI4ICFpbXBvcnRhbnQ7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _shread_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shread/base.component */ "./src/shread/base.component.ts");








let HomeComponent = class HomeComponent extends _shread_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"] {
    constructor(router, http, spinner) {
        super(router, http);
        this.router = router;
        this.http = http;
        this.spinner = spinner;
        this.url = "";
        this.admin = "";
        this.url = ``;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinner.show();
            yield _super.ngOnInit.call(this);
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl}/user/me`, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Authorization': 'Bearer ' + localStorage.access_token
                })
            })
                .subscribe(res => {
                this.username = res['data']['name'];
                if (res['data']['permission'] == null) {
                    localStorage.removeItem('access_token');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error', 'Permission denied', 'error');
                    this.router.navigate(['/login']);
                }
                this.permission = res['data']['permission']['name'];
                if (res['data']['avatar'] != null) {
                    this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].publicUrl}/image/avatar/${res['data']['avatar']}`;
                }
                else {
                    this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].publicUrl}/image/avatar/default-avatar.png`;
                }
            }, err => {
                localStorage.removeItem('access_token');
                console.log(err);
                // Swal.fire('Eror', 'Token invalid', 'error');
                this.router.navigate(['/login']);
            });
            this.spinner.hide();
        });
    }
    handleLogout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        // Swal.fire('Success', 'See you again', 'info');
        this.router.navigate(['/login']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");










const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        children: [
            {
                path: 'user/change-info',
                loadChildren: '../user/change_info/change_info.module#ChangeInfoModule'
            },
            {
                path: 'user/change-pass',
                loadChildren: '../user/change_pass/change_pass.module#ChangePassModule'
            },
            {
                path: 'index',
                loadChildren: '../index/index.module#IndexModule'
            },
            {
                path: 'to-do-list',
                loadChildren: '../todolist/todolist.module#TodolistModule'
            },
            {
                path: 'moneyManage',
                loadChildren: '../moneyManage/moneyManage.module#MoneyManageModule'
            },
        ]
    }
];
let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        ],
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/* BASIC */\n\nhtml {\n    background-color: #1AA1B8;\n  }\n\nbody {\n    font-family: \"Poppins\", sans-serif;\n    height: 100vh;\n  }\n\na {\n    color: #1AA1B8;\n    display:inline-block;\n    text-decoration: none;\n    font-weight: 400;\n  }\n\nh2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display:inline-block;\n    margin: 40px 8px 10px 8px; \n    color: #1AA1B8;\n  }\n\n/* STRUCTURE */\n\n.wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; \n    -webkit-box-pack: center; \n            justify-content: center;\n    width: 100%;\n    min-height: 100%;\n    padding: 20px;\n  }\n\n#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n  }\n\n#formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n\n/* TABS */\n\nh2.inactive {\n    color: #cccccc;\n  }\n\nh2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #1AA1B8;\n  }\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=button], input[type=reset]  {\n    background-color: #1AA1B8;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n  }\n\ninput[type=button]:hover, input[type=button]:hover, input[type=reset]:hover  {\n    background-color: #1AA1B8;\n  }\n\ninput[type=button]:active, input[type=button]:active, input[type=reset]:active  {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\n\ninput[type=text], input[type=email], input[type=date], input[type=password] {\n    background-color: #2DA7BD;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n\ninput[type=text]:focus, input[type=email]:focus, input[type=date]:focus, input[type=password]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #1AA1B8;\n  }\n\ninput[type=text]:placeholder, input[type=email]:placeholder, input[type=date]:placeholder, input[type=password]:placeholder {\n    color: #cccccc;\n  }\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n  }\n\n@-webkit-keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n\n@keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n  \n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n  \n    -webkit-animation-duration:1s;\n    animation-duration:1s;\n  }\n\n.fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n\n.fadeIn.second {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n  }\n\n.fadeIn.third {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n  }\n\n.fadeIn.fourth {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n  }\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #1AA1B8;\n    content: \"\";\n    -webkit-transition: width 0.2s;\n    transition: width 0.2s;\n  }\n\n.underlineHover:hover {\n    color: #0d0d0d;\n  }\n\n.underlineHover:hover:after{\n    width: 100%;\n  }\n\n/* OTHERS */\n\n*:focus {\n      outline: none;\n  }\n\n#icon {\n    width:60%;\n  }\n\n.message-validate {\n    text-align: left; \n    font-size: 14px;\n    padding-left: 50px;\n    color: red;\n  }\n\n.message-validate-none {\n      display: none;\n  }\n\n.btn:disabled {\n    background: rgb(2, 74, 87);\n  }\n\n.btn {\n    margin: 2%;\n  }\n\n::-webkit-input-placeholder {\n    color: #dfdfdf;\n  }\n\n::-moz-placeholder {\n    color: #dfdfdf;\n  }\n\n::-ms-input-placeholder {\n    color: #dfdfdf;\n  }\n\n::placeholder {\n    color: #dfdfdf;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsVUFBVTs7QUFFVjtJQUNJLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGtDQUFrQztJQUNsQyxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOztBQUNBLGNBQWM7O0FBRWQ7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBRUE7SUFFRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBRVoseUNBQXlDO0lBQ3pDLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtCQUFrQjtJQUVsQiw0QkFBNEI7RUFDOUI7O0FBRUEsU0FBUzs7QUFFVDtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFFZiw4Q0FBOEM7SUFFOUMsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQix3Q0FBd0M7SUFJeEMsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBRUUsOEJBQThCO0lBRzlCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsd0NBQXdDO0lBSXhDLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFJQSxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7SUFDRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLDJDQUEyQztNQUMzQyxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUNWLHVCQUF1QjtNQUN2QixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtJQUNFLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsMkJBQTJCO0lBRTNCLG1CQUFtQjtFQUNyQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0lBQ0UsY0FBYztJQUNkLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLDhCQUFzQjtJQUF0QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUlBLFdBQVc7O0FBRVg7TUFDSSxhQUFhO0VBQ2pCOztBQUVBO0lBQ0UsU0FBUztFQUNYOztBQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztBQUVBO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7QUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRkE7SUFDRSxjQUFjO0VBQ2hCOztBQUZBO0lBQ0UsY0FBYztFQUNoQjs7QUFGQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBCQVNJQyAqL1xuXG5odG1sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFBMUI4O1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgYSB7XG4gICAgY29sb3I6ICMxQUExQjg7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgXG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcbiAgICBjb2xvcjogIzFBQTFCODtcbiAgfVxuICAvKiBTVFJVQ1RVUkUgKi9cbiAgXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAjZm9ybUNvbnRlbnQge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgI2Zvcm1Gb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIH1cbiAgXG4gIC8qIFRBQlMgKi9cbiAgXG4gIGgyLmluYWN0aXZlIHtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgfVxuICBcbiAgaDIuYWN0aXZlIHtcbiAgICBjb2xvcjogIzBkMGQwZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFBQTFCODtcbiAgfVxuICBcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cbiAgXG4gIGlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQUExQjg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQUExQjg7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1kYXRlXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyREE3QkQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMGQwZDBkO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cywgaW5wdXRbdHlwZT1kYXRlXTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxQUExQjg7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIsIGlucHV0W3R5cGU9ZW1haWxdOnBsYWNlaG9sZGVyLCBpbnB1dFt0eXBlPWRhdGVdOnBsYWNlaG9sZGVyLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNjY2NjY2M7XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogQU5JTUFUSU9OUyAqL1xuICBcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuICAuZmFkZUluRG93biB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuICBcbiAgLmZhZGVJbiB7XG4gICAgb3BhY2l0eTowO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICBcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gIH1cbiAgXG4gIC5mYWRlSW4uZmlyc3Qge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgfVxuICBcbiAgLmZhZGVJbi5zZWNvbmQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgfVxuICBcbiAgLmZhZGVJbi50aGlyZCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICB9XG4gIFxuICAuZmFkZUluLmZvdXJ0aCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICB9XG4gIFxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuICAudW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFBMUI4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbiAgfVxuICBcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcbiAgICBjb2xvcjogIzBkMGQwZDtcbiAgfVxuICBcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIE9USEVSUyAqL1xuICBcbiAgKjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICB9IFxuICBcbiAgI2ljb24ge1xuICAgIHdpZHRoOjYwJTtcbiAgfVxuICBcblxuICAubWVzc2FnZS12YWxpZGF0ZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgLm1lc3NhZ2UtdmFsaWRhdGUtbm9uZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJ0bjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIsIDc0LCA4Nyk7XG4gIH1cblxuICAuYnRuIHtcbiAgICBtYXJnaW46IDIlO1xuICB9XG5cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNkZmRmZGY7XG4gIH0iXX0= */");

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");






let LoginComponent = class LoginComponent {
    constructor(http, router, spinner) {
        this.http = http;
        this.router = router;
        this.spinner = spinner;
        this.username = '';
        this.password = '';
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (localStorage.access_token !== undefined) {
                this.router.navigate(['/']);
            }
        });
    }
    handleLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.form_login['invalid'] == true) {
                return;
            }
            this.spinner.show();
            yield this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl}/user/login`, JSON.stringify({
                username: this.form_login.value.username,
                password: this.form_login.value.password,
            }), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json' })
            })
                .toPromise()
                .then(res => {
                console.log(res);
                localStorage.access_token = res['data']['accessToken'];
                localStorage.refresh_token = res['data']['refreshToken'];
                this.router.navigate(['/index']);
            })
                .catch(err => {
                $.notify({
                    icon: 'glyphicon glyphicon-remove',
                    message: `Error: ${err.error.message}`,
                }, {
                    type: 'danger',
                });
            });
            this.spinner.hide();
        });
    }
    hanleForgotPass() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinner.show();
            yield this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl}/user/sendEmailForgotPassword/${this.forgotEmail}`)
                .toPromise()
                .then(res => {
                $.notify({
                    icon: 'glyphicon glyphicon-remove',
                    message: `${res['message']}`,
                }, {
                    type: 'success',
                });
            })
                .catch(err => {
                $.notify({
                    icon: 'glyphicon glyphicon-remove',
                    message: `Error: ${err.error.message}`,
                }, {
                    type: 'danger',
                });
            });
            this.spinner.hide();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form_login', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginComponent.prototype, "form_login", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
], LoginComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let SignupComponent = class SignupComponent {
    constructor(router, http, spinner) {
        this.router = router;
        this.http = http;
        this.spinner = spinner;
        if (localStorage.token !== undefined) {
            this.router.navigate(['/home']);
        }
    }
    ngOnInit() {
    }
    handleSignup() {
        this.spinner.show();
        let json = JSON.stringify({
            name: this.name,
            email: this.email,
            birthday: this.birthday,
            address: this.address,
            phone: this.phone,
            password: this.password,
        });
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl}/user/sign-up`, json, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'content-type': 'application/json' })
        })
            .toPromise()
            .then(data => {
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Success', 'Signup success, please login go to system', 'success');
        })
            .catch(err => {
            this.spinner.hide();
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error', err['error']['message'], 'error');
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../login/login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
], SignupComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const BASE_URL = 'https://myweb-dotnet.huynguyen.xyz';
// const BASE_URL = 'http://localhost:5000';
const environment = {
    production: false,
    baseUrl: `${BASE_URL}/api`,
    publicUrl: `${BASE_URL}`,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shread/base.component.ts":
/*!**************************************!*\
  !*** ./src/shread/base.component.ts ***!
  \**************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/app.service */ "./src/app/app.service.ts");


class BaseComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.app_service = new _app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"](http);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (localStorage.access_token != null) {
                this.time = setInterval(() => {
                    this.subcCription = this.app_service.refreshToken();
                }, 15000);
            }
            //check user
            if (localStorage.access_token === undefined) {
                this.router.navigate(['/login']);
                return;
            }
        });
    }
    ngOnDestroy() {
        clearInterval(this.time);
    }
    convertDateToString(dateStr) {
        if (dateStr === null || dateStr === '' || dateStr === undefined) {
            var date = new Date();
            return '';
        }
        else {
            var date = new Date(dateStr);
        }
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
    convertDateToString2(dateStr) {
        if (dateStr === null || dateStr === '' || dateStr === undefined) {
            var date = new Date();
            return '';
        }
        else {
            var date = new Date(dateStr);
        }
        return dateStr.substring(0, 10);
    }
    convertDateToStrView(dateStr) {
        if (dateStr === null || dateStr == undefined) {
            var date = new Date();
            return '';
        }
        else {
            var date = new Date(dateStr);
        }
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }
    convertDateTimeToStrView(dateStr) {
        if (dateStr === null || dateStr == undefined) {
            var date = new Date();
            return '';
        }
        else {
            var date = new Date(dateStr);
        }
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/ProjectCode/Angular/MyWeb/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map