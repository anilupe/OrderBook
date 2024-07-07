import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionesComponent } from './regiones.component';
import { RegionesRoutingModule } from './regiones-routing.module';



@NgModule({
  declarations: [RegionesComponent],
  imports: [
    CommonModule,
    RegionesRoutingModule
  ]
})
export class RegionesModule { }
