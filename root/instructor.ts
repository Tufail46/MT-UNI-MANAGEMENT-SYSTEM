import { Courses } from "./course.js";
import { Person } from "./person.js";
export class Instructor extends Person {
  private salary: number;
  courses: Courses[] = [];
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  assignCourses(...course: Courses[]) {
    this.courses.push(...course);
  }
}
