import { Component, OnInit } from '@angular/core';
import { IOptions, IUsuarioBase, UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<IUsuarioBase> = []
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParamMap
      .subscribe(qParams => {
        if (qParams.keys.length !== 0) {
          const options: IOptions = {}
          if (qParams.has('limit')) {
            options._limit = qParams.get('limit')
          }
          if (qParams.has('page')) {
            options._page = qParams.get('page')
          }

          this.usersService.getUsuarios(options)
            .subscribe(usuarios => {
              this.usuarios = usuarios
            })
        } else {
          this.usersService.getUsuarios()
            .subscribe(usuarios => {
              this.usuarios = usuarios
            })
        }

      })



  }
}
