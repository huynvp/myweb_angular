import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const base_url = environment.baseUrl;

@Injectable()

export class ChangeInfoService {
    private header = new HttpHeaders({
        'content-type': 'application/json',
        'token': localStorage.token
    })

    constructor(public http:HttpClient) {
    }

    getInfo() {
        return this.http.get(`${base_url}/user/show-user`, {headers: this.header}).toPromise();
    }

    changeInfo(name, birthday, address, phone) {
        return this.http.post(`${base_url}/user/change-info`, JSON.stringify({
            name: name,
            birthday: birthday,
            address: address,
            phone: phone,
        }),{headers: this.header}).toPromise();
    }

    uploadAvatar(file) {
        let form_data = new FormData();
        form_data.append('file', file, file.name);

        return this.http.post(`${base_url}/user/update-avatar`, 
            form_data ,
            {
                headers: new HttpHeaders({'token': localStorage.token})
            }).toPromise();
    }
}