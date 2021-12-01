import { Component, OnInit } from '@angular/core';
import { IUsuarioBase, UsersService } from '../users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<IUsuarioBase> = []
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsuarios()
      .subscribe(usuarios => {
        this.usuarios = usuarios
      })
  }
}
