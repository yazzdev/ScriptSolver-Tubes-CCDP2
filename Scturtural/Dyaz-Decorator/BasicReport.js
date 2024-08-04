const Report = require('./Report');

class BasicReport extends Report {
  generate() {
    return "Basic academic report";
  }
}

module.exports = BasicReport;