import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-tallas',
  templateUrl: './add-tallas.component.html',
  styleUrls: ['./add-tallas.component.scss']
})
export class AddTallasComponent implements OnInit {
  title='';
  selectedSize: string = '7.5';
  tallas: string[] = ['7', '7.5', '8',];
  tallasDis = ['7', '7.5', '8', 'S', 'M', 'L', '36', '38', '37', '9', '8.5', '9.5', '35'];
  selectedTalla: string = this.tallas[0];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const name = params['name'];
      console.log('Name passed:', name);
      this.title = name;
    });

  }
  agregarTalla() {
    if (this.selectedTalla) {
      this.tallas.push(this.selectedTalla);
    }
  }
  eliminarTalla(index: number): void {
    this.tallas.splice(index, 1);
  }

}
