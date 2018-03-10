import { Component, OnInit } from '@angular/core';
import { ItemsService } from '@services'

@Component({
    selector: 'app-root',
    template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
    constructor(
        private itemsService: ItemsService
    ) { }

    ngOnInit() { 
        this.itemsService.start()
    }
}
