import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccordionComponent} from './accordion.component';

const routes: Routes = [
  {
    path: '',
    component: AccordionComponent,
    data: {
      breadcrumb: 'Perfil de Usuario',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Perfil de usuario',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordionRoutingModule { }
