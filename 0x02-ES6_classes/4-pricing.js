// 4-pricing.js
import Currency from './3-currency.js';

/**
 * Represents a pricing with an amount and currency.
 */
export default class Pricing {
  /**
   * Creates a new Pricing instance.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Getter for the amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Setter for the amount.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Getter for the currency.
   * @returns {Currency} - The currency.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Setter for the currency.
   * @param {Currency} value - The new currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }
  

  /**
   * Displays the full price in the format: amount currency_name (currency_code).
   * @returns {String} - The full price format.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts a price based on a conversion rate.
   * @param {Number} amount - The amount to convert.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} - The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
