import { createStore, combineReducers } from 'redux'
import { reducersMap } from './store.map'
declare const window

export let store = createStore(
    combineReducers(reducersMap),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    window.dispatchEvent(new CustomEvent('redux_update', {}))
})

window['store'] = store