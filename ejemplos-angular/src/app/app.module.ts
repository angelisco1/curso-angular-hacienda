import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FiltroPipe
  ],
  imports: [
    // Módulos
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }