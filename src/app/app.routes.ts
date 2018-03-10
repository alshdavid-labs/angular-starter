import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot, Params } from '@angular/router';
import { HomeView, AboutView } from '@views'

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeView },
    { path: 'about', component: AboutView },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

export interface RouterStateUrl {
    url: string,
    queryParams: Params,
    params: Params
}

// This is for redux
export class CustomSerializer {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState
        const { queryParams } = routerState.root
        let state: ActivatedRouteSnapshot = routerState.root
        while (state.firstChild) {
            state = state.firstChild
        }
        const { params } = state
        return { url, queryParams, params }
    }
}