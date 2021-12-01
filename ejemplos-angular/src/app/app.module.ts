import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CmpComponentesComponent } from './cmp-componentes/cmp-componentes.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02DirectivasComponent } from './cmp02-directivas/cmp02-directivas.component';
import { SugusComponent } from './cmp02-directivas/sugus/sugus.component';
import { MarcarDirective } from './cmp02-directivas/marcar.directive';
import { Cmp03PipesComponent } from './cmp03-pipes/cmp03-pipes.component';
import { DoblePipe } from './cmp03-pipes/doble.pipe';
import { FiltroPipe } from './cmp03-pipes/filtro.pipe';
import { Cmp04FormulariosComponent } from './cmp04-formularios/cmp04-formularios.component';
import { ReactivoComponent } from './cmp04-formularios/reactivo/reactivo.component';
import { NormalComponent } from './cmp04-formularios/normal/normal.component';
import { ErroresFormComponent } from './cmp04-formularios/errores-form/errores-form.component';
import { Cmp05ServiciosComponent } from './cmp05-servicios/cmp05-servicios.component';
import { CmpAComponent } from './cmp05-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp05-servicios/cmp-b/cmp-b.component';
import { Cmp06ComunicacionEntreComponentesComponent } from './cmp06-comunicacion-entre-componentes/cmp06-comunicacion-entre-componentes.component';
import { CmpYComponent } from './cmp06-comunicacion-entre-componentes/cmp-y/cmp-y.component';
import { CmpZComponent } from './cmp06-comunicacion-entre-componentes/cmp-z/cmp-z.component';
import { Cmp07ObservablesComponent } from './cmp07-observables/cmp07-observables.component';
import { FechaActualComponent } from './cmp07-observables/fecha-actual/fecha-actual.component';
import { Cmp08HttpComponent } from './cmp08-http/cmp08-http.component';
import { AuthInterceptor } from './cmp08-http/auth.interceptor';
import { Cmp09RoutingComponent } from './cmp09-routing/cmp09-routing.component';
import { UsuariosComponent } from './cmp09-routing/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './cmp09-routing/nuevo-usuario/nuevo-usuario.component';
import { RoutingModule } from './cmp09-routing/app.routes';
import { HeaderComponent } from './cmp09-routing/header/header.component';
import { DetalleUsuarioComponent } from './cmp09-routing/detalle-usuario/detalle-usuario.component';
import { ErrorComponent } from './cmp09-routing/error/error.component';
import { EditarUsuarioComponent } from './cmp09-routing/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    // Componentes, directivas y pipes
    AppComponent,
    CmpComponentesComponent,
    Cmp01DataBindingComponent,
    Cmp02DirectivasComponent,
    SugusComponent,
    MarcarDirective,
    Cmp03PipesComponent,
    DoblePipe,
    FiltroPipe,
    Cmp04FormulariosComponent,
    ReactivoComponent,
    NormalComponent,
    ErroresFormComponent,
    Cmp05ServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    Cmp06ComunicacionEntreComponentesComponent,
    CmpYComponent,
    CmpZComponent,
    Cmp07ObservablesComponent,
    FechaActualComponent,
    Cmp08HttpComponent,
    Cmp09RoutingComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    HeaderComponent,
    DetalleUsuarioComponent,
    ErrorComponent,
    EditarUsuarioComponent
  ],
  imports: [
    // Módulos
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }