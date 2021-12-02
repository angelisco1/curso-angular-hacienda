import { Routes, RouterModule } from '@angular/router'
// import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component'
import { ErrorComponent } from './error/error.component'
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component'
import { UsuariosComponent } from './usuarios/usuarios.component'
import { USUARIOS_ROUTES } from './usuarios/usuarios.routes'

const APP_ROUTES: Routes = [
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  // { path: 'usuarios/:usuarioId', component: DetalleUsuarioComponent },
  { path: 'admin', loadChildren: () => import('../cmp11-lazy-loading/cmp11-lazy-loading.module').then(m => m.Cmp11LazyLoadingModule) },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
]

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)