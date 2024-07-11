import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TallasRoutingModule } from './tallas-routing.module';
import { TallasComponent } from './tallas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TallasComponent],
  imports: [
    CommonModule,
    TallasRoutingModule,
    FormsModule
  ]
})
export class TallasModule { }
