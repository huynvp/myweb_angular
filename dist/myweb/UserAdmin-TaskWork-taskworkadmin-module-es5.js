(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UserAdmin-TaskWork-taskworkadmin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/UserAdmin/TaskWork/taskworkadmin.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/UserAdmin/TaskWork/taskworkadmin.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUserAdminTaskWorkTaskworkadminHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"fadeIn first\">\n  <!-- Quyền -->\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAddWork\" (click)=\"resetData()\">\n    Add new task work\n  </button>\n  <hr>\n  <div class=\"row\">\n    <div class=\"table-responsive\">\n      <table id=\"data_table_task\"></table>\n    </div>\n  </div>\n  <!-- <table class=\"table\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Title</th>\n        <th>Date</th>\n        <th>Status</th>\n        <th>Type</th>\n        <th>Created at</th>\n        <th>Updated at</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let listTask of listTasks\">\n        <td>{{ listTask.key }}</td>\n        <td>{{ listTask.title }}</td>\n        <td>{{ listTask.dateOfTask | date: 'dd/MM/yyyy' }}</td>\n        <td [ngSwitch]=\"listTask.status\">\n          <button class=\"btn btn-sm btn-success\" (click)=\"changeStatusTask(listTask.key, 0)\"\n            *ngSwitchCase=\"1\">Active</button>\n          <button class=\"btn btn-sm btn-dark\" (click)=\"changeStatusTask(listTask.key, 1)\" *ngSwitchCase=\"0\">Not\n            active</button>\n        </td>\n        <td [ngSwitch]=\"listTask.type\">\n          <button class=\"btn btn-sm btn-success\" *ngSwitchCase=\"1\">Success</button>\n          <button class=\"btn btn-sm btn-warning\" *ngSwitchCase=\"0\">Warning</button>\n          <button class=\"btn btn-sm btn-danger\" *ngSwitchCase=\"-1\">Dangerous</button>\n        </td>\n        <td>{{ listTask.created_at | date: 'dd/MM/yyyy HH:mm:ss'}}</td>\n        <td>{{ listTask.updated_at | date: 'dd/MM/yyyy HH:mm:ss'}}</td>\n        <td>\n          <button class=\"btn btn-sm btn-warning\" data-toggle=\"modal\" data-target=\"#modalEditWork\"\n            (click)=\"handleShowDetailTaskWork(listTask.key)\">Edit task</button>\n          <button class=\"btn btn-sm btn-info\" data-toggle=\"modal\" data-target=\"#modalDetailTaskWork\"\n            (click)=\"handleShowDetailTaskWork(listTask.key)\">Detail</button>\n          <button class=\"btn btn-sm btn-danger\" (click)=\"handleDeleteTaskWork(listTask.key)\">Delete task</button>\n        </td>\n      </tr>\n    </tbody>\n  </table> -->\n</div>\n\n<!-- The Modal -->\n  <!-- Add permisison -->\n  <div class=\"modal fade\" id=\"modalAddWork\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add new task</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label>Title</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtTitleTask\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group\">\n              <label>Content</label>\n              <angular-editor [placeholder]=\"'Enter text here...'\" [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"txtContentTask\"></angular-editor>\n            </div>\n            <div class=\"form-group\">\n              <label>Date</label>\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"txtDateTask\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group\">\n              <label>Status</label>\n              <select class=\"form-control\" [(ngModel)]=\"txtStatusTaskWork\" [ngModelOptions]=\"{standalone: true}\">\n                <option value=\"1\">Active</option>\n                <option value=\"0\">No active</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Type</label>\n              <select class=\"form-control\" [(ngModel)]=\"txtTypeTaskWork\" [ngModelOptions]=\"{standalone: true}\">\n                <option value=\"1\">Success</option>\n                <option value=\"0\">Warning</option>\n                <option value=\"-1\">Dangerous</option>\n              </select>\n            </div>\n          </form>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"handleAddTaskWork()\" data-dismiss=\"modal\">Add</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"modalEditWork\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit task</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label>Title</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtTitleTask\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group\">\n              <label>Content</label>\n              <angular-editor [placeholder]=\"'Enter text here...'\" [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"txtContentTask\"></angular-editor>\n            </div>\n            <div class=\"form-group\">\n              <label>Date</label>\n              <input type=\"date\" class=\"form-control\" data-date-format=\"DD MMMM YYYY\" [(ngModel)]=\"txtDateTask\"\n                [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group\">\n              <label>Status</label>\n              <select class=\"form-control\" [(ngModel)]=\"txtStatusTaskWork\" [ngModelOptions]=\"{standalone: true}\">\n                <option value=\"1\">Active</option>\n                <option value=\"0\">No active</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Type</label>\n              <select class=\"form-control\" [(ngModel)]=\"txtTypeTaskWork\" [ngModelOptions]=\"{standalone: true}\">\n                <option value=\"1\">Success</option>\n                <option value=\"0\">Warning</option>\n                <option value=\"-1\">Dangerous</option>\n              </select>\n            </div>\n          </form>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"handleEditTask()\">Edit</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"modalDetailTaskWork\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Detail permission</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <p>Detail</p>\n          <div [innerHTML]=\"txtContentTask\"></div>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./src/app/admin/UserAdmin/TaskWork/taskworkadmin.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/UserAdmin/TaskWork/taskworkadmin.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUserAdminTaskWorkTaskworkadminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n    margin: 1%;\n    min-height: 700px;\n    border: 1px solid #58ACFA;\n    padding: 1%;\n}\n\n.btn {\n    margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vVXNlckFkbWluL1Rhc2tXb3JrL3Rhc2t3b3JrYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL1VzZXJBZG1pbi9UYXNrV29yay90YXNrd29ya2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNThBQ0ZBO1xuICAgIHBhZGRpbmc6IDElO1xufVxuXG4uYnRuIHtcbiAgICBtYXJnaW46IDElO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/UserAdmin/TaskWork/taskworkadmin.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/UserAdmin/TaskWork/taskworkadmin.module.ts ***!
    \******************************************************************/

  /*! exports provided: TaskWorkAdminModule */

  /***/
  function srcAppAdminUserAdminTaskWorkTaskworkadminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskWorkAdminModule", function () {
      return TaskWorkAdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _taskworkadmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./taskworkadmin */
    "./src/app/admin/UserAdmin/TaskWork/taskworkadmin.ts");

    const routes = [{
      path: '',
      component: _taskworkadmin__WEBPACK_IMPORTED_MODULE_8__["TaskWorkAdminComponent"]
    }];
    let TaskWorkAdminModule = class TaskWorkAdminModule {};
    TaskWorkAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__["AngularEditorModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]],
      declarations: [_taskworkadmin__WEBPACK_IMPORTED_MODULE_8__["TaskWorkAdminComponent"]]
    })], TaskWorkAdminModule);
    /***/
  },

  /***/
  "./src/app/admin/UserAdmin/TaskWork/taskworkadmin.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/UserAdmin/TaskWork/taskworkadmin.ts ***!
    \***********************************************************/

  /*! exports provided: TaskWorkAdminComponent */

  /***/
  function srcAppAdminUserAdminTaskWorkTaskworkadminTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskWorkAdminComponent", function () {
      return TaskWorkAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _useradmin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../useradmin.service */
    "./src/app/admin/UserAdmin/useradmin.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_shread_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/shread/base.component */
    "./src/shread/base.component.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts"); // import * as $ from 'jquery';


    let TaskWorkAdminComponent = class TaskWorkAdminComponent extends src_shread_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"] {
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
          ngOnInit: {
            get: () => super.ngOnInit
          }
        });

        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _super.ngOnInit.call(this);

              case 2:
                this.DrawDataTable();

              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      DrawDataTable() {
        const that = this;
        this.dataTable = $('#data_table_task').DataTable({
          processing: true,
          serverSide: true,
          searching: true,
          paging: true,
          order: [],
          ajax: {
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl + '/taskWorks',
            headers: {
              'Authorization': "Bearer ".concat(localStorage.access_token)
            }
          },
          'drawCallback': function drawCallback() {
            $('#data_table_task').addClass("table");
            $('#data_table_task').addClass("table-bordered");
            $('#data_table_task').addClass("table-hover");
            $('#data_table_task').addClass("table-striped");
            $('#data_table_task').children('thead').addClass('bg-info text-white');

            if (that.loadTable) {
              $('#data_table_task').on('click', '.btn-active', function () {
                that.changeStatusTask($(this).data('id'), -1);
              });
              $('#data_table_task').on('click', '.btn-inactive', function () {
                that.changeStatusTask($(this).data('id'), 0);
              });
              $('#data_table_task').on('click', '.btn_detail', function () {
                that.handleShowDetailTaskWork($(this).data('id'));
              });
              $('#data_table_task').on('click', '.btn_edit', function () {
                that.handleShowDetailTaskWork($(this).data('id'));
              });
              $('#data_table_task').on('click', '.btn_delete', function () {
                that.handleDeleteTaskWork($(this).data('id'));
              });
            }

            that.loadTable = false;
          },
          columns: [{
            data: 'key',
            name: 'key',
            'title': 'ID'
          }, {
            data: 'title',
            name: 'title',
            'title': 'Title'
          }, {
            data: 'dateOfTask',
            name: 'dateOfTask',
            'title': 'Date'
          }, {
            data: 'status',
            name: 'status',
            'title': 'Status'
          }, {
            data: 'type',
            name: 'type',
            'title': 'Type'
          }, {
            data: 'created_at',
            name: 'created_at',
            'title': 'Created At'
          }, {
            data: 'updated_at',
            name: 'updated_at',
            'title': 'Updated At'
          }, {
            data: '',
            name: '',
            'title': 'Action'
          }],
          columnDefs: [{
            'targets': 2,
            'render': function render(data) {
              return new Date(data).toLocaleDateString('en-GB');
            }
          }, {
            'targets': 3,
            'render': function render(data, type, row) {
              if (data == 0) return '<button class="btn btn-sm btn-success btn-active" data-id="' + row.key + '">Active</button>';else return '<button class="btn btn-sm btn-dark btn-inactive" data-id="' + row.key + '">Deactive</button>';
            }
          }, {
            'targets': 4,
            'render': function render(data, type, row) {
              if (data == 1) return '<button class="btn btn-sm btn-success">Success</button>';else if (data == 0) return '<button class="btn btn-sm btn-warning">Warning</button>';else return '<button class="btn btn-sm btn-danger">Dangerous</button>';
            }
          }, {
            'targets': [5, 6],
            'render': function render(data) {
              return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
            }
          }, {
            'targets': 7,
            'render': function render(data, type, row) {
              return '<button class="btn btn-sm btn-warning btn_edit" data-id="' + row.key + '" data-toggle="modal" data-target="#modalEditWork">Edit task</button>' + '<button class="btn btn-sm btn-info btn_detail" data-id="' + row.key + '" data-toggle="modal" data-target="#modalDetailTaskWork">Detail</button>' + '<button class="btn btn-sm btn-danger btn_delete" data-id="' + row.key + '">Delete task</button>';
            }
          }]
        });
      }

      resetData() {
        this.txtContentTask = "";
        this.txtTitleTask = "";
        this.txtDateTask = "";
        this.txtStatusTaskWork = 0;
        this.txtTypeTaskWork = 0;
      }

      handleAddTaskWork() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                this.spinner.show();
                _context2.next = 3;
                return this.user.addNewTask(this.txtTitleTask, this.txtContentTask, this.txtDateTask, this.txtStatusTaskWork, this.txtTypeTaskWork).then(data => {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Success', "Add new task success", 'success');
                  console.log(data);
                }).catch(err => {
                  console.log(err);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error', err.error.message, 'error');
                });

              case 3:
                this.dataTable.ajax.reload(null, false);
                this.spinner.hide();

              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
      }

      changeStatusTask(key, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                this.spinner.show();
                _context4.next = 3;
                return this.user.showDetailTask(key).then(data => {
                  var data;
                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3() {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          data = data["data"];
                          _context3.next = 3;
                          return this.user.changeStatusTask(data["key"], status).then(data => {
                            this.dataTable.clear();
                            this.dataTable.ajax.reload(null, false);
                            console.log(data);
                          }).catch(err => {
                            console.log(err);
                          });

                        case 3:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3, this);
                  }));
                }).catch(err => {
                  console.log(err);
                });

              case 3:
                this.spinner.hide();

              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
      }

      handleEditTask() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                this.spinner.show();
                _context5.next = 3;
                return this.user.editTask(this.key, this.txtTitleTask, this.txtContentTask, this.txtDateTask, this.txtStatusTaskWork, this.txtTypeTaskWork).then(data => {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Success', 'Change success', 'success');
                  console.log(data);
                }).catch(err => console.log(err));

              case 3:
                this.dataTable.clear();
                this.dataTable.ajax.reload(null, false);
                this.spinner.hide();

              case 6:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
      }

      handleShowDetailTaskWork(id) {
        this.user.showDetailTask(id).then(data => {
          var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
          var data = data["data"];
          this.key = data["key"];
          this.txtTitleTask = data["title"];
          this.txtDateTask = datePipe.transform(data["dateOfTask"], 'yyyy-MM-dd');
          this.txtContentTask = data["content"];
          this.txtStatusTaskWork = data["status"];
          this.txtTypeTaskWork = data["type"];
        }).catch(err => {
          console.log(err);
        });
      }

      handleDeleteTaskWork(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'Delete task',
                  text: 'Do you want delete this task?',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes'
                }).then(result => {
                  if (result.value) {
                    this.spinner.show();
                    this.user.deleteTask(id).then(data => {
                      this.dataTable.clear();
                      this.dataTable.ajax.reload(null, false);
                      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', data["message"], 'success');
                    }).catch(err => {
                      console.log(err);
                      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', 'Delete error, please check again', 'error');
                    });
                    this.spinner.hide();
                  }
                });

              case 1:
              case "end":
                return _context6.stop();
            }
          }, _callee6, this);
        }));
      }

    };

    TaskWorkAdminComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
    }, {
      type: _useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]
    }, {
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
    }];

    TaskWorkAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'task-work-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./taskworkadmin.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/UserAdmin/TaskWork/taskworkadmin.html")).default,
      providers: [_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./taskworkadmin.component.css */
      "./src/app/admin/UserAdmin/TaskWork/taskworkadmin.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])], TaskWorkAdminComponent);
    /***/
  }
}]);
//# sourceMappingURL=UserAdmin-TaskWork-taskworkadmin-module-es5.js.map