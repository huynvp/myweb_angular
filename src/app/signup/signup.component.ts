import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private name:'';
  // private name:'';
  // private name:'';
  // private name:'';
  // private name:'';
  constructor(public router:Router, public http:HttpClient) {
    if(localStorage.token !== undefined) {
			this.router.navigate(['/home']);
		}
  }

  ngOnInit() {
  }

  handleSignup() {
    console.log(this)
  }
}
