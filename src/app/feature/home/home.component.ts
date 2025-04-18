import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router, private auth: AuthService) {}

  navegarParaSobre() {
    this.router.navigate(['/about']);
  }

  navegarParaCurso() {
    this.router.navigate(['/course']);
  }

  navegarParaCart() {
    this.router.navigate(['/cart']);
  }

  navegarParaLogin() {
    this.router.navigate(['/login']);
  }

  navegarParaLogout() {
    console.log('Usuario deslogado!');
    this.auth.logout();
  }
}
