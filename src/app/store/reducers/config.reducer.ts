import * as ConfigActions from "../actions/config.action"
import { Config } from "../../models"


export function configReducer(
    state = new Config(),
    action: ConfigActions.ConfigActions
){
    switch (action.type) {
        case ConfigActions.UPDATE_CONFIG: {
            return {
                ...state,
                ...action.payload
            }
        }
    }

    return state
}