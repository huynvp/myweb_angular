import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({providedIn: 'root'})
export class AppService{
    protected token = '';
    // protected header = null;
    protected refresh_token = '';
    protected accessToken = '';
    protected header = new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.access_token
    });

    constructor(public http:HttpClient) {
        this.refresh_token = '';
        this.accessToken = localStorage.getItem('access_token');
        this.refresh_token = localStorage.getItem('refresh_token');
    }

    refreshToken() {
        let json = JSON.stringify({
        	refreshToken: this.refresh_token
        })
        return this.http.put(`${environment.baseUrl}/user/refresh-token`, json, {
        	headers: new HttpHeaders({'content-type': 'application/json'})
        }).subscribe(data => {
            localStorage.access_token = data['data']['accessToken'];
            localStorage.refresh_token = data['data']['refreshToken'];
            this.accessToken = data['data']['accessToken'];
            this.refresh_token = data['data']['refreshToken'];
            this.header = new HttpHeaders({
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + this.accessToken
            })
        }, err => {
            console.log(err)
        });
    }

    getEvent() {
        return this.http.get(`${environment.baseUrl}/event`, {
        	headers: this.header
        }).toPromise();
    }

    getDetailEvent(id:any) {
        return this.http.get(`${environment.baseUrl}/event/${id}`, {
        	headers: this.header
        }).toPromise();
    }

    callApiCorona() {
        return this.http.get(`${environment.baseUrl}/event/corona`).toPromise();
    }
}

