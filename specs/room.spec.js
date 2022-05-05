const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js');

beforeEach(function () {
    room1 = new Room(20);
});

describe('Room', function () {
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

    describe('Paint', function () {
        xit('have a number of litres of paint', function() {

        });
        xit('be able to check if it is empty', function () {

        });
        xit('be able to empty itself of paint', function () {

        });
    });

    describe('Decorator', function () {
        xit('start with an empty paint stock', function () {

        });
        xit('be able to add a can of paint to paint stock', function () {

        });
        xit('be able to calculate total litres paint it has in stock', function () {

        });
        xit('be able to calculate whether is has enough paint to paint a room', function () {

        });
        xit('be able to paint room if has enough paint in stock', function () {

        });
        xit('should be able to decrease amount of paint in stock when painting a room', function() {

        });
        xit('should be able to remove empty paint cans from stock', function () {

        });
    });
});

