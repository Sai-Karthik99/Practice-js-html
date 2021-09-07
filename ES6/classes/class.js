class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getFullName() {
        return this.fname + " " + this.lname;
    }
}

const allPerson = new Person('Nazriya', 'Fahadh', 30);
console.log('First name', allPerson.fname);
console.log("Last name", allPerson.lname);
console.log("Age", allPerson.age);

const fullName = person.getFullName();
console.log("full name", fullName);





