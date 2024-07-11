import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-curva',
  templateUrl: './tipo-curva.component.html',
  styleUrls: ['./tipo-curva.component.scss']
})
export class TipoCurvaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(name:string):void{
    console.log(name,'nombre')
    this.router.navigate(['/curvas/add-tallas'], { queryParams: { name: name } });
  }
}
