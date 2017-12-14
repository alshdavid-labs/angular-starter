export class Config {
    url:string = ""
    api:string = ""
    logged_in:boolean = false
    authorization:string = ""
}

export class State {
    config = new Config()
}