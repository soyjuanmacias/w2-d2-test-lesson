const students = [
    'Lanza',
    'Marco',
    'David',
    'Luis',
    'Voluntario',
    'Alfredo',
    'Silvia',
    'Alex',
    'Kevin',
    'Voluntario',
    'Juan',
    'Raquel Ortega',
    'Nitin',
    'Sergio',
    'Javi',
    'Voluntario',
    'Sofía',
    'Carlos',
    'Freddy',
    'Nano',
    'Raquel Arados',
]

const getRandomStudentList = () =>
    students
    .map(name => ({ name, random: Math.random() }))
    .sort((a, b) => (a.random - b.random))
    .map(student => student.name)

console.log(getRandomStudentList())