import { Injectable } from '@angular/core';
import { Store, Settings } from '../models'

@Injectable()
export class AppService {
    constructor() {

    }

    public store = Store()
    public settings = Settings()

    reset(){
        this.store = Store()
        this.settings = Settings()
    }
}
