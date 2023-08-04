class Student {
  private studentId: number;
  private studentName: string;
  private sex: boolean;
  private className: string;
  private age: number;
  private address: string;

  constructor() {
    this.studentId = 0;
    this.studentName = "";
    this.sex = true;
    this.className = "";
    this.age = 0;
    this.address = "";
  }

  public getStudentId(): number {
    return this.studentId;
  }
  public setStudentId(studentId: number): void {
    this.studentId = studentId;
  }
  public getStudentName(): string {
    return this.studentName;
  }
  public setStudentName(studentName: string): void {
    this.studentName = studentName;
  }
  public getSex(): boolean {
    return this.sex;
  }
  public setSex(sex: boolean): void {
    this.sex = sex;
  }
  public getClassName(): string {
    return this.className;
  }
  public setClassName(className: string): void {
    this.className = className;
  }
  public getAge(): number {
    return this.age;
  }
  public setAge(age: number): void {
    this.age = age;
  }
  public getAddress(): string {
    return this.address;
  }
  public setAddress(address: string): void {
    this.address = address;
  }
  public inputData(): void {
    this.studentId = parseInt(window.prompt("Student ID:") || "0");
    this.studentName = window.prompt("Student Name:") || "";
    this.sex =
      window.prompt("Sex (true for male, false for female):") === "true";
    this.className = window.prompt("Class Name:") || "";
    this.age = parseInt(window.prompt("Age: ") || "0");
    this.address = window.prompt("Address: ") || "";
  }
  public displayData(): void {
    console.log("Student ID:", this.studentId);
    console.log("Student Name:", this.studentName);
    console.log("Sex:", this.sex ? "Male" : "Female");
    console.log("Class Name:", this.className);
    console.log("Age:", this.age);
    console.log("Address:", this.address);
  }
}

class StudentManager {
  private static students: Student[] = [];

  public static createStudent(): void {
    const student = new Student();
    student.inputData();
    this.students.push(student);
  }
  public static updateStudent(id: number): void {
    const student = this.findStudentById(id);
    if (student) {
      student.inputData();
    } else {
      console.log("Student not found!");
    }
  }
  public static showAllStudents(): void {
    if (this.students.length === 0) {
      console.log("No student found!");
    } else {
      for (const student of this.students) {
        student.displayData();
      }
    }
  }
  public static deleteStudent(id: number): void {
    const index = this.students.findIndex(
      (student) => student.getStudentId() === id
    );
    if (index !== -1) {
      this.students.splice(index, 1);
      console.log("Student deleted successfully!");
    } else {
      console.log("Student not found");
    }
  }
  private static findStudentById(id: number): Student | undefined {
    return this.students.find((student) => student.getStudentId() === id);
  }
}

export function main(): void {
  let option: string;
  while (true) {
    console.log("Menu:");
    console.log("C - Create Student");
    console.log("R - Show All Students");
    console.log("U - Update Student");
    console.log("D - Delete Student");
    console.log("E - Exit");

    option = window.prompt("Enter option:") || "";
    option = option.toUpperCase();

    switch (option) {
      case "C":
        StudentManager.createStudent();
        break;
      case "R":
        StudentManager.showAllStudents();
        break;
      case "U":
        const idToUpdate = parseInt(
          window.prompt("Enter Student ID to update: ") || "0"
        );
        StudentManager.updateStudent(idToUpdate);
      case "D":
        const idToDelete = parseInt(
          window.prompt("Enter Student ID to delete") || "0"
        );
        StudentManager.deleteStudent(idToDelete);
      case "E":
        const confirmExit = window.confirm("Are you sure you want to exit?");
        if (confirmExit) {
          console.log("Exiting...");
          return;
        }
      default:
        console.log("Invalid option!");
    }
  }
}
