import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template } from '../../models'

import { templateActions } from './template.actions';
import { templateReducer } from './template.reducer';

describe('Application Config Editor', () => {
    it('Update Reducer', () => {
        let payload = {
            text: "my life got flipped, turned upside down"
        }
        const value = templateReducer(new Template(), templateActions.update(payload))
        
        expect(JSON.stringify(value))
        .toBe(JSON.stringify({
            text: "my life got flipped, turned upside down"
        }))
    })
});