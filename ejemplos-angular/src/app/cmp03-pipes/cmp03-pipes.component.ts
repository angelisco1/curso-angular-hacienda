import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp03-pipes',
  templateUrl: './cmp03-pipes.component.html',
  styleUrls: ['./cmp03-pipes.component.css']
})
export class Cmp03PipesComponent implements OnInit {

  producto = {
    nombre: 'one plus 8t',
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, vitae ad? Veniam autem dolorum veritatis deserunt in magni fugit vel nulla excepturi, beatae consequuntur temporibus vero, expedita eligendi sunt quos.',
    precio: 400,
    fechaAlta: new Date(2019, 3, 15)
  }

  productos: Array<string> = [
    'one plus 8t',
    'one plus 9',
    'one plus 9 pro',
    'one plus nord 2',
    'iphone 13'
  ]
  textoFiltro: string = ''

  mensaje = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Un mensaje secreto...')
    }, 1500)
  })

  constructor() { }

  ngOnInit(): void {
  }

  addProducto(event: any) {
    // this.productos.push(event.target.value)
    this.productos = [...this.productos, event.target.value]
  }

}
