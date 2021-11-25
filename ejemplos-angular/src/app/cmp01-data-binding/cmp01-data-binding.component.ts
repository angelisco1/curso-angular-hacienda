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
  tituloLogo: string = 'Angular'
  textoAlt = 'Logo de ' + this.tituloLogo

  constructor() { }

  ngOnInit(): void {
  }

  getNombre(): string {
    return this.nombre
  }

  toggleDisabled() {
    this.deshabilitado = !this.deshabilitado
  }

  mostrarValor(event: any) {
    console.log(event)
    alert(event.target.value)
  }

  cambiarNombre(event: any) {
    this.nombre = event.target.value
  }

}
