const ReportDecorator = require('./ReportDecorator');

class TeacherNotesDecorator extends ReportDecorator {
  constructor(report, notes) {
    super(report);
    this.notes = notes;
  }

  generate() {
    return super.generate() + `\nTeacher's Notes      : ${this.notes}`;
  }
}

module.exports = TeacherNotesDecorator;