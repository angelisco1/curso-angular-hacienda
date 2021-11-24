import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CmpComponentesComponent } from './cmp-componentes/cmp-componentes.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';

@NgModule({
  declarations: [
    // Componentes, directivas y pipes
    AppComponent,
    CmpComponentesComponent,
    Cmp01DataBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }