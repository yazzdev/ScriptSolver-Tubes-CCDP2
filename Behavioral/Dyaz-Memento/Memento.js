class Memento {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  getName() {
    return this.name;
  }

  getGrade() {
    return this.grade;
  }
}

module.exports = Memento;