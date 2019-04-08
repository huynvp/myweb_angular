import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
const BASE_URL  = environment.baseUrl;
@Injectable()

export class ApiDocAdminService {
    private header = new HttpHeaders({
        'content-type': 'application/json',
        'token': localStorage.token
    })
    constructor(public http:HttpClient) {
    }

    getAllProject() {
        return this.http.get(`${BASE_URL}/api-doc/project`, {headers: this.header}).toPromise();
    }

    getDetailProject(id) {
        return this.http.get(`${BASE_URL}/api-doc/project/${id}`, {headers: this.header}).toPromise();
    }
}