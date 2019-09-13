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
}
