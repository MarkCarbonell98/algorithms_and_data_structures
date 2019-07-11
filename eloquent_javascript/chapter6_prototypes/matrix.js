class Matrix {
    constructor(width, height, el = (x,y) => undefined) {
        this.width = width
        this.height = height
        this.content = []
        for(let y = 0; y < height; y++) {
            for(let x = 0; x < width; x++) {
                this.content[y * width + x] = el(x,y)
            }
        }
    }

    get(x,y) {
        return this.content[y * this.width + x]
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0
        this.y = 0
        this.matrix = matrix
    }

    next() {
        if (this.y === this.matrix.height) return {done: true}
        let value = {x: this.x, y: this.y, value: this.matrix.get(this.x, this.y)}
        this.x++
        if(this.x === this.matrix.width) {
            this.x = 0;
            this.y++
        }
        return {value, done: false}
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this)
}

let matrix = new Matrix(2,2, (x,y) => `value ${x}, ${y}`)
for(let {x,y,value} of matrix) { //because the iterator of matrix is defined
    console.log(x, y, value)
}

class SymmetricMatrix extends Matrix {
    constructor(size, el = (x,y) => undefined) {
        super(size, size, (x,y) => {
            if(x < y) return el(y,x)
            return el(x,y)
        });
    }

    set(x, y, value) {
        super.set(x,y,value);
        if(x != y) {
            super.set(y, x, value)
        }
    }
}

const symmetrixMatrix = new SymmetricMatrix(5, (x,y) => `${x}, ${y}`)
console.log(symmetrixMatrix.get(2,3))
console.log(symmetrixMatrix.get(3,2))