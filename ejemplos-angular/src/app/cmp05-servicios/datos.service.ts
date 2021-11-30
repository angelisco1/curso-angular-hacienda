import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private productos: Array<string> = ['Producto 1']
  darkMode$ = new EventEmitter<boolean>();

  constructor() { }

  getProductos(): Array<string> {
    return this.productos
  }

  addProducto(producto: string): void {
    this.productos.push(producto)
    // this.productos = [...this.productos, producto]
  }

  cambiarDarkMode(value: boolean) {
    this.darkMode$.emit(value)
  }
}
