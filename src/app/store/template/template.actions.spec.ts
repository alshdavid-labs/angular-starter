import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { templateActions } from './template.actions';

describe('Application Template Editor', () => {
    it('Update', () => {
        const value = templateActions.update("Julie is a cat")
        
        expect(JSON.stringify(value))
        .toBe(JSON.stringify({
            type: "UPDATE_TEMPLATE",
            payload: "Julie is a cat"
        }))
    })
});