import { Person } from "./person.js";
export class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(...course) {
        this.courses.push(...course);
    }
}
