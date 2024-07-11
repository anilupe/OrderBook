import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CurvasRoutingModule } from './curvas-routing.module';
import { CurvasComponent } from './curvas.component';



@NgModule({
  declarations: [CurvasComponent],
  imports: [
    CommonModule,
    CurvasRoutingModule,
    SharedModule
  ]
})
export class CurvasModule { }
