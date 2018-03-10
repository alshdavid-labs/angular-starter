import { createSelector, createFeatureSelector } from "@ngrx/store"
import { Config } from "@models"

export const config = createFeatureSelector('config')

export const getUrl = createSelector(config,
    (state: Config) => state.url)

export const getApi = createSelector(config,
    (state: Config) => state.api)

export const getLoggedIn = createSelector(config,
    (state: Config) => state.logged_in)

export const getAuthorization = createSelector(config,
    (state: Config) => state.authorization)