class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
    }
    fullName() {
        return `You are called ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    static enrollStudents() {
        return "Enrolling students";
    }
}

console.log(Student.enrollStudents());

// class Student {
//     constructor(firstName, lastName, year) {
//         console.log(firstName, lastName, year)
//         let {first: f, last: l, grade:y}= {firstName, lastName, year};
//         console.log(f, l, y)
//         console.log(f, last, grade)
//     }
// }

let me = new Student("Marcos", "Carbonell", 20);
// console.log(me.f);
// console.log(me.l);
// console.log(me.y);
console.log(me.firstName);
console.log(me.lastName);
console.log(me.year);
console.log(me.fullName());
console.log(me.markLate());
console.log(me.markLate());
console.log(me.markLate());
console.log(me.markLate());
console.log(me.markLate());
// console.log(me.first);
// console.log(me.last);
// console.log(me.grade);


let obj = {
    first: "Marcos",
    last: "Carbonell",
    // age: 20,
    // grade: true
}

let {age, grade} = {age: 100, grade: 12341234}; 
console.log(obj, age, grade)