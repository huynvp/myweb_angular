import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class ToDoListService {
    constructor(public http:HttpClient) {

    }

    getAll() {
        let header = new HttpHeaders({
            'content-type': 'application/json',
            'token': localStorage.token
        });

        return this.http.get(`${environment.baseUrl}/note/show-all`, { headers: header }).toPromise();
    }
}
