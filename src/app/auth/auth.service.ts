import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false; // Simula o estado de autenticação

  isLoggedIn(): boolean {
    return this.isAuthenticated; // Retorna se o usuário está logado
  }

  login(): void {
    this.isAuthenticated = true; // Simula login
    console.log('Usuário logado com sucesso!');
  }

  logout(): void {
    this.isAuthenticated = false; // Simula logout
    console.log('Usuário deslogado com sucesso!');
  }
}
