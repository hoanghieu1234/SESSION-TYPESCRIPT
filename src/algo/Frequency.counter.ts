/**
 * Viết một hàm same nhận vào 2 tham số là 2 mảng, kiểm
  tra xem các phần tử trong mảng đầu tiên có bình phương
  bằng với từng phần tử trong mảng thứ hai hay không. 

  ---- Phân tích ----
  @input : 2 mảng, => 2 chứa số nguyên, => không giới hạn  các phần tử 
  @output : trả về kiểu dữ liệu boolean => if mảng đầu bình phương = mảng thứ 2 => true => fasle  
 */

// cach 1: ko sử dụng frequency count

export const same = (arr1: number[], arr2: number[]): boolean => {
  //so sánh độ dài của mảng => nếu ko bằng nhau thì return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  //sắp sếp
  arr1.sort((a, b) => a - b);
  console.log("mang da sap xep arr1", arr1);
  arr2.sort((a, b) => a - b);
  console.log("mang da sap xep arr2", arr2);
  //so sanh độ dài của mảng => nếu ko bằng nhau thì return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] ** 2 !== arr2[i]) {
      return false;
    }
  }

  return true;
};

//cach 2: frequency count

interface Frequency {
  [key: number]: number;
}
export const same2 = (arr1: number[], arr2: number[]): boolean => {
  //so sánh độ dài của mảng => nếu ko bằng nhau thì return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // tao store de luu  tru
  let frequency1: Frequency = {};
  let frequency2: Frequency = {};
  //dem
  for (let value of arr1) {
    frequency1[value] = (frequency1[value] || 0) + 1;
  }
  for (let value of arr2) {
    frequency2[value] = (frequency2[value] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!((+key) ** 2 in frequency2)) {
      return false;
    }
    if (frequency2[(+key) ** 2] !== frequency1[key]) {
      //== 1 // ==2 ) {
      return false;
    }
    return true;
  }

  return true;
};

export const same3 = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter: { [key: number]: number } = {};

  // Đếm số lần xuất hiện của các giá trị trong cả hai mảng arr1 và arr2
  for (let val of arr1) {
    const squaredVal = val ** 2;
    frequencyCounter[squaredVal] = (frequencyCounter[squaredVal] || 0) + 1;
  }

  // Kiểm tra xem mỗi số trong arr2 có là bình phương của một số trong arr1 hay không
  for (let val of arr2) {
    if (!frequencyCounter[val]) {
      return false;
    }
    frequencyCounter[val]--;
  }

  return true;
};

/*
  Bài tập 1: Check Anagram
  Viết một hàm nhận vào hai chuỗi và kiểm tra xem hai chuỗi có phải là anagram (có cùng số lượng các ký tự) hay không.
*/

// Ví dụ input:
// 1."listen","silent"
// 2."hello","world"

interface charCount {
  [key: string]: number;
}
export const checkAnagram = (string1: string, string2: string): boolean => {
  // Chuyển tất cả về chữ thường để so sánh dễ dàng
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  // Nếu độ dài của 2 chuỗi khác nhau thì không thế so sánh
  if (string1.length != string2.length) {
    return false;
  }

  // Đếm số lượng trong chuỗi 1
  const charCount: charCount = {};
  for (const char of string1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // So sánh số lượng các ký tự trong chuỗi 2 với chuỗi 1
  for (const char of string2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char] -= 1;
  }
  return true;
};

/*
  Bài tập 2: Frequency of Characters
  Viết một hàm nhận vào một chuỗi và trả về một đối tượng chứa số lần xuất hiện của từng ký tự trong chuỗi.
  ví dụ:	 input: "hello"
  output: { h: 1, e: 1, l: 2, o: 1 }
*/

// Type alias
type CharFrequency = { [key: string]: number };

export const charfrequency = (str: string): CharFrequency => {
  // Khởi tạo các đối tượng để lưu trữ số lần xuất hiện trong chuỗi
  let charCount: CharFrequency = {};

  for (let char of str) {
    // Nếu ký tự đã tồn tạo trong đối tượng charCount thì tăng lên 1`
    if (charCount[char]) {
      charCount[char]++;
    } else {
      // Nếu chưa tồn tại trong charCount, thì tạo mới với giá trị bằng 1x
      charCount[char] = 1;
    }
  }
  // Trả về đối tượng charCount chứa số lần xuất hiện của từng ký tự trong chuỗi đầu vào.
  return charCount;
};

/*
Bài tập 3: Two Sum
Viết một hàm nhận vào một mảng số nguyên và một số nguyên target. Hàm này trả về một mảng chứa hai chỉ số của các phần tử trong mảng sao cho tổng của hai phần tử đó bằng target.
ví dụ:	 input: [2, 7, 11, 15], 9	
output: [0, 1]
*/

interface Frequency3 {
  [key: number]: number;
}

//Khai báo hàm twosum và xác định đầu vào và kiểu trả về sử dụng typeScript
export const twoSum2 = (array: number[], target: number): number[] => {
  const numMap: Frequency3 = {};
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[array[i]] = i;
  }
  return [];
};

// Bài 8 : Session 3
interface Frequencybt8 {
  [key: string]: number;
}
export const findLongestSubstring = (str: string): number => {
  let left = 0;
  let maxLength = 0;

  const charFrequency: Frequencybt8 = {};

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];
    charFrequency[currentChar] = (charFrequency[currentChar] || 0) + 1;

    while (charFrequency[currentChar] > 1) {
      const leftChar = str[left];
      charFrequency[leftChar] -= 1;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
