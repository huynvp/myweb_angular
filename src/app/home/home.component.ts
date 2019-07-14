import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string
  url: string
  constructor(public router:Router, public http:HttpClient) {
    this.url = `${environment.publicUrl}/image/avatar/default-avatar.png`;
  }

  ngOnInit() {
    //check user
    if(localStorage.access_token === undefined) {
      this.router.navigate(['/login']);
      return;
    }

    this.http.get(`${environment.baseUrl}/user/me`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.access_token
      })
    })
    .toPromise()
    .then(res => {
      this.username = res['data']['name'];

      if(res['data']['avatar'] != null) {
        this.url = `${environment.publicUrl}/image/avatar/${res['data']['avatar']}`;
      }
    })
    .catch(err => {
      localStorage.removeItem('access_token');
      console.log(err);
      Swal.fire('Eror', 'Token invalid', 'error');
      this.router.navigate(['/login']);
    });
  }

  handleLogout() {
    localStorage.removeItem('access_token');
    Swal.fire('Success', 'See you again', 'info');
    this.router.navigate(['/login']);
  }

}
