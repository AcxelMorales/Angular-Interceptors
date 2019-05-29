import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'token-user': 'kjkhsjshjhhsmn71yw891ww1w2wd'
    });

    const reqClon = req.clone({
      headers
    });

    return next.handle(reqClon).pipe(catchError(this.manejarError));
  }

  constructor() { }

  private manejarError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error perzonalizado');
  }

}
