// Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes, CustomSerializer } from '@app/app.routes';

// Angular Redux
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { state } from '@app/app.state'
export const metaReducers: MetaReducer<any>[] = []

// App Imports
import { AppComponent } from '@app/app.component';
import { HomeView, AboutView } from '@views';
import { HttpService, ItemsService } from '@services'

const views = [
    HomeView,
    AboutView
]

const components = [
    AppComponent
]

const services = [
    HttpService,
    ItemsService
]

const pipes = []

@NgModule({
    declarations: [
        ...views,
        ...components,
        ...pipes
    ],
    imports: [
        BrowserModule,
        AppRoutes,
        StoreModule.forRoot(state, { metaReducers }),
        StoreRouterConnectingModule,
        StoreDevtoolsModule.instrument()
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer },
        ...services
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
