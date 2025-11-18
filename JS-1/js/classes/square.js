class Square extends Rectangle {
    constructor(width, left, top, bg) {
        super(width, width, left, top, bg);
    }
}

const sq1 = new Square(55, 100, 400, 'red');
sq1.draw();