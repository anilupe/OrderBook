import { NgModule } from '@angular/core';
import { GeneroComponent } from './genero.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: GeneroComponent,
    data: {
      breadcrumb: 'Géneros',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de géneros',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneroRoutingModule { }
