import { Component, OnInit } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-cmp08-http',
  templateUrl: './cmp08-http.component.html',
  styleUrls: ['./cmp08-http.component.css']
})
export class Cmp08HttpComponent implements OnInit {
  tareas: Array<any> = []
  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.tareasService.getTareas()
      .subscribe((tareas: any) => {
        console.log(tareas)
        this.tareas = tareas;
      })
  }

  guardar(titulo: string) {
    this.tareasService.crearTarea(titulo)
      .subscribe((data: any) => {
        console.log(data)
        const nuevaTarea = {
          titulo: titulo,
          id: data.name,
          completada: false
        }
        this.tareas.push(nuevaTarea)
      })
  }
}
