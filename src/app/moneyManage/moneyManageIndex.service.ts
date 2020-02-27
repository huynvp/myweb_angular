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
    getListMoneyManage(dateFrom="", dateTo="", type=-1) {
        return this.http.get(`${environment.baseUrl}/moneyManage?dateFrom=${dateFrom}&dateTo=${dateTo}&type=${type}`, { headers: this.header }).toPromise();
    }
    getListCategories(key=null) {
        if(key == null) {
            return this.http.get(`${environment.baseUrl}/moneyManage/categories`, { headers: this.header }).toPromise();
        } else {
            return this.http.get(`${environment.baseUrl}/moneyManage/wallet/${key}/categories`, { headers: this.header }).toPromise();
        }
    }

    getDetailCategories(key) {
        return this.http.get(`${environment.baseUrl}/moneyManage/categories/${key}`, { headers: this.header }).toPromise();
    }
    addCategories(data:any) {
        return this.http.post(`${environment.baseUrl}/moneyManage/categories`, data, { headers: this.header }).toPromise();
    }
    editCategories(key, data) {
        return this.http.put(`${environment.baseUrl}/moneyManage/categories/${key}`, data, { headers: this.header }).toPromise();
    }
    addMoneyManage(data) {
        return this.http.post(`${environment.baseUrl}/moneyManage`, data, { headers: this.header }).toPromise();
    }

    deleteMoneyManage(key) {
        return this.http.delete(`${environment.baseUrl}/moneyManage/${key}`, { headers: this.header }).toPromise();
    }

    showListWallet() {
        return this.http.get(`${environment.baseUrl}/moneyManage/wallet`, { headers: this.header }).toPromise();
    }

    editWallet(key, data) {
        return this.http.put(`${environment.baseUrl}/moneyManage/wallet/${key}`, data, { headers: this.header }).toPromise();
    }
}
