
const nb : number = 42;

class House
{
    color: string;
    nbPiece: number;

    constructor(nbPiece: number, color: string = 'Blanc') {
        this.color = color;
        this.nbPiece = nbPiece;
    }
}

const h1 : House = new House(42, 'Rouge');

