class AbstractUser {
    constructor(name) {
      if (this.constructor === AbstractUser) {
        throw new Error("Abstract classes can't be instantiated.");
      }
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    getRole() {
      throw new Error("Method 'getRole()' must be implemented.");
    }
  }
  
  class Student extends AbstractUser {
    getRole() {
      return "Student";
    }
  }
  
  class Teacher extends AbstractUser {
    constructor(name, subject) {
      super(name);
      this.subject = subject;
    }
  
    getRole() {
      return "Teacher";
    }
  
    getSubject() {
      return this.subject;
    }
  }
  
  class AdminStaff extends AbstractUser {
    constructor(name, department) {
      super(name);
      this.department = department;
    }
  
    getRole() {
      return "Admin Staff";
    }
  
    getDepartment() {
      return this.department;
    }
  }
  
  class UserFactory {
    createStudent(name) {
      return new Student(name);
    }
  
    createTeacher(name, subject) {
      return new Teacher(name, subject);
    }
  
    createAdminStaff(name, department) {
      return new AdminStaff(name, department);
    }
  }
  
  // Example Usage
  const factory = new UserFactory();
  const student = factory.createStudent("Galura Tirtha Salsabila");
  console.log(`${student.getName()} is a ${student.getRole()}`);
  const teacher = factory.createTeacher("Jonathan", "Science");
  console.log(`${teacher.getName()} is a ${teacher.getRole()} and teaches ${teacher.getSubject()}`);
  