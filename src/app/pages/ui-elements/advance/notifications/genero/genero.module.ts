import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroComponent } from './genero.component';
import { GeneroRoutingModule } from './genero-routing.module';



@NgModule({
  declarations: [GeneroComponent],
  imports: [
    CommonModule,
    GeneroRoutingModule
  ]
})
export class GeneroModule { }
