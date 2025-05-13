import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoFamiliasComponent } from './components/listado-familias/listado-familias.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoEstablecimientosComponent } from './components/listado-establecimientos/listado-establecimientos.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'familias', component: ListadoFamiliasComponent},
    {path: 'establecimientos', component: ListadoEstablecimientosComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: ''}
];
