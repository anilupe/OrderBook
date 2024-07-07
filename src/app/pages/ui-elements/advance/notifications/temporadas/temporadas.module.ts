import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemporadasComponent } from './temporadas.component';
import { TemporadasRoutingModule } from './temporadas-routing.module';



@NgModule({
  declarations: [TemporadasComponent],
  imports: [
    CommonModule,
    TemporadasRoutingModule
  ]
})
export class TemporadasModule { }
