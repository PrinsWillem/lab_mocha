const Decorator = function () {
    this.paintStock = [];
};

Decorator.prototype.addPaintToStock = function (paint) {
    this.paintStock.push(paint)
};

Decorator.prototype.calculateLitersOfPaint = function () {
    litersOfPaintInStock = 0;
    for (paint of this.paintStock) {
        litersOfPaintInStock += paint.litresOfPaint;
    }

    return litersOfPaintInStock;
}

Decorator.prototype.calculateIfHasEnoughPaint = function (room) {
    return this.calculateLitersOfPaint() >= room.areaSquareMeters;
};

Decorator.prototype.decreaseAmountOfPaint = function (room) {
    if (this.calculateIfHasEnoughPaint(room) === true){
        const litersRemainingAfterPaint = this.calculateLitersOfPaint() - room.areaSquareMeters;
        return litersRemainingAfterPaint;
    };

}

Decorator.prototype.isPainted = function (room) {
    if(this.calculateIfHasEnoughPaint(room)) {
        return true;
    }

    room.paint();
    this.decreaseAmountOfPaint(room);
}


Decorator.prototype.removeEmptyPaintBuckets = function () {
    const newPaintStock = [];

    for (paint of this.paintStock) {
        if(!paint.isEmpty()) {
            newPaintStock.push(paint)
        }
    }

    this.paintStock = newPaintStock;
};


module.exports = Decorator;