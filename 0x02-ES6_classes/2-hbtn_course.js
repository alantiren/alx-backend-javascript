// 2-hbtn_course.js

/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse instance.
   * @param {String} name - The name of the course.
   * @param {Number} length - The length of the course.
   * @param {Array<String>} students - An array of student names.
   */
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = students; // No validation for students array, assuming it's optional.
  }

  /**
   * Getter for the course name.
   * @returns {String} - The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the course name.
   * @param {String} value - The new name for the course.
   */
  set name(value) {
    this._name = this.validateString(value, 'Name');
  }

  /**
   * Getter for the course length.
   * @returns {Number} - The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Setter for the course length.
   * @param {Number} value - The new length for the course.
   */
  set length(value) {
    this._length = this.validateNumber(value, 'Length');
  }

  /**
   * Getter for the students array.
   * @returns {Array<String>} - An array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Setter for the students array.
   * @param {Array<String>} value - The new array of student names.
   */
  set students(value) {
    // No validation for students array, assuming it's optional.
    this._students = value;
  }

  /**
   * Validates and returns a string attribute.
   * @param {any} value - The value to validate.
   * @param {String} attribute - The name of the attribute being validated.
   * @returns {String} - The validated string.
   * @throws {TypeError} - If the value is not a string.
   */
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  /**
   * Validates and returns a number attribute.
   * @param {any} value - The value to validate.
   * @param {String} attribute - The name of the attribute being validated.
   * @returns {Number} - The validated number.
   * @throws {TypeError} - If the value is not a number.
   */
  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }
}
