import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoComponent } from './grupo.component';
import { GrupoRoutingModule } from './grupo-routing.module';



@NgModule({
  declarations: [GrupoComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
