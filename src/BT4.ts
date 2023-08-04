//Lớp Student
export class Student {
  private id: string;
  private name: string;
  private age: number;
  private gender: string;
  private address: string;
  private phoneNumber: string;

  constructor(
    id: string,
    name: string,
    age: number,
    gender: string,
    address: string,
    phoneNumber: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  // getter for id
  getId(): string {
    return this.id;
  }

  inputData(
    id: string,
    name: string,
    age: number,
    gender: string,
    address: string,
    phoneNumber: string
  ): void {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  displayData(): void {
    console.log(
      `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}, Phone Number: ${this.phoneNumber}`
    );
  }
}

//Tạo lớp Main
export class Main {
  private students: Student[] = [
    new Student("1", "Nhàn", 33, "Female", "Đà Nẵng", "0901794918"),
    new Student("2", "Vụ", 23, "Male", "Đà Nẵng", "0345885615"),
  ];

  constructor() {}

  main(): void {
    // This will simulate the main loop of your application
    while (true) {
      // Display the menu to the user
      console.log("1. Hiển thị danh sách tất cả học sinh");
      console.log("2. Thêm mới học sinh");
      console.log("3. Sửa thông tin học sinh dựa vào mã học sinh");
      console.log("4. Xóa học sinh");
      console.log("5. Thoát");

      // Get the user's choice
      let choice = prompt("Please enter your choice:");

      switch (choice) {
        case "1":
          this.displayStudents();
          break;
        case "2":
          this.addStudent();
          break;
        case "3":
          this.updateStudent();
          break;
        case "4":
          this.deleteStudent();
          break;
        case "5":
          return;
        default:
          console.log("Invalid choice. Please enter a number between 1 and 5.");
          break;
      }
    }
  }

  displayStudents(): void {
    for (let student of this.students) {
      student.displayData();
    }
  }

  addStudent(): void {
    // This is just an example. You will need to replace this with code that gets the actual input from the user.
    let id = prompt("Enter student id:") || "";
    let name = prompt("Enter student name:") || "";
    let age = prompt("Enter student age:") || "";
    let gender = prompt("Enter student gender:") || "";
    let address = prompt("Enter student address:") || "";
    let phoneNumber = prompt("Enter student phone number:") || "";

    let student = new Student(
      id,
      name,
      parseInt(age),
      gender,
      address,
      phoneNumber
    );
    console.log(student);
    this.students.push(student);
  }

  updateStudent(): void {
    // This is just an example. You will need to replace this with code that gets the actual input from the user.
    let id = prompt("Enter the id of the student you want to update:") || "";
    let student = this.students.find((s) => s.getId() === id);

    if (student) {
      let name = prompt("Enter new student name:") || "";
      let age = prompt("Enter new student age:") || "";
      let gender = prompt("Enter new student gender:") || "";
      let address = prompt("Enter new student address:") || "";
      let phoneNumber = prompt("Enter new student phone number:") || "";

      student.inputData(id, name, parseInt(age), gender, address, phoneNumber);
    } else {
      console.log(`No student found with id ${id}`);
    }
  }

  deleteStudent(): void {
    // This is just an example. You will need to replace this with code that gets the actual input from the user.
    let id = prompt("Enter the id of the student you want to delete:");
    let index = this.students.findIndex((s) => s.getId() === id);

    if (index !== -1) {
      this.students.splice(index, 1);
    } else {
      console.log(`No student found with id ${id}`);
    }
  }
}

// Exercise 05
// Xây dựng lớp Employee gồm các thuộc tính như: mã nhân viên(employeeId), tên nhân viên (employeeName) , tuổi (age), giới tính (gen), hệ số lương(rate) và lương(salary).

// Bước 1: Tạo lớp Employee, khai báo các thuộc tính (properties), định nghĩa các phương thức khởi tạo (constructors).
// Bước 2: Tạo lớp Main chưa phương thức main() để chạy chương trình.
// Bước 3: Trong phương thức main() , khởi tạo 5 đối tượng nhân viên từ lớp Employee, tính lương và hiển thị toàn bộ thông tin các nhân viên ra màn hình.
// Bước 4: Chạy chương trình và quan sát kết quả.

export class Employee {
  employeeId: number;
  employeeName: string;
  age: number;
  gender: string; // Changed to string type
  rate: number;
  salary: number;

  constructor(
    employeeId: number,
    employeeName: string,
    age: number,
    gender: string, // Changed to string type
    rate: number
  ) {
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.age = age;
    this.gender = gender;
    this.rate = rate;
    this.salary = this.calSalary(); // Calculate salary immediately in the constructor
  }

  displayData() {
    console.log("Mã nhân viên:", this.employeeId);
    console.log("Tên nhân viên:", this.employeeName);
    console.log("Tuổi:", this.age);
    console.log("Giới tính:", this.gender);
    console.log("Hệ số lương:", this.rate);
    console.log("Lương:", this.salary);
  }
  calSalary(): number {
    return this.rate * 1300000;
  }
}
