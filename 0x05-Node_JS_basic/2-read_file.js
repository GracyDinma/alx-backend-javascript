const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    if (!data) throw new Error('Cannot load the database');

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const values = student.split(',');
      if (values.length < 2) return;

      const firstname = values[0].trim();
      const field = values[values.length - 1].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
