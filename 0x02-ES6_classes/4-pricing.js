// 4-pricing.js
import Currency from './3-currency.js';

/**
 * Represents a pricing with an amount and currency.
 */
export default class Pricing {
  /**
   * Creates a new Pricing instance.
   * @param {Number} amount - The amount.
   * @param {Currency} currency - The currency.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Getter for the amount.
   * @returns {Number} - The amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Setter for the amount.
   * @param {Number} value - The new amount.
   */
  set amount(value) {
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
    this._currency = value;
  }

  /**
   * Displays the full price in the format: amount currency_name (currency_code).
   * @returns {String} - The full price format.
   */
  displayFullPrice() {
    const currencyDisplay = this._currency.displayFullCurrency();
    return `${this._amount} ${currencyDisplay}`;
  }

  /**
   * Converts a price based on a conversion rate.
   * @param {Number} amount - The amount to convert.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} - The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
