export class Action {
    constructor(
        type?,
        payload?
    ) {
        this.type = type || '',
        this.payload = payload || undefined
    }
    type: string
    payload: any
}