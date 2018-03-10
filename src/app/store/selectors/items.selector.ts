import { createSelector, createFeatureSelector } from "@ngrx/store"
import * as fromModels from "@models"

export const getItems = createFeatureSelector('items')

export const getAllItems = createSelector(getItems,
    (state: Array<fromModels.Item>) => state)
