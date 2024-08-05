class AbstractState {
    action() {
      throw new Error("Method 'action()' must be implemented.");
    }
  }
  
  class EnrolledState extends AbstractState {
    action() {
      console.log("Student is enrolled in classes.");
    }
  }
  
  class AbsentState extends AbstractState {
    action() {
      console.log("Student is currently absent.");
    }
  }
  
  class GraduatedState extends AbstractState {
    action() {
      console.log("Student has graduated.");
    }
  }
  
  class Student {
    constructor(name) {
      this.name = name;
      this.state = new EnrolledState();
    }
  
    setState(state) {
      this.state = state;
    }
  
    getState() {
      return this.state;
    }
  
    action() {
      this.state.action();
    }
  }
  
  // Example Usage
  const student = new Student("John Doe");
  student.action();
  student.setState(new AbsentState());
  student.action();
  student.setState(new GraduatedState());
  student.action();
  