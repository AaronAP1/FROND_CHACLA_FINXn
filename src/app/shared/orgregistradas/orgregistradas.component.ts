import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  codigo: string;
  nombre: string;
  lugar: string;
  inivig: string;
  finvig: string;
  tipo: string;
  resol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, codigo: 'ORG-001', nombre: 'Vaso de Leche Nuevo Amanecer', lugar: 'Ñaña', inivig: '17/08/2022', finvig: '17/08/2030', tipo: 'Social', resol: 'ROSOLUCION_001'},
  {position: 2, codigo: 'ORG-002', nombre: 'Apoyo Comunitario Las Lomas', lugar: 'Ñaña', inivig: '16/09/2020', finvig: '16/08/2029', tipo: 'Vecinal', resol: 'RESOLUCION_005'},
  {position: 1, codigo: 'ORG-003', nombre: 'Vaso de Leche Comunidad Nueva', lugar: 'Ñaña', inivig: '05/05/2018', finvig: '17/08/2030', tipo: 'Social', resol: 'ROSOLUCION_002'},
  {position: 2, codigo: 'ORG-004', nombre: 'Organizacion Nuevo ', lugar: 'Moron', inivig: '01/01/2020', finvig: '16/08/2029', tipo: 'Vecinal', resol: 'RESOLUCION_010'},
];

@Component({
  selector: 'app-orgregistradas',
  templateUrl: './orgregistradas.component.html',
  styleUrls: ['./orgregistradas.component.css']
})
export class OrgregistradasComponent implements OnInit {
  displayedColumns: string[] = ['position', 'codigo', 'nombre', 'lugar', 'inivig', 'finvig', 'tipo', 'resol', 'descargar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

