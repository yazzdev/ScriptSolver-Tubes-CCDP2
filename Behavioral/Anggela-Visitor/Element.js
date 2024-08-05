class Element {
    accept(visitor) {
      throw new Error('You have to implement the method accept!');
    }
  }
  
  module.exports = Element;