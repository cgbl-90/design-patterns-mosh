// Constructor
function NewStudent(name, course, career) {
  this.name = name;
  this.course = course;
  this.career = career;
  this.history = [];

  // Method to save the current state
  this.saveState = function () {
    this.history.push({ ...this }); // Using spread operator for a shallow copy
  };

  // Method to restore the last saved state
  this.restoreState = function () {
    if (this.history.length > 0) {
      const lastState = this.history.pop();
      Object.assign(this, lastState);
    } else {
      console.log("No history to restore.");
    }
  };
}

//
const student = new NewStudent("Juan", 2, "Engineering");
const student1 = new NewStudent("Lia", 3, "Humanities");
const student2 = new NewStudent("Elizabeth", 4, "Economics");

console.log(student.name, student.course, student.career);
console.log(student1.name, student1.course, student1.career);
console.log(student2.name, student2.course, student2.career);
console.log();
console.log("Edited:");

student2.saveState();
student2.name = "New Juan";
student2.course = 3;
student2.career = "Computer Science";
console.log(student2.name, student2.course, student2.career);
console.log();
console.log("Restored:");
student2.restoreState();
console.log(student2.name, student2.course, student2.career);
