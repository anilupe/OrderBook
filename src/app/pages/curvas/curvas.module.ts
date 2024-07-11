import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CurvasRoutingModule } from './curvas-routing.module';
import { TallasComponent } from './tallas/tallas.component';
import { TipoCurvaComponent } from './tipo-curva/tipo-curva.component';
import { CurvasComponent } from './curvas.component';
import { AddTallasComponent } from './add-tallas/add-tallas.component';



@NgModule({
  declarations: [CurvasComponent],
  imports: [
    CommonModule,
    CurvasRoutingModule,
    SharedModule
  ]
})
export class CurvasModule { }
