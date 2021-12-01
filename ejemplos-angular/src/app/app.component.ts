import { Component } from '@angular/core';
import { AuthService } from './cmp05-servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean;

  constructor(private auth: AuthService) {
    this.isLoggedIn = auth.isLoggedIn()
  }

  login() {
    const token = Math.random()
    this.auth.login(token.toString())
    this.isLoggedIn = true;
  }

  logout() {
    this.auth.logout()
    this.isLoggedIn = false;
  }
}