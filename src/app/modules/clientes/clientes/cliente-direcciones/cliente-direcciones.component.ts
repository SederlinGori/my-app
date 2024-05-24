import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../../../../clases/direccion';

@Component({
  selector: 'app-cliente-direcciones',
  standalone: false,  
  templateUrl: './cliente-direcciones.component.html',
  styleUrl: './cliente-direcciones.component.css'
})
export class ClienteDireccionesComponent {
  direcciones: Direccion[] = [
    {
      addressId: 0,
      alias: 'Casa',
      street: 'Calle principal',
      city: 'Ciudad 1',
      state: 'Estado 1',
      zipCode: '0321',
      country: 'Republica Dominicana',
      active: true,
      createAt: '2021-01-02',
      clienteId: 0
    },
    {
      addressId: 1,
      alias: 'Trabajo',
      street: 'Calle 2',
      city: 'Ciudad 2',
      state: 'Estado 2',
      zipCode: '6899',
      country: 'Pais 2',
      active: false,
      createAt: '2020-01-08',
      clienteId: 1
    },
    {
      addressId: 2,
      alias: 'Casa',
      street: 'Libertad',
      city: 'Sfo Macoris',
      state: 'Estado 3',
      zipCode: '12855',
      country: 'Republica Dominicana',
      active: true,
      createAt: '2021-01-07',
      clienteId: 2
    },{
      addressId: 3,
      alias: 'Trabajo',
      street: 'Calle Mercedez',
      city: 'Santo Domingo',
      state: 'Estado 4',
      zipCode: '64789',
      country: 'Republica dominicana',
      active: false,
      createAt: '2023-01-05',
      clienteId: 3
    },
    {
      addressId: 4,
      alias: 'Casa',
      street: 'Calle guzman ',
      city: 'Santiago',
      state: 'Estado 5',
      zipCode: '123456',
      country: 'Republica dominicana',
      active: true,
      createAt: '2024-01-07',
      clienteId: 4
    }


    
  ]

}
