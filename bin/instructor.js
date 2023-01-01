import { Person } from "./person.js";
export class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourses(...course) {
        this.courses.push(...course);
    }
}
