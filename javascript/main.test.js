const { test, expect } = require('@jest/globals')
const ops = require('./main.js')

test('adds 1 + 2 to equal 3', () => {
    expect(ops.add(1,2)).toBe(3);
})

test('multiplies 2 * 3 to equal 6', () => {
    expect(ops.multiply(2,3)).toBe(6);
})

test('subtracts 2 - 1 to equal 1', () => {
    expect(ops.subtract(2,1)).toBe(1);
})

test('divides 6 / 2 to equal 3', () => {
    expect(ops.divide(6,2)).toBe(3);
})

test('modulo 12 % 5 to equal 2', () => {
    expect(ops.modulo(6,4)).toBe(2);
})