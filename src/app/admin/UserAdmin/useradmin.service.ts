import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class UserAdminService {
    private header = new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.access_token}`
    });

    constructor(public http:HttpClient) {

    }

    getPermission() {
        return this.http.get(`${environment.baseUrl}/permissions`, { headers: this.header }).toPromise();
    }

    getDetailPermission(id:string) {
        return this.http.get(`${environment.baseUrl}/permissions/${id}`, { headers: this.header }).toPromise();
    }

    addPermission(name:string) {
        return this.http.
        post(`${environment.baseUrl}/permissions`, JSON.stringify({name: name}), {headers: this.header}).toPromise();
    }

    editPermission(key:string, name:string, timestamp:string) {
        return this.http.
        put(`${environment.baseUrl}/permissions/${key}`, JSON.stringify({name: name, timestamp:timestamp}), {headers: this.header}).toPromise();
    }

    deletePermission(id:string) {
        return this.http.
        delete(`${environment.baseUrl}/permissions/${id}`, {headers: this.header}).toPromise();
    }

    detailPermission(id:number) {
        return this.http.
        get(`${environment.baseUrl}/permissions/${id}/users`, {headers: this.header}).toPromise();
    }

}
