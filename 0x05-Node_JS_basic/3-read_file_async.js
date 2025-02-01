const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter(line => line.trim());
      if (lines.length < 2) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.slice(1).map(line => line.split(','));
      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach(student => {
        const field = student[student.length - 1];
        const name = student[0];

        if (!fields[field]) fields[field] = [];
        fields[field].push(name);
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
