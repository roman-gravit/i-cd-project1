import {sum} from "./sum.js";

describe('sum', function () {
    test('positive', () => {
        expect(sum(5, 5)).toBe(10);
    })

    test('negative', () => {
        expect(sum(-5, -5)).toBe(-10);
    })
});