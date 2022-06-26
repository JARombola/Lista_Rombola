import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.scss']
})
export class AlumnosListComponent implements OnInit {

  alumnos: Alumno[] = [];
  soloAprobados: boolean = false;

  constructor() { 
    this.initAlumnos(10);
  }

  ngOnInit(): void {
  }

  private initAlumnos(cantidad: number) {
    this.alumnos = [];
    var alumno: Alumno;
    for (let index = 0; index < cantidad; index++) {
      alumno = new Alumno();
        alumno.nombre = 'Alumno ' + index;
        alumno.id = index;
      this.alumnos.push(alumno);
  }
  }

  setClases(alumno: Alumno): string {
    var clases: string = "";
    if (alumno.activo) {
      if (alumno.nota >= 6) clases += 'text-success';
      else clases += 'text-danger';
    }
    return clases;
  }

  setClasesPanel(alumno: Alumno): string {
    var clases: string = "";
    if (alumno.nota < 6) clases += 'bg-danger';
    if (alumno.nota == 6 ) clases += 'bg-warning';
    if (alumno.nota > 6) clases += 'bg-success';
    return clases;
  }
}

export class Alumno {
  id: number = 0;
  nombre: string = "";
  edad: number = Math.floor(Math.random() * 10);
  nota: number = Math.random() * 10;
  activo: boolean = (Math.random() * 10) > 3;
  carrera: string = ["Música", "Sistemas", "Medicina"][Math.floor(Math.random() * 3)];
  /**
   *  M = Medicina
   *  S = Sistemas
   *  A = Aviación
   * 
   * 
   */
}
