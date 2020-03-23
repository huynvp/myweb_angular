(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UserAdmin-Permission-permissionuseradmin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/UserAdmin/Permission/permissionuseradmin.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/UserAdmin/Permission/permissionuseradmin.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUserAdminPermissionPermissionuseradminHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"fadeIn second\">\n  <!-- Quyền -->\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAddPermission\">\n    Add permission\n  </button>\n  <hr>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Permission</th>\n        <th>Created at</th>\n        <th>Updated at</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let permisison of permisisons\">\n        <td>{{ permisison.key }}</td>\n        <td>{{ permisison.name }}</td>\n        <td>{{ permisison.created_at }}</td>\n        <td>{{ permisison.updated_at }}</td>\n        <td>\n          <button class=\"btn btn-sm btn-success\" (click)=\"handleShowPermission(permisison.key)\" data-toggle=\"modal\"\n            data-target=\"#modalEditPermission\"><i class=\"fas fa-edit\"></i> Edit</button>\n          <button class=\"btn btn-sm btn-danger\" (click)=\"handleDeletePermission(permisison.key)\"><i\n              class=\"fas fa-trash\"></i> Delete</button>\n          <button class=\"btn btn-sm btn-primary\" (click)=\"handleDetailPermission(permisison.key)\" data-toggle=\"modal\"\n            data-target=\"#modalDetailPermission\"><i class=\"fas fa-info-circle\"></i> Detail</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- The Modal -->\n<!-- Add permisison -->\n<div class=\"modal fade\" id=\"modalAddPermission\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add permission</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Permission name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtPermissionName\"\n              [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </form>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"handleAddPermission()\" data-dismiss=\"modal\">Add</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Edit permisison -->\n<div class=\"modal fade\" id=\"modalEditPermission\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit permission</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Permission key</label>\n            <input readonly type=\"text\" class=\"form-control\" [(ngModel)]=\"txtPermissionKeyEdit\"\n              [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"form-group\">\n            <label>Permission name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtPermissionNameEdit\"\n              [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"form-group\">\n            <label>Created at</label>\n            <input readonly type=\"text\" class=\"form-control\" [(ngModel)]=\"txtPermissionCreatedEdit\"\n              [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"form-group\">\n            <label>Updated at</label>\n            <input readonly type=\"text\" class=\"form-control\" [(ngModel)]=\"txtPermissionUpdatedEdit\"\n              [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </form>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"handleEditPermission()\"\n          data-dismiss=\"modal\">Edit</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"modalDetailPermission\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Detail permission</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>STT</th>\n              <th>User</th>\n              <th>Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of users\">\n              <td>{{ user.key }}</td>\n              <td>{{ user.name }}</td>\n              <td [ngSwitch]=\"user.status\">\n                <button class=\"btn btn-success\" *ngSwitchCase=\"1\">Active</button>\n                <button class=\"btn btn-dark\" *ngSwitchCase=\"0\">Not active</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/admin/UserAdmin/Permission/permissionuseradmin.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/UserAdmin/Permission/permissionuseradmin.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUserAdminPermissionPermissionuseradminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n    margin: 1%;\n    min-height: 700px;\n    border: 1px solid #58ACFA;\n    padding: 1%;\n}\n\n.btn {\n    margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vVXNlckFkbWluL1Blcm1pc3Npb24vcGVybWlzc2lvbnVzZXJhZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vVXNlckFkbWluL1Blcm1pc3Npb24vcGVybWlzc2lvbnVzZXJhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMSU7XG4gICAgbWluLWhlaWdodDogNzAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU4QUNGQTtcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuLmJ0biB7XG4gICAgbWFyZ2luOiAxJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/UserAdmin/Permission/permissionuseradmin.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/UserAdmin/Permission/permissionuseradmin.module.ts ***!
    \**************************************************************************/

  /*! exports provided: PermissionUserAdminModule */

  /***/
  function srcAppAdminUserAdminPermissionPermissionuseradminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionUserAdminModule", function () {
      return PermissionUserAdminModule;
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


    var _permissionuseradmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./permissionuseradmin */
    "./src/app/admin/UserAdmin/Permission/permissionuseradmin.ts");

    const routes = [{
      path: '',
      component: _permissionuseradmin__WEBPACK_IMPORTED_MODULE_8__["PermissionUserAdminComponent"]
    }];
    let PermissionUserAdminModule = class PermissionUserAdminModule {};
    PermissionUserAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__["AngularEditorModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]],
      declarations: [_permissionuseradmin__WEBPACK_IMPORTED_MODULE_8__["PermissionUserAdminComponent"]]
    })], PermissionUserAdminModule);
    /***/
  },

  /***/
  "./src/app/admin/UserAdmin/Permission/permissionuseradmin.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/UserAdmin/Permission/permissionuseradmin.ts ***!
    \*******************************************************************/

  /*! exports provided: PermissionUserAdminComponent */

  /***/
  function srcAppAdminUserAdminPermissionPermissionuseradminTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionUserAdminComponent", function () {
      return PermissionUserAdminComponent;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_shread_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/shread/base.component */
    "./src/shread/base.component.ts");

    let PermissionUserAdminComponent = class PermissionUserAdminComponent extends src_shread_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"] {
      constructor(router, http, user, spinner) {
        super(router, http);
        this.router = router;
        this.http = http;
        this.user = user;
        this.spinner = spinner;
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
                _super.ngOnInit.call(this);

                this.user.getPermission().then(data => this.permisisons = data['data']).catch(err => console.log(err));

              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      resetInput() {
        this.txtPermissionName = "";
      }

      handleShowPermission(id) {
        this.user.getDetailPermission(id).then(data => {
          this.txtPermissionNameEdit = data['data'][0]['name'];
          this.txtPermissionKeyEdit = data['data'][0]['key'];
          this.txtPermissionCreatedEdit = data['data'][0]['created_at'];
          this.txtPermissionUpdatedEdit = data['data'][0]['updated_at'];
        }).catch(err => console.log(err));
      }

      handleEditPermission() {
        this.spinner.show();
        this.user.getDetailPermission(this.txtPermissionKeyEdit).then(data => {
          var timestamp = data['data'][0]['timestamp'];
          this.user.editPermission(this.txtPermissionKeyEdit, this.txtPermissionNameEdit, timestamp).then(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Update success!', data['message'], 'success');
            this.resetInput();
            this.ngOnInit();
          }).catch(err => console.log(err));
        }).catch(err => console.log(err));
        this.spinner.hide();
      }

      handleAddPermission() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                this.spinner.show();

                if (!(this.txtPermissionName == null)) {
                  _context2.next = 5;
                  break;
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Request is invalid', "Name permission is required", 'error');
                this.spinner.hide();
                return _context2.abrupt("return");

              case 5:
                this.user.addPermission(this.txtPermissionName).then(data => {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Add success!', data['message'], 'success');
                  this.resetInput();
                  this.ngOnInit();
                }).catch(err => {
                  console.log(err);
                });
                this.spinner.hide();

              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
      }

      handleDeletePermission(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
          title: 'Delete permission',
          text: 'Do you want delete this permission?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes'
        }).then(result => {
          if (result.value) {
            this.spinner.show();
            this.user.deletePermission(id).then(data => {
              this.ngOnInit();
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', data["message"], 'success');
            }).catch(err => {
              console.log(err);
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Delete error, please check again', 'error');
            });
            this.spinner.hide();
          }
        });
      }

      handleDetailPermission(id) {
        this.user.detailPermission(id).then(data => {
          console.log(data);
          this.users = data["data"];
        }).catch(err => {
          console.log(err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error!', 'Show detail error, please check again', 'error');
        });
      }

    };

    PermissionUserAdminComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
    }, {
      type: _useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]
    }, {
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
    }];

    PermissionUserAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'permission-user-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./permissionuseradmin.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/UserAdmin/Permission/permissionuseradmin.html")).default,
      providers: [_useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./permissionuseradmin.component.css */
      "./src/app/admin/UserAdmin/Permission/permissionuseradmin.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _useradmin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])], PermissionUserAdminComponent);
    /***/
  }
}]);
//# sourceMappingURL=UserAdmin-Permission-permissionuseradmin-module-es5.js.map