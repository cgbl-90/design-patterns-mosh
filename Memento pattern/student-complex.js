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

    // Method to restore the specified saved state
    restoreState: function (index) {
      if (index >= 0 && index < this.history.length) {
        const savedState = this.history[index];
        Object.assign(this, savedState);
      } else {
        console.log("Invalid history index.");
      }
    },

    // Function to update student information
    update: function (newName, newCourse, newCareer) {
      this.saveState(); // Save current state before updating
      this.name = newName;
      this.course = newCourse;
      this.career = newCareer;
    },

    // Method to display student information
    displayInfo: function () {
      console.log(
        `Student: ${this.name} | Course: ${this.course} | Career: ${this.career}`
      );
    },
  };

  return student;
}

// Create an instance using the factory
const student = createStudent("Juan", 2, "Engineering");
student.update("Updated Juan", 4, "Data Science");
student.update("Another Update Juan", 5, "Artificial Intelligence");
student.update("Renamed Juan", 5, "Security");
student.update("Smartest Juan", 5, "Engineering");

// Encapsulate the print functionality
const printStudentInfo = (student) => {
  student.displayInfo();
  console.log();
};

// Print
printStudentInfo(student);
student.restoreState(1);
printStudentInfo(student);
student.restoreState(3);
printStudentInfo(student);
student.restoreState(0);
printStudentInfo(student);

// Print the number of elements in the history array at the end
console.log(`Number of elements in history array: ${student.history.length}`);
