import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp02-directivas',
  templateUrl: './cmp02-directivas.component.html',
  styleUrls: ['./cmp02-directivas.component.css']
})
export class Cmp02DirectivasComponent implements OnInit {

  colorFondo: string = '#000000'
  darkMode: boolean = false

  sugusPreferido: string = 'fresa'

  sugus = [
    { sabor: 'limón', color: 'yellow' },
    { sabor: 'piña', color: 'blue' },
    { sabor: 'naranja', color: 'orange' },
    { sabor: 'fresa', color: 'red' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getStyles(): {[key: string]: any} {
    return {
      backgroundColor: 'black',
      color: 'orange'
    }
  }

  toggleDarkMode(activar: boolean) {
    this.darkMode = activar
  }
}
