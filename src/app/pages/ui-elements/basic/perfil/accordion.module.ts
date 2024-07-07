import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';
import {SharedModule} from '../../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AccordionRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule  ],
  declarations: [AccordionComponent]
})
export class AccordionModule { }
