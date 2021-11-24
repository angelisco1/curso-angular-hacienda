import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp01-data-binding',
  templateUrl: './cmp01-data-binding.component.html',
  styleUrls: ['./cmp01-data-binding.component.css']
})
export class Cmp01DataBindingComponent implements OnInit {

  nombre: string = 'Ángel'
  deshabilitado: boolean = true
  urlImagen: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

  constructor() { }

  ngOnInit(): void {
  }

  getNombre(): string {
    return this.nombre
  }

}
