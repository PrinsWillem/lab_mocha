const Room = function (areaSquareMeters) {
    this.areaSquareMeters = areaSquareMeters;
    this.paintProgressSquareMeters = 0;
}

Room.prototype.paint = function () {
    this.paintProgressSquareMeters = 5;
};

module.exports = Room;