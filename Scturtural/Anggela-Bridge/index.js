const TeacherMessage = require('./TeacherMessage');
const StudentMessage = require('./StudentMessage');
const EmailSender = require('./EmailSender');
const SMSSender = require('./SMSSender');

// Create instances of sender
const emailSender = new EmailSender();
const smsSender = new SMSSender();

// Create instances of messages
const teacherMessage = new TeacherMessage(emailSender);
const studentMessage = new StudentMessage(smsSender);

// Send messages
teacherMessage.sendMessage('Meeting at 10 AM');
studentMessage.sendMessage('Your assignment is due tomorrow');