// Factory
function createStudent(name, course, career) {
  const student = {
    name,
    course,
    career,
    history: [],

    // Method to save the current state
    saveState: function () {
      this.history.push({ ...this }); // Using spread operator for a shallow copy
    },

    // Method to restore the last saved state
    restoreState: function () {
      if (this.history.length > 0) {
        const lastState = this.history.pop();
        Object.assign(this, lastState);
      } else {
        console.log("No history to restore.");
      }
    },
  };

  return student;
}

// Create instances using the factory
const students = [
  createStudent("Juan", 2, "Engineering"),
  createStudent("Lia", 3, "Humanities"),
  createStudent("Elizabeth", 4, "Economics"),
];

// Log initial states
students.forEach((student) => {
  console.log(student);
});
console.log();

// Log edited state
console.log("Edited:");
const student2 = students[2];
student2.saveState();
student2.name = "New Juan";
student2.course = 3;
student2.career = "Computer Science";
console.log(student2);
console.log();

// Log restored state
console.log("Restored:");
student2.restoreState();
console.log(student2);
