import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
  path: '',
    data: {
      breadcrumb: 'Administración',
      status: false
    },
  children:[
    {
      path: 'catalogos-sincronizados',
      loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
    },
    {
      path: 'catalogos-personalizados',
      loadChildren: () => import('./catalogos-personalizados/catalogos-personalizados.module').then(m => m.CatalogosPersonalizadosModule)
    },
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceRoutingModule { }
