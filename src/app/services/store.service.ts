import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { createStore, combineReducers, ReducersMapObject } from 'redux'
import { templateReducer } from '../store/template/template.reducer'
import { configReducer } from '../store/config/config.reducer'
declare let window:any


@Injectable()
export class StoreService {

  constructor() { 
    window['store'] = this.store
  }

  public reducersMap: ReducersMapObject = {
    config: configReducer,
    template: templateReducer
  }
 
  public store = createStore(
    combineReducers(this.reducersMap),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  getState(){
    return this.store.getState()
  }

  dispatch(action){
    return this.store.dispatch(action)
  }

  subscribe(sub){
      return this.store.subscribe(sub)
  }
  
}


//export const store:any = window['store'] || createStore(()=>{})


export const store:any = () => {
  return window['store']
}

export const store2 = {
  dispatch: function(action){
    console.log(window['store'])
    window['store'].dispatch(action)
  },
  getState: function(){
    return window['store'].getState()
  }
}

export function dispatch(action){
  window['store'].dispatch(action)
}
