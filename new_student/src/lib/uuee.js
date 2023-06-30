const Person = require("./person.js");
const Human = require("./human.js");

class UuEE extends Person {
    constructor(owner, state, uid) {
        super(state, uid);
        this.owner = owner;
        
        if(!(owner instanceof Human)){
            throw new Error("Owner is not instance of Human!");
        }
    }
    sayHello(caller){
           if(caller === this.owner){
               return `Hello ${this.owner.getName()}`;
           } else {
               return "No!";
           }
    }
}

module.exports = UuEE;