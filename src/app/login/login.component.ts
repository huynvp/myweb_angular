import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	username: string;
	password: string;
	forgotEmail: string;
	@ViewChild('form_login', {static:false}) form_login: { value: { username: any; password: any; }; };

	constructor(public http: HttpClient, public router: Router, private spinner: NgxSpinnerService) {
		this.username = '';
		this.password = '';
	}

	async ngOnInit() {
		if (localStorage.access_token !== undefined) {
			this.router.navigate(['/']);
		}
	}

	async handleLogin() {
		if(this.form_login['invalid'] == true)
		{
			return;
		}
		this.spinner.show();
		await this.http.post(`${environment.baseUrl}/user/login`,
			JSON.stringify({
				username: this.form_login.value.username,
				password: this.form_login.value.password,
			}),
			{
				headers: new HttpHeaders({ 'content-type': 'application/json' })
			})
			.toPromise()
			.then(res => {
				console.log(res);
				localStorage.access_token = res['data']['accessToken'];
				localStorage.refresh_token = res['data']['refreshToken'];
				this.router.navigate(['/index']);
			})
			.catch(err => {
				$.notify({
					icon: 'glyphicon glyphicon-remove',
					message: `Error: ${err.error.message}`,
				}, {
					type: 'danger',
				});
			});
		this.spinner.hide();
	}

	async hanleForgotPass() {
		this.spinner.show();
		await this.http.get(`${environment.baseUrl}/user/sendEmailForgotPassword/${this.forgotEmail}`)
			.toPromise()
			.then(res => {
				$.notify({
					icon: 'glyphicon glyphicon-remove',
					message: `${res['message']}`,
				}, {
					type: 'success',
				});
			})
			.catch(err => {
				$.notify({
					icon: 'glyphicon glyphicon-remove',
					message: `Error: ${err.error.message}`,
				}, {
					type: 'danger',
				});
			});
		this.spinner.hide();
	}
}
