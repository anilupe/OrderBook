import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanalesComponent } from './canales.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CanalesComponent,
    data: {
      breadcrumb: 'Canales',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de canales',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanalesRoutingModule { }
