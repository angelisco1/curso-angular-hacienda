import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  // Rest Operator -> ...args
  // transform(value: number, ...args: number[]): number {
  // }

  transform(value: number, n1: number = 0, n2: number = 0): number {
    return value * 2 + n1 - n2;
  }

}
