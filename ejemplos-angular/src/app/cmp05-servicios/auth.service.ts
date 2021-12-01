import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout() {
    localStorage.removeItem('tokenAuth')
  }

  login(token: string) {
    localStorage.setItem('tokenAuth', token)
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('tokenAuth') !== null
  }

  getToken(): string | null {
    return localStorage.getItem('tokenAuth')
  }
}
