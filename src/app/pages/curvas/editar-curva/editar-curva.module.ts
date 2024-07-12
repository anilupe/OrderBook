import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCurvaRoutingModule } from './editar-curva-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditarCurvaRoutingModule,
    FormsModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditarCurvaModule { }
