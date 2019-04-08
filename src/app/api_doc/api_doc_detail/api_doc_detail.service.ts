import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.baseUrl;

@Injectable()

export class ApiDocDetailService {
    constructor(public http:HttpClient) {
        
    }
}