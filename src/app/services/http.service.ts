import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { State } from '../models'

@Injectable()
export class HttpService {

    private state:State

    constructor(
        public store: Store<State>
    ){
        store.subscribe(state => this.state = state)
    }

    get(endpoint, headers?):Promise<any>{
        headers = this.setupHeaders(headers)
        return this.xhr(this.state.config.api + endpoint, {
            method: "GET",
            headers: headers
        })
    }

    post(endpoint, body?, headers?):Promise<any>{
        headers = this.setupHeaders(headers)

        return this.xhr(this.state.config.api + endpoint, {
            method: "POST",
            body: body,
            headers: headers
        })
    }

    put(endpoint, body?, headers?):Promise<any>{
        headers = this.setupHeaders(headers)
        return this.xhr(this.state.config.api + endpoint, {
            method: "PUT",
            body: body,
            headers:headers
        })
    }

    patch(endpoint, body?, headers?):Promise<any>{
        headers = this.setupHeaders(headers)
        return this.xhr(this.state.config.api + endpoint, {
            method: "PATCH",
            body: body,
            headers: headers
        })
    }

    delete(endpoint, headers?):Promise<any>{
        headers = this.setupHeaders(headers)
        return this.xhr(this.state.config.api + endpoint, {
            method: "DELETE",
            headers: headers
        })
    }

    setupHeaders = (headers?) => ({ ...headers, ...{ authorization: this.state.config.authorization } })

    async xhr(url, options) {
        if (options.body) options.body = JSON.stringify(options.body)
        options.headers["content-type"] = "application/json"
    
        let request = await fetch(url, options)
        let __meta__ = {
            status: request.status,
            message: request.headers.get("message"),
            url: url
        }
        let response = {
            __meta__,
            body: await request.json()
        }
    
        if (__meta__.status <= 199 || __meta__.status >= 300) {
            throw response
        }
    
        return response
    }

}
