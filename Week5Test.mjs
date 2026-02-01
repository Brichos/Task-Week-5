import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { multiply, formatName } from './Week5.mjs';

//Calculator tests
describe('multiply()', () => {
    //Testing with positive numbers
    test('2 * 3 is equal to 6', () => {
        assert.equal(multiply(2, 3), 6);
    });
    
    test('6 * 7 is equal to 42', () => {
        assert.equal(multiply(6, 7), 42);
    });


 //Testing with zero
test('2 * 0 is equal to 0', () => {
        assert.equal(multiply(2, 0), 0);
    });
    
    test('0 * 10 is equal to 0', () => {
        assert.equal(multiply(0, 10), 0);
    });
 //Testing with negative numbers
 test('-3 * 4 is equal to -12', () => {
        assert.equal(multiply(-3, 4), -12);
    });
    
    test('-3 * -4 is equal to 12', () => {
        assert.equal(multiply(-3, -4), 12);
    });
});

//String Formatter tests
describe('formatName()', () => {
    test('formats "John" "Smith" as "Smith, John"', () => {
        assert.equal(formatName('John', 'Smith'), 'Smith, John');
    });

    test('handles extra spaces', () => {
        assert.equal(formatName('  John  ', '  Smith  '), 'Smith, John');
    });
    
    });
