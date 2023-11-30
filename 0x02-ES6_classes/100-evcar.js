// 100-evcar.js
import Car from './10-car.js';

/**
 * Represents an electric car.
 */
export default class EVCar extends Car {
  /**
   * Creates a new EVCar instance.
   * @param {String} brand - The brand of the electric car.
   * @param {String} motor - The motor of the electric car.
   * @param {String} color - The color of the electric car.
   * @param {String} range - The range of the electric car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Getter for the range of the electric car.
   * @returns {String} - The range of the electric car.
   */
  get range() {
    return this._range;
  }

  /**
   * Clones the EVCar object, returning a Car instance for privacy reasons.
   * @returns {Car} - A new Car instance.
   */
  cloneCar() {
    const { _brand, _motor, _color } = this;
    return new Car(_brand, _motor, _color);
  }
}
