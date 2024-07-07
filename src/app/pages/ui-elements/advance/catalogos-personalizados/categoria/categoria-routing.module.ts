import { NgModule } from '@angular/core';
import { CategoriaComponent } from './categoria.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CategoriaComponent,
    data: {
      breadcrumb: 'Categoria',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Catalogo de categorías',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriaRoutingModule { }
