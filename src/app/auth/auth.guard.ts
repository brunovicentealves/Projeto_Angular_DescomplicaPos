import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service'; // Certifique-se de ter o serviço de autenticação
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Injeta o serviço de autenticação
  const router = inject(Router); // Injeta o roteador

  if (authService.isLoggedIn()) {
    return true; // Usuário autenticado, permite acesso
  } else {
    router.navigate(['login']); // Redireciona para login
    return false; // Bloqueia o acesso
  }
};
