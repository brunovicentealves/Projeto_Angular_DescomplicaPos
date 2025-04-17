import { Routes } from '@angular/router';
import { CourseComponent } from './Courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    component: CourseComponent,
  },
  {
    path: 'detalhado',
    component: CourseDetailComponent,
  },
];
