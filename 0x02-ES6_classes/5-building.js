// 5-building.js

/**
 * Represents a building.
 */
export default class Building {
  /**
   * Creates a new Building instance.
   *
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /**
   * Gets the square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building.
   */
  set sqft(value) {
    this._sqft = value;
  }
}
