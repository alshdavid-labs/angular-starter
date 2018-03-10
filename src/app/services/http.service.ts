import { Injectable } from '@angular/core';
import { constants } from '@app/app.constants'

@Injectable()
export class HttpService {

    get({ endpoint = '', headers = {}, url = constants.http.defaultApi } = {}): Promise<any> {
        return this.fetchCreator(url + endpoint, {
            method: 'GET',
            headers: { ...headers }
        });
    }

    post({ endpoint = '', body = {}, headers = {}, url = constants.http.defaultApi } = {}): Promise<any> {
        return this.fetchCreator(url + endpoint, {
            method: 'POST',
            body: body,
            headers: { ...headers }
        });
    }

    put({ endpoint = '', body = {}, headers = {}, url = constants.http.defaultApi } = {}): Promise<any> {
        return this.fetchCreator(url + endpoint, {
            method: 'PUT',
            body: body,
            headers: { ...headers }
        });
    }

    patch({ endpoint = '', body = {}, headers = {}, url = constants.http.defaultApi } = {}): Promise<any> {
        return this.fetchCreator(url + endpoint, {
            method: 'PATCH',
            body: body,
            headers: { ...headers }
        });
    }

    delete({ endpoint = '', headers = {}, url = constants.http.defaultApi } = {}): Promise<any> {
        return this.fetchCreator(url + endpoint, {
            method: 'DELETE',
            headers: { ...headers }
        });
    }

    async fetchCreator(url, options) {
        if (options.body) {
            options.headers['content-type'] = 'application/json';
            options.body = JSON.stringify(options.body);
        }

        //options.credentials = 'same-origin';

        let request = await fetch(url, options);

        let __meta__ = {
            status: request.status,
            message: request.statusText,
            url: url
        };

        let response = {
            __meta__,
            body: undefined
        };

        if (request.headers.get('content-type').includes('application/json')) {
            response.body = await request.json();
        } else {
            response.body = await request.text();
        }

        if (__meta__.status <= 199 || __meta__.status >= 300) {
            throw response;
        }

        return response;
    }

}
