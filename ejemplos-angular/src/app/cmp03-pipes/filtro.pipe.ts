import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, filtro: string): Array<string> {
    const arrayProductos: Array<string> = value.filter((p) => {
      return p.includes(filtro)
    })


    return arrayProductos;
  }

}