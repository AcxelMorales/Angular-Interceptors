import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _usuariosService: UsuariosService
  ) {
    this._usuariosService.getUsuarios()
      .subscribe(
        resp => console.log(resp),
        err => console.error(err)
      );
  }

}
