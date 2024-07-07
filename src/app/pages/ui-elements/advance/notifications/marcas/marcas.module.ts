import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasComponent } from './marcas.component';
import { MarcasRoutingModule } from './marcas-routing.module';



@NgModule({
  declarations: [MarcasComponent],
  imports: [
    CommonModule,
    MarcasRoutingModule
  ]
})
export class MarcasModule { }
