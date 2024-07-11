import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurvaComponent } from './curva.component';
import { CurvaRoutingModule } from './curva-routing.module';



@NgModule({
  declarations: [CurvaComponent],
  imports: [
    CommonModule,
    CurvaRoutingModule
  ]
})
export class CurvaModule { }
