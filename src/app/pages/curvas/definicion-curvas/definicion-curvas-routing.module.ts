import { NgModule } from '@angular/core';
import { DefinicionCurvasComponent } from './definicion-curvas.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DefinicionCurvasComponent,
    data: {
      title: 'Definición Curvas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinicionCurvasRoutingModule { }
