import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-definicion-curvas',
  templateUrl: './definicion-curvas.component.html',
  styleUrls: ['./definicion-curvas.component.scss']
})
export class DefinicionCurvasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(name:string):void{
    console.log(name,'nombre')
    this.router.navigate(['/curvas/editar-curva'], { queryParams: { name: name } });
  }

}
