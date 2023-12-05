// 4-update_grade_by_city.js
/**
 * Updates student grades for a specific city.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @param {String} city - The location.
* @param {{
*   studentId: Number,
*   grade: Number
* }[]} newGrades - Array of objects with studentId and grade.
* @returns {{
*   id: Number,
*   firstName: String,
*   location: String,
*   grade: Number | String
* }[]} - Updated array of students with grades.
*/
export default function updateStudentGradeByCity(students, city, newGrades) {
 return students
   .filter((student) => student.location === city)
   .map((student) => {
     const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
     return {
       ...student,
       grade: matchingGrade ? matchingGrade.grade : 'N/A',
     };
   });
}
