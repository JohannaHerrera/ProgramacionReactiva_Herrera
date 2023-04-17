import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno, AlumnosService } from '../services/alumnos.service';
import { Observable, Subscription, map} from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnDestroy{
  subscription: Subscription | null = null;
  promise: Promise<Alumno[]> | null = null;
  observable: Observable<Alumno[]> | null = null;

  constructor(private alunmosServices: AlumnosService){}

  ngOnInit(): void {
    this.promise = this.createPromise();
    this.observable = this.createObservable();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  createPromise(): Promise<Alumno[]>{
    return new Promise((resolve, reject) => {
      setTimeout(() => 
        resolve(this.alunmosServices.getAlumnosList()), 2000);
      })
  }

  createObservable(): Observable<Alumno[]>{
    const obs$ = new Observable<Alumno[]>(
      (observer) => {
        setInterval(() => 
          observer.next(this.alunmosServices.getAlumnosList()), 3000);
      }
    ).pipe(
      map(x => x.filter(c => c.subject !== 'Inglés'))
    );
 
    this.subscription = obs$.subscribe((value) => console.log(value));
    return obs$;
  }
}
