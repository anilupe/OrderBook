import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Catalogos Personalizados',
      status: false
    },
    children: [
      {
        path: 'categorias',
        loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)
      }, {
        path: 'cluster',
        loadChildren: () => import('./cluster/curva.module').then(m => m.CurvaModule)
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosPersonalizadosRoutingModule { }
