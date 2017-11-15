import { Config } from "../../models"

const update = (payload) => {
    return {
        type: "UPDATE_CONFIG",
        payload: payload
    }
}




export const configActions = {
    update
}