/*
  Generics: Đơn giản hiểu là kiểu dữ liệu nhận vào là một tham số và trả về kiểu dữ liệu tưng ứng
*/

// Được thể hiện qua dấu <>

interface IStudents {
  id: number | string;
  name: string;
  className: string;
  age: number;
}
// cách thông thường
const ListStudent: IStudents[] = [
  { id: 1, name: "Nguyễn Hoàng Hiếu", className: "A", age: 23 },
  { id: 2, name: "Hiếu", className: "B", age: 24 },
];

// Cách generics
const ListStudents: Array<IStudents> = [
  { id: 1, name: "Nguyễn Hoàng Hiếu", className: "A", age: 23 },
  { id: 2, name: "Hiếu", className: "B", age: 24 },
];

const numberList: Array<number | string> = [1, 2, 3, 4, 5, ""];
const stringList: Array<string> = ["a", "b", "c", "d", "e", "f"];

const configList: Array<"abc" | "cba"> = ["abc", "cba"];

function Calculate<T extends number | string>(val1: T, val2: T): T {
  if (typeof val1 === "number" && typeof val2 === "number") {
    return (val1 + val2) as T;
  } else {
    return (val1 + "" + val2) as T;
  }
}
Calculate<number>(1, 2);
Calculate<string>("1", "2");
Calculate(1, 2);

export function studentList<T, j>(name: T, age: j) {
  console.log(name, age);
  console.log(typeof name, typeof age);
}
