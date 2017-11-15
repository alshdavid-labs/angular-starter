import { Store, Template } from '../../models'
let a = {}

export const templateReducer = (state:Template = new Template(), action) => {
    //If action doesn't exist, bounce
    if (!a[action.type]) return state
     
    //Create New State Object
    let _state = Object.assign({}, state)
    return a[action.type](_state, action.payload)
}

a["UPDATE_TEMPLATE"] = function(state:Template, payload){
    return payload
}
