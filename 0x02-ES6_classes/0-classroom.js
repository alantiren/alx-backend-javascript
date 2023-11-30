// 0-classroom.js

/**
 * Represents a class room.
 */
export default class ClassRoom {
  /**
   * Creates a new ClassRoom instance.
   * @param {number} maxStudentsSize - The maximum number of students in the class.
   */
  constructor(maxStudentsSize) {
    // Assign the provided maxStudentsSize to the private property _maxStudentsSize.
    this._maxStudentsSize = maxStudentsSize;
  }
}
