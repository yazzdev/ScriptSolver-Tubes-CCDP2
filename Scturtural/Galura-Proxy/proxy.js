class RealStudentData {
    constructor(name, age, grades, address) {
      this.name = name;
      this.age = age;
      this.grades = grades;
      this.address = address;
    }
  
    getData() {
      return {
        name: this.name,
        age: this.age,
        grades: this.grades,
        address: this.address,
      };
    }
  
    setData(data) {
      this.name = data.name;
      this.age = data.age;
      this.grades = data.grades;
      this.address = data.address;
    }
  }
  
  class StudentDataProxy {
    constructor(realStudentData, accessLevel) {
      this.realStudentData = realStudentData;
      this.accessLevel = accessLevel;
    }
  
    getData() {
      if (this.accessLevel === "admin" || this.accessLevel === "teacher") {
        return this.realStudentData.getData();
      } else {
        return {
          name: this.realStudentData.name,
          age: this.realStudentData.age,
          grades: this.realStudentData.grades,
        };
      }
    }
  
    setData(data) {
      if (this.accessLevel === "admin") {
        this.realStudentData.setData(data);
      } else {
        throw new Error("You do not have permission to modify this data.");
      }
    }
  }
  
  // Example Usage
  const realStudent = new RealStudentData("Galura Tirtha Salsabila", 16, "A", "Jl.Jurang, Bandung");
  const proxy = new StudentDataProxy(realStudent, "teacher");
  console.log(proxy.getData());
  