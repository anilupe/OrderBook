import { NgModule } from '@angular/core';
import { TipoCurvaComponent } from './tipo-curva.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: TipoCurvaComponent,
    data: {
      title: 'Tipo Curvas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoCurvaRoutingModule { }
