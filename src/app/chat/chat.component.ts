import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  content_mess:string;
  router:Router;
  user_online:[];
  public socket:SocketIOClient.Socket;

  constructor(public http:HttpClient) {
    
  }

  ngOnInit() {
    this.socket = io.connect('http://socket.local.huynguyen.com.vn', {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax : 5000,
      reconnectionAttempts: Infinity
    });
    this.http.get(`${environment.baseUrl}/user/check-user`, {
      headers: new HttpHeaders({
        'content-type':  'application/json',
        'token': localStorage.token
      })
    })
    .toPromise()
    .then(res => {
      console.log(res);
      this.socket.emit('send-register-user', res['data']);
    })
    .catch(err => {
      localStorage.removeItem('token');
      console.log(err);
      Swal.fire('Eror', 'Token invalid', 'error');
      this.router.navigate(['/login']);
    });

    // this.socket.on('list-user-online', data => {
    //   console.log(data);
    //   this.user_online = data;
    // })
  }

  handleSendMess() {
    console.table(this.content_mess);
  }

  handleFoucusIn() {
    console.log('Focus in')
  }

  handleFoucusOut() {
    console.log('Focus out')
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }
}
