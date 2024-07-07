import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    data: {
      breadcrumb: 'Catálogos SIncronizados',
      icon: 'icofont-listine-dots bg-c-pink',
      breadcrumb_caption: 'Administración Catálogos Sincronizados',
      status: true
    },
    children: [
      {
        path: 'marcas',
        loadChildren: () => import('./marcas/marcas.module').then(m => m.MarcasModule)
      }, {
        path: 'temporadas',
        loadChildren: () => import('./temporadas/temporadas.module').then(m => m.TemporadasModule)
      },
      {
        path: 'centros',
        loadChildren: () => import('./centros/centros.module').then(m => m.CentrosModule)
      }, {
        path: 'actividad',
        loadChildren: () => import('./actividad/actividad.module').then(m => m.ActividadModule)
      },
      {
        path: 'grupo',
        loadChildren: () => import('./grupo/grupo.module').then(m => m.GrupoModule)
      }, {
        path: 'genero',
        loadChildren: () => import('./genero/genero.module').then(m => m.GeneroModule)
      },
      {
        path: 'linea',
        loadChildren: () => import('./linea/linea.module').then(m => m.LineaModule)
      }, {
        path: 'canales',
        loadChildren: () => import('./canales/canales.module').then(m => m.CanalesModule)
      }, {
        path: 'regiones',
        loadChildren: () => import('./regiones/regiones.module').then(m => m.RegionesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
