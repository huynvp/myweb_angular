import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.baseUrl;

@Injectable()

export class ApiDocService {
    protected header = new HttpHeaders({
        'content-type': 'application/json',
        'token': localStorage.token
    });

    constructor(public http:HttpClient) {
    }

    showProject() {
        return this.http.get(`${BASE_URL}/api-doc/project`, {
            headers: this.header
        }).toPromise();
    }
}