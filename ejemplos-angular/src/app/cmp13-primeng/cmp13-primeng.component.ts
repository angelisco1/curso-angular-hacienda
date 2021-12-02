import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp13-primeng',
  templateUrl: './cmp13-primeng.component.html',
  styleUrls: ['./cmp13-primeng.component.css']
})
export class Cmp13PrimengComponent implements OnInit {
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  abreElModal() {
    this.display = true;
  }

}
