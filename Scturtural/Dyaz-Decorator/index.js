const BasicReport = require('./BasicReport');
const TeacherNotesDecorator = require('./TeacherNotesDecorator');
const ParentCommentsDecorator = require('./ParentCommentsDecorator');
const PerformanceAnalysisDecorator = require('./PerformanceAnalysisDecorator');

// Membuat laporan dasar
let report = new BasicReport();

// Menambahkan catatan guru
report = new TeacherNotesDecorator(report, "Great progress in mathematics.");

// Menambahkan komentar orang tua
report = new ParentCommentsDecorator(report, "We are very happy with the improvement.");

// Menambahkan analisis performa
report = new PerformanceAnalysisDecorator(report, "Student has shown a 20% improvement in grades.");

console.log(report.generate());