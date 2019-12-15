import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodolistModule } from './todolist/todolist.module';
import { ApiDocModule } from './api_doc/api_doc.module';
import { ChatModule } from './chat/chat.module';

import { RecaptchaModule} from 'ng-recaptcha';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  // { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    // TodolistModule,
    ChatModule,
    ApiDocModule,
    AdminModule,
    HomeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    RecaptchaModule,
    CommonModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    // HomeComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
