import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navegarParaSobre() {
    this.router.navigate(['/about']);
  }

  navegarParaCurso() {
    this.router.navigate(['/course']);
  }

  navegarParaCart() {
    this.router.navigate(['/cart']);
  }
}
