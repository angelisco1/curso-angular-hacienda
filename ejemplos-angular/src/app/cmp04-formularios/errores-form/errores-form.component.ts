import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-errores-form',
  templateUrl: './errores-form.component.html',
  styleUrls: ['./errores-form.component.css']
})
export class ErroresFormComponent implements OnInit, OnChanges {
  @Input() errores: any | null = {}
  mensajes: Array<string> = []

  // {
  //   required: true
  // }

  constructor() { }

  ngOnChanges() {
    this.mensajes = []
    for (let key in this.errores) {
      switch(key) {
        case 'required':
          this.mensajes.push('El campo es obligatorio')
          break;
        case 'minlength':
          const txt = `Llevas ${this.errores[key].actualLength} caracteres y necesitas ${this.errores[key].requiredLength}`
          this.mensajes.push(txt)
          break;
        case 'email':
          if (this.errores[key]['@']) {
            this.mensajes.push('El email necesita el @')
          }
          if (this.errores[key].extension) {
            this.mensajes.push('El email tiene que terminar en .com o .es')
          }
          break;
        case 'password':
          if (this.errores[key].mayusculas) {
            this.mensajes.push('La contraseña tiene que tener una letra mayúscula como mínimo')
          }
          if (this.errores[key].length) {
            const txt = `La longitud mínima es de ${this.errores[key].length.requiredLength}, y llevas ${this.errores[key].length.actualLength} caracteres.`
            this.mensajes.push(txt)
          }
          break;
      }
    }
  }

  ngOnInit(): void {

  }

}
