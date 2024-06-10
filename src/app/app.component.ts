import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Direccion } from './clases/direccion';
import exp from 'constants';
import { ClientesModule } from './modulo/clientes.module';
import { DireccionesModule } from './modulo/direcciones.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientesModule,DireccionesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
 


