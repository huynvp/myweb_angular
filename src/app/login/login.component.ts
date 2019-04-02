import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	username:string;
	password:string;

	constructor(public http:HttpClient, public router:Router) {
		this.username = '';
		this.password = '';
	}

	ngOnInit() {
		if(localStorage.token !== undefined) {
			this.router.navigate(['/home']);
		}
	}

	handleLogin() {

		let header = new HttpHeaders({
			'content-type': 'application/json'
		});

		this.http.post(`${environment.baseUrl}/user/login`, JSON.stringify({
			username: this.username,
			password: this.password
		}), {
			headers: header
		})
		.toPromise()
		.then(res => {
			localStorage.token = res['data'].token;
			this.router.navigate(['/home']);
		})
		.catch(err => {
			console.log(err);
		});
	}

}
