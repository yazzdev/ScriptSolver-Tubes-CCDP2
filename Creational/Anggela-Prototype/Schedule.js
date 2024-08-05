const Prototype = require('./Prototype');

class Schedule extends Prototype {
  constructor(scheduleData) {
    super();
    this.scheduleData = scheduleData;
  }

  clone() {
    return new Schedule({ ...this.scheduleData });
  }
}

module.exports = Schedule;
