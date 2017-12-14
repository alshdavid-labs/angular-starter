import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store'

import { getConfig, getLoggedIn } from "../../store/selectors/config.selector"
import * as fromConfigActions from "../../store/actions/config.action"

@Component({
  selector: 'view-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {
  public _state
  public state

  constructor(
    public store: Store<any>
  ) { }

  ngOnDestroy(){
    this._state.unsubscribe();
  }

  ngOnInit() {
    this._state = this.store.subscribe(state => this.state = state)

    this.store.select(getLoggedIn).subscribe(x => console.log("log", x))

    this.store.dispatch( new fromConfigActions.UpdateConfig({
      logged_in: true
    }) )
  }

}
