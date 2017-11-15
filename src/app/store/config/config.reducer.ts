import { Store, Config } from '../../models'
let a = {}

export const configReducer = (state:Config = new Config(), action) => {
    //If action doesn't exist, bounce
    if (!a[action.type]) return state
     
    //Create New State Object
    let _state = Object.assign({}, state)
    return a[action.type](_state, action.payload)
}

a["UPDATE_CONFIG"] = function(state, payload){
    state = { ...state, payload }
    return payload
}
