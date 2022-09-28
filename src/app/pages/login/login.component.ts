import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  jsonIn = {
    username: '',
    password: '',
    rememberMe: false,
  }
  @ViewChild('loginForm') loginForm!: NgForm;
  showErrors = false;
  showPassword = false;
  
  constructor(private router: Router) {}

  signIn() {
    if (this.loginForm.form.invalid) {
      this.showErrors = true;
    } else {
      this.router.navigateByUrl('/home');
    }
  }


}
