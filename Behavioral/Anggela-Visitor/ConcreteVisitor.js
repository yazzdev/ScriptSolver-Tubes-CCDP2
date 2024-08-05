const Visitor = require('./Visitor');

class ConcreteVisitor extends Visitor {
  visitStudent(student) {
    console.log(`${student.name} has a grade of ${student.grade}`);
  }

  visitAttendance(attendance) {
    console.log(`${attendance.name} was present for ${attendance.daysPresent} days`);
  }
}

module.exports = ConcreteVisitor;
