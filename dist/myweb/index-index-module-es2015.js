(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-6\">\n    <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img\n            src=\"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg\"\n            class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\">\n          <img\n            src=\"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg\"\n            class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\">\n          <img\n            src=\"https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg?cs=srgb&dl=asphalt-autumn-beauty-237018.jpg&fm=jpg\"\n            class=\"d-block w-100\" alt=\"...\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-6\">\n    <select name=\"\" id=\"\" class=\"form-control\" (change)=\"handleChangeEvent($event.target.value)\">\n      <option value=\"\">--Chọn một cái sự kiện --</option>\n      <option *ngFor=\"let item of events\" value=\"{{item.key}}\">{{item.name}}</option>\n    </select>\n    <h2>CountDown</h2>\n    <h4>Event name: <strong>{{eventName}}</strong></h4>\n    <h5>{{days}} days : {{hours}} hours : {{minutes}} minutes : {{seconds}} seconds</h5>\n    <!-- <p>{{dateEvent}}</p> -->\n  </div>\n</div>\n\n<nz-skeleton [nzActive]=\"true\" [nzLoading]=\"loading\" [nzParagraph]=\"{ rows: 20 }\"></nz-skeleton>\n\n<div class=\"row\" [class.invisible]=\"loading==true\">\n  <h4>Tình hình corona mới nhất</h4>\n</div>\n<div class=\"row\" [class.invisible]=\"loading==true\">\n  <div class=\"col\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"><strong>Thế giới</strong></li>\n      <li class=\"list-group-item\">Số ca phát hiện: {{corona == '' ? 'N/A' : corona.summaryStats.global.confirmed}}</li>\n      <li class=\"list-group-item\">Số ca tử vong: {{corona == '' ? 'N/A' : corona.summaryStats.global.deaths}}</li>\n      <li class=\"list-group-item\">Số ca chữa khỏi: {{corona == '' ? 'N/A' : corona.summaryStats.global.recovered}}</li>\n      <li class=\"list-group-item\"><strong>Trung Quốc</strong></li>\n      <li class=\"list-group-item\">Số ca phát hiện: {{corona == '' ? 'N/A' : corona.summaryStats.china.confirmed}}</li>\n      <li class=\"list-group-item\">Số ca tử vong: {{corona == '' ? 'N/A' : corona.summaryStats.china.deaths}}</li>\n      <li class=\"list-group-item\">Số ca chữa khỏi: {{corona == '' ? 'N/A' : corona.summaryStats.china.recovered}}</li>\n      <li class=\"list-group-item\"><strong>Ngoài Trung Quốc</strong></li>\n      <li class=\"list-group-item\">Số ca phát hiện: {{corona == '' ? 'N/A' : corona.summaryStats.nonChina.confirmed}}\n      </li>\n      <li class=\"list-group-item\">Số ca tử vong: {{corona == '' ? 'N/A' : corona.summaryStats.nonChina.deaths}}</li>\n      <li class=\"list-group-item\">Số ca chữa khỏi: {{corona == '' ? 'N/A' : corona.summaryStats.nonChina.recovered}}\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"row\" [class.invisible]=\"loading==true\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>STT</th>\n          <th>Thành phố</th>\n          <th>Quốc gia</th>\n          <th>Số ca nhiễm</th>\n          <th>Số ca tử vong</th>\n          <th>Số ca chữa khỏi</th>\n          <th>Ngày cập nhật</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of corona.rawData; index as i\">\n          <td>{{i+1}}</td>\n          <td>{{item['province']}}</td>\n          <td>{{item['country']}}</td>\n          <td>{{item['data'][0]['confirmed']}}</td>\n          <td>{{item['data'][0]['deaths']}}</td>\n          <td>{{item['data'][0]['recovered']}}</td>\n          <td>{{convertDateTimeToStrView(item['data'][0]['createdAt'])}}</td>\n          <td><button (click)=\"viewDetail(item['data'])\">Xem chi tiết</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<nz-modal [(nzVisible)]=\"showModal\" nzTitle=\"The first Modal\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\n  <nz-list [nzDataSource]=\"detailCorona\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'horizontal'\" [nzLoading]=\"loading\">\n    <ng-template #item let-item>\n      <nz-list-item>\n        <nz-list-item-meta\n          \n          [nzDescription]=\"nzTitle\"\n        >\n          <ng-template #nzTitle>\n            <ul>\n              <li>Số ca phát hiện: {{item.confirmed}}</li>\n              <li>Số ca chữa khỏi: {{item.recovered}}</li>\n              <li>Số ca tử vong: {{item.deaths}}</li>\n              <li>Ngày cập nhật: {{convertDateTimeToStrView(item.createdAt)}}</li>\n            </ul>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n</nz-modal>");

