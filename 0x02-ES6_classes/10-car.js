// 10-car.js

const CAR_ATTRIBUTES = Symbol('carAttributes');

/**
 * Represents a car.
 */
export default class Car {
  /**
   * Creates a new Car instance.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor of the car.
   * @param {String} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this[CAR_ATTRIBUTES] = {
      _brand: brand,
      _motor: motor,
      _color: color,
    };
  }

  /**
   * Clones the car object.
   * @returns {Car} - A new Car instance.
   */
  cloneCar() {
    const { _brand, _motor, _color } = this[CAR_ATTRIBUTES];
    return new Car(_brand, _motor, _color);
  }

  /**
   * Getter for the brand of the car.
   * @returns {String} - The brand of the car.
   */
  get brand() {
    return this[CAR_ATTRIBUTES]._brand;
  }

  /**
   * Getter for the motor of the car.
   * @returns {String} - The motor of the car.
   */
  get motor() {
    return this[CAR_ATTRIBUTES]._motor;
  }

  /**
   * Getter for the color of the car.
   * @returns {String} - The color of the car.
   */
  get color() {
    return this[CAR_ATTRIBUTES]._color;
  }
}
