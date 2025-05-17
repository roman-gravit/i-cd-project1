import {minus} from "./minus.js";

describe('minus', function () {
		test('positive', () => {
				expect(minus(10, 2)).toBe(8);
		})

		test('negative', () => {
				expect(minus(8, 2)).not.toBe(5);
		})
});