import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentrosComponent } from './centros.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CentrosComponent,
    data: {
      breadcrumb: 'Cantros',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de centros',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentrosRoutingModule { }
