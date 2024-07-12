import { Component, OnInit } from '@angular/core';
import { getData } from './../../../data/utils/constants';
import { addClassesToRows, alignHeaders } from './../../../data/utils/hooks-callbacks';
import { ActivatedRoute } from '@angular/router';

interface Talla {
  id: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-editar-curva',
  templateUrl: './editar-curva.component.html',
  styleUrls: ['./editar-curva.component.scss']
})
export class EditarCurvaComponent implements OnInit {
  title = '';
  dataset = getData();
  alignHeaders = alignHeaders;
  addClassesToRows = addClassesToRows;
  colHeaders = [
    'CENTRO', 'CANAL', 'CONCEPTO', 'REGION', 'CLUSTER', 'CURVA', 'ACTIVIDAD',
  ];
  hiddenColumns = {
    indicators: true,
  };
  licenseKey = "non-commercial-and-evaluation";

  //tallas de ejemplo esto se debe vincular a los grupos de tallas
  tallas: Talla[] = [
    { id: 'talla1', name: '6', selected: false },
    { id: 'talla2', name: '6.5', selected: false },
    { id: 'talla3', name: '7', selected: false },
    { id: 'talla4', name: '8', selected: false },
    { id: 'talla5', name: '8.5', selected: false },
    { id: 'talla6', name: '37', selected: false },
    { id: 'talla7', name: '38', selected: false },
    { id: 'talla8', name: '38.5', selected: false },
    { id: 'talla9', name: '9', selected: false },
  ];
  seleccionadas: Talla[] = [];



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const name = params['name'];
      console.log('Name passed:', name);
      this.title = name;
    });
  }

  guardarCambios() {
    this.seleccionadas = this.tallas.filter(talla => talla.selected);
    this.colHeaders = [
      'CENTRO', 'CANAL', 'CONCEPTO', 'REGION', 'CLUSTER', 'CURVA', 'ACTIVIDAD', ...this.seleccionadas.map(talla => talla.name)
    ];
    console.log(this.colHeaders, 'headers')

    // this.limpiarDataset();

    /*  this.seleccionadas.forEach(talla => {
       const nuevaColumna = this.crearColumnaTalla(talla);
       this.dataset[0].push(...nuevaColumna);
     }); */
  }
  /*  crearColumnaTalla(talla: Talla): string[] {
     const nuevaColumna = [talla.name];
     return nuevaColumna;
   } */
  /*   limpiarDataset() {
      this.dataset.forEach(fila => fila.splice(1)); 
    } */

  actualizarSeleccion(talla: Talla, event: Event) {
    talla.selected = (event.target as HTMLInputElement).checked;
  }

}
