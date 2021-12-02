import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {
  private numTarjeta: string = '8928 3891 8391 0000'
  constructor() { }

  getTarjeta() {
    return this.numTarjeta
  }
}
