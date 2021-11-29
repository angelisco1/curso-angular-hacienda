import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import CustomValidators from '../CustomValidators';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    // new FormGroup -> formBuilder.group
    // new FormControl -> formBuilder.control

    this.formulario = formBuilder.group({
      usuario: formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      email: formBuilder.control('falco', CustomValidators.esEmail),
      password: formBuilder.control('', [Validators.required, CustomValidators.esPassword(true)]),
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    console.log(this.formulario)
  }
}