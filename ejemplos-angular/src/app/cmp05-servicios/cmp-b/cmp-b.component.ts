import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
  // providers: [DatosService]
})
export class CmpBComponent implements OnInit {
  darkMode: boolean = false
  productos: Array<string> = []

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.productos = this.datosService.getProductos()

    this.datosService.darkMode$.subscribe((darkMode: boolean) => {
      console.log('Evento: ' + darkMode)
      this.darkMode = darkMode
    })
  }

  guardar(event: any) {
    this.datosService.addProducto(event.target.value)
  }
}
