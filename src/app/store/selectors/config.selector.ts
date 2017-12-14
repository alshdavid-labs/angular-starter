import { createSelector, createFeatureSelector } from "@ngrx/store"
import * as fromModels from "../../models"

export const getConfig = createFeatureSelector('config')

export const getUrl = createSelector(getConfig, 
    (state:fromModels.Config) => state.url)

export const getApi = createSelector(getConfig, 
    (state:fromModels.Config) => state.api)

export const getLoggedIn = createSelector(getConfig, 
    (state:fromModels.Config) => state.logged_in)

export const getAuthorization = createSelector(getConfig, 
    (state:fromModels.Config) => state.authorization)