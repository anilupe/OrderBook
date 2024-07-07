import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoComponent } from './grupo.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: GrupoComponent,
    data: {
      breadcrumb: 'Grupos',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de grupos',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
