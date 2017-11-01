import { Config } from '../app.config'
const config = Config()

export const Settings = () => ({
    jsonpen: {
        url: config.jsonpen.url,
        pen: config.jsonpen.pen
    },
    authorization: ""
})