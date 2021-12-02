import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp12-internacionalizacion',
  templateUrl: './cmp12-internacionalizacion.component.html',
  styleUrls: ['./cmp12-internacionalizacion.component.css']
})
export class Cmp12InternacionalizacionComponent implements OnInit {

  listaEnlaces = [
    { code: 'en-US', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
