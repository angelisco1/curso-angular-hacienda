import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ICmpCanDeactivate } from './editar-usuario.guard';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, ICmpCanDeactivate {
  id: string | null = ''
  datosGuardados: boolean = false

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['usuarioId']
      this.datosGuardados = false
    })
  }

  guardar() {
    this.datosGuardados = !this.datosGuardados
  }

  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.datosGuardados ? true : confirm('Estás seguro de que quieres salir?? Perderas los cambios que no has guardado')
  }
}
