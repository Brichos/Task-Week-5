import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { multiply } from './Week5.mjs';

//Calculator tests
describe('multiply()', () => {
    //Testing with positive numbers
    test('2 * 3 is equal to 6', () => {
        assert.equal(multiply(2, 3), 6);
    });
    
    test('6 * 7 is equal to 42', () => {
        assert.equal(multiply(6, 7), 42);
    });
})

 //Testing with zero

 //Testing with negative numbers