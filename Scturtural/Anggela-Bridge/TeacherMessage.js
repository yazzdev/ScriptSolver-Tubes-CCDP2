const Message = require('./Message');

class TeacherMessage extends Message {
  sendMessage(message) {
    this.sender.sendMessage(`Teacher says: ${message}`);
  }
}

module.exports = TeacherMessage;