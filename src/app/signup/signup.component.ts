import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SignupComponent implements OnInit {
  public name:'';
  public email:'';
  public birthday:'';
  public address:'';
  public phone:'';
  public password:'';
  public re_password:'';

  constructor(public router:Router, public http:HttpClient, private spinner: NgxSpinnerService) {
    if(localStorage.token !== undefined) {
			this.router.navigate(['/home']);
		}
  }

  ngOnInit() {
  }

  handleSignup() {
    this.spinner.show();
    let json = JSON.stringify({
      name: this.name,
      email: this.email,
      birthday: this.birthday,
      address: this.address,
      phone: this.phone,
      password: this.password,
    })

    this.http.post(`${environment.baseUrl}/user/sign-up`, json, {
      headers: new HttpHeaders({'content-type': 'application/json'})
    })
    .toPromise()
    .then(data => {
      this.spinner.hide();
      Swal.fire('Success', 'Signup success, please login go to system', 'success');
    })
    .catch(err => {
      this.spinner.hide();
      console.log(err);
      Swal.fire('Error', err['error']['message'], 'error');
    })
  }
}
