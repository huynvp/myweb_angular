import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	username:string;
	password:string;

  constructor(public http: HttpClient, public router: Router, private spinner: NgxSpinnerService) {
		this.username = '';
		this.password = '';
	}

  async ngOnInit() {
		document.getElementById("txtUsername").focus();
		if(localStorage.access_token !== undefined) {
			this.router.navigate(['/home']);
		}
	}

  async handleLogin() {
    this.spinner.show();
		document.getElementById("btn-login").innerHTML = 'Loading ...';

		const formData = new FormData();
		formData.append('username', this.username);
		formData.append('password', this.password);
	  await this.http.post(`${environment.baseUrl}/user/login`,
          JSON.stringify({
            username: this.username,
            password: this.password,
          }), 
          {
              headers: new HttpHeaders({'content-type': 'application/json'})
          })
	  .toPromise()
	  .then( res => {
			localStorage.access_token = res['data']['access_token'];
			localStorage.refresh_token = res['data']['refresh_token'];
			this.router.navigate(['/home']);
			Swal.fire('Success', 'Login success!','success')
		})
		.catch( err => {
			Swal.fire('Error', `Error: ${err.error.message}`,'error')
			console.log(err);
			document.getElementById("btn-login").innerHTML = 'Login';
        });
    this.spinner.hide();
	}
}
