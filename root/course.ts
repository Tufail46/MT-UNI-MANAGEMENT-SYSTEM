import { Instructor } from "./instructor.js";
import { Student } from "./student.js";
export class Courses {
  id: number;
  name: string;
  student: Student[] = [];
  instructor: Instructor[] = [];
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  addstudent(...student: Student[]) {
    this.student.push(...student);
  }
  addinstructor(...instructor: Instructor[]) {
    this.instructor.push(...instructor);
  }
}
