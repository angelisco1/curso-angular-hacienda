import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-y',
  templateUrl: './cmp-y.component.html',
  styleUrls: ['./cmp-y.component.css']
})
export class CmpYComponent implements OnInit {
  @Input() dMode: boolean | null = null;
  @Output() darkModeCambiado = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode(activado: boolean) {
    // this.dMode = activado;
    this.darkModeCambiado.emit(activado)
  }
}
