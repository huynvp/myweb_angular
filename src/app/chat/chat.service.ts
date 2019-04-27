import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as io from "socket.io-client";

const BASE_URL = environment.baseUrl;

@Injectable()

export class ChatService {
    constructor() {
    }
}