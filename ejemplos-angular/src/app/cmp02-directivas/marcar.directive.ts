import { Directive, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {

  constructor() {
    console.log('Estoy usando la directiva marcar')
  }

  ngOnInit() {

  }

}
