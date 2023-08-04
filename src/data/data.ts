// DO NOT EDIT users
type Users = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  age: number;
  salary: number;
}[];

export const users: Users = [
  {
    id: 1,
    first_name: "Eamon",
    last_name: "Harhoff",
    email: "eharhoff0@imageshack.us",
    gender: "Male",
    age: 76,
    salary: 18888,
  },
  {
    id: 2,
    first_name: "Laney",
    last_name: "Whittam",
    email: "lwhittam1@issuu.com",
    gender: "Female",
    age: 42,
    salary: 15018,
  },
  {
    id: 3,
    first_name: "Lynett",
    last_name: "Twinberrow",
    email: "ltwinberrow2@gov.uk",
    gender: "Female",
    age: 99,
    salary: 13343,
  },
  {
    id: 4,
    first_name: "Madella",
    last_name: "Kliesl",
    email: "mkliesl3@ft.com",
    gender: "Female",
    age: 56,
    salary: 5248,
  },
  {
    id: 5,
    first_name: "Simona",
    last_name: "Knee",
    email: "sknee4@sciencedaily.com",
    gender: "Female",
    age: 61,
    salary: 14376,
  },
  {
    id: 6,
    first_name: "Cord",
    last_name: "McMurthy",
    email: "cmcmurthy5@wordpress.org",
    gender: "Male",
    age: 86,
    salary: 9514,
  },
  {
    id: 7,
    first_name: "Obed",
    last_name: "Beaven",
    email: "obeaven6@msn.com",
    gender: "Male",
    age: 39,
    salary: 18463,
  },
  {
    id: 8,
    first_name: "Elayne",
    last_name: "Smeuin",
    email: "esmeuin7@wsj.com",
    gender: "Female",
    age: 96,
    salary: 19907,
  },
  {
    id: 9,
    first_name: "Robin",
    last_name: "Picford",
    email: "rpicford8@typepad.com",
    gender: "Female",
    age: 55,
    salary: 14975,
  },
  {
    id: 10,
    first_name: "Patsy",
    last_name: "Ochterlonie",
    email: "pochterlonie9@latimes.com",
    gender: "Female",
    age: 93,
    salary: 9716,
  },
];

// YOUR CODE HERE
export function problem01(users: Users): string[] {
  const FullName: string[] = [];
  users.forEach((user) => {
    const fullName = `${user.first_name + " " + user.last_name}`;
    FullName.push(fullName);
  });
  return FullName; // []
}

export function problem02(users: Users): any[] {
  return users.filter((user) => user.gender === "Male" && user.age < 40);
}

export function problem03(users: Users): string[] {
  const fullNames: string[] = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    fullNames.push(`${user.first_name} ${user.last_name}`);
  }
  return fullNames;
}

export function problem04(users: Users) {
  // return new array of user where the key of each record in new array is camelCase
  return users.map((user) => ({
    idUser: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    emailUser: user.email,
    genderUser: user.gender,
    ageUser: user.age,
    salaryUser: user.salary,
  }));
}

export function problem05(users: Users): number {
  // return the average age in users
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const avarage = totalAge / users.length;
  return avarage;
}

export function problem0601(users: Users): string[] {
  // return an array of full name using Array.prototype.reduce
  return users.reduce((fullNames: string[], user) => {
    const fullName = `${user.first_name} ${user.last_name}`;
    return fullNames.concat(fullName);
  }, []);
}

export function problem0602(users: Users): Users {
  // return an array of user which is male and age under 40 using Array.prototype.reduce
  let result: Users = []; // Users = [] là kiểu dữ liệu
  result = users.reduce((total: Users, item) => {
    if (item.age < 40 && item.gender === "Male") {
      return total.concat(item);
    }
    return total;
  }, []);
  return result;
}

export function problem0603(users: Users) {
  // return new array where each record is in camelCase using Array.prototype.reduce
  const camelCase: string[] = users.reduce((accumulator: any[], user) => {
    const newUser = {
      idUser: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      emailUser: user.email,
      genderUser: user.gender,
      ageUser: user.age,
      salaryUser: user.salary,
    };
    return [...accumulator, newUser];
  }, []);
  return camelCase;
}
interface IUsers {
  [key: string]: any;
}
// function problem0603(users: IUsers[]): IUsers[] {
//   // return new array where each record is in camelCase using Array.prototype.reduce
//   function toCamelCase(str: string) {
//     return str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
//   }
//   return users.reduce((i: IUsers[], user) => {
//     const newUser: IUsers = {};
//     Object.keys(user).forEach((key) => {
//       const camelCaseKey = toCamelCase(key);
//       newUser[camelCaseKey] = user[key];
//     });

//     return i.concat(newUser);
//   }, []);
// }
export function problem07(users: Users): Users {
  if (users.length === 0) {
    // Nếu mảng users rỗng, trả về mảng rỗng ngay lập tức
    return [];
  }

  // Tạo bản sao của mảng users bằng cách sử dụng slice()
  const sortedUsers = users.slice();

  // Sắp xếp mảng sortedUsers theo trường first_name tăng dần
  sortedUsers.sort((a: any, b: any) =>
    a.first_name.localeCompare(b.first_name)
  );

  return sortedUsers;
}

function faMap(array: number[], fn: Function) {
  // implement faMap that works like Array.prototype.map
}

// console.log(faMap([1, 2, 3], (item, index) => item += 2));

function faFilter(array: number[], predicate: Function) {
  // implement faMap that works like Array.prototype.filter
}

function faReduce(array: number[], fn: Function, defaultValue: number) {}

// console.log(faReduce([1, 2, 3], (p, c, i) => p += c));

function problem1101(array: number[], fn: Function) {
  // map array using faReduce
}

function problem1102(array: number[], fn: Function) {
  // filter array using faReduce
}

function problem1201(array: number[]) {
  // implement sum array with faReduce
}

function problem1202(array: number[]) {
  // implement product array with faReduce
}

function problem1203(array: number[]) {
  // implement reverse array with faReduce
}
