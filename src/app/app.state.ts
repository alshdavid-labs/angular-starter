import { ActionReducerMap } from '@ngrx/store'
import { storeStash } from "./store"
import { State } from "./models"

export const state: ActionReducerMap<State> = {
    config: storeStash.reducers.config.configReducer,
}