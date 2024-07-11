import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TallasComponent } from './tallas.component';

const routes: Routes = [
  {
    path: '',
    component: TallasComponent,
    data: {
      title: 'Tallas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TallasRoutingModule { }
