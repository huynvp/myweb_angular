(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UserAdmin-MessageLog-messagelog-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/UserAdmin/MessageLog/messagelog.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/UserAdmin/MessageLog/messagelog.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fadeIn first\">\n  <!-- Quyền -->\n  <button type=\"button\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" data-target=\"#modalAddMessage\" (click)=\"resetData()\">\n    Add new task work\n  </button>\n  <hr>\n  <div class=\"row\">\n    <div class=\"table-responsive\">\n      <table id=\"data_table_message\"></table>\n    </div>\n  </div>\n</div>\n\n<!-- The Modal -->\n  <!-- Add permisison -->\n  <div class=\"modal fade\" id=\"modalAddMessage\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add new message</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label>Title</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtTitleMess\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group\">\n              <label>Content</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtContentMess\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </form>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"handleAddMess()\" data-dismiss=\"modal\">Add</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"modalEditWork\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit task</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label>Title</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtTitleMess\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group\">\n              <label>Content</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtContentMess\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </form>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"handleEditMess()\">Edit</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n        </div>\n\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./src/app/admin/UserAdmin/MessageLog/messagelog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/UserAdmin/MessageLog/messagelog.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n    margin: 1%;\n    min-height: 700px;\n    border: 1px solid #58ACFA;\n    padding: 1%;\n}\n\n.btn {\n    margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vVXNlckFkbWluL01lc3NhZ2VMb2cvbWVzc2FnZWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vVXNlckFkbWluL01lc3NhZ2VMb2cvbWVzc2FnZWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMSU7XG4gICAgbWluLWhlaWdodDogNzAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU4QUNGQTtcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuLmJ0biB7XG4gICAgbWFyZ2luOiAxJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/UserAdmin/MessageLog/messagelog.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/UserAdmin/MessageLog/messagelog.module.ts ***!
  \*****************************************************************/
/*! exports provided: MessageLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageLogModule", function() { return MessageLogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _messagelog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messagelog */ "./src/app/admin/UserAdmin/MessageLog/messagelog.ts");









const routes = [
    {
        path: '',
        component: _messagelog__WEBPACK_IMPORTED_MODULE_8__["MessageLogComponent"]
    }
];
let MessageLogModule = class MessageLogModule {
};
MessageLogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            _messagelog__WEBPACK_IMPORTED_MODULE_8__["MessageLogComponent"]
        ]
    })
], MessageLogModule);



/***/ }),

/***/ "./src/app/admin/UserAdmin/MessageLog/messagelog.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/UserAdmin/MessageLog/messagelog.ts ***!
  \**********************************************************/
