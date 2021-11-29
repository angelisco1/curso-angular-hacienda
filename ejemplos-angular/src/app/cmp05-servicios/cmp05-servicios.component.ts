import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-cmp05-servicios',
  templateUrl: './cmp05-servicios.component.html',
  styleUrls: ['./cmp05-servicios.component.css']
})
export class Cmp05ServiciosComponent implements OnInit {

  constructor(private logger: LogService) { }

  ngOnInit(): void {
  }

  mostrarError() {
    this.logger.error('Hay un error en la aplicación')
  }

  mostrarWarning() {
    this.logger.warning('Cuidado, que esto te puede traer problemas')
  }
}
