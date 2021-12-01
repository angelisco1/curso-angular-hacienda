import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'

export interface IUsuarioBase {
  id: number,
  name: string
}

export interface IUsuario extends IUsuarioBase {
  username?: string,
  email?: string,
  address?: any,
  phone?: string,
  website?: string,
  company?: any,
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Array<IUsuarioBase>> {
    return this.http.get<Array<IUsuario>>(this.url)
      .pipe(
        map(data => {
          return data.map(u => {
            return {
              id: u.id,
              name: u.name
            }
          })
        })
      )
  }

  getUsuario(id: string | null): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.url}/${id}`)
  }

}
