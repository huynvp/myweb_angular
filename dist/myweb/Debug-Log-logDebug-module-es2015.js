(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Debug-Log-logDebug-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDebug.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDebug.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Log debug</h3>\n<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#modalAddProject\" (click)=\"resetData()\">\n    Add new project\n</button>\n<hr>\n<div class=\"row\">\n    <div class=\"table-responsive\">\n        <table id=\"data_table_log\"></table>\n    </div>\n</div>\n\n<!-- The Modal -->\n  <!-- Add permisison -->\n  <div class=\"modal fade\" id=\"modalAddProject\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add new project</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label>Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtAddName\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group\">\n              <label>Status</label><br>\n              <input type=\"checkbox\" (change)=\"changeStatus()\"> Active\n            </div>\n          </form>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"addProject()\" data-dismiss=\"modal\">Add</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDetail/logDetail.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDetail/logDetail.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Log debug detail</h3>\n<button (click)=\"goBack()\" class=\"btn btn-sm btn-warning\">\n    <i class=\"fas fa-chevron-circle-left\"></i> Go Back\n</button>\n<button (click)=\"refreshTable()\" class=\"btn btn-sm btn-primary\">\n    <i class=\"fas fa-sync-alt\"></i> Refresh Data\n</button>\n<button (click)=\"deleteMuity()\" class=\"btn btn-sm btn-danger\">\n    <i class=\"fas fa-trash-alt\"></i> Delete Muilty\n</button>\n<div class=\"row\">\n    <div class=\"table-responsive\">\n        <table id=\"data_table_log\"></table>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/admin/Debug/Log/logDebug.component.css":
/*!********************************************************!*\
  !*** ./src/app/admin/Debug/Log/logDebug.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row .col {\n    margin-top: 1%;\n}\n\n.btn-actived {\n    background: gray;\n    color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRGVidWcvTG9nL2xvZ0RlYnVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9EZWJ1Zy9Mb2cvbG9nRGVidWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cgLmNvbCB7XG4gICAgbWFyZ2luLXRvcDogMSU7XG59XG5cbi5idG4tYWN0aXZlZCB7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICBjb2xvcjogI2RkZGRkZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/Debug/Log/logDebug.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/Debug/Log/logDebug.component.ts ***!
  \*******************************************************/
/*! exports provided: LogDebugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDebugComponent", function() { return LogDebugComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UserAdmin/useradmin.service */ "./src/app/admin/UserAdmin/useradmin.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_shread_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shread/base.component */ "./src/shread/base.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let LogDebugComponent = class LogDebugComponent extends src_shread_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"] {
    constructor(router, http, user, spinner) {
        super(router, http);
        this.router = router;
        this.http = http;
        this.user = user;
        this.spinner = spinner;
        this.checkStatus = 0;
        this.loadTable = true;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield _super.ngOnInit.call(this);
            this.DrawDataTable();
        });
    }
    DrawDataTable() {
        const that = this;
        this.dataTable = $('#data_table_log').DataTable({
            processing: true,
            serverSide: true,
            searching: true,
            paging: true,
            order: [],
            ajax: {
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + '/projectLogs',
                headers: {
                    'Authorization': `Bearer ${localStorage.access_token}`
                },
            },
            'drawCallback': function () {
                $('#data_table_log').addClass("table");
                $('#data_table_log').addClass("table-bordered");
                $('#data_table_log').addClass("table-hover");
                $('#data_table_log').addClass("table-striped");
                $('#data_table_log').children('thead').addClass('bg-info text-white');
                if (that.loadTable) {
                    $('#data_table_log').on('click', '.delete', function () {
                        that.deleteProject($(this).data('id'));
                    });
                    $('#data_table_log').on('click', '.detail', function () {
                        that.router.navigate(['/admin/logDebug/detail', $(this).data('id')]);
                    });
                }
                that.loadTable = false;
            },
            columns: [
                { data: 'key', name: 'key', 'title': 'ID' },
                { data: 'name', name: 'name', 'title': 'Name' },
                { data: 'status', name: 'status', 'title': 'Status' },
                { data: 'enable', name: 'enable', 'title': 'Enable' },
                { data: 'createdAt', name: 'created_at', 'title': 'Created At' },
                { title: 'Select' }
            ],
            columnDefs: [
                {
                    'targets': 2,
                    'render': function (data) {
                        if (data == 1)
                            return `<button class="btn btn-sm btn-success">Active</button>`;
                        else
                            return `<button class="btn btn-sm btn-danger">Deactive</button>`;
                    }
                },
                {
                    'targets': 4,
                    'render': function (data) {
                        return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
                    }
                },
                {
                    'targets': 5,
                    'render': function (data, m, row) {
                        return `<div class="dropdown">
              <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item delete" data-id="${row.key}">Delete</span>
                <span class="dropdown-item detail" data-id="${row.key}">View Log</span>
              </div>
            </div>`;
                    }
                }
            ]
        });
    }
    resetData() {
        this.txtAddName = '';
    }
    changeStatus() {
        if (this.checkStatus == 0)
            this.checkStatus = 1;
        else
            this.checkStatus = 0;
        console.log(this.checkStatus);
    }
    addProject() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinner.show();
            const data = {
                Name: this.txtAddName,
                Status: this.checkStatus
            };
            yield this.user.addNewProject(data)
                .then(data => {
                $.notify({
                    message: data["message"],
                }, {
                    type: 'success',
                });
            })
                .catch(err => {
                $.notify({
                    message: err["error"]["message"],
                }, {
                    type: 'danger',
                });
            });
            this.dataTable.ajax.reload(null, false);
            this.spinner.hide();
            this.resetData();
        });
    }
    deleteProject(key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinner.show();
            yield this.user.deleteProject(key)
                .then(data => {
                $.notify({
                    message: data["message"],
                }, {
                    type: 'success',
                });
            })
                .catch(err => {
                $.notify({
                    message: err["error"]["message"],
                }, {
                    type: 'danger',
                });
            });
            this.dataTable.ajax.reload(null, false);
            this.spinner.hide();
        });
    }
};
LogDebugComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
LogDebugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'log-debug-user-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logDebug.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDebug.html")).default,
        providers: [
            _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logDebug.component.css */ "./src/app/admin/Debug/Log/logDebug.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], LogDebugComponent);



/***/ }),

