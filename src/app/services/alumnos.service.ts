import { Injectable } from '@angular/core';
import { Observable, from, map, filter } from 'rxjs';

export interface Alumno{
  id: number;
  name: string;
  subject: string;
}

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {

  constructor() { }

  getAlumnosList(): Alumno[] {
    const source = [
      {
        id: 1,
        name: 'Anita Pérez',
        subject: 'Inglés'
      },
      {
        id: 2,
        name: 'Pedro Cáceres',
        subject: 'Literatura'
      },
      {
        id: 3,
        name: 'Pepito Fernández',
        subject: 'Inglés'
      }
    ];

    return source;
  }
}
