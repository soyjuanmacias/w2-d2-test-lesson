import fs from 'fs';
import path from 'path';

const write = (path, data) => {
    fs.writeFile(`./${path.replace('/', '')}`, JSON.stringify(data), err => {
          if (err) return console.error(err);
          console.log('Archivo grabado correctamente');
        });
}


const students = fs.readFile()

const getRandomStudentList = () =>
    students
    .map(name => ({ name, random: Math.random() }))
    .sort((a, b) => (a.random - b.random))
    .map(student => student.name)

console.log(getRandomStudentList());

