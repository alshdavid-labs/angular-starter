import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from  './views/index/index.component'

export const routes: Routes = [
  { path: '', component: IndexComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);