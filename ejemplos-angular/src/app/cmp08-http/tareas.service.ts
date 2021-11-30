import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }

  crearTarea(titulo: string): Observable<any> {
    const tarea = {
      titulo: titulo,
      completada: false
    }
    return this.http.post(`${environment.urlTareas}.json`, tarea)
  }

  getTareas(): Observable<any> {
    return this.http.get(`${environment.urlTareas}.json`)
      .pipe(
        map((data: any) => {
          const arrTareas: Array<any> = []

          for (let id in data) {
            const tarea = {
              ...data[id],
              id: id
            }
            arrTareas.push(tarea)
          }

          return arrTareas
        })
      )

  }

}