/***/ "./src/app/admin/Debug/Log/logDebug.module.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/Debug/Log/logDebug.module.ts ***!
  \****************************************************/
/*! exports provided: LogDebugUserAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDebugUserAdminModule", function() { return LogDebugUserAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _logDebug_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logDebug.component */ "./src/app/admin/Debug/Log/logDebug.component.ts");
/* harmony import */ var _logDetail_logDetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logDetail/logDetail.component */ "./src/app/admin/Debug/Log/logDetail/logDetail.component.ts");










const routes = [
    {
        path: '',
        component: _logDebug_component__WEBPACK_IMPORTED_MODULE_8__["LogDebugComponent"]
    },
    {
        path: 'detail/:id',
        component: _logDetail_logDetail_component__WEBPACK_IMPORTED_MODULE_9__["LogDetailComponent"]
    }
];
let LogDebugUserAdminModule = class LogDebugUserAdminModule {
};
LogDebugUserAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__["AngularEditorModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
        ],
        declarations: [
            _logDebug_component__WEBPACK_IMPORTED_MODULE_8__["LogDebugComponent"],
            _logDetail_logDetail_component__WEBPACK_IMPORTED_MODULE_9__["LogDetailComponent"]
        ]
    })
], LogDebugUserAdminModule);



/***/ }),

/***/ "./src/app/admin/Debug/Log/logDetail/logDetail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/Debug/Log/logDetail/logDetail.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row .col {\n    margin-top: 1%;\n}\n\n.btn-actived {\n    background: gray;\n    color: #dddddd;\n}\n\n.btn {\n    margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRGVidWcvTG9nL2xvZ0RldGFpbC9sb2dEZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL0RlYnVnL0xvZy9sb2dEZXRhaWwvbG9nRGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IC5jb2wge1xuICAgIG1hcmdpbi10b3A6IDElO1xufVxuXG4uYnRuLWFjdGl2ZWQge1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5idG4ge1xuICAgIG1hcmdpbjogMSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/Debug/Log/logDetail/logDetail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/Debug/Log/logDetail/logDetail.component.ts ***!
  \******************************************************************/
