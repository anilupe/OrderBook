import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentrosComponent } from './centros.component';
import { CentrosRoutingModule } from './centros-routing.module';



@NgModule({
  declarations: [CentrosComponent],
  imports: [
    CommonModule,
    CentrosRoutingModule
  ]
})
export class CentrosModule { }
