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
            'Authorization': 'Bearer' + localStorage.token
        });

        return this.http.get(`${environment.baseUrl}/toDoList`, { headers: header }).toPromise();
    }
}
