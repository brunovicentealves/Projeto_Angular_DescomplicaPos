import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthService) {}

  message: string = '';

  loginData = {
    username: '',
    password: '',
  };

  onSubmit() {
    if (this.loginData.username && this.loginData.password) {
      console.log('Login Data:', this.loginData);
      this.auth.login();
      this.router.navigate(['']);
    } else {
      console.error('Por favor, preencha todos os campos.');
      this.message = ' UserName ou Password Invalidos!';
    }
  }
}
