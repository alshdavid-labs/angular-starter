import { ActionReducerMap } from '@ngrx/store'
import { routerReducer } from '@ngrx/router-store'
import { actions, reducers, selectors } from "@store"
import { State } from "@models"

export const state: ActionReducerMap<State> = {
    routerReducer,
    config: reducers.config.configReducer,
    items: reducers.items.itemsReducer
}
