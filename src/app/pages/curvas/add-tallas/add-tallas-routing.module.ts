import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTallasComponent } from './add-tallas.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AddTallasComponent,
    data: {
      title: 'Tallas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddTallasRoutingModule { }
