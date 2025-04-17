import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CourseComponent } from './Courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
  },
  {
    path: 'detalhado',
    component: CourseDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    CourseComponent,
    CourseDetailComponent,
    CourseDetailComponent,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class CourseModule {}
