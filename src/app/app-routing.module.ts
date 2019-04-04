import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { TodolistModule } from './todolist/todolist.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    TodolistModule,
    UserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
