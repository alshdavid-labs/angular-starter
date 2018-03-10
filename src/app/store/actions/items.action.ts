import { Action } from '@ngrx/store'
import { Item } from '@models'

export const ADD_ITEM = '[Items] Add Item'

export class AddItem implements Action {
    readonly type = ADD_ITEM

    constructor(
        public payload:Item
    ){ }
}