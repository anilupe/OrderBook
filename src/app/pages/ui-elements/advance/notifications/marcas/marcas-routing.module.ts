import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasComponent } from './marcas.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: MarcasComponent,
    data: {
      breadcrumb: 'Marcas',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de marcas',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
