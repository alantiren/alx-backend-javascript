// 7-has_array_values.js
/**
 * Checks if all elements in the array exist within the set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of values to check.
 * @returns {boolean} - True if all elements in the array exist in the set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
