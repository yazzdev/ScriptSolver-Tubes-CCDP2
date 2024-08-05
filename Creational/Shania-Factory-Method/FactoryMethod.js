class User {
    constructor(name) {
        this.name = name;
    }

    getRole() {
        throw new Error('Method not implemented.');
    }
}

class Student extends User {
    getRole() {
        return 'Student';
    }
}


class Teacher extends User {
    getRole() {
        return 'Teacher';
    }
}


class Administrator extends User {
    getRole() {
        return 'Administrator';
    }
}


class Staff extends User {
    getRole() {
        return 'Staff';
    }
}


class UserFactory {
    static createUser(role, name) {
        switch (role) {
            case 'Student':
                return new Student(name);
            case 'Teacher':
                return new Teacher(name);
            case 'Administrator':
                return new Administrator(name);
            case 'Staff':
                return new Staff(name);
            default:
                throw new Error('Invalid role.');
        }
    }
}


const student = UserFactory.createUser('Student', 'Alice');
const teacher = UserFactory.createUser('Teacher', 'Bob');
const admin = UserFactory.createUser('Administrator', 'Charlie');
const staff = UserFactory.createUser('Staff', 'Daisy');

console.log(`${student.name} is a ${student.getRole()}`);
console.log(`${teacher.name} is a ${teacher.getRole()}`);
console.log(`${admin.name} is a ${admin.getRole()}`);
console.log(`${staff.name} is a ${staff.getRole()}`);
