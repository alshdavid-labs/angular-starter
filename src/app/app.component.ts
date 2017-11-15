import { Component, HostListener, OnInit } from '@angular/core';
import { store } from './store'

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet> 
    `
})
export class AppComponent implements OnInit {
    @HostListener('window:redux_update', ['$event'])
    reduxListener(event) { setTimeout(_=>{},0) }

    constructor() {
        store.getState()
    }
    ngOnInit() { }
}



