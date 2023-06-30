class Person {
    constructor (state = "active", uid = "0-0") {
        this.state = state;
        this.uid = uid;
        Person.countOfPersons++;
    }
    getState(){
        return this.state;
    }
    setState(value){
        value = value.toString().trim().toLowerCase();
        if(value.localeCompare("active") === 0 || value.localeCompare("inactive") === 0) {
            this.state = value;
        } else {
            throw new Error("Invalid state input");
        }
    }
    getUid(){
        return this.uid;
    }
    static countOfPersons = 0;
    static getCountOfPersons(){
        return Person.countOfPersons;
    }
}

module.exports = Person;
