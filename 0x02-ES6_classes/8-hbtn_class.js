// 8-hbtn_class.js

/**
 * Represents a Holberton class.
 */
export default class HolbertonClass {
  /**
   * Creates a new HolbertonClass instance.
   * @param {Number} size - The size of the class.
   * @param {String} location - The location of the class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Implicitly converts the class to a Number, returning the size.
   * @returns {Number} - The size of the class.
   */
  valueOf() {
    return this._size;
  }

  /**
   * Implicitly converts the class to a String, returning the location.
   * @returns {String} - The location of the class.
   */
  toString() {
    return this._location;
  }
}
