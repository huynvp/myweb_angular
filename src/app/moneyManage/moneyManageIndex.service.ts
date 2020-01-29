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
    getListMoneyManage() {
        return this.http.get(`${environment.baseUrl}/moneyManage`, { headers: this.header }).toPromise();
    }
    getListCategories() {
        return this.http.get(`${environment.baseUrl}/moneyManage/categories`, { headers: this.header }).toPromise();
    }
    addCategories(data:any) {
        return this.http.post(`${environment.baseUrl}/moneyManage/categories`, data, { headers: this.header }).toPromise();
    }

    addMoneyManage(data) {
        return this.http.post(`${environment.baseUrl}/moneyManage`, data, { headers: this.header }).toPromise();
    }

    deleteMoneyManage(key) {
        return this.http.delete(`${environment.baseUrl}/moneyManage/${key}`, { headers: this.header }).toPromise();
    }
}
