// 7-airport.js

/**
 * Represents an airport.
 */
export default class Airport {
  /**
   * Creates a new Airport instance.
   * @param {String} name - The name of the airport.
   * @param {String} code - The code of the airport.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Getter for the airport name.
   * @returns {String} - The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the airport name.
   * @param {String} value - The new name of the airport.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Getter for the airport code.
   * @returns {String} - The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for the airport code.
   * @param {String} value - The new code of the airport.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Default string description of the class.
   * @returns {String} - The airport code.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
