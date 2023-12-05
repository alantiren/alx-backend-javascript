// 8-clean_set.js
/**
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - The set to filter.
 * @param {String} startString - The string to check for as a prefix.
 * @returns {String} - The concatenated string of set values starting with the specified string.
 */
export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  return filteredValues.join('-');
}
