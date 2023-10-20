var nb = 42;
var House = /** @class */ (function () {
    function House(nbPiece, color) {
        if (color === void 0) { color = 'Blanc'; }
        this.color = color;
        this.nbPiece = nbPiece;
    }
    return House;
}());
var h1 = new House(42, 'Rouge');
