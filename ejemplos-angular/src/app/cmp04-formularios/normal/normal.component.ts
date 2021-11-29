import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent implements OnInit {
  datosRegistro: any = {
    usuario: '',
    email: 'falco@gmail.com',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  registrar(form: NgForm) {
    // console.log(this.datosRegistro)
    console.log(form)
    // POST /registro {body: form.value}
  }

}
