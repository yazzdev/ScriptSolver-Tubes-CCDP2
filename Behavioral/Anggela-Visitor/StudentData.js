const Element = require('./Element');

class StudentData extends Element {
  constructor(name, grade) {
    super();
    this.name = name;
    this.grade = grade;
  }

  accept(visitor) {
    visitor.visitStudent(this);
  }
}

module.exports = StudentData;
