import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService{
    protected token = '';
    protected header = null;

    constructor(public http:HttpClient) {
    }

    refreshToken():Observable<any> {
        const formData = new FormData();
        formData.append('refreshToken', localStorage.getItem('refresh_token'));
        return this.http.put(`${environment.baseUrl}/user/refresh-token`, formData);
    }
}

