import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { Direccion } from './clases/direccion';
import { DireccionComponent } from './direccion/direccion.component';
import exp from 'constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientesComponent,DireccionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}

