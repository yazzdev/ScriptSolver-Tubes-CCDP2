const ReportDecorator = require('./ReportDecorator');

class PerformanceAnalysisDecorator extends ReportDecorator {
  constructor(report, analysis) {
    super(report);
    this.analysis = analysis;
  }

  generate() {
    return super.generate() + `\nPerformance Analysis : ${this.analysis}`;
  }
}

module.exports = PerformanceAnalysisDecorator;