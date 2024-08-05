const Element = require('./Element');

class AttendanceData extends Element {
  constructor(name, daysPresent) {
    super();
    this.name = name;
    this.daysPresent = daysPresent;
  }

  accept(visitor) {
    visitor.visitAttendance(this);
  }
}

module.exports = AttendanceData;
