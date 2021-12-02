import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarNumeros'
})
export class OcultarNumerosPipe implements PipeTransform {

  transform(value: string): string {
    const arrNumTarjeta = value.split(' ')
    return '**** '.repeat(3) + arrNumTarjeta[3];
  }

}
