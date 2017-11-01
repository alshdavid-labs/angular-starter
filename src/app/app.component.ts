import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service'
import { HttpService } from './services/http.service'

@Component({
    selector: 'app-root',
    template: `
        <main>
            <router-outlet></router-outlet> 
        </main>
    `
})
export class AppComponent implements OnInit {

    constructor(
        private app: AppService,
        private http: HttpService
    ) {}

    async ngOnInit() {
        try {
            let url = this.app.settings.jsonpen.url + "b/" + this.app.settings.jsonpen.pen
            let data = await this.http.get(url)
            this.app.store = { ...this.app.store, ...data }
        } catch (err) {

        } 
    }

}



