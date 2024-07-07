import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Basic Components',
      status: false
    },
    children: [
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/button.module').then(m => m.ButtonModule)
      }, {
        path: 'roles',
        loadChildren: () => import('./roles/typography.module').then(m => m.TypographyModule)
      }
      , {
        path: 'perfil',
        loadChildren: () => import('./perfil/accordion.module').then(m => m.AccordionModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
