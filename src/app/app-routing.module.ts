import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutComponent } from './feature/about/about.component';
import { CourseComponent } from './feature/course/Courses/courses.component';
import { CartComponent } from './feature/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    // Implementação de lazy loading - só carrega o módulo quando necessário
    loadChildren: () =>
      import('./feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    // Implementação de lazy loading - só carrega o módulo quando necessário
    loadChildren: () =>
      import('./feature/about/about.module').then((m) => m.AboutModule),
  },

  {
    path: 'course',
    // Implementação de lazy loading - só carrega o módulo quando necessário
    loadChildren: () =>
      import('./feature/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'cart',
    // Implementação de lazy loading - só carrega o módulo quando necessário
    loadChildren: () =>
      import('./feature/cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
