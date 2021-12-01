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
    // this.tareasService.getTareas()
    //   .subscribe((tareas: any) => {
    //     console.log(tareas)
    //     this.tareas = tareas;
    //   })
    this.getTareas()
  }

  guardar(titulo: string) {
    this.tareasService.crearTarea(titulo)
      .subscribe((data: any) => {
        console.log(data)
        // 👇
        const nuevaTarea = {
          titulo: titulo,
          id: data.name,
          completada: false
        }
        this.tareas.push(nuevaTarea)
        // 👆
        // this.getTareas()
      })
  }

  completar(tarea: any) {
    this.tareasService.completarTarea(tarea.id, !tarea.completada)
      .subscribe((datosCambiados) => {
        const tareaModificada = this.tareas.find(t => t.id === tarea.id)
        tareaModificada.completada = datosCambiados.completada
      })
  }

  eliminar(id: string) {
    this.tareasService.eliminarTarea(id)
      .subscribe((data: any) => {
        console.log(data)
        this.tareas = this.tareas.filter(t => t.id !== id)
      })
  }

  private getTareas() {
    this.tareasService.getTareas()
      .subscribe((tareas: any) => {
        console.log(tareas)
        this.tareas = tareas;
      })
  }

}
