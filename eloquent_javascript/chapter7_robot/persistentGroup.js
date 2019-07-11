class PGroup {
    constructor() {
        this.members = []
    }

    has(item) {
        return this.members.includes(item)
    }

    add(item) {
        const index = this.members.indexOf(item)
        if(index === -1) {
            const newGroup = new PGroup()
            newGroup.members = this.members.map(c => c)
            newGroup.members.push(item)
            return newGroup
        }
    }

    delete(item) {
        const index = this.members.indexOf(item)
        if(index != -1) {
            const newGroup = new PGroup()
            newGroup.members = this.members.filter(c => c !== item)
            return newGroup
        }
    }

    static empty = new PGroup()
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false