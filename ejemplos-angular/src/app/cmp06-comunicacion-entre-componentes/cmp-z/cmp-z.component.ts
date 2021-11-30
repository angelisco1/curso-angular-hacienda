import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-z',
  templateUrl: './cmp-z.component.html',
  styleUrls: ['./cmp-z.component.css']
})
export class CmpZComponent implements OnInit {
  @Input() darkMode: boolean | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