/*! exports provided: MessageLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageLogComponent", function() { return MessageLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _useradmin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useradmin.service */ "./src/app/admin/UserAdmin/useradmin.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_shread_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shread/base.component */ "./src/shread/base.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let MessageLogComponent = class MessageLogComponent extends src_shread_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"] {
    constructor(router, http, user, spinner) {
        super(router, http);
        this.router = router;
        this.http = http;
        this.user = user;
        this.spinner = spinner;
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
        this.dataTable = $('#data_table_message').DataTable({
            processing: true,
            serverSide: true,
            searching: true,
            paging: true,
            order: [],
            ajax: {
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl + '/admin/messageLogs',
                headers: {
                    'Authorization': `Bearer ${localStorage.access_token}`
                },
            },
            'drawCallback': function () {
                $('#data_table_message').addClass("table");
                $('#data_table_message').addClass("table-bordered");
                $('#data_table_message').addClass("table-hover");
                $('#data_table_message').addClass("table-striped");
                $('#data_table_message').children('thead').addClass('bg-info text-white');
                if (that.loadTable) {
                    $('#data_table_message').on('click', '.btn_edit', function () {
                        that.handleShowDetailTaskWork($(this).data('id'));
                    });
                    $('#data_table_message').on('click', '.btn_delete', function () {
                        that.handleDeleteTaskWork($(this).data('id'));
                    });
                }
                that.loadTable = false;
            },
            columns: [
                { data: 'key', name: 'key', 'title': 'ID' },
                { data: 'title', name: 'title', 'title': 'Title' },
                { data: 'content', name: 'content', 'title': 'Content' },
                { data: 'status', name: 'status', 'title': 'Status' },
                { data: 'created_at', name: 'created_at', 'title': 'Created At' },
                { data: 'updated_at', name: 'updated_at', 'title': 'Updated At' },
                { data: '', name: '', 'title': 'Action' },
            ],
            columnDefs: [
                {
                    'targets': 3,
                    'render': function (data, type, row) {
                        if (data == 1)
                            return '<button class="btn btn-sm btn-success">Active</button>';
                        else
                            return '<button class="btn btn-sm btn-dark">Deactive</button>';
                    }
                },
                {
                    'targets': [4, 5],
                    'render': function (data) {
                        return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
                    }
                },
                {
                    'targets': 6,
                    'render': function (data, type, row) {
                        return '<button class="btn btn-sm btn-warning btn_edit" data-id="' + row.key + '" data-toggle="modal" data-target="#modalEditWork">Edit task</button>' +
                            '<button class="btn btn-sm btn-danger btn_delete" data-id="' + row.key + '">Delete task</button>';
                    }
                },
            ]
        });
    }
    resetData() {
        this.txtTitleMess = "";
        this.txtContentMess = "";
    }
    handleAddMess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinner.show();
            yield this.user.addNewMess(this.txtTitleMess, this.txtContentMess)
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
    handleEditMess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinner.show();
            this.user.showDetailMess(this.key)
                .then(data => {
                var data = data["data"];
                this.key = data["key"];
                this.user.editMess(this.key, this.txtTitleMess, this.txtContentMess, data["timestamp"])
                    .then(data => {
                    $.notify({
                        message: data["message"],
                    }, {
                        type: 'success',
                    });
                    this.dataTable.ajax.reload(null, false);
                })
                    .catch(err => {
                    $.notify({
                        // icon: 'glyphicon glyphicon-remove',
                        message: err["error"]["message"],
                    }, {
                        type: 'danger',
                    });
                });
            })
                .catch(err => {
                $.notify({
                    // icon: 'glyphicon glyphicon-remove',
                    message: err["error"]["message"],
                }, {
                    type: 'danger',
                });
            });
            this.dataTable.clear();
            this.dataTable.ajax.reload(null, false);
            this.spinner.hide();
        });
    }
    handleShowDetailTaskWork(id) {
        this.user.showDetailMess(id)
            .then(data => {
            var data = data["data"];
            this.key = data["key"];
            this.txtTitleMess = data["title"];
            this.txtContentMess = data["content"];
        })
            .catch(err => {
            $.notify({
                // icon: 'glyphicon glyphicon-remove',
                message: err["error"]["message"],
            }, {
                type: 'danger',
            });
        });
    }
    handleDeleteTaskWork(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Delete task',
                text: 'Do you want delete this task?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    this.spinner.show();
                    this.user.deleteMess(id)
                        .then(data => {
                        this.dataTable.clear();
                        this.dataTable.ajax.reload(null, false);
                        $.notify({
                            message: data["message"],
                        }, {
                            type: 'success',
                        });
                    })
                        .catch(err => {
                        $.notify({
                            // icon: 'glyphicon glyphicon-remove',
                            message: err["error"]["message"],
                        }, {
                            type: 'danger',
                        });
                    });
                    this.spinner.hide();
                }
            });
        });
    }
};
MessageLogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
MessageLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'message-log-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messagelog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/UserAdmin/MessageLog/messagelog.html")).default,
        providers: [
            _useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messagelog.component.css */ "./src/app/admin/UserAdmin/MessageLog/messagelog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], MessageLogComponent);



/***/ })

}]);
//# sourceMappingURL=UserAdmin-MessageLog-messagelog-module-es2015.js.map