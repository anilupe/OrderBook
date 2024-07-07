import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonComponent} from './button.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonComponent,
    data: {
      breadcrumb: 'Button',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Administración de usuarios',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule { }
