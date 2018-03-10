import { Params } from '@angular/router'
import { Item } from './index'

export class Config {
    url: string = ""
    api: string = ""
    logged_in: boolean = false
    authorization: string = ""
}

export class State {
    routerReducer: any
    config = new Config()
    items: Array<Item> = []
}
