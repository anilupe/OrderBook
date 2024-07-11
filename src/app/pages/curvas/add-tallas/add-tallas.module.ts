import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTallasRoutingModule } from './add-tallas-routing.module';
import { AddTallasComponent } from './add-tallas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddTallasComponent],
  imports: [
    CommonModule,
    AddTallasRoutingModule,
    FormsModule
  ]
})
export class AddTallasModule { }