/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    margin-top: 10px;\n\n}\n\n.row {\nmin-height: 200px;\n}\n\n#left-menu {\n    background-color: azure;\n}\n\n#content {\n    background-color: azure;\n}\n\n#right-menu {\n    background-color: azure;\n}\n\n#nav {\n    min-height: 100px;\n    margin-bottom: 20px;\n    background-image: url('title_background.jpg')\n}\n\n.list-group-item:hover {\n\tbackground-color: #EEEEEE;\n\tfont-weight: bold;\n\tcolor: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG5cbi5yb3cge1xubWluLWhlaWdodDogMjAwcHg7XG59XG5cbiNsZWZ0LW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xufVxuXG4jY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG59XG5cbiNyaWdodC1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuI25hdiB7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9pbWFnZS90aXRsZV9iYWNrZ3JvdW5kLmpwZycpXG59XG5cbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6IGJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _shread_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shread/base.component */ "./src/shread/base.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");









let IndexComponent = class IndexComponent extends _shread_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"] {
    constructor(router, http, spinner, app) {
        super(router, http);
        this.router = router;
        this.http = http;
        this.spinner = spinner;
        this.app = app;
        this.loading = false;
        this.showModal = false;
        this.corona = '';
        this.detailCorona = '';
        this.url = "";
        this.admin = "";
        this.eventDate = new Date();
        this.dateNow = new Date();
        this.url = ``;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.app.getEvent()
                .then(data => {
                this.events = data['data'];
            })
                .catch(err => {
                console.log(err);
            });
            this.time1 = setInterval(() => {
                let dateNow = new Date();
                var distance = this.eventDate - dateNow;
                this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((distance % (1000 * 60)) / (1000));
                // console.log(this.seconds);
            }, 500);
            yield this.getCorona();
            this.time2 = setInterval(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.getCorona();
            }), 50000);
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
                // console.log(err);
                // Swal.fire('Eror', 'Token invalid', 'error');
                this.router.navigate(['/login']);
            });
            this.spinner.hide();
        });
    }
    getCorona() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            yield this.app.callApiCorona()
                .then(data => {
                console.log(data);
                this.corona = data['data'];
            });
            this.loading = false;
        });
    }
    handleCancel() {
        this.showModal = false;
    }
    handleOk() {
        this.showModal = false;
    }
    viewDetail(data) {
        console.log(data);
        this.detailCorona = data;
        this.showModal = true;
    }
    handleChangeEvent(id) {
        this.app.getDetailEvent(id)
            .then(data => {
            this.eventName = data['data']['name'];
            this.eventDate = new Date(data['data']['date']);
            // console.log(data);
        })
            .catch(err => {
            console.log(err);
        });
    }
    handleLogout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        // Swal.fire('Success', 'See you again', 'info');
        this.router.navigate(['/login']);
    }
    ngOnDestroy() {
        clearInterval(this.time1);
        clearInterval(this.time2);
        super.ngOnDestroy();
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]])
], IndexComponent);



/***/ }),

/***/ "./src/app/index/index.module.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.component */ "./src/app/index/index.component.ts");






const routes = [
    {
        path: '',
        component: _index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"]
    }
];
let IndexModule = class IndexModule {
};
IndexModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ],
        declarations: [
            _index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"]
        ]
    })
], IndexModule);



/***/ })

}]);
//# sourceMappingURL=index-index-module-es2015.js.map