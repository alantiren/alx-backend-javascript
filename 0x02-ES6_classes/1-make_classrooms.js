// 1-make_classrooms.js
import ClassRoom from './0-classroom.js';

/**
 * Initializes an array of {@link ClassRoom}s objects with specific sizes.
 * @returns - An array of {@link ClassRoom}s objects.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
