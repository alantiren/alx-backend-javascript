// 3-currency.js

/**
 * Represents a currency.
 */
export default class Currency {
  /**
   * Creates a new Currency instance.
   * @param {String} code - The currency code.
   * @param {String} name - The currency name.
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Getter for the currency code.
   * @returns {String} - The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for the currency code.
   * @param {String} value - The new currency code.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Getter for the currency name.
   * @returns {String} - The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the currency name.
   * @param {String} value - The new currency name.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Displays the full currency in the format: name (code).
   * @returns {String} - The full currency format.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
