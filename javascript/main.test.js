const { test, expect } = require('@jest/globals')
const calc = require('./main.js')

test('adds 1 + 2 to equal 3', () => {
    expect(calc.add(1,2)).toBe(3);
})

test('multiplies 2 * 3 to equal 6', () => {
    expect(calc.multiply(2,3)).toBe(6);
})

test('subtracts 2 - 1 to equal 1', () => {
    expect(calc.subtract(2,1)).toBe(1);
})

test('divides 6 / 2 to equal 3', () => {
    expect(calc.divide(6,2)).toBe(3);
})

test('modulo 12 % 5 to equal 2', () => {
    expect(calc.modulo(6,4)).toBe(2);
})
