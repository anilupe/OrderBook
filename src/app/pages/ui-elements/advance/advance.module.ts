import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AdvanceRoutingModule } from './advance-routing.module';
import { AdvanceComponent } from './advance.component';



@NgModule({
  imports: [
    CommonModule,
    AdvanceRoutingModule,
    SharedModule
  ],
  declarations: [AdvanceComponent]
})
export class AdvanceModule { }
