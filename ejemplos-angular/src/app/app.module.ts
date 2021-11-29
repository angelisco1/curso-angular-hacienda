import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    Cmp05ServiciosComponent
  ],
  imports: [
    // Módulos
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }