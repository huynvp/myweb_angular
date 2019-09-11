import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class UserAdminService {
    private header = new HttpHeaders({
        'content-type': 'application/json',
        'token': localStorage.token
    });

    constructor(public http:HttpClient) {

    }

    getAll() {
        return this.http.get(`${environment.baseUrl}/note/show-all`, { headers: this.header }).toPromise();
    }

    getLevel() {
        return this.http.get(`${environment.baseUrl}/note/show-level`, {headers: this.header}).toPromise();
    }

    getOne(id) {
        return this.http.get(`${environment.baseUrl}/note/show/${id}`, {headers: this.header}).toPromise();
    }

    addWork(title, content, date, level, order) {
        return this.http.post(
            `${environment.baseUrl}/note/add`, 
            JSON.stringify({
                title: title,
                content: content,
                date: date,
                level: level,
                orders: order
            }),
            {
                headers: this.header
            }
        ).toPromise();
    }

    editWork(id, title, content, date, level, order) {
        return this.http.post(`${environment.baseUrl}/note/update`,
        JSON.stringify({
            id: id,
            title: title,
            content: content,
            date: date,
            level: level,
            orders: order
        }),
        {
            headers: this.header
        }).toPromise();
    }

    deleteWork(id) {
        return this.http.post(`${environment.baseUrl}/note/delete`,
        JSON.stringify({
            id: id
        }),
        {
            headers: this.header
        }).toPromise();
    }
}
