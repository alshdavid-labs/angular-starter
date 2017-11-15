export const testReducer = (state = "starting text", action) => {
    if (action.type == "UPDATE_TEST") {
        return action.payload
    }
    return state
}