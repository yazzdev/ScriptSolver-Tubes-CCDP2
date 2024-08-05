class Message {
    constructor(sender) {
        this.sender = sender ;

     }

     sendMessage(message) {
        throw new Error('You have to implement the method sendMessage!');
  }
}

module.exports = Message;
