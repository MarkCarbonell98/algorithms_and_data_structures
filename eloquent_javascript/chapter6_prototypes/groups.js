
class Group {
    constructor() {
        this.members = []
    }

    has(item) {
        return this.members.includes(item) 
    } 

    add(item) {
        if(!this.has(item)) {
            this.members.push(item)
        }
    }

    delete(item) {
        const index = this.members.indexOf(item)
        if(index !== -1) {
            this.members.splice(index, 1)
        }
    }

    static from(iterable) {
        const newGroup = new Group()
        for(const item of iterable) {
            if(!newGroup.has(item)) {
                newGroup.add(item)
            }
        }
        return newGroup
    }

    [Symbol.iterator]() {
        return new GroupIterator(this)
    }

    // or better
    * [Symbol.iterator]() {
        Group.prototype[Symbol.iterator] = function * () {
            for(let i = 0; i < this.members.length; i++) {
                yield this.members[i]
            }
        }
    }
}
class GroupIterator{
    constructor(group) {
        this.group = group
        this.index = 0
    }

    next() {
        if(this.index > this.group.members.length) return undefined
        if(this.index === this.group.members.length) return{done: true}
        const result = {value: this.group.members[this.index], done: false}
        this.index++;
        return result
    }
}

const group = Group.from([10,20])
console.log(group.has(10))
console.log(group.has(30))
group.add(10)
console.log(group.has(10))
group.delete(10)
console.log(group.has(10))

for(let value of Group.from(['a', 'b', 'c', 'd'])) console.log(value)
const group2 = Group.from([1,2,3])
const group2Iterator = new GroupIterator(group2)
console.log(group2Iterator.next())
console.log(group2Iterator.next())
console.log(group2Iterator.next())
console.log(group2Iterator.next())

const map = {one: true, hasOwnProperty: true}
console.log(Object.hasOwnProperty.call(map, 'one'))