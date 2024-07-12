import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-curva',
  templateUrl: './editar-curva.component.html',
  styleUrls: ['./editar-curva.component.scss']
})
export class EditarCurvaComponent implements OnInit {
  hotSettings: any = {
    data: [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ],
    colHeaders: ['CENTRO', 'CANAL', 'CONCEPTO', 'REGION', 'CLUSTER', 'CURVA', 'ACTIVIDAD'],
    columns: [
      { data: 'centro' },
      { data: 'canal' },
      { data: 'concepto' },
      { data: 'region' },
      { data: 'cluster' },
      { data: 'curva' },
      { data: 'actividad' }
    ],
    rowHeaders: true,
    contextMenu: true
  };
  constructor() { }

  ngOnInit() {

  }

}
