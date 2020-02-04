import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService{
    protected token = '';
    protected header = null;
    protected refresh_token = '';
    protected headers = new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.access_token
    });

    constructor(public http:HttpClient) {
    	this.refresh_token = '';
    }

    refreshToken() {
    	this.refresh_token = localStorage.getItem('refresh_token');
        let json = JSON.stringify({
        	refreshToken: this.refresh_token
        })
        return this.http.put(`${environment.baseUrl}/user/refresh-token`, json, {
        	headers: new HttpHeaders({'content-type': 'application/json'})
        });
    }

    getEvent() {
        return this.http.get(`${environment.baseUrl}/event`, {
        	headers: this.headers
        }).toPromise();
    }

    getDetailEvent(id:any) {
        return this.http.get(`${environment.baseUrl}/event/${id}`, {
        	headers: this.headers
        }).toPromise();
    }
}

