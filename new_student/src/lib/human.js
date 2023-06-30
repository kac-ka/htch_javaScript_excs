const Person = require("./person.js");

class Human extends Person {
    constructor(name, age, state, uid) {
        super(state, uid);
        this.name = name;
        this.age = age;   
    }
    getName() {
        return this.name;
    }
    sayHello() {
        return `Hello from ${this.name}`;
    }
}

module.exports = Human;