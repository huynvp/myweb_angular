import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()

export class MoneyManageService {
    header: any = new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.access_token
    });
    constructor(public http:HttpClient) {

    }

    getListCategories() {
        return this.http.get(`${environment.baseUrl}/moneyManage/categories`, { headers: this.header }).toPromise();
    }
    addCategories(data:any) {
        return this.http.post(`${environment.baseUrl}/moneyManage/categories`, data, { headers: this.header }).toPromise();
    }
}
