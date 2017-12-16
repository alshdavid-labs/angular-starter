import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';

// ngrx
import { state } from './app.state'
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
export const metaReducers: MetaReducer<any>[] = []

// App
import { AppComponent } from './app.component';


// Views
import { HomeView } from './views/home/home.view';


@NgModule({
  declarations: [
    AppComponent,
    HomeView
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    StoreModule.forRoot(state, { metaReducers }),
    StoreDevtoolsModule.instrument()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
