//object in javascript
let student = {
  first: "majid",
  last: "shah",
  age: "28",
  studentInfo: function () {
    return this.first + "\n" + this.last + "\n" + this.age;
  },
};
console.log(student.first, student.last, student.age);
student.age++;
console.log(student.age);
console.log(student.studentInfo());
