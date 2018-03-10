import { items } from "@store/actions"
import { Item, Action } from "@models"

export const actions = {}
export const itemsReducer = (state: Array<Item> = [], action = new Action()) =>
    actions[action.type]
        ? actions[action.type](state, action.payload)
        : state

// ADD_ITEM Reducer
actions[items.ADD_ITEM] = (state, payload: Item) => {
    const newState = [...state]
    newState.push(payload)
    return newState
}