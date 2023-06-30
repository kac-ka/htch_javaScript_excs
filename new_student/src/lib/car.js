class Car {
    constructor(color, wheels, engine) {
        this.color = color;
        this.wheels = wheels;
        this.engine = engine;
    }
    getColor() {
        return this.color;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    getWheels() {
        return this.wheels;
    }
    setWheels(newWheelsCount) {
        this.wheels = newWheelsCount;
    }
    getEngine() {
        return this.engine;
    }
    setEngine(newEngine) {
        this.engine = newEngine;
    }
}

module.exports = Car;