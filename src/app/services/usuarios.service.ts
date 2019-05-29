import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<void> {
    let params = new HttpParams().append('page', '1');

    return this.http.get('https://reqres.in/api/user', { params }).pipe(
      map((resp: any) => resp['data']));
  }

}
