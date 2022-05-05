const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const Paint = require('../paint.js');
const exp = require('constants');

describe('Decorator', function () {

    let decorator1;
    let paintBucket1;
    let paintBucket2;
    let paintBucket3;
    let paintBucket4;
    let room1;

    beforeEach(function () {
        decorator1 = new Decorator();
        paintBucket1 = new Paint(10);
        paintBucket2 = new Paint(5);
        paintBucket3 = new Paint(10);
        paintBucket4 = new Paint(0);
        room1 = new Room(20);
        room2 = new Room(15);
    });

    it('start with an empty paint stock', function () {
        const expected = [];
        assert.deepStrictEqual(expected, decorator1.paintStock);
    });
    it('be able to add a can of paint to paint stock', function () {
        decorator1.addPaintToStock(paintBucket1);
        decorator1.addPaintToStock(paintBucket2);
        decorator1.addPaintToStock(paintBucket3);
        const expected = 3;
        assert.deepStrictEqual(expected, decorator1.paintStock.length);
    });
    it('be able to calculate total litres paint it has in stock', function () {
        decorator1.addPaintToStock(paintBucket1);
        decorator1.addPaintToStock(paintBucket2);
        decorator1.addPaintToStock(paintBucket3);
        const expected = 25;
        assert.deepStrictEqual(expected, decorator1.calculateLitersOfPaint()); 
    });
    it('be able to calculate whether is has enough paint to paint a room', function () {
        decorator1.addPaintToStock(paintBucket1);
        decorator1.addPaintToStock(paintBucket2);
        decorator1.addPaintToStock(paintBucket3);
        const expected = true;
        assert.deepStrictEqual(expected, decorator1.calculateIfHasEnoughPaint(room1))
    });
    it('be able to calculate whether is has not enough paint to paint a room', function () {
        decorator1.addPaintToStock(paintBucket1);
        decorator1.addPaintToStock(paintBucket2);
        const expected = false;
        assert.deepStrictEqual(expected, decorator1.calculateIfHasEnoughPaint(room1))
    });
    it('be able to paint room if has enough paint in stock', function () {
        decorator1.addPaintToStock(paintBucket1);
        decorator1.addPaintToStock(paintBucket2);
        decorator1.addPaintToStock(paintBucket3);
        const expected = true;
        assert.deepStrictEqual(expected, decorator1.isPainted(room1))
    });
    it('should be able to decrease amount of paint in stock when painting a room', function() {
        decorator1.addPaintToStock(paintBucket1);
        decorator1.addPaintToStock(paintBucket2);
        decorator1.addPaintToStock(paintBucket3);
        const expected = 5;
        assert.deepStrictEqual(expected, decorator1.decreaseAmountOfPaint(room1))
    });
    it('should be able to remove empty paint cans from stock', function () {
        decorator1.addPaintToStock(paintBucket1);
        decorator1.addPaintToStock(paintBucket2);
        decorator1.addPaintToStock(paintBucket4);
        decorator1.removeEmptyPaintBuckets();
        const expected = 2;
        assert.deepStrictEqual(expected, decorator1.paintStock.length)
    });
});
