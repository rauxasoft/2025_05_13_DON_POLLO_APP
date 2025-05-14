import { Route } from "@angular/router";
import { ListadoFamiliasComponent } from "./listado-familias.component";
import { roleGuard } from "../../core/guards/role.guard";

export const FAMILIAS_ROUTES: Route[] = [
  {
    path: '',
    component: ListadoFamiliasComponent,
    //canActivate: [roleGuard('ADMIN')]
  },
  {
    path: 'nuevo',
    component: ListadoFamiliasComponent,  // esto será el nuevo formulario de alta cuando lo tengamos,
    canActivate: [roleGuard('ADMIN')] 
  }
];