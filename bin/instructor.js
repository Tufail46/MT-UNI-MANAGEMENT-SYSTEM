import { Person } from "./person.js";
export class Instructor extends Person {
    courses = [];
    constructor(name, age) {
        super(name, age);
    }
    assignCourses(...course) {
        this.courses.push(...course);
    }
}
