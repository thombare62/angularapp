import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  password: string;
  keyword = 'angular';
  gender: string;
  submitted = false;
  validDomain = true;

  onSubmit(loginForm) {
    this.submitted = true;
    this.validDomain = this.email.endsWith('@codemindtechnology.com');
  }
}
