function Square(width, height) {
    this.getArea = function () {
        return width * height;
    };
}

var figure1 = new Square(20, 40);

function Circle(radius) {
    Square.apply(this, arguments);
    this.getArea = function () {
        return Math.pow(radius, 2) * Math.PI;
    };
}

var circle1 = new Circle(20);

console.log(figure1.getArea());
console.log(circle1.getArea());

function Area() {
    var _figures = [];
    this.addFigure = function (figure) {
        _figures.push(figure);
    };
    this.clear = function () {
        _figures = [];
    };
    Object.defineProperty(this, 'size', {
        get: function () {
            var size=0;
            _figures.forEach(function (element) {
                size += element.getArea();
            });
            return size;
        }
    });
}

var area = new Area();

area.addFigure(figure1);
area.addFigure(circle1);

console.log('size:', area.size);
