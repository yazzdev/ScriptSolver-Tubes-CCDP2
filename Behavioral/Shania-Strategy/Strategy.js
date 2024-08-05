class GradingStrategy {
    calculateGrade(student) {
        throw new Error('Method not implemented.');
    }
}


class PercentageBasedGrading extends GradingStrategy {
    calculateGrade(student) {
        if (student.marks >= 90) return 'A';
        if (student.marks >= 80) return 'B';
        if (student.marks >= 70) return 'C';
        if (student.marks >= 60) return 'D';
        return 'F';
    }
}

class CriteriaBasedGrading extends GradingStrategy {
    calculateGrade(student) {
        const { attendance, assignments, exams } = student;
        if (attendance > 90 && assignments > 80 && exams > 70) return 'Excellent';
        if (attendance > 80 && assignments > 70 && exams > 60) return 'Good';
        if (attendance > 70 && assignments > 60 && exams > 50) return 'Average';
        return 'Needs Improvement';
    }
}


class Student {
    constructor(name, marks, attendance, assignments, exams, gradingStrategy) {
        this.name = name;
        this.marks = marks;
        this.attendance = attendance;
        this.assignments = assignments;
        this.exams = exams;
        this.gradingStrategy = gradingStrategy;
    }

    setGradingStrategy(strategy) {
        this.gradingStrategy = strategy;
    }

    getGrade() {
        return this.gradingStrategy.calculateGrade(this);
    }
}

const percentageGrading = new PercentageBasedGrading();
const criteriaGrading = new CriteriaBasedGrading();

const studentAlice = new Student('Alice', 85, 95, 90, 80, percentageGrading);
const studentBob = new Student('Bob', 75, 85, 70, 65, criteriaGrading);

console.log(`${studentAlice.name} received grade: ${studentAlice.getGrade()}`);
console.log(`${studentBob.name} received grade: ${studentBob.getGrade()}`);
