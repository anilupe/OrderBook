import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemporadasComponent } from './temporadas.component';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    component: TemporadasComponent,
    data: {
      breadcrumb: 'Temporadas',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de temporadas',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemporadasRoutingModule { }
