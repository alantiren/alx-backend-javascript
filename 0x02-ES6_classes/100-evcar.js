import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    // Create a new instance of Car with the current attributes
    return new Car(this.brand, this.motor, this.color);
  }
}
