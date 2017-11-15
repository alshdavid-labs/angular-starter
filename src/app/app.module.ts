import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpService } from './services/http.service'

import { ImageloaderComponent } from './components/imageloader/imageloader.component';

import { IndexComponent } from './views/index/index.component';
import { AboutComponent } from  './views/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ImageloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
