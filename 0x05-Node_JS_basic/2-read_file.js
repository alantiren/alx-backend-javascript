const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} filePath The path to the CSV data file.
 * @author Alan Tiren <https://github.com/alantiren>
 */
const countStudents = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('Cannot load the database');
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8').trim();
    const fileLines = fileContent.split('\n');

    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (field && !Object.keys(studentGroups).includes(field)) {
        studentGroups[field] = [];
      }

      if (field) {
        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
    }

    const totalStudents = Object.values(studentGroups).reduce((pre, cur) => (pre || []).length + cur.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = countStudents;
