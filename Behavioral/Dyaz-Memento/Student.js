const Memento = require('./Memento');

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  setName(name) {
    this.name = name;
  }

  setGrade(grade) {
    this.grade = grade;
  }

  save() {
    return new Memento(this.name, this.grade);
  }

  restore(memento) {
    this.name = memento.getName();
    this.grade = memento.getGrade();
  }
}

module.exports = Student;