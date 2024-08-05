const MessageSender = require('./MessageSender');

class SMSSender extends MessageSender {
  sendMessage(message) {
    console.log(`Sending SMS with message: ${message}`);
  }
}

module.exports = SMSSender;