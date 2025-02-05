const express = require('express');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  const csvFilePath = path.join(__dirname, 'database.csv');
  const students = [];
  const fields = {};

  fs.createReadStream(csvFilePath)
    .pipe(parse({ columns: true, trim: true }))
    .on('data', (row) => {
      students.push(row);
      const field = row.field;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(row.firstname);
    })
    .on('end', () => {
      let responseText = 'This is the list of our students\n';
      responseText += `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.type('text/plain').send(responseText.trim());
    })
    .on('error', (err) => {
      res.status(500).send('Cannot load the database');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
