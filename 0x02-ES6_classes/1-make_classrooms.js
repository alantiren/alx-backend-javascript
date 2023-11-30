import ClassRoom from './0-classroom.js';

/**
 * Initializes an array of ClassRoom objects with specific sizes.
 * @returns {Array} - An array of ClassRoom objects.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
