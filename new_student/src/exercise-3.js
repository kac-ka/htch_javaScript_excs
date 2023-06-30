"use strict"

const Person = require("./lib/person"); // create file person.js
const Human = require("./lib/human"); // create file human.js
const UuEE = require("./lib/uuee"); // create file uuee.js



let John = new Human("John", 25);
let Peter = new Human("Peter", 32);
let machine = new UuEE(John);

machine.sayHello(Person); //No!
machine.sayHello(John); //Hello John