import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Direccion } from '../../../clases/direccion';
import { DireccionService } from '../../../servicios/Direccion/direccion.service';

@Component({
  selector: 'app-direccion',
  standalone: false,  
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {
  listaDirecion: Direccion[];

  constructor(private service : DireccionService){
  }

  ngOnInit(){
    this.service.getDireccion().subscribe({
      next:(value)=> {
        this.listaDirecion=value;
      },
      error:(error)=>{
        console.error(error);
      }
    })
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
