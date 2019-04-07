import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class ChangePassService {
    private header=new HttpHeaders({
        'content-type':'application/json',
        'token': localStorage.token
    });
    constructor(public http:HttpClient) {
        
    }

    changePass(old_pass, new_pass) {
        return this.http.post(`${environment.baseUrl}/user/change-pass`, 
            JSON.stringify({
                'old_pass':old_pass,
                'new_pass':new_pass,
            }),{ headers: this.header }).toPromise();
    }
}