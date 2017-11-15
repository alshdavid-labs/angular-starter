import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { configActions } from './config.actions';

describe('Application Config Editor', () => {
    it('Update Action', () => {
        const value = configActions.update("Tiger is a cat")
        
        expect(JSON.stringify(value))
        .toBe(JSON.stringify({
            type: "UPDATE_CONFIG",
            payload: "Tiger is a cat"
        }))
    })
});