// 1-make_classrooms.js
import ClassRoom from './0-classroom.js';

/**
 * Initializes an array of ClassRoom objects with specified sizes.
 * @returns {Array<ClassRoom>} - Array of ClassRoom objects.
 */
export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
