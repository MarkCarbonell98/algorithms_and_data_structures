
class Vec {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.length = Math.sqrt(this.x**2 + this.y**2);
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

class Group {
    constructor() {
        this.values = []
    }

    add(el) {
        if(!this.values.includes(el)) this.values.push(el)
    }

    delete(el) {
        const index = this.values.indexOf(el)
        if(index !== - 1) {
            this.values.splice(index, 1)
        }
    }

    has(el) {
        return this.values.includes(el)
    }

    static from(iter) {
        if(iter == null) return undefined
        if(typeof iter[Symbol.iterator] === 'function') {
            const newGroup = new Group()
            for(const el of iter) {
                newGroup.add(el)
            }
            return newGroup
        }
    }
}

class GroupIterator {
    constructor(group) {
        this.value = []
        this.group = group
    }


}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false



