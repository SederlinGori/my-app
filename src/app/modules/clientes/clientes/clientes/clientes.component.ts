import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { ClientesService } from '../../../../servicios/Clientes/clientes.service';
import { Clientes } from '../../../../clases/clientes';





@Component({
  selector: 'app-clientes',
  standalone: false,  
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes:Clientes[];

  constructor(private servicios:ClientesService){    
  }
  
 ngOnInit(){
 this.servicios.getClientes().subscribe({
    next:(value)=> {
      this.clientes=value;
    },
    error:(error)=>{
      console.error(error);
    }

  });
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
