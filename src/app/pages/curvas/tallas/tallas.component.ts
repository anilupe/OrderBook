import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tallas',
  templateUrl: './tallas.component.html',
  styleUrls: ['./tallas.component.scss']
})
export class TallasComponent implements OnInit {

  ngOnInit(): void {
  }

  tallas: any[] = [
    { id: '001', descripcion: '7', activo: true },
    { id: '002', descripcion: '7.5', activo: true },
    { id: '003', descripcion: '8', activo: true },
    { id: '004', descripcion: 'S', activo: true },
    { id: '005', descripcion: 'M', activo: true },
    { id: '006', descripcion: 'L', activo: true },
    { id: '007', descripcion: '36', activo: true },
    { id: '008', descripcion: '38', activo: true },
    { id: '009', descripcion: '37', activo: true },
    { id: '010', descripcion: '9', activo: true },
    { id: '011', descripcion: '8.5', activo: true },
    { id: '012', descripcion: '9.5', activo: true },
    { id: '013', descripcion: '35', activo: true }
  ];

  nuevaTalla: any = {
    id: '',
    descripcion: '',
    activo: true
  };

  agregarTalla(): void {
  
    this.nuevaTalla.id = '0' + (this.tallas.length + 1);
    this.tallas.push({ ...this.nuevaTalla });
    console.log(this.tallas,'nuevas registros')
    this.nuevaTalla = { id: '', descripcion: '', activo: true }; 
  }

  eliminarTalla(index: number): void {
    this.tallas.splice(index, 1);
  }

}
