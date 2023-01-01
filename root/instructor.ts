import { Courses } from "./course.js";
import { Person } from "./person.js";
export class Instructor extends Person {
  courses: Courses[] = [];
  constructor(name: string, age: number) {
    super(name, age);
  }
  assignCourses(...course: Courses[]) {
    this.courses.push(...course);
  }
}
