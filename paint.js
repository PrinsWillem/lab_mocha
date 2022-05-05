const Paint = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint;
}

Paint.prototype.isEmpty = function() {
    return !this.litresOfPaint;
};

Paint.prototype.decreaseAmountOfPaint = function (litres) {
    this.litresOfPaint -=litres;
}

Paint.prototype.empty = function() {
    this.litresOfPaint = 0;
}

module.exports = Paint;