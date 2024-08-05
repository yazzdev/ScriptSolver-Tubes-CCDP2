const Prototype = require('./Prototype');

class SchoolReport extends Prototype {
  constructor(reportData) {
    super();
    this.reportData = reportData;
  }

  clone() {
    return new SchoolReport({ ...this.reportData });
  }
}

module.exports = SchoolReport;
