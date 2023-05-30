var student = {
    name: 'Yasir',
    age: 25,
    rollNo: 1252,
    course: 'Web3 and Metaverse Development',
    quarter: 2
};
var students = ['Ali', 'Ammar', 'Abdullah', 'Yasir', 'Abdul Rehman'];
console.log("The Student name is Yasir: ".concat(student.name === 'Yasir' ? 'True' : 'False', "."));
console.log("The Student name is Yasir: ".concat(student.name !== 'Yasir' ? 'True' : 'False', "."));
console.log("The Student age is more than 25 years: ".concat(student.age > 25 ? 'True' : 'False', "."));
console.log("The Student age is less than or equals 25 years: ".concat(student.age <= 25 ? 'True' : 'False', "."));
console.log("The Student rollno is 1252: ".concat(student.rollNo === 1252 ? 'True' : 'False', "."));
console.log("The Student rollno is not 1252: ".concat(student.rollNo !== 1252 ? 'True' : 'False', "."));
console.log("The Student course title is Web3 and Metaverse Development: ".concat(student.course === 'Web3 and Metaverse Development' ? 'True' : 'False', "."));
console.log("The Student course title is not Web3 and Metaverse Development: ".concat(student.course !== 'Web3 and Metaverse Development' ? 'True' : 'False', "."));
console.log("The Student's quarter is 2: ".concat(student.quarter === 2 ? 'True' : 'False', "."));
console.log("The Student's quarter is more than 2: ".concat(student.quarter > 2 ? 'True' : 'False', "."));
console.log(5 === 5);
console.log(8 > 3);
console.log(12 < 7);
console.log(5 <= 10);
console.log("Zabair existing in the student list: ".concat(students.includes('Zabair'), "."));
console.log("Zabair existing in the student list: ".concat(!(students.includes('Zabair')), "."));
