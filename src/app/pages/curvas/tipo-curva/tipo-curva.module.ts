import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoCurvaRoutingModule } from './tipo-curva-routing.module';
import { TipoCurvaComponent } from './tipo-curva.component';


@NgModule({
  declarations: [TipoCurvaComponent],
  imports: [
    CommonModule,
    TipoCurvaRoutingModule,
  ]
})
export class TipoCurvaModule { }
