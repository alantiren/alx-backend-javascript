const fs = require('fs');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {String} filePath The path to the CSV data file.
 * @returns {Promise} A Promise that resolves when the operation is completed.
 * @author Alan Tiren <https://github.com/alantiren>
 */
const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const fileLines = data.trim().split('\n');

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

        resolve();
      }
    });
  });
};

module.exports = countStudents;
