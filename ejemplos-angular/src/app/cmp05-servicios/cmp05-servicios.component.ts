import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-cmp05-servicios',
  templateUrl: './cmp05-servicios.component.html',
  styleUrls: ['./cmp05-servicios.component.css']
})
export class Cmp05ServiciosComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private logger: LogService, private auth: AuthService) {
    this.isLoggedIn = auth.isLoggedIn()
  }

  ngOnInit(): void {
  }

  mostrarError() {
    this.logger.error('Hay un error en la aplicación')
  }

  mostrarWarning() {
    this.logger.warning('Cuidado, que esto te puede traer problemas')
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
