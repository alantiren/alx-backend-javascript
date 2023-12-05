// 1-get_list_student_ids.js
/**
 * Retrieves ids from a list of students.
 * @param {Object[]} students - The list of students.
 * @returns {Number[]} - An array of student ids.
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
