// const fullName: string = "Nguyen Hoang Hieu";
// console.log("hello world!", fullName);

// datatype: tường minh (nguyên thủy) => string, number, boolean, null, symbol
// reference type (tham chiếu) => object ,function, array,
// any, unknow, never ,maptype

// Explicit type => khai báo kiểu dữ liệu tường minh

// const fullName: string = "Dong Bong";
// const age: number = 25;
// const isGender: boolean = true;

//Infered Type => Ngầm định hiểu kiểu dữ liệu
// const fullName2 = "Dong Bo";
// let fullName3 = "Dong Bao";

// Static checking type
// const fullName: any = "any";
// console.log(fullName, "fullname");

// So sánh kiểu dữ liệu

// const age: number = 23;
// const age2: number = 23;

// console.log("Kiểm tra", age == age2);

// const student: object = {
//   name: "Nguyen Hoang Hieu",
//   age: 29,
// };
// console.log("student", student);

// const studentList: Array<number> = [1, 2, 3, 4, 5];
// console.log(studentList, "studentList");

// const itemList: Array<any> = [{},"",1];

// const calcNumber = (number1: number, number2: number): any => {
//   console.log(number1 + number2);
//   return "abc";
// };

// Kiểm tra số tăng dần
// const inCreasingNumber = (n: number): boolean => {
//   const digits = n.toString().split(""); // Chuyển số thành chuỗi.

//   for (let i = 0; i <= digits.length - 1; i++) {
//     // So sánh chữ số liền kề để kiểm tra tăng dần
//     if (parseInt(digits[i]) >= parseInt(digits[i + 1])) {
//       return false; // Nếu chữ số hiện tại không nhỏ hơn chữ số kế tiếp,trả về false
//     }
//   }
//   return true;
// };
// // Ví dụ sử dụng hàm
// console.log(inCreasingNumber(123)); // Output:true
// console.log(inCreasingNumber(54321)); // Output:false
// console.log(inCreasingNumber(1357)); // Output:true
// console.log(inCreasingNumber(9870)); // Output:false

// // Kiểm tra số giảm dần
// const deCreasingNumber = (n: number): boolean => {
//   const digits = n.toString().split(""); // Chuyển số thành chuỗi.

//   for (let i = 0; i <= digits.length - 1; i++) {
//     // So sánh chữ số liền kề để kiểm tra tăng dần
//     if (parseInt(digits[i]) >= parseInt(digits[i - 1])) {
//       return false; // Nếu chữ số hiện tại không nhỏ hơn chữ số kế tiếp,trả về false
//     }
//   }
//   return true;
// };

// // Ví dụ sử dụng hàm
// console.log(deCreasingNumber(123)); // Output:false
// console.log(deCreasingNumber(54321)); // Output:true
// console.log(deCreasingNumber(1357)); // Output:false
// console.log(deCreasingNumber(9870)); // Output:true

// const isIncreasingWithStep = (n: number, step: number): boolean => {
//   let lastDigit = n % 10;
//   n = Math.floor(n / 10);

//   while (n > 0) {
//     const currentDigit = n % 10;
//     const diff = currentDigit - lastDigit;

//     if (diff !== step && diff !== -step) {
//       return false;
//     }

//     lastDigit = currentDigit;
//     n = Math.floor(n / 10);
//   }

//   return true;
// };

// // Ví dụ sử dụng hàm
// console.log(isIncreasingWithStep(123, 1)); // Output: true (1-2=1, 2-3=1)
// console.log(isIncreasingWithStep(7531, 2)); // Output: true (7-5=2, 5-3=2, 3-1=2)
// console.log(isIncreasingWithStep(1357, 2)); // Output: true (1-3=2, 3-5=2, 5-7=2)
// console.log(isIncreasingWithStep(9870, 3)); // Output: fal,se (9-8=1, 8-7=1, 7-0=7)

// function maxSubarraySum(nums: number[]): number[] {
//   if (!nums.length) {
//     return [];
//   }

//   let maxSum = nums[0]; // tổng lớn nhất
//   let currentSum = nums[0]; // sum hiện tại
//   let startIndex = 0; // chỉ số bắt đầu
//   let endIndex = 0; // chỉ số kết thúc
//   let currentStartIndex = 0;

//   for (let i = 1; i < nums.length; i++) {
//     const num = nums[i];
//     // Nếu tổng hiện tại cùng số tiếp theo lớn hơn số tiếp theo thì tiếp tục tính tổng
//     if (num > currentSum + num) {
//       currentSum = num;
//       currentStartIndex = i;
//     } else {
//       currentSum += num;
//     }
//     // So sánh và cập nhật dãy con có tổng lớn nhất
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       startIndex = currentStartIndex;
//       endIndex = i;
//     }
//   }

//   return nums.slice(startIndex, endIndex + 1);
// }

// // Test
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubarraySum(nums)); // Output: [4, -1, 2, 1]

// // Type alias
// type Student = string;

// let student: Student = "Dong Bong";

// type Car = {
//   name: string;
//   model: number;
//   color: string;
// };
// type ListCar = Car[];

// let oTo: Car = {
//   name: "BMW",
//   model: 2023,
//   color: "red",
// };

// const listCarBmw: ListCar = [{ name: "BMW 02", model: 1, color: "red" }];

// // Basic interface
// interface IPerson {
//   name: string;
//   age: number;
// }
// const hieu: IPerson = { name: "hieu", age: 23 };

// const listStudent: IPerson[] = [
//   { name: "Dong Bong", age: 25 },
//   { name: "hieu", age: 23 },
// ]; // 1 Mảng chứa các Obj

// console.log("listStudent", listStudent);

// // Union Type
// // const phone: string | number | boolean = true;

// // Khi mà sử dụng ở type alias

// type Phone = "iphone" | "samsung";

// const phone: Phone = "samsung"; // 2 là sam sung

// // enum
// // khi ràng buộc data 1 chiều
// // ENUM number => 0,1,2,3,4 => 2 chiều
// enum fetchData {
//   PENDING,
//   FULFILLED,
//   RESOLVED,
//   REJECTED,
// }
// console.log(fetchData[0]);
// console.log(fetchData.FULFILLED);

// // Enum string => 1 chiều
// enum TypeReturn {
//   SUCCESS = "SUCCESS",
//   ERROR = "ERROR",
// }
// console.log(TypeReturn.SUCCESS);

// type Person = {
//   name: string;
//   age?: number;
// };
// const printPerson = (name: string | number, age?: number | string): Person => {
//   return {
//     name: "Hiếu",
//   };
// };
// printPerson("Nguyễn Hoàng Hiếu");
// Trả về kiểu void

// SESSION 2
import {
  users,
  problem01,
  problem02,
  problem03,
  problem04,
  problem05,
  problem0601,
  problem0602,
  problem0603,
  problem07,
} from "./data/data";
// console.log(problem01(users));
// console.log(problem02(users));
// console.log(problem03(users), "bài 3");
// console.log(problem04(users), "bài 4");
// console.log(problem05(users), "bài 5");
// console.log(problem0601(users), "bài 6");
// console.log(problem0602(users), "bài 6 02");
// console.log(problem0603(users), "bài 6 03");
// console.log("bài 7 000", problem07(users));

import { same2 } from "./algo/Frequency.counter";
import { same3 } from "./algo/Frequency.counter";
import { checkAnagram } from "./algo/Frequency.counter";
import { charfrequency } from "./algo/Frequency.counter";
import { twoSum2 } from "./algo/Frequency.counter";
import { findLongestSubstring } from "./algo/Frequency.counter";
import { gameOOP } from "./oop/oop";
import { exerciseOOP } from "./oop/ExerciseOOP";
import { learnTypeGuard } from "./type-advance/typeGuard";
import { Func } from "./function/func";
import { learnRecord } from "./Record/Record";
import { Bai1 } from "./Typescript_Exersice/Bai1";
import { studentList } from "./Generics/generrics";

// console.time("same2");
// same2([1, 2, 1], [4, 4, 1]);
// console.timeEnd("same2");

// console.time("same3");
// same3([1, 2, 1], [4, 4, 1]);
// console.timeEnd("same3");

// console.time("checkAnagram");
// console.log(checkAnagram("listen", "silent"), "checkAnagram"); // Kết quả: true
// console.log(checkAnagram("hello", "world"), "checkAnagram"); // Kết quả: false
// console.timeEnd("checkAnagram");

// const inputString = "hello";
// const result = charfrequency(inputString);
// console.log(result, "charFrequency");
// console.time("charFrequency");
// console.timeEnd("charFrequency");

// Test với ví dụ
// const num = [2, 11, 15, 9];
// const target = 9;
// const result = twoSum2(num, target);
// console.log(result); // Output: { indices: [0, 1] }

// const inputString = "aabcbdeff";
// const longestSubstringLength = findLongestSubstring(inputString);
// console.log(
//   `The length of the longest substring with distinct characters is: ${longestSubstringLength}`
// );

// OOP
// learnOOP();
// gameOOP();
// exerciseOOP();
// learnTypeGuard();
// Func();
// learnRecord();
// Bai1();
studentList<string, number>("Hiếu", 23);
