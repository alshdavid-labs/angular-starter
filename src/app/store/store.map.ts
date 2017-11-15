import { ReducersMapObject } from 'redux'
import { templateReducer } from './template/template.reducer'
import { configReducer } from './config/config.reducer'

export let reducersMap: ReducersMapObject = {
    config: configReducer,
    template: templateReducer
}