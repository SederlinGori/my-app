import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Direccion } from '../../clases/direccion';
import { Observable } from 'rxjs';
import { DireccionService } from '../../servicios/Direccion/direccion.service';

@Component({
  selector: 'app-direccion',
  standalone: false,  
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {
  listaDirecion: Observable<Direccion[]>;

  constructor(private service : DireccionService){
  }

  ngOnInit(){
    this.listaDirecion= this.service.getDireccion()
  }
  activar(direccion : Direccion) {
    direccion.active = true;
    this.service.editDireccion(direccion);
  }
  
  desactivar(direccion : Direccion) {
    direccion.active = false;
    this.service.editDireccion(direccion);
  }


}
