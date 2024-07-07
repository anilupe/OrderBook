import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ButtonRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule
  ],
  declarations: [ButtonComponent]
})
export class ButtonModule { }
