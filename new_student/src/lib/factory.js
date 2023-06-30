const warehouse = require("./warehouse.js");
const Car = require("./car.js");

class Factory {
    constructor(energy){
        this.energy = energy;
    }
    getWarehouse() {
        return warehouse;
    }
    produceCar(color =  "red", wheels = 4, engine = false) {
        if(this.energy >= 2) {
            let car = new Car(color, wheels, engine);
            this.getWarehouse().createdCars.push(car);
            this.energy -= 2;
        } else {
            return null;
        }
    }
    addEnergyPower(value = 0) {
        this.energy += value;
    }
    changeCarColor(car, newColor = "blue") {
        if(this.energy >= 1) {
            car.setColor(newColor);
            this.energy -= 1;
        } else {
            return null;
        }
    }
}

module.exports = Factory;