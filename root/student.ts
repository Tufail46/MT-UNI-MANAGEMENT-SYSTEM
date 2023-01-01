import { Courses } from "./course.js";
import { Person } from "./person.js";
export class Student extends Person {
  rollNumber: string;
  courses: Courses[] = [];
  constructor(name: string, age: number, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
  }
  registerForCourses(...course: Courses[]) {
    this.courses.push(...course);
  }
}
