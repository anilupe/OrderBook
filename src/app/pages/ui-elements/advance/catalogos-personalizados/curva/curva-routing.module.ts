import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurvaComponent } from './curva.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CurvaComponent,
    data: {
      breadcrumb: 'Curvas',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de curvas',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CurvaRoutingModule { }
