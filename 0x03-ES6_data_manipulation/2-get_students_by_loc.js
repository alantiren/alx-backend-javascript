// 2-get_students_by_loc.js
/**
 * Retrieves students in a given location.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @param {String} city - The location.
* @returns {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} - An array containing students in the specified location.
*/
export default function getStudentsByLocation(students, city) {
 if (Array.isArray(students)) {
   return students.filter((student) => student.location === city);
 }
 return [];
}
