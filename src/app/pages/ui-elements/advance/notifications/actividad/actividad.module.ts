import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadComponent } from './actividad.component';
import { ActividadRoutingModule } from './actividad-routing.module';



@NgModule({
  declarations: [ActividadComponent],
  imports: [
    CommonModule,
    ActividadRoutingModule
  ]
})
export class ActividadModule { }
