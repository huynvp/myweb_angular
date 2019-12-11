import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class ChangePassService {
    private header=new HttpHeaders({
        'content-type':'application/json',
        'Authorization': 'Bearer ' + localStorage.access_token
    });
    constructor(public http:HttpClient) {
        
    }

    changePass(old_pass, new_pass) {
        console.log(localStorage.access_token);
        return this.http.put(`${environment.baseUrl}/user/password`, 
            JSON.stringify({
                'OldPass':old_pass,
                'NewPass':new_pass,
            }),{ headers: this.header }).toPromise();
    }
}