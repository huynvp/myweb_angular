import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private name:'';
  private email:'';
  private birthday:'';
  private address:'';
  private phone:'';
  private password:'';

  constructor(public router:Router, public http:HttpClient) {
    if(localStorage.token !== undefined) {
			this.router.navigate(['/home']);
		}
  }

  ngOnInit() {
  }

  handleSignup() {
    let header = new HttpHeaders({
			'content-type': 'application/json'
		});
    this.http.post(`${environment.baseUrl}/user/sign-up`, JSON.stringify({
      'name':this.name,
      'email':this.email,
      'birthday':this.birthday,
      'address':this.address,
      'phone':this.phone,
      'password':this.password
    }), {headers: header})
    .toPromise()
    .then(data => {
      Swal.fire('Success', 'Signup success, please login go to system', 'success');
    })
    .catch(err => {
      Swal.fire('Error', err['message'], 'error');
    })
  }
}
