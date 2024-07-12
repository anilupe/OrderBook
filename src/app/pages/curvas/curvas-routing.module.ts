import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CurvasComponent } from './curvas.component';

const routes: Routes = [
  {
    path: '',
    component: CurvasComponent,

    data: {
      title: 'Curvas',
      status: false
    },
    children: [
      
        {
            path: 'tallas',
            loadChildren: () => import('./tallas/tallas.module').then(m => m.TallasModule)
          },
          {
            path: 'tipo-curva',
            loadChildren: () => import('./grupo-tallas/tipo-curva.module').then(m => m.TipoCurvaModule)
          },
          {
            path: 'add-tallas',
            loadChildren: () => import('./add-tallas/add-tallas.module').then(m => m.AddTallasModule)
          },
          {
            path: 'editar-curva',
            loadChildren: () => import('./editar-curva/editar-curva.module').then(m => m.EditarCurvaModule)
          },
          
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurvasRoutingModule { }
