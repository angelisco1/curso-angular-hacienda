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

export interface IOptions {
  _limit?: string | null,
  _page?: string | null,
  _offset?: string | null,
  _sort?: string | null,
  _order?: string | null
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUsuarios(opciones?: IOptions): Observable<Array<IUsuarioBase>> {
    let url = this.url;
    if (opciones) {
      url += Object.entries(opciones).reduce((acc, item, pos) => {
        if (pos !== 0) {
          acc += '&'
        }
        return acc += item[0] + '=' + item[1]
      }, '?')
    }

    return this.http.get<Array<IUsuario>>(url)
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
