import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineaComponent } from './linea.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LineaComponent,
    data: {
      breadcrumb: 'Línea',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de líneas',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineaRoutingModule { }
