import { Routes } from "@angular/router";
import { DetalleUsuarioComponent } from "../detalle-usuario/detalle-usuario.component";
import { DetalleUsuarioGuard } from "../detalle-usuario/detalle-usuario.guard";
import { EditarUsuarioComponent } from "../editar-usuario/editar-usuario.component";
import { EditarUsuarioGuard } from "../editar-usuario/editar-usuario.guard";

export const USUARIOS_ROUTES: Routes = [
  { path: ':usuarioId/info', component: DetalleUsuarioComponent, canActivate: [DetalleUsuarioGuard] },
  { path: ':usuarioId/editar', component: EditarUsuarioComponent, canDeactivate: [EditarUsuarioGuard] },
]