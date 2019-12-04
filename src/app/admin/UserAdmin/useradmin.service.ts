import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class UserAdminService {
    private header = new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.access_token}`
    });

    constructor(public http:HttpClient) {

    }

    getPermission() {
        return this.http.get(`${environment.baseUrl}/permissions`, { headers: this.header }).toPromise();
    }

    getDetailPermission(id:string) {
        return this.http.get(`${environment.baseUrl}/permissions/${id}`, { headers: this.header }).toPromise();
    }

    addPermission(name:string) {
        return this.http.
        post(`${environment.baseUrl}/permissions`, JSON.stringify({name: name}), {headers: this.header}).toPromise();
    }

    editPermission(key:string, name:string, timestamp:string) {
        return this.http.
        put(`${environment.baseUrl}/permissions/${key}`, JSON.stringify({name: name, timestamp:timestamp}), {headers: this.header}).toPromise();
    }

    deletePermission(id:string) {
        return this.http.
        delete(`${environment.baseUrl}/permissions/${id}`, {headers: this.header}).toPromise();
    }

    detailPermission(id:number) {
        return this.http.
        get(`${environment.baseUrl}/permissions/${id}/users`, {headers: this.header}).toPromise();
    }

    getLogUser(numberOfPage: number, currentPage: number) {
        return this.http.
        get(`${environment.baseUrl}/user/logs?numberOfPage=${numberOfPage}&currentPage=${currentPage}`, {headers: this.header}).toPromise();
    }

    showListTask() {
        return this.http
        .get(`${environment.baseUrl}/taskWorks`, {headers: this.header}).toPromise();
    }

    showDetailTask(id:number) {
        return this.http
        .get(`${environment.baseUrl}/taskWorks/${id}`, {headers: this.header}).toPromise();
    }

    addNewTask(title:string, content:string, date:string, status:number, type:number) {
        return this.http
        .post(`${environment.baseUrl}/taskWorks`, JSON.stringify({
            "Title": title,
            "Content": content,
            "DateOfTask": date,
            "Status": status,
            "Type": type
        }), {headers: this.header}).toPromise();
    }

    editTask(id:number, title:string, content:string, date:string, status:number, type:number) {
        return this.http
        .put(`${environment.baseUrl}/taskWorks/${id}`, JSON.stringify({
            "Title": title,
            "Content": content,
            "DateOfTask": date,
            "Status": status,
            "Type": type
        }), {headers: this.header}).toPromise();
    }

    changeStatusTask(id:number, status:number) {
        return this.http
        .put(`${environment.baseUrl}/taskWorks/${id}`, JSON.stringify({"Status": status}), {headers: this.header}).toPromise();
    }

    deleteTask(id:number) {
        return this.http
        .delete(`${environment.baseUrl}/taskWorks/${id}`, {headers: this.header}).toPromise();
    }

    showDetailMess(id:number) {
        return this.http
        .get(`${environment.baseUrl}/admin/messageLogs/${id}`, {headers: this.header}).toPromise();
    }

    addNewMess(title:string, content:string) {
        return this.http
        .post(`${environment.baseUrl}/admin/messageLogs`, JSON.stringify({
            "Title": title,
            "Content": content
        }), {headers: this.header}).toPromise();
    }
    editMess(id:number, title:string, content:string, timestamp:string) {
        return this.http
        .put(`${environment.baseUrl}/admin/messageLogs/${id}`, JSON.stringify({
            "Title": title,
            "Content": content,
            "Timestamp": timestamp
        }), {headers: this.header}).toPromise();
    }
    deleteMess(id:number) {
        return this.http
        .delete(`${environment.baseUrl}/admin/messageLogs/${id}`, {headers: this.header}).toPromise();
    }

    addNewProject(data) {
        return this.http
        .post(`${environment.baseUrl}/projectLogs`, JSON.stringify(data), {headers:this.header})
        .toPromise();
    }

    deleteProject(key) {
        return this.http
        .delete(`${environment.baseUrl}/projectLogs/${key}`, {headers:this.header})
        .toPromise();
    }

    deleteLog(projectKey, logId) {
        return this.http
        .delete(`${environment.baseUrl}/projectLogs/${projectKey}/logs/${logId}`, {headers:this.header})
        .toPromise();
    }

    deleteLogs(projectKey, logIdArr) {
        return this.http.request('DELETE', `${environment.baseUrl}/projectLogs/${projectKey}/logs`, {
            headers: this.header,
            body: { Id: logIdArr }
        }).toPromise();
    }
}
