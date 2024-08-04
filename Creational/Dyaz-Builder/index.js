const StudentProfileBuilder = require('./StudentProfileBuilder');

// Membuat profil siswa baru
const studentProfile = new StudentProfileBuilder('Dyaz Amrullah', 'IX B')
  .addExtracurricular('Basketball')
  .addExtracurricular('Boxing')
  .addExtracurricular('Paskibra')
  .addSubject('Mathematics')
  .addSubject('Science')
  .build();

console.log(`Name            : ${studentProfile.getName()}`);
console.log(`Grade           : ${studentProfile.getGrade()}`);
console.log(`Extracurricular : ${studentProfile.getExtracurriculars().join(', ')}`);
console.log(`Subjects        : ${studentProfile.getSubjects().join(', ')}`);