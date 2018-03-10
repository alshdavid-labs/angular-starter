import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store'

@Component({
    selector: 'view-about',
    templateUrl: './about.view.html',
    styleUrls: ['./about.view.scss']
})
export class AboutView implements OnInit {
    private subscriptions = []

    constructor(
        private store: Store<any>,
    ) { }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe())
    }

    ngOnInit() {
        
    }
}
