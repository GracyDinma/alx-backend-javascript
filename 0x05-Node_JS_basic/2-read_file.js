const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    if (!data) throw new Error('Cannot load the database');

    const lines = data.split('\n').filter(line => line.trim());
    if (lines.length < 2) throw new Error('Cannot load the database');

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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

