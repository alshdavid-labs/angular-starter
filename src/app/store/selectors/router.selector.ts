import { createSelector, createFeatureSelector } from "@ngrx/store"
import * as fromModels from "@models"

export const routerReducer = createFeatureSelector('routerReducer')

export const routerUpdates = createSelector(routerReducer, (state) => state)
