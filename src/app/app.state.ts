import { ActionReducerMap } from '@ngrx/store'
import * as fromReducers from "./store/reducers"
import * as fromModels from "./models"

export const State: ActionReducerMap<fromModels.State> = {
    config: fromReducers.configReducer
}