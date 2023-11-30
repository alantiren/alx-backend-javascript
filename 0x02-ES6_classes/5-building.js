// 5-building.js

/**
 * Represents an abstract building.
 */
export default class Building {
  /**
   * Creates a new Building instance.
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    this._sqft = sqft;
  }

  /**
   * Getter for the square footage of the building.
   * @returns {Number} - The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Abstract method to be implemented by subclasses.
   * Throws an error if not overridden.
   */
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
