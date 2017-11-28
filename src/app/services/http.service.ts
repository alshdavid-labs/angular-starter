import { Injectable } from '@angular/core';
import { StoreService } from './store.service'

@Injectable()
export class HttpService {

    constructor(
        public appStore: StoreService
    ){}

    store = this.appStore.store

    get(endpoint, headers?){
        headers = this.setupHeaders(headers)
        return xhr(this.store.getState().config.url + endpoint, {
            method: "GET",
            headers: headers
        })
    }

    post(endpoint, body?, headers?){
        headers = this.setupHeaders(headers)

        return xhr(this.store.getState().config.url + endpoint, {
            method: "POST",
            body: body,
            headers: headers
        })
    }

    put(endpoint, body?, headers?){
        headers = this.setupHeaders(headers)
        return xhr(this.store.getState().config.url + endpoint, {
            method: "PUT",
            body: body,
            headers:headers
        })
    }

    patch(endpoint, body?, headers?){
        headers = this.setupHeaders(headers)
        return xhr(this.store.getState().config.url + endpoint, {
            method: "PATCH",
            body: body,
            headers: headers
        })
    }

    delete(endpoint, headers?){
        headers = this.setupHeaders(headers)
        return xhr(this.store.getState().config.url + endpoint, {
            method: "DELETE",
            headers: headers
        })
    }

    setupHeaders(headers?){
        let res = {}
        if (this.store.getState().config.authorization) {
            res['authorization'] = this.store.getState().config.authorization
        }
        for (const header in headers) {
            if (headers[header]) {
                res[header] = headers[header]
            }
        }
        return  res
    }

}


function xhr(url, options) {
    return new Promise(function(response, reject) {
        let xmlHttp = new XMLHttpRequest()
        xmlHttp.onreadystatechange = function() {
            let __meta__ = {
                status: xmlHttp.status,
                statusText: xmlHttp.statusText,
                url: url
            }

            let responseObj = {}
            let responseText:any = xmlHttp.responseText

            if (responseText) {
                responseObj = JSON.parse(xmlHttp.responseText)
            }

            responseObj['__meta__'] = __meta__

            if (xmlHttp.readyState == 4 && (xmlHttp.status >= 200 && xmlHttp.status <= 299)) {
                response(responseObj)
            }
            if (xmlHttp.readyState == 4 && (xmlHttp.status <= 199 || xmlHttp.status >= 300)) {
                reject(responseObj)
            }
        }
        xmlHttp.open(options.method.toUpperCase(), url, true)

        for (let header in options.headers) {
            xmlHttp.setRequestHeader(header, options.headers[header])
        }

        if (options.body) xmlHttp.setRequestHeader("Content-Type", "application/json")
        xmlHttp.send(JSON.stringify(options.body || {}))
    })
}
