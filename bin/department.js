export class Department {
    name;
    courses = [];
    faculty = [];
    students = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(...course) {
        this.courses.push(...course);
    }
    addfaculty(...faculty) {
        this.faculty.push(...faculty);
    }
    addStudent(...student) {
        this.students.push(...student);
    }
}
