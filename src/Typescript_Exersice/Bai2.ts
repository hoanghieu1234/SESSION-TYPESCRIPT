export const Bai2 = () => {
  interface User {
    name: string;
    age: number;
    occupation: string;
  }
  interface Admin {
    name: string;
    age: number;
    role: string;
  }
  type Person = User | Admin;
  const persons: Person[] = [
    { name: "Nguyễn Hoàng Hiếu", age: 23, occupation: "Sinh Viên" },
    { name: "Hoàng Hiếu", age: 22, occupation: "Developer" },
    { name: "Hiếu Admin", age: 24, role: "Admin" },
    { name: "Hoàng Hiếu Admin", age: 25, role: "User" },
  ];
};
