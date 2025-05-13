import { Component, effect, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { APP_VERSION } from './tokens/app-version.token';
import { userPayload } from './core/stores/user.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  appVersion = inject(APP_VERSION);
  nombre: string | null = null;     // no utilizamos signal() porque los datos no van a cambiar. Ya está bien.
  roles: string[] | null = null     // no utilizamos signal() porque los datos no van a cambiar. Ya está bien.

  constructor(){
    
    effect(() => {
      const payload = userPayload();
      this.nombre = payload?.nombre ?? 'XXXXXXXSDSDSDS';
      this.roles = payload?.roles ?? ['mindundi'];
    });
    
  }

  ngOnInit() {
    const raw = localStorage.getItem('user_payload');
    if(raw) {
      try{
        const payload = JSON.parse(raw);
        this.nombre = payload?.nombre || null;
        this.roles = payload?.roles || null;
      } catch (error) {
        console.error('Error al obtener los datos del usuario a partir del token:', error);
      }
    }
  }

}
