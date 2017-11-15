import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Config } from '../../models'

import { configActions } from './config.actions';
import { configReducer } from './config.reducer';

describe('Application Config Editor', () => {
    it('Update Reducer', () => {
        let payload = {
            url: "now this is a story",
            authorization: "all about how"
        }
        const value = configReducer(new Config(), configActions.update(payload))
        
        expect(JSON.stringify(value))
        .toBe(JSON.stringify({
            url: "now this is a story",
            authorization: "all about how"
        }))
    })
});