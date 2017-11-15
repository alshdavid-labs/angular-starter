import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from  './views/index/index.component'
import { AboutComponent } from  './views/about/about.component'

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);