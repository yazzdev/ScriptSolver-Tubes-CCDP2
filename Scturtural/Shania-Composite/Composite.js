
class SchoolComponent {
    constructor(name) {
        this.name = name;
    }

    add(component) {
        throw new Error('Method not implemented.');
    }

    remove(component) {
        throw new Error('Method not implemented.');
    }

    display(indent = '') {
        throw new Error('Method not implemented.');
    }
}

class Student extends SchoolComponent {
    display(indent = '') {
        console.log(`${indent}Student: ${this.name}`);
    }
}

class Department extends SchoolComponent {
    constructor(name) {
        super(name);
        this.components = [];
    }

    add(component) {
        this.components.push(component);
    }

    remove(component) {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    }

    display(indent = '') {
        console.log(`${indent}Department: ${this.name}`);
        this.components.forEach(component => component.display(indent + '  '));
    }
}


class School extends SchoolComponent {
    constructor(name) {
        super(name);
        this.components = [];
    }

    add(component) {
        this.components.push(component);
    }

    remove(component) {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    }

    display(indent = '') {
        console.log(`${indent}School: ${this.name}`);
        this.components.forEach(component => component.display(indent + '  '));
    }
}


const school = new School('Greenwood High School');

const departmentMath = new Department('Mathematics Department');
const departmentScience = new Department('Science Department');

const studentAlice = new Student('Alice');
const studentBob = new Student('Bob');
const studentCharlie = new Student('Charlie');

departmentMath.add(studentAlice);
departmentMath.add(studentBob);
departmentScience.add(studentCharlie);

school.add(departmentMath);
school.add(departmentScience);

school.display();
