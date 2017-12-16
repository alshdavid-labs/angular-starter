import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store'

import { storeStash } from "../../store"


@Component({
  selector: 'view-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {
  public _state
  public _loggedIn
  public state

  constructor(
    public store: Store<any>
  ) { }

  ngOnDestroy(){
    this._state.unsubscribe()
    this._loggedIn.unsubscribe()
  }

  ngOnInit() {
    this._state = this.store
      .subscribe(state => this.state = state)

    this._loggedIn = this.store
      .select(storeStash.selectors.config.getLoggedIn)
      .subscribe(x => console.log("log", x))

    this.store
      .dispatch(new storeStash.actions.config.UpdateConfig({
        logged_in: true
      }))
  }

}
