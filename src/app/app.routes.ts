import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home }

  /* Redireciona o app.html para a home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home }
   */
];
