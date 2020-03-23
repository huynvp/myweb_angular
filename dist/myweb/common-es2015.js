(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin/UserAdmin/useradmin.service.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/UserAdmin/useradmin.service.ts ***!
  \******************************************************/
/*! exports provided: UserAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdminService", function() { return UserAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let UserAdminService = class UserAdminService {
    constructor(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.access_token}`
        });
    }
    getPermission() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/permissions`, { headers: this.header }).toPromise();
    }
    getDetailPermission(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/permissions/${id}`, { headers: this.header }).toPromise();
    }
    addPermission(name) {
        return this.http.
            post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/permissions`, JSON.stringify({ name: name }), { headers: this.header }).toPromise();
    }
    editPermission(key, name, timestamp) {
        return this.http.
            put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/permissions/${key}`, JSON.stringify({ name: name, timestamp: timestamp }), { headers: this.header }).toPromise();
    }
    deletePermission(id) {
        return this.http.
            delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/permissions/${id}`, { headers: this.header }).toPromise();
    }
    detailPermission(id) {
        return this.http.
            get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/permissions/${id}/users`, { headers: this.header }).toPromise();
    }
    getLogUser(numberOfPage, currentPage) {
        return this.http.
            get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/user/logs?numberOfPage=${numberOfPage}&currentPage=${currentPage}`, { headers: this.header }).toPromise();
    }
    showListTask() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/taskWorks`, { headers: this.header }).toPromise();
    }
    showDetailTask(id) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/taskWorks/${id}`, { headers: this.header }).toPromise();
    }
    addNewTask(title, content, date, status, type) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/taskWorks`, JSON.stringify({
            "Title": title,
            "Content": content,
            "DateOfTask": date,
            "Status": status,
            "Type": type
        }), { headers: this.header }).toPromise();
    }
    editTask(id, title, content, date, status, type) {
        return this.http
            .put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/taskWorks/${id}`, JSON.stringify({
            "Title": title,
            "Content": content,
            "DateOfTask": date,
            "Status": status,
            "Type": type
        }), { headers: this.header }).toPromise();
    }
    changeStatusTask(id, status) {
        return this.http
            .put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/taskWorks/${id}`, JSON.stringify({ "Status": status }), { headers: this.header }).toPromise();
    }
    deleteTask(id) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/taskWorks/${id}`, { headers: this.header }).toPromise();
    }
    showDetailMess(id) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/admin/messageLogs/${id}`, { headers: this.header }).toPromise();
    }
    addNewMess(title, content) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/admin/messageLogs`, JSON.stringify({
            "Title": title,
            "Content": content
        }), { headers: this.header }).toPromise();
    }
    editMess(id, title, content, timestamp) {
        return this.http
            .put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/admin/messageLogs/${id}`, JSON.stringify({
            "Title": title,
            "Content": content,
            "Timestamp": timestamp
        }), { headers: this.header }).toPromise();
    }
    deleteMess(id) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/admin/messageLogs/${id}`, { headers: this.header }).toPromise();
    }
    addNewProject(data) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/projectLogs`, JSON.stringify(data), { headers: this.header })
            .toPromise();
    }
    deleteProject(key) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/projectLogs/${key}`, { headers: this.header })
            .toPromise();
    }
    deleteLog(projectKey, logId) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/projectLogs/${projectKey}/logs/${logId}`, { headers: this.header })
            .toPromise();
    }
    deleteLogs(projectKey, logIdArr) {
        return this.http.request('DELETE', `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/projectLogs/${projectKey}/logs`, {
            headers: this.header,
            body: { Id: logIdArr }
        }).toPromise();
    }
};
UserAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserAdminService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map