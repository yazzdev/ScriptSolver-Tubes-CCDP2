const StudentData = require('./StudentData');
const AttendanceData = require('./AttendanceData');
const ConcreteVisitor = require('./ConcreteVisitor');

// Create instances of data
const student = new StudentData('John Doe', 90);
const attendance = new AttendanceData('John Doe', 180);

// Create an instance of visitor
const visitor = new ConcreteVisitor();

// Accept visitor and perform operations
student.accept(visitor);
attendance.accept(visitor);