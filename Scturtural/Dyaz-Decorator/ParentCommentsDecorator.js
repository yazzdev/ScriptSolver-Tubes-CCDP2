const ReportDecorator = require('./ReportDecorator');

class ParentCommentsDecorator extends ReportDecorator {
  constructor(report, comments) {
    super(report);
    this.comments = comments;
  }

  generate() {
    return super.generate() + `\nParent's Comments    : ${this.comments}`;
  }
}

module.exports = ParentCommentsDecorator;