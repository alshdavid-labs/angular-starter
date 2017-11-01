import { Injectable } from '@angular/core';
import { AppService } from './app.service'

@Injectable()
export class HttpService {
    constructor(
        private app: AppService
    ) {}

    get(endpoint, headers?){
        let options = this.setup(headers)
        options.method = "GET"

        return xhr(endpoint, options)
    }

    post(endpoint, headers?){
        let options = this.setup(headers)
        options.method = "POST"

        return xhr(endpoint, options)
    }

    setup(headers?){
        let options = {
            headers: {},
            method: "GET"
        }
        if (this.app.settings.authorization) {
            options.headers['authorization'] = this.app.settings.authorization
        }
        for (const header in headers) {
            options.headers[header] = headers[header]
        }
        return options
    }
    
}

function xhr(url, options) {
    let __meta__ = {
        status: "",
        statusText: "",
        url: ""
    }

    let request = {
        method: options.method.toUpperCase() || "GET",
        headers: {},
        body: JSON.stringify(options.body)
    }

    request.headers["Content-Type"] = "application/json"

    for (const header in options.headers) {
        request.headers[header] = options.headers[header]
    }

    return fetch(url, request)
        .then((res) => {
            console.log(res)
            if ((res.status >= 200 && res.status <= 299)) {
                __meta__.status = res.status.toString()
                __meta__.statusText = res.statusText
                __meta__.url = res.url
                return res.json()
            } else {
                throw { message: res.statusText } 
            }
        })
        .then(res => {
            res.__meta__ = __meta__
            return res
        })
        .catch(err => {
            console.log({ url, options, err })
            throw { message: err, _meta: __meta__ }
        })
}