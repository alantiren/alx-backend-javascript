// 2-hbtn_course.js

/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse instance.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateArray(students, 'Students');
  }

  /**
   * Gets the name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course.
   */
  set name(value) {
    this._name = this.validateString(value, 'Name');
  }

  /**
   * Gets the length of this course (in months).
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (in months).
   */
  set length(value) {
    this._length = this.validateNumber(value, 'Length');
  }

  /**
   * Gets the names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   */
  set students(value) {
    this._students = this.validateArray(value, 'Students');
  }

  /**
   * Validates if the value is a string.
   * @param {*} value - The value to be validated.
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
   * Validates if the value is a number.
   * @param {*} value - The value to be validated.
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

  /**
   * Validates if the value is an array.
   * @param {*} value - The value to be validated.
   * @param {String} attribute - The name of the attribute being validated.
   * @returns {Array} - The validated array.
   * @throws {TypeError} - If the value is not an array.
   */
  validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array`);
    }
    return value;
  }
}
