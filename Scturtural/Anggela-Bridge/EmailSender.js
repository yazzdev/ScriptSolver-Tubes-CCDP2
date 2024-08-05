const MessageSender = require('./MessageSender');

class EmailSender extends MessageSender {
  sendMessage(message) {
    console.log(`Sending email with message: ${message}`);
  }
}

module.exports = EmailSender;