import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanalesComponent } from './canales.component';
import { CanalesRoutingModule } from './canales-routing.module';



@NgModule({
  declarations: [CanalesComponent],
  imports: [
    CommonModule,
    CanalesRoutingModule
  ]
})
export class CanalesModule { }
