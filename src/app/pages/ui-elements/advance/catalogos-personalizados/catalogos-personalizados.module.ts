import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { CatalogosPersonalizadosComponent } from './catalogos-personalizados.component';
import { CatalogosPersonalizadosRoutingModule } from './catalogos-personalizados-routing.module';
import { ToastyModule } from 'ng2-toasty';


@NgModule({
  imports: [
    CommonModule,
    CatalogosPersonalizadosRoutingModule,
    SharedModule,
    ToastyModule.forRoot()
  ],
  declarations:[CatalogosPersonalizadosComponent]
})
export class CatalogosPersonalizadosModule { }
