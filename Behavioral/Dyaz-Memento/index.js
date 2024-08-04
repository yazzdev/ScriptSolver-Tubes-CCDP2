const Student = require('./Student');
const Caretaker = require('./Caretaker');

// Membuat instance siswa
const student = new Student('Dyaz', 'X B');
const caretaker = new Caretaker();

// Menyimpan status awal
caretaker.addMemento(student.save());

// Mengubah data siswa dan menyimpannya
student.setName('Dyaz Amrullah');
student.setGrade('XI B');
caretaker.addMemento(student.save());

// Mengubah data siswa kembali dan menyimpannya
student.setName('Amrullah Dyaz');
student.setGrade('XII B');
caretaker.addMemento(student.save());

// Mengembalikan status awal
student.restore(caretaker.getMemento(0));
console.log(`Restored to first state : ${student.name}, ${student.grade}`);

// Mengembalikan ke status kedua
student.restore(caretaker.getMemento(1));
console.log(`Restored to second state: ${student.name}, ${student.grade}`);