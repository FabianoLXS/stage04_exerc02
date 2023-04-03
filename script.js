const students = [
  {
    name: "Fabiano",
    firstGrade: 9,
    secondGrade: 7,
  },
  {
    name: "Gabriel",
    firstGrade: 4,
    secondGrade: 8,
  },
  {
    name: "Mariana",
    firstGrade: 6,
    secondGrade: 8,
  },
  {
    name: "Gabriela",
    firstGrade: 5,
    secondGrade: 10,
  },
]

function averageGrade(firstGrade, secondGrade) {
  return (firstGrade + secondGrade) / 2
}

function printStudentGrade(student) {
  return `A média do(a) aluno(a) ${student.name} foi de ${averageGrade(student.firstGrade, student.secondGrade)}.`
}

function evaluateGrade(student) {
  if ((averageGrade(student.firstGrade, student.secondGrade))>=7) {
    return `Parabéns ${student.name}! Você foi aprovado(a) no concurso!`
  } else {
    return `Não foi dessa vez ${student.name}! Tente novamente!`
  }
}

for (const student of students) {
  alert(printStudentGrade(student) + `
  ` + evaluateGrade(student)) 
}
