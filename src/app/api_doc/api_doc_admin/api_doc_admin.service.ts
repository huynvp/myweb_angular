import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
const BASE_URL  = environment.baseUrl;
@Injectable()

export class ApiDocAdminService {
    private header = new HttpHeaders({
        'content-type': 'application/json',
        'token': localStorage.token
    })
    constructor(public http:HttpClient) {
    }

    getAllProject() {
        return this.http.get(`${BASE_URL}/api-doc/project`, {headers: this.header}).toPromise();
    }

    getDetailProject(id) {
        return this.http.get(`${BASE_URL}/api-doc/project/${id}`, {headers: this.header}).toPromise();
    }

    addApi(project_id, method, name, content, params, response) {
        return this.http.post(
            `${BASE_URL}/api-doc/api/add`, 
            JSON.stringify({
                'project_id': project_id,
                'method': method,
                'name': name,
                'content': content,
                'params': params,
                'response': response
            }),
            {
                headers:this.header
            }
        ).toPromise();
    }

    addProject(name) {
        return this.http.post(`${BASE_URL}/api-doc/project/add`, JSON.stringify({ name: name}), {headers:this.header}).toPromise();
    }

    getOneApi(id) {
        return this.http.get(`${BASE_URL}/api-doc/api/${id}`, {headers: this.header}).toPromise();
    }

    editApi(api_id, method, name, content, params, response) {
        return this.http.post(
            `${BASE_URL}/api-doc/api/edit`, 
            JSON.stringify({
                'api_id': api_id,
                'method': method,
                'name': name,
                'content': content,
                'params': params,
                'response': response
            }),
            {
                headers:this.header
            }
        ).toPromise();
    }

    deleteApi(id) {
        return this.http.post(
            `${BASE_URL}/api-doc/api/delete`, 
            JSON.stringify({ 'id':id }),
            { headers:this.header }
        ).toPromise();
    }
}