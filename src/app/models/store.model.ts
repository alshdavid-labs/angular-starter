export class Template {
    constructor (text?) {
        this.text = text || "Starting Text"
    }
    text:String
}

export class Config {
    url = "https://api.your.app/"
    authorization = ""
}

export class Store {
    config:Config = new Config()
    template:Template = new Template()
}