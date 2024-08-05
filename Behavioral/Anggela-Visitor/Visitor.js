class Visitor {
    visitStudent(student) {
      throw new Error('You have to implement the method visitStudent!');
    }
  
    visitAttendance(attendance) {
      throw new Error('You have to implement the method visitAttendance!');
    }
  }
  
  module.exports = Visitor;
  