import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // Implementação de lazy loading - só carrega o módulo quando necessário
    loadChildren: () =>
      import('./feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    // Implementação de lazy loading - só carrega o módulo quando necessário
    loadChildren: () =>
      import('./feature/login/login.module').then((m) => m.LoginModule),
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
