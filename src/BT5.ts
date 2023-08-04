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
    // Display all employee information
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

export class MainEx5 {
  static listEmployee: Employee[] = new Array(5);

  static inputData() {
    for (let i = 0; i < MainEx5.listEmployee.length; i++) {
      const employeeId = Number(prompt("Nhập mã nhân viên:") || 0);
      if (employeeId === 0) break;

      const employeeName = prompt("Nhập tên nhân viên:") || "";
      if (employeeName === null) break;

      const age = Number(prompt("Nhập tuổi:") || 0);
      if (age === 0) break;

      const gender = prompt("Nhập giới tính:") || "";
      if (gender === null) break;

      const rate = Number(prompt("Nhập hệ số lương:") || 0);
      if (rate === 0) break;

      // Tạo đối tượng Employee từ các giá trị nhập vào
      const employee = new Employee(
        employeeId,
        employeeName,
        age,
        gender,
        rate
      );

      // Thêm đối tượng Employee vào mảng listEmployee
      MainEx5.listEmployee[i] = employee;
    }
  }

  static main() {
    // Gọi phương thức inputData() để nhập thông tin cho các Employee
    MainEx5.inputData();
    for (const employee of MainEx5.listEmployee) {
      employee.displayData();
      console.log("=====================");
    }
  }
}
