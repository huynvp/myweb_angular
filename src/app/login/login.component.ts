import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	username:string;
	password:string;

	constructor(public http:HttpClient) {
		this.username = '';
		this.password = '';
	}

	ngOnInit() {

	}

	handleLogin() {

		let header = new HttpHeaders({
			'content-type': 'application/json'
		});

		this.http.post('http://nodejs.local.huynguyen.com.vn/api/user/login', JSON.stringify({
			username: this.username,
			password: this.password
		}), {
			headers: header
		})
		.toPromise()
		.then(res => {
			alert('Login success');
			localStorage.token = res['data'].token;
		})
		.catch(err => {
			console.log(err);
		});
	}

}
