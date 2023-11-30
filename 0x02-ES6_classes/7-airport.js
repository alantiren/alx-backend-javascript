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
   * Getter for the airport code.
   * @returns {String} - The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Default string description of the class.
   * @returns {String} - The airport code.
   */
  toString() {
    return `[object ${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
