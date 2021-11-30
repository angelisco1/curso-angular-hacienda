import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  // providers: [DatosService]
})
export class CmpAComponent implements OnInit {
  darkMode: boolean = false;
  productos: Array<string> = []

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.productos = this.datosService.getProductos()
  }

  guardar(event: any) {
    this.datosService.addProducto(event.target.value)
  }

  toggleDarkMode(activado: boolean) {
    this.darkMode = activado;
    this.datosService.cambiarDarkMode(this.darkMode)
  }

}
