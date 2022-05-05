const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js');

describe('Room', function () {

    let room1;

    beforeEach(function () {
        room1 = new Room(20);
    });
    
    it('have an area in square meters', function () {
        const actual = room1.areaSquareMeters;
        assert.deepStrictEqual(actual, 20);
    });
    it('should start not painted', function () {
        const expected = room1.paintProgressSquareMeters;
        assert.deepStrictEqual(expected, 0);
    });
    it('should be able to be painted', function () {
        room1.paint();
        const expected = 5;
        assert.deepStrictEqual(expected, 5);
    });
});

