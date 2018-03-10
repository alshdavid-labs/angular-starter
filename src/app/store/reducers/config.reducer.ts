import { config } from "@store/actions"
import { Config, Action } from "@models"


export const actions = {}
export const configReducer = (state: Config = new Config(), action = new Action()) =>
    actions[action.type]
        ? actions[action.type](state, action.payload)
        : state

// UPDATE_CONFIG Reducer
actions[config.UPDATE_CONFIG] = (state, payload: Config) => {
    return {
        ...state,
        ...payload
    }
}