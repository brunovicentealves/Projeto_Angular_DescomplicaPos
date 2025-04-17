import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CourseComponent {
  constructor(private router: Router) {}

  navegarParaHome() {
    this.router.navigate(['/']);
  }

  navegarParaCursosDetails() {
    this.router.navigate(['/course/detalhado']);
  }
}
