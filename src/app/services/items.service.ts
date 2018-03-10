import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { selectors, actions } from "@store"
import { Item } from '@models'
import { interval } from 'rxjs/observable/interval';

@Injectable()
export class ItemsService {
    private isRunning = false
    private timer = undefined
    private i = 0

    constructor(
        private store: Store<any>
    ) { }

    start() {
        if (this.isRunning) {
            return
        }
        this.isRunning = true
        this.timer = interval(1000)
            .subscribe(
                _ => this.store
                    .dispatch(new actions.items.AddItem(new Item(`This is item ${this.i + 1}`)))
            )

        this.store
            .select(selectors.items.getAllItems)
            .subscribe(items => this.i = items.length)

    }

    stop() {
        this.isRunning = false
        this.timer.unsubscribe()
    }

}
