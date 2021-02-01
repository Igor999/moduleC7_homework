// const { tsExternalModuleReference } = require('@babel/types');
import {multiply} from './index.js';

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// }); 

// const multiply = require("./index.js");

// test("multiply 1 * 0 to equal 1", () => {
//     const result = multiply(a: 1, b: 0);
//     expect(result).toBe(0);
// });

xdescribe(
    "test multiply", () => {
        it("multiply 1 * 0 to equal 0", () => {
            const result = multiply(1, 0);
            expect(result).toBe(0);
        }),
        it("multiply 1 * 1 to equal 1", () => {
            const result = multiply(1, 1);
            expect(result).toBe(1);
        });
});