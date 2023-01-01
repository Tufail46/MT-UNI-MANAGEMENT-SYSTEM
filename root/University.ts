import { Department } from "./department.js";
export class University {
  name: string;
  department: Department[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addDepartment(...department: Department[]) {
    this.department.push(...department);
  }
}
