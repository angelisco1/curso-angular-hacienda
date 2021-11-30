import { Component, OnInit } from '@angular/core';
import { Observable, Observer, fromEvent, map, filter } from 'rxjs';
// import { map } from 'rxjs/operators'

@Component({
  selector: 'app-cmp07-observables',
  templateUrl: './cmp07-observables.component.html',
  styleUrls: ['./cmp07-observables.component.css']
})
export class Cmp07ObservablesComponent implements OnInit {
  mostrarFecha = true
  constructor() { }

  ngOnInit(): void {
    this.observable1()
    this.observable2()
  }

  toggleFecha() {
    this.mostrarFecha = !this.mostrarFecha;
  }

  observable1() {
    // Observable, Observer, Subscription

    const miObservable = new Observable((observer: Observer<string>) => {
      observer.next('Trozo 1 de un capítulo')
      setTimeout(() => {
        observer.next('Trozo 2 de un capítulo')
      }, 2000)
      setTimeout(() => {
        observer.next('Trozo 3 de un capítulo')
      }, 5000)
      setTimeout(() => {
        // observer.error('Tu suscripción se ha terminado')
        observer.complete()
      }, 7000)
      setTimeout(() => {
        observer.next('Trozo 4 de un capítulo')
      }, 8000)
    })

    miObservable.subscribe(
      (msg: string) => { // .next
        console.log(msg)
      },
      (err: string) => { // .error
        console.log(err)
        console.log('Oye, suscribete otra vez...')
      },
      () => { // .complete
        console.log('Ya has terminado el capitulo, te ponemos el siguiente...')
      }
    )
  }

  observable2() {
    const mouseObs = fromEvent(document, 'mousemove')
      .pipe(
        map((data: any) => {
          return {
            x: data.clientX,
            y: data.clientY
          }
        }),
        filter((data: any) => {
          return data.x > 300 && data.y > 500
        })
      )

    mouseObs.subscribe((data: any) => {
      console.log(data)
    })
  }



}
