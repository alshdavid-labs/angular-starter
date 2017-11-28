import { Component, HostListener, OnInit } from '@angular/core';
import { StoreService, store } from './services/store.service'
declare const window


@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet> 
    `
})
export class AppComponent implements OnInit {
  
    constructor(
        public state: StoreService
    ) {
        
    }
    ngOnInit() { 
        
        
        store().dispatch({ type: "UPDATE_TEMPLATE", payload: { text: "one" } })
        
        // dispatch({ type: "UPDATE_TEMPLATE", payload: { text: "two" } })
        // dispatch({ type: "UPDATE_TEMPLATE", payload: { text: "three" }})
        // dispatch({ type: "UPDATE_TEMPLATE", payload: { text: "four" } })
    }
}



