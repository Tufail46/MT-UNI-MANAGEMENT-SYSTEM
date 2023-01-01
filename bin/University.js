export class University {
    name;
    department = [];
    constructor(name) {
        this.name = name;
    }
    addDepartment(...department) {
        this.department.push(...department);
    }
}
