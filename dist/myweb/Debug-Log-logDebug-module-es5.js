(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Debug-Log-logDebug-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDebug.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDebug.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminDebugLogLogDebugHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Log debug</h3>\n<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#modalAddProject\" (click)=\"resetData()\">\n    Add new project\n</button>\n<hr>\n<div class=\"row\">\n    <div class=\"table-responsive\">\n        <table id=\"data_table_log\"></table>\n    </div>\n</div>\n\n<!-- The Modal -->\n  <!-- Add permisison -->\n  <div class=\"modal fade\" id=\"modalAddProject\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add new project</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label>Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtAddName\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group\">\n              <label>Status</label><br>\n              <input type=\"checkbox\" (change)=\"changeStatus()\"> Active\n            </div>\n          </form>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"addProject()\" data-dismiss=\"modal\">Add</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDetail/logDetail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDetail/logDetail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminDebugLogLogDetailLogDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Log debug detail</h3>\n<button (click)=\"goBack()\" class=\"btn btn-sm btn-warning\">\n    <i class=\"fas fa-chevron-circle-left\"></i> Go Back\n</button>\n<button (click)=\"refreshTable()\" class=\"btn btn-sm btn-primary\">\n    <i class=\"fas fa-sync-alt\"></i> Refresh Data\n</button>\n<button (click)=\"deleteMuity()\" class=\"btn btn-sm btn-danger\">\n    <i class=\"fas fa-trash-alt\"></i> Delete Muilty\n</button>\n<div class=\"row\">\n    <div class=\"table-responsive\">\n        <table id=\"data_table_log\"></table>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/admin/Debug/Log/logDebug.component.css":
  /*!********************************************************!*\
    !*** ./src/app/admin/Debug/Log/logDebug.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminDebugLogLogDebugComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row .col {\n    margin-top: 1%;\n}\n\n.btn-actived {\n    background: gray;\n    color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRGVidWcvTG9nL2xvZ0RlYnVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9EZWJ1Zy9Mb2cvbG9nRGVidWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cgLmNvbCB7XG4gICAgbWFyZ2luLXRvcDogMSU7XG59XG5cbi5idG4tYWN0aXZlZCB7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICBjb2xvcjogI2RkZGRkZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/Debug/Log/logDebug.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/Debug/Log/logDebug.component.ts ***!
    \*******************************************************/

  /*! exports provided: LogDebugComponent */

  /***/
  function srcAppAdminDebugLogLogDebugComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogDebugComponent", function () {
      return LogDebugComponent;
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


    var _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../UserAdmin/useradmin.service */
    "./src/app/admin/UserAdmin/useradmin.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_shread_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/shread/base.component */
    "./src/shread/base.component.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

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
        this.dataTable = $('#data_table_log').DataTable({
          processing: true,
          serverSide: true,
          searching: true,
          paging: true,
          order: [],
          ajax: {
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + '/projectLogs',
            headers: {
              'Authorization': "Bearer ".concat(localStorage.access_token)
            }
          },
          'drawCallback': function drawCallback() {
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
          columns: [{
            data: 'key',
            name: 'key',
            'title': 'ID'
          }, {
            data: 'name',
            name: 'name',
            'title': 'Name'
          }, {
            data: 'status',
            name: 'status',
            'title': 'Status'
          }, {
            data: 'enable',
            name: 'enable',
            'title': 'Enable'
          }, {
            data: 'createdAt',
            name: 'created_at',
            'title': 'Created At'
          }, {
            title: 'Select'
          }],
          columnDefs: [{
            'targets': 2,
            'render': function render(data) {
              if (data == 1) return "<button class=\"btn btn-sm btn-success\">Active</button>";else return "<button class=\"btn btn-sm btn-danger\">Deactive</button>";
            }
          }, {
            'targets': 4,
            'render': function render(data) {
              return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
            }
          }, {
            'targets': 5,
            'render': function render(data, m, row) {
              return "<div class=\"dropdown\">\n              <button class=\"btn btn-sm btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Action\n              </button>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <span class=\"dropdown-item delete\" data-id=\"".concat(row.key, "\">Delete</span>\n                <span class=\"dropdown-item detail\" data-id=\"").concat(row.key, "\">View Log</span>\n              </div>\n            </div>");
            }
          }]
        });
      }

      resetData() {
        this.txtAddName = '';
      }

      changeStatus() {
        if (this.checkStatus == 0) this.checkStatus = 1;else this.checkStatus = 0;
        console.log(this.checkStatus);
      }

      addProject() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var data;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                this.spinner.show();
                data = {
                  Name: this.txtAddName,
                  Status: this.checkStatus
                };
                _context2.next = 4;
                return this.user.addNewProject(data).then(data => {
                  $.notify({
                    message: data["message"]
                  }, {
                    type: 'success'
                  });
                }).catch(err => {
                  $.notify({
                    message: err["error"]["message"]
                  }, {
                    type: 'danger'
                  });
                });

              case 4:
                this.dataTable.ajax.reload(null, false);
                this.spinner.hide();
                this.resetData();

              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
      }

      deleteProject(key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                this.spinner.show();
                _context3.next = 3;
                return this.user.deleteProject(key).then(data => {
                  $.notify({
                    message: data["message"]
                  }, {
                    type: 'success'
                  });
                }).catch(err => {
                  $.notify({
                    message: err["error"]["message"]
                  }, {
                    type: 'danger'
                  });
                });

              case 3:
                this.dataTable.ajax.reload(null, false);
                this.spinner.hide();

              case 5:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
      }

    };

    LogDebugComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
    }, {
      type: _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]
    }, {
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
    }];

    LogDebugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'log-debug-user-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logDebug.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDebug.html")).default,
      providers: [_UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logDebug.component.css */
      "./src/app/admin/Debug/Log/logDebug.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])], LogDebugComponent);
    /***/
  },

  /***/
  "./src/app/admin/Debug/Log/logDebug.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/Debug/Log/logDebug.module.ts ***!
    \****************************************************/

  /*! exports provided: LogDebugUserAdminModule */

  /***/
  function srcAppAdminDebugLogLogDebugModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogDebugUserAdminModule", function () {
      return LogDebugUserAdminModule;
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


    var _logDebug_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./logDebug.component */
    "./src/app/admin/Debug/Log/logDebug.component.ts");
    /* harmony import */


    var _logDetail_logDetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./logDetail/logDetail.component */
    "./src/app/admin/Debug/Log/logDetail/logDetail.component.ts");

    const routes = [{
      path: '',
      component: _logDebug_component__WEBPACK_IMPORTED_MODULE_8__["LogDebugComponent"]
    }, {
      path: 'detail/:id',
      component: _logDetail_logDetail_component__WEBPACK_IMPORTED_MODULE_9__["LogDetailComponent"]
    }];
    let LogDebugUserAdminModule = class LogDebugUserAdminModule {};
    LogDebugUserAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__["AngularEditorModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]],
      declarations: [_logDebug_component__WEBPACK_IMPORTED_MODULE_8__["LogDebugComponent"], _logDetail_logDetail_component__WEBPACK_IMPORTED_MODULE_9__["LogDetailComponent"]]
    })], LogDebugUserAdminModule);
    /***/
  },

  /***/
  "./src/app/admin/Debug/Log/logDetail/logDetail.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/Debug/Log/logDetail/logDetail.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminDebugLogLogDetailLogDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row .col {\n    margin-top: 1%;\n}\n\n.btn-actived {\n    background: gray;\n    color: #dddddd;\n}\n\n.btn {\n    margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRGVidWcvTG9nL2xvZ0RldGFpbC9sb2dEZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL0RlYnVnL0xvZy9sb2dEZXRhaWwvbG9nRGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IC5jb2wge1xuICAgIG1hcmdpbi10b3A6IDElO1xufVxuXG4uYnRuLWFjdGl2ZWQge1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5idG4ge1xuICAgIG1hcmdpbjogMSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/Debug/Log/logDetail/logDetail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/Debug/Log/logDetail/logDetail.component.ts ***!
    \******************************************************************/

  /*! exports provided: LogDetailComponent */

  /***/
  function srcAppAdminDebugLogLogDetailLogDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogDetailComponent", function () {
      return LogDetailComponent;
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


    var _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../UserAdmin/useradmin.service */
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
    "./src/environments/environment.ts");

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
          ngOnInit: {
            get: () => super.ngOnInit
          }
        });

        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _super.ngOnInit.call(this);

              case 2:
                this.activatedRoute.params.subscribe(param => {
                  this.id = param.id;
                });
                this.DrawDataTable();

              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
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
              'Authorization': "Bearer ".concat(localStorage.access_token)
            }
          },
          'drawCallback': function drawCallback() {
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
                    if (e.checked == true) that.id_arr.push(e.value);
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
                } else {
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
          columns: [// { data: 'id', name: 'id', 'title': 'ID' },
          {
            data: 'content',
            name: 'content',
            'title': 'Content'
          }, {
            data: 'type',
            name: 'type',
            'title': 'Type'
          }, {
            data: 'createdAt',
            name: 'created_at',
            'title': 'Created At'
          }, {
            title: '<input type="checkbox" id="checkAll" value="${row.id}">'
          }],
          columnDefs: [// {
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
            'render': function render(data) {
              return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
            }
          }, {
            'targets': 3,
            orderable: false,
            'render': function render(data, m, row) {
              return "<input type=\"checkbox\" class=\"check\" value=\"".concat(row.id, "\">");
            }
          }]
        });
      }

      deleteMuity() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
          title: 'Are you sure delete log checked?',
          text: "You won't be able to revert this!",
          showCancelButton: true
        }).then(result => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (!result.value) {
                  _context5.next = 8;
                  break;
                }

                this.spinner.show();
                $('#checkAll')[0].checked = false;
                _context5.next = 5;
                return this.user.deleteLogs(this.id, this.id_arr).then(data => {
                  $.notify({
                    message: data["message"]
                  }, {
                    type: 'success'
                  });
                }).catch(err => {
                  $.notify({
                    message: err["error"]["message"]
                  }, {
                    type: 'danger'
                  });
                });

              case 5:
                this.dataTable.ajax.reload(null, false);
                this.spinner.hide();
                ;

              case 8:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        })));
      }

      goBack() {
        this.location.back();
      }

    };

    LogDetailComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
    }, {
      type: _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
    }, {
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
    }];

    LogDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'log-detail-user-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logDetail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/Debug/Log/logDetail/logDetail.html")).default,
      providers: [_UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logDetail.component.css */
      "./src/app/admin/Debug/Log/logDetail/logDetail.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _UserAdmin_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])], LogDetailComponent);
    /***/
  }
}]);
//# sourceMappingURL=Debug-Log-logDebug-module-es5.js.map