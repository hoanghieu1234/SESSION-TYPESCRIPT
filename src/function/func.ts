export const Func = () => {
  interface Person {
    name: string;
    age: number;
    speak: () => number;
  }

  const obj: Person = {
    name: "Hiếu",
    age: 23,
    speak: () => {
      console.log("trả về number");
      return 1; // Vì speak trả về number
    },
  };
  console.log(obj);
  class inForm implements Person {
    name: string;
    age: number;
    speak: () => number;
    constructor(name: string, age: number, callBack: () => number) {
      this.name = name;
      this.age = age;
      this.speak = callBack;
    }
  }
  const calcTotal = () => {
    return 1;
  };
  const obj1 = new inForm("Hiếu", 23, calcTotal);
  console.log(obj1.speak());

  // class Inform implements Person {}
  type Text1 = string | number;

  type Text2 = {
    name: string;
    age: number;
    callBack: () => void;
  };
  type Func = (a: string) => string[];

  const test: Func = (str: string) => {
    return ["Khoa", "Vu"];
  };
};
