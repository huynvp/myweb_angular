import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class ToDoListService {
    header: any = new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.access_token
    });
    constructor(public http:HttpClient) {

    }

    getAll(date:string) {
        return this.http.get(`${environment.baseUrl}/toDoList?date=${date}`, { headers: this.header }).toPromise();
    }

    addNewData(data) {
        return this.http.post(`${environment.baseUrl}/toDoList`, data, {headers: this.header}).toPromise();
    }

    deleteData(id) {
        return this.http.delete(`${environment.baseUrl}/toDoList/${id}`, {headers: this.header}).toPromise();
    }
}
