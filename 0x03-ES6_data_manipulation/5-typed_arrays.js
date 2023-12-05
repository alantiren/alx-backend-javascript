// 5-typed_arrays.js
/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position to add the value.
 * @param {Number} value - The Int8 value to add.
 * @returns {DataView} - The created DataView.
 * @throws {Error} - Position outside range if adding the value is not possible.
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value);
  return view;
}
