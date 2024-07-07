import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadComponent } from './actividad.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: ActividadComponent,
    data: {
      breadcrumb: 'Actividades',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de actividades',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
