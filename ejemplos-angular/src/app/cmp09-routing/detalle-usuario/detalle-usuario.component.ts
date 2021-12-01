import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario, UsersService } from '../users.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  id: string | null = ''
  info: IUsuario | null = null
  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log('Se crea el componente')
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('usuarioId')) {
        this.id = params.get('usuarioId')
        this.usersService.getUsuario(this.id)
          .subscribe(usuarioInfo => {
            this.info = usuarioInfo
          })
      }
    })
  }
}
