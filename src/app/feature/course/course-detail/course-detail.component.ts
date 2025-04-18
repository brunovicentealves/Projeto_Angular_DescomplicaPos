import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent {
  constructor(private router: Router) {}

  navegarParaCourses() {
    this.router.navigate(['/course']);
  }
}
