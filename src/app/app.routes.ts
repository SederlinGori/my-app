import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path:'clientes',       
        loadChildren: () => import('./modulo/clientes.module').then(m => m.ClientesModule)
    },
    {
        path:'direcciones',
        loadChildren: () => import('./modulo/direcciones.module').then(m => m.DireccionesModule)
    },
  
];
