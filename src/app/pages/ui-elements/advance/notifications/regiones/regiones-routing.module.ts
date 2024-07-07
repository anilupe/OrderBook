import { NgModule } from '@angular/core';
import { RegionesComponent } from './regiones.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: RegionesComponent,
    data: {
      breadcrumb: 'Regiones',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de regiones',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionesRoutingModule { }
