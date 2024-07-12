import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CurvasRoutingModule } from './curvas-routing.module';
import { CurvasComponent } from './curvas.component';
import { EditarCurvaComponent } from './editar-curva/editar-curva.component';
import { HotTableModule } from '@handsontable/angular';



@NgModule({
  declarations: [CurvasComponent, EditarCurvaComponent],
  imports: [
    CommonModule,
    CurvasRoutingModule,
    SharedModule,
    HotTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurvasModule { }
