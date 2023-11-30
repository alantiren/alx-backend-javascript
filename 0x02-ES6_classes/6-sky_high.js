// 6-sky_high.js
import Building from './5-building.js';

/**
 * Represents a skyscraper building.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding instance.
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Getter for the number of floors in the building.
   * @returns {Number} - The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Overrides the evacuationWarningMessage method.
   * @returns {String} - Evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
