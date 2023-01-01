import { Courses } from "./course.js";
import { Instructor } from "./instructor.js";
import { Student } from "./student.js";
export class Department {
  name: string;
  courses: Courses[] = [];
  faculty: Instructor[] = [];
  students: Student[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addCourse(...course: Courses[]) {
    this.courses.push(...course);
  }
  addfaculty(...faculty: Instructor[]) {
    this.faculty.push(...faculty);
  }
  addStudent(...student: Student[]) {
    this.students.push(...student);
  }
}
