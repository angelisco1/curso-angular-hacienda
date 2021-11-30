import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp06-comunicacion-entre-componentes',
  templateUrl: './cmp06-comunicacion-entre-componentes.component.html',
  styleUrls: ['./cmp06-comunicacion-entre-componentes.component.css']
})
export class Cmp06ComunicacionEntreComponentesComponent implements OnInit {
  darkMode: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarDarkMode(activado: boolean) {
    this.darkMode = activado;
  }

}
