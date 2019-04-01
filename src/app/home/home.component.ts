import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public router:Router, public http:HttpClient) {

  }

  ngOnInit() {
    //check user
    if(localStorage.token === undefined) {
      this.router.navigate(['/login']);
      return;
    }

    this.http.get(`${environment.baseUrl}/user/show-user`, {
      headers: new HttpHeaders({
        'content-type':  'application/json',
        'token': localStorage.token
      })
    })
    .toPromise()
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      this.router.navigate(['/login']);
      localStorage.removeItem('token');
      console.log(err)
    });
  }

}
