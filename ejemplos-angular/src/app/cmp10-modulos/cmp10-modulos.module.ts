import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { OcultarNumerosPipe } from './ocultar-numeros.pipe';



@NgModule({
  declarations: [
    TarjetaCreditoComponent,
    OcultarNumerosPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TarjetaCreditoComponent,
  ]
})
export class Cmp10ModulosModule { }
