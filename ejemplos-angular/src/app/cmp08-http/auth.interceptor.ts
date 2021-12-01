import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../cmp05-servicios/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.method !== 'GET') {
      const authToken = this.auth.getToken()
      console.log('Pasa por aquí', authToken)

      if (authToken) {
        const newHeaders = request.headers.append('token', authToken)
        const newRequest = request.clone({ headers: newHeaders })
        return next.handle(newRequest)
      }
    }

    return next.handle(request);
  }
}
