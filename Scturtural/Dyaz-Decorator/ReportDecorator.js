const Report = require('./Report');

class ReportDecorator extends Report {
  constructor(report) {
    super();
    this.report = report;
  }

  generate() {
    return this.report.generate();
  }
}

module.exports = ReportDecorator;