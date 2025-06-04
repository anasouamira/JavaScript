// ✅ Create an object
let student = {
  name: "Ayesha",
  age: 20,
  grade: "A",
  isActive: true
};

// 👀 Access object properties
let beforeUpdate = "Before Update:<br>" +
  "Name: " + student.name + "<br>" +
  "Age: " + student.age + "<br>" +
  "Grade: " + student.grade + "<br>" +
  "Active: " + student.isActive + "<br><br>";

// ➕ Add a new property
student.school = "City School";

// 🔄 Update a property
student.age = 21;

// ❌ Delete a property
delete student.grade;

// Display updated object
let afterUpdate = "After Update:<br>" +
  "Name: " + student.name + "<br>" +
  "Age: " + student.age + "<br>" +
  "Active: " + student.isActive + "<br>" +
  "School: " + student.school;

// Show result in the page
document.getElementById("output1").innerHTML = beforeUpdate + afterUpdate;

// Constructor function to create objects
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

// Creating objects using 'new'
let student1 = new Student("Ali", 22, "A");
let student2 = new Student("Ayesha", 20, "B");

// Show info
let info = "Student 1: " + student1.name + ", Age: " + student1.age + ", Grade: " + student1.grade + "<br>" +
           "Student 2: " + student2.name + ", Age: " + student2.age + ", Grade: " + student2.grade;

document.getElementById("output2").innerHTML = info;