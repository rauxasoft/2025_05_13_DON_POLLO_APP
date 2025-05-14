import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [

    {   path: '', 
        component: HomeComponent
    },

    {
        path: 'familias',
        loadChildren: () => import('./features/familias/familia.routes').then(m => m.FAMILIAS_ROUTES)
    },

    {
        path: 'establecimientos',
        loadChildren: () => import('./features/establecimientos/establecimiento.routes').then(m => m.ESTABLECIMIENTOS_ROUTES)
    },

    {
        path: 'login', 
        component: LoginComponent
    },

    {
        path: '**', 
        redirectTo: ''
    }
];
