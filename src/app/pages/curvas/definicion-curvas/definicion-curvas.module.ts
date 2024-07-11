import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinicionCurvasRoutingModule } from './definicion-curvas-routing.module';
import { DefinicionCurvasComponent } from './definicion-curvas.component';



@NgModule({
  declarations: [DefinicionCurvasComponent],
  imports: [
    CommonModule,
    DefinicionCurvasRoutingModule
  ]
})
export class DefinicionCurvasModule { }
