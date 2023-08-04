export const learnTypeGuard = () => {
  interface IHome {
    name: string;
    address: string;
    price: number;
  }

  const vinHome: IHome = {
    name: "VinHome",
    address: "Hà Nội",
    price: 10,
  };

  const age: number = 18;
  // console.log("age", typeof age);

  // console.log("home", typeof vinHome);

  class Home implements IHome {
    name: string;
    address: string;
    price: number;
    constructor(name: string, address: string, price: number) {
      this.name = name;
      this.address = address;
      this.price = price;
    }
  }
  class Hotel implements IHome {
    name: string;
    address: string;
    price: number;
    constructor(name: string, address: string, price: number) {
      this.name = name;
      this.address = address;
      this.price = price;
    }
  }
  // khởi tạo giá trị => constructor
  const vinCity = new Home("VinCity", "Hà Nội", 1000);
  // Khởi tạo IHotel
  const hotel = new Hotel("Đà Nẵng", "Thanh Khuê", 2000);
  type House = Home | Hotel;
  const house1: House = vinCity;
  const house2: House = hotel;

  function isCheckHouse(instace: House) {
    if (instace instanceof Hotel) {
      return console.log("Check", true);
    }
    console.log(false);
  }
  isCheckHouse(house2);
  // console.log(
  //   "VinCity có được khởi tạo từ class home không:",
  //   vinCity instanceof Home
  // );

  /** in: kiểm tra key */
  interface ITodo {
    id: number;
    name: string;
    completed: boolean;
  }
  const todo: ITodo = {
    id: 1,
    name: "Hiếu",
    completed: true,
  };
  console.log("name" in todo ? "key thì là true" : "value là false"); // Kiểm tra key mới đúng
  console.log("check", todo.hasOwnProperty("id"));

  // Ép kiểu dữ liệu type casting
  // Generics
  // as
  for (let key in todo) {
    const todoKey = key as keyof ITodo;
    console.log(todo[todoKey]);
  }
  // ? and ??
  interface IMacBook {
    name: string;
    price: number | null | boolean | undefined;
    os: string;
    color?: string; // ? có hoặc ko cũng được
  }
  let priceLaptop: number | null | boolean | undefined = undefined;
  const macBookAir: IMacBook = {
    name: "MacBookAir 2017",
    price: priceLaptop ?? 20000, // Nếu priceLaptop có thì sẽ lấy giá trị nó, ngược lại trường hợp null hoặc underfine sẽ lấy 20000
    os: "MacOs",
  };
  console.log(macBookAir.color);
};
