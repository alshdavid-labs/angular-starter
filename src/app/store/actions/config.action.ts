import { Action } from '@ngrx/store'

export const UPDATE_CONFIG = '[Config] Update Configuration'

export class UpdateConfig implements Action {
    readonly type = UPDATE_CONFIG

    constructor(
        public payload:any
    ){ }
}

export type ConfigActions = UpdateConfig