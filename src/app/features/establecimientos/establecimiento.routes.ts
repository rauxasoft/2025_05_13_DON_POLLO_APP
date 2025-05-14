import { Route } from "@angular/router";
import { ListadoEstablecimientosComponent } from "./listado-establecimientos.component";
import { roleGuard } from "../../core/guards/role.guard";

export const ESTABLECIMIENTOS_ROUTES: Route[] = [
  {
    path: '',
    component: ListadoEstablecimientosComponent,
    canActivate: [roleGuard('ADMIN')]
  },
  {
    path: 'nuevo',
    component: ListadoEstablecimientosComponent,  // esto será el nuevo formulario de alta cuando lo tengamos,
    canActivate: [roleGuard('ADMIN')] 
  }
];