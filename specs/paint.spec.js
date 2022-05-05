const { deepStrictEqual } = require('assert');
const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function () {

    let paintBucket1;

    beforeEach(function () {
        paintBucket1 = new Paint(5);
    });

    it('have a number of litres of paint', function() {
        const expected = 5;
        assert.deepStrictEqual(expected, paintBucket1.litresOfPaint);
    });
    it('should not start empty', function () {
        const expected = false;
        assert.deepStrictEqual(expected, paintBucket1.isEmpty());
    });
    it('be able to check if it is empty', function () {
        paintBucket1.empty();
        const expected = true;
        assert.deepStrictEqual(expected, paintBucket1.isEmpty());
    });
    it('be able to empty itself of paint', function () {
        paintBucket1.empty();
        const expected = 0;
        assert.deepStrictEqual(expected, 0);
    });
});
