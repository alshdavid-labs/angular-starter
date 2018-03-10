import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store'
import { selectors, actions } from "@store"
import { ItemsService } from "@services"

@Component({
    selector: 'view-home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {
    private subscriptions = []
    private state
    public items

    constructor(
        private store: Store<any>,
        public itemsService: ItemsService
    ) { }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe())
    }

    ngOnInit() {
        this.subscriptions.push(
            this.store
                .subscribe(state => this.state = state))

        this.subscriptions.push(
            this.store
                .select(selectors.items.getAllItems)
                .subscribe(items => this.items = items)
        )
    }
}
