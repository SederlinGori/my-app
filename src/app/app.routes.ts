import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './modules/clientes/clientes/clientes.component';
import { DireccionComponent } from './modulo/direccion/direccion.component';
import { ClientedetailsComponent } from './modules/clientes/clientedetails/clientedetails.component';
import { ClienteDireccionesComponent } from './modules/clientes/cliente-direcciones/cliente-direcciones.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path:'clientes',       
        loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule)
    },
    {
        path:'direcciones',
        loadChildren: () => import('./modulo/direcciones/direcciones.module').then(m => m.DireccionesModule)
    },
  
];
