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
  public name:'';
  public email:'';
  public birthday:'';
  public address:'';
  public phone:'';
  public password:'';

  constructor(public router:Router, public http:HttpClient) {
    if(localStorage.token !== undefined) {
			this.router.navigate(['/home']);
		}
  }

  ngOnInit() {
  }

  handleSignup() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('birthday', this.birthday);
    formData.append('address', this.address);
    formData.append('phone', this.phone);
    formData.append('password', this.password);

    this.http.post(`${environment.baseUrl}/user/sign-up`, formData)
    .toPromise()
    .then(data => {
      Swal.fire('Success', 'Signup success, please login go to system', 'success');
    })
    .catch(err => {
      console.log(err);
      Swal.fire('Error', err['error']['message'], 'error');
    })
  }
}
