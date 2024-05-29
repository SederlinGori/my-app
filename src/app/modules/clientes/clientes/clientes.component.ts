import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clientes } from '../../../clases/clientes';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { ClientesService } from '../../../servicios/Clientes/clientes.service';




@Component({
  selector: 'app-clientes',
  standalone: false,  
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  listaclientes: Observable<Clientes[]> ;

  constructor(private servicios:ClientesService){    
  }
  
 ngOnInit(){
  this.listaclientes=this.servicios.getClientes();
 }
 activar(cliente : Clientes) {
  cliente.active = true;
  this.servicios.editCliente(cliente);
}

desactivar(cliente : Clientes) {
  cliente.active = false;
  this.servicios.editCliente(cliente);
}
  
  
}