/*! exports provided: LogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDetailComponent", function() { return LogDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UserAdmin/useradmin.service */ "./src/app/admin/UserAdmin/useradmin.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_shread_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shread/base.component */ "./src/shread/base.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










let LogDetailComponent = class LogDetailComponent extends src_shread_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"] {
    constructor(router, http, user, activatedRoute, location, spinner) {
        super(router, http);
        this.router = router;
        this.http = http;
        this.user = user;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.spinner = spinner;
        this.checkStatus = 0;
        this.loadTable = true;
        this.id_arr = [];
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield _super.ngOnInit.call(this);
            this.activatedRoute.params.subscribe(param => {
                this.id = param.id;
            });
            this.DrawDataTable();
        });
    }
    refreshTable() {
        this.dataTable.ajax.reload(null, false);
    }
    DrawDataTable() {
        const that = this;
        this.dataTable = $('#data_table_log').DataTable({
            processing: true,
            serverSide: true,
            searching: true,
            paging: true,
            order: [],
            ajax: {
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl + '/projectLogs/' + this.id + '/logs',
                headers: {
                    'Authorization': `Bearer ${localStorage.access_token}`
                },
            },
            'drawCallback': function () {
                $('#data_table_log').addClass("table");
                $('#data_table_log').addClass("table-bordered");
                $('#data_table_log').addClass("table-hover");
                $('#data_table_log').addClass("table-striped");
                $('#data_table_log').children('thead').addClass('bg-info text-white');
                if (that.loadTable) {
                    $('#data_table_log').on('click', '.check', function () {
                        that.id_arr = [];
                        const check_list = $('.check');
                        if (check_list.length > 0) {
                            check_list.map((i, e) => {
                                if (e.checked == true)
                                    that.id_arr.push(e.value);
                            });
                        }
                    });
                    $('#data_table_log').on('click', '#checkAll', function () {
                        that.id_arr = [];
                        const check_list = $('.check');
                        if ($('#checkAll')[0].checked != false) {
                            if (check_list.length > 0) {
                                check_list.map((i, e) => {
                                    e.checked = true;
                                    that.id_arr.push(e.value);
                                });
                            }
                        }
                        else {
                            if (check_list.length > 0) {
                                check_list.map((i, e) => {
                                    e.checked = false;
                                });
                            }
                        }
                    });
                }
                that.loadTable = false;
            },
            columns: [
                // { data: 'id', name: 'id', 'title': 'ID' },
                { data: 'content', name: 'content', 'title': 'Content' },
                { data: 'type', name: 'type', 'title': 'Type' },
                { data: 'createdAt', name: 'created_at', 'title': 'Created At' },
                { title: '<input type="checkbox" id="checkAll" value="${row.id}">' }
            ],
            columnDefs: [
                // {
                //   'targets': 2,
                //   'render': function (data) {
                //     if(data == 1)
                //       return `<button class="btn btn-sm btn-success">Active</button>`;
                //     else 
                //       return `<button class="btn btn-sm btn-danger">Deactive</button>`;
                //   }
                // },
                {
                    'targets': 2,
                    'render': function (data) {
                        return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
                    }
                },
                {
                    'targets': 3,
                    orderable: false,
                    'render': function (data, m, row) {
                        return `<input type="checkbox" class="check" value="${row.id}">`;
                    }
                }
            ]
        });
    }
    deleteMuity() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure delete log checked?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
        }).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (result.value) {
                this.spinner.show();
                $('#checkAll')[0].checked = false;
                yield this.user.deleteLogs(this.id, this.id_arr)
                    .then(data => {
                    $.notify({
                        message: data["message"],
                    }, {
                        type: 'success',
                    });
                })
                    .catch(err => {
                    $.notify({
                        message: err["error"]["message"],
                    }, {
                        type: 'danger',
                    });
                });
                this.dataTable.ajax.reload(null, false);
                this.spinner.hide();
                ;
            }
        }));
    }
    goBack() {
        this.location.back();
    }
};
LogDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
LogDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'log-detail-user-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logDetail.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDetail/logDetail.html")).default,
        providers: [
            _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logDetail.component.css */ "./src/app/admin/Debug/Log/logDetail/logDetail.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], LogDetailComponent);



/***/ })

}]);
//# sourceMappingURL=Debug-Log-logDebug-module-es2015.js.map