import welcome from "./welcome.js";
import { Courses } from "./course.js";
import { Department } from "./department.js";
import { Instructor } from "./instructor.js";
import { Student } from "./student.js";
import { University } from "./University.js";
let msg = `
    ***************************************
    ***************************************
      ||*******************************||
      ||     Welcome to University     ||
      ||       Management System       ||
      ||*******************************||
    ***************************************
    ***************************************
    `;
await welcome(msg);
let student1 = new Student("Bareera Tufail", 18, "PIAIC198253");
let student2 = new Student("Anabiya Tufail", 19, "PIAIC198253");
let student3 = new Student("Muhammad Usman", 18, "PIAIC198253");
let student4 = new Student("Ali", 20, "Civil198253");
let student5 = new Student("Uzair", 21, "Civil198253");
let student6 = new Student("Khubaib", 19, "Civil198253");
let instructor1 = new Instructor("Zia", 60);
let instructor2 = new Instructor("Danyal", 26);
let instructor3 = new Instructor("Imran", 30);
let instructor4 = new Instructor("Tufail", 33);
let instructor5 = new Instructor("Johar", 31);
let instructor6 = new Instructor("Wajid", 30);
let course1 = new Courses(1, "Web 3.0 & Metaverse");
let course2 = new Courses(2, "BCC");
let course3 = new Courses(3, "AI");
let course4 = new Courses(4, "Structural Dynamics");
let course5 = new Courses(5, "Structural Analysis");
let course6 = new Courses(6, "SAP2000");
let course7 = new Courses(7, "ETABs");
let piaic = new Department("PIAIC");
let civil = new Department("Civil Engineering");
let aiUni = new University("AI University");
course1.addstudent(student1, student2, student3);
course2.addstudent(student1, student3, student2);
course3.addstudent(student3, student1, student2);
student1.registerForCourses(course1, course2, course3);
student2.registerForCourses(course1, course2, course3);
student3.registerForCourses(course1, course2, course3);
course4.addstudent(student4, student5, student6);
course5.addstudent(student4, student5, student6);
course6.addstudent(student4, student5, student6);
course7.addstudent(student4, student5, student6);
student4.registerForCourses(course4, course5, course6, course7);
student5.registerForCourses(course4, course5, course6, course7);
student6.registerForCourses(course4, course5, course6, course7);
course1.addinstructor(instructor1);
instructor1.assignCourses(course1);
course2.addinstructor(instructor2);
instructor2.assignCourses(course2);
course3.addinstructor(instructor3);
instructor3.assignCourses(course3);
course4.addinstructor(instructor5);
instructor5.assignCourses(course4);
course5.addinstructor(instructor6);
instructor6.assignCourses(course5);
course6.addinstructor(instructor4);
course7.addinstructor(instructor4);
instructor4.assignCourses(course6);
instructor4.assignCourses(course7);
piaic.addCourse(course1, course2, course3, course4);
piaic.addfaculty(instructor1, instructor2, instructor3);
piaic.addStudent(student1, student2, student3);
civil.addCourse(course4, course5, course6, course7);
civil.addfaculty(instructor4, instructor5, instructor6);
civil.addStudent(student4, student5, student6);
aiUni.addDepartment(piaic, civil);
console.log(aiUni.department[0].courses[0].student);
