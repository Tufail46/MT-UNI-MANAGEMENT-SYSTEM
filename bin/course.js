export class Courses {
    id;
    name;
    student = [];
    instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addstudent(...student) {
        this.student.push(...student);
    }
    addinstructor(...instructor) {
        this.instructor.push(...instructor);
    }
}
