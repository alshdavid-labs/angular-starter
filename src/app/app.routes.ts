import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeView } from  './views/home/home.view'

export const routes: Routes = [
  { path: '',   redirectTo: 'home',     pathMatch: 'full' },
  { path: 'home',                       component: HomeView },
  { path: 'about',                      component: HomeView },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);