import { Injectable } from '@angular/core';
import { Clientes } from '../../clases/clientes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
 private clientes: Clientes[] = [
    {
      clienteId: 0,
      name: 'Juan',
      lastName: 'Perez',
      cedula: '123-4567890-0',
      birthDate: new Date('1990-01-01'),
      createAt: '2021-01-01',
      email: 'juanperez@gmail.com',
      active: true,
      addresses:[]
    },
    {
      clienteId: 1,
      name: 'Maria',
      lastName: 'Lopez',
      cedula: '402-6669999-8',
      birthDate: new Date('1995-01-01'),
      createAt: '2021-01-01',
      email: 'marialopez@gmail.com',
      active: false,
      addresses:[]
    },
    {
      clienteId: 2,
      name: 'Pedro',
      lastName: 'Ramirez',
      cedula: '402-6667779-8',
      birthDate: new Date('1985-01-01'),
      createAt: '2021-01-01',
      email: 'pedroramirez@gmail.com',
      active: true,
      addresses:[]
    },
    {
      clienteId: 3,
      name: 'Ana',
      lastName: 'Gonzalez',
      cedula: '402-6661119-8',
      birthDate: new Date('1980-01-01'),
      createAt: '2021-01-01',
      email: 'anagonzalez@gamil.com',
      active: false,
      addresses:[]
    },
    {
      clienteId: 4,
      name: 'Carlos',
      lastName: 'Garcia',
      cedula: '402-6662229-8',
      birthDate: new Date('1975-01-01'),
      createAt: '2021-01-01',
      email: 'carlosgarcia@gmail.com',
      active: true,
      addresses:[]
    }


  ]

  constructor() { }

  getClientes(): Observable<Clientes[]>{
    return of(this.clientes);
  }

  getClienteID(clienteId : Number) : Observable<Clientes> | undefined{
    const cliente = this.clientes.find(cliente => cliente.clienteId ===clienteId);
    return of(cliente)
  }

  editCliente(clienteData: Partial<Clientes>): Observable<Clientes | undefined> {
    const clienteIndex = this.clientes.findIndex(c => c.clienteId === clienteData.clienteId);
    if (clienteIndex !== -1) {
      this.clientes[clienteIndex] = { ...this.clientes[clienteIndex], ...clienteData };
      return of(this.clientes[clienteIndex]);
    } else {
      return of(undefined);
    }
  }
  
  crearcliente(){}
}
