import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarCurvaComponent } from './editar-curva.component';


const routes: Routes = [
  {
    path: '',
    component: EditarCurvaComponent,
    data: {
      title: 'Tipo Curvas'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarCurvaRoutingModule { }
