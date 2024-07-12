import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CurvasRoutingModule } from './curvas-routing.module';
import { CurvasComponent } from './curvas.component';
import { EditarCurvaComponent } from './editar-curva/editar-curva.component';



@NgModule({
  declarations: [CurvasComponent, EditarCurvaComponent],
  imports: [
    CommonModule,
    CurvasRoutingModule,
    SharedModule
  ]
})
export class CurvasModule { }
