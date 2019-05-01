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
    this.url = `${environment.publicUrl}/image/avatar/default.png`;
  }

  ngOnInit() {
    //check user
    if(localStorage.token === undefined) {
      this.router.navigate(['/login']);
      return;
    }

    this.http.get(`${environment.baseUrl}/user/check-user`, {
      headers: new HttpHeaders({
        'content-type':  'application/json',
        'token': localStorage.token
      })
    })
    .toPromise()
    .then(res => {
      this.username = res['data']['user_name'];

      if(res['data']['avatar_path'] != null) {
        this.url = `${environment.publicUrl}/image/avatar/${res['data']['avatar_path']}`;
      }
    })
    .catch(err => {
      localStorage.removeItem('token');
      console.log(err);
      Swal.fire('Eror', 'Token invalid', 'error');
      this.router.navigate(['/login']);
    });
  }

  handleLogout() {
    localStorage.removeItem('token');
    Swal.fire('Success', 'See you again', 'info');
    this.router.navigate(['/login']);
  }

}
