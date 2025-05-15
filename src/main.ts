/// <reference types="@angular/localize" />

// la triple barra es una directiva de TypeScript para incluir definiciones de tipos. Util para autocompletado.
// pero no carga el código necesario para que $localize funcione.

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
