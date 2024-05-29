import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './modules/clientes/clientes/clientes.component';

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
