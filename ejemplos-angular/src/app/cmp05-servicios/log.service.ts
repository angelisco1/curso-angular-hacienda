import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  error(msg: string): void {
    console.error(`[ERROR] - ${new Date()} - ${msg}`)
  }

  warning(msg: string): void {
    console.warn('[WARNING] ' + msg)
  }
}
