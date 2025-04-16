import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutComponent } from './feature/about/about.component';
import { CourseComponent } from './feature/course/course.component';
import { CartComponent } from './feature/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'course', component: CourseComponent },
  { path: 'cart', component: CartComponent },
];
