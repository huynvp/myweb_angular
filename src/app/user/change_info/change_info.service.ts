import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const base_url = environment.baseUrl;

@Injectable()

export class ChangeInfoService {
    private header = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.access_token
    })

    constructor(public http:HttpClient) {
    }

    getInfo() {
        return this.http.get(`${base_url}/user/me`, {headers: this.header}).toPromise();
    }

    changeInfo(name, birthday, address, phone, file) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('birthday', birthday);
        formData.append('address', address);
        formData.append('phone', phone);

        if(file != null)
            formData.append('file', file, file.name);

        return this.http.put(`${base_url}/user/me`, formData, {headers: this.header}).toPromise();
    }
}