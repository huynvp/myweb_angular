import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RefreshToken {
    protected token = '';
    protected header = null;
    protected refresh_token = '';

    constructor(public http:HttpClient) {
    	this.refresh_token = '';
    }

    refreshToken() {
    	this.refresh_token = localStorage.getItem('refresh_token');
        let json = JSON.stringify({
        	refresh_token: this.refresh_token
        })
        return this.http.put(`${environment.baseUrl}/user/refresh-token`, json, {
        	headers: new HttpHeaders({'content-type': 'application/json'})
        });
    }
}

