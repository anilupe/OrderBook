import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineaComponent } from './linea.component';
import { LineaRoutingModule } from './linea-routing.module';



@NgModule({
  declarations: [LineaComponent],
  imports: [
    CommonModule,
    LineaRoutingModule
  ]
})
export class LineaModule { }
