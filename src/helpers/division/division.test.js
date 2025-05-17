import {division} from "./division.js";

describe('division', function () {
    test('positive', () => {
        expect(division(10, 2)).toBe(6);
    })

    test('negative', () => {
        expect(division(10, 5)).not.toBe(5);
    })
});