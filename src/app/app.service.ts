import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService{
    protected token = '';
    protected header = null;

    constructor(public http:HttpClient) {
        if(localStorage.getItem('token') != null) {
            this.token = localStorage.getItem('token')
        }

        this.header = new HttpHeaders({
            'token': this.token,
            'content-type': 'application/json'
        });
    }

    refreshToken():Observable<any> {
        return this.http.post(`${environment.baseUrl}/user/refresh-token`, null, {headers: this.header});
    }

    test() {

    }
}

