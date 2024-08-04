const StudentProfile = require('./StudentProfile');

class StudentProfileBuilder {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.extracurriculars = [];
    this.subjects = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setGrade(grade) {
    this.grade = grade;
    return this;
  }

  addExtracurricular(activity) {
    this.extracurriculars.push(activity);
    return this;
  }

  addSubject(subject) {
    this.subjects.push(subject);
    return this;
  }

  build() {
    return new StudentProfile(this);
  }
}

module.exports = StudentProfileBuilder;