// 10-update_uniq_items.js
/**
 * Updates map entries where quantity is 1 to 100.
 * @param {Map} map - The input map.
 * @throws {Error} - Throws an error if the argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });
}
