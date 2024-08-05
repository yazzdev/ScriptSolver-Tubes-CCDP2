const SchoolReport = require('./SchoolReport');
const Schedule = require('./Schedule');

const initialReport = new SchoolReport({ subject: 'Math', grade: 'A' });
const clonedReport = initialReport.clone();
clonedReport.reportData.subject = 'Science';

const initialSchedule = new Schedule({ day: 'Monday', period: 1 });
const clonedSchedule = initialSchedule.clone();
clonedSchedule.scheduleData.day = 'Tuesday';

console.log('Initial Report:', initialReport);
console.log('Cloned Report:', clonedReport);

console.log('Initial Schedule:', initialSchedule);
console.log('Cloned Schedule:', clonedSchedule);
