class StudentProfile {
  constructor(builder) {
    this.name = builder.name;
    this.grade = builder.grade;
    this.extracurriculars = builder.extracurriculars;
    this.subjects = builder.subjects;
  }

  getName() {
    return this.name;
  }

  getGrade() {
    return this.grade;
  }

  getExtracurriculars() {
    return this.extracurriculars;
  }

  getSubjects() {
    return this.subjects;
  }
}

module.exports = StudentProfile;