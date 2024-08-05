const Message = require('./Message');

class StudentMessage extends Message {
  sendMessage(message) {
    this.sender.sendMessage(`Student says: ${message}`);
  }
}

module.exports = StudentMessage;