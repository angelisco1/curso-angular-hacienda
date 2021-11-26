import { Directive, OnInit, Input, HostBinding, HostListener } from '@angular/core';

interface IProps {
  color?: string,
  time?: number
}

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {

  @HostBinding('style.background-color') colorFondo: string = 'white'
  // @Input('appMarcar') color: string | null = null;
  @Input('appMarcar') props: IProps = {
    color: 'white',
    time: 0
  }
  intervalId: NodeJS.Timeout | null = null;

  constructor() {
    // console.log({constructor: this.color})
  }

  ngOnInit() {
    // console.log({ngOnInit: this.color})
    // if (!this.color) {
    //   this.color = 'yellow'
    // }
    // if (!this.props.color) {
    //   this.props.color = 'yellow'
    // }
  }

  @HostListener('mouseover') onMouseOver() {
    // if (this.props !== null) { // Novedad de TS 4.4 que utiliza Angular 13
      this.colorFondo = this.props.color || 'yellow'
    // }
    if (this.props.time) {
      this.intervalId = setInterval(() => {
        const color = this.colorFondo === this.props.color ? 'white' : this.props.color
        this.colorFondo = color || 'yellow'
      }, this.props.time)
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId)
    }
    this.colorFondo = 'white'
  }
}
