// Partital sẽ tạo ra định dạng kiểu dữ liệu mới và biến tất cả thành optional
// Partial<Type>
// Partial là key word
// Type chính là định dạng kiểu => interface
// Đối với backend
export const learnUtilityType = () => {
  interface ICar1 {
    model: string;
    color: string;
    price: number;
  }
  class Car implements Partial<ICar1> {
    model: string;
    // color: string;
    price: number;
    constructor(model: string, color: string, price: number) {
      this.model = model;
      // this.color = color;
      this.price = price;
    }
  }
  //demo class, Đối với Front end
  const car = (car: ICar1, carOptional: Partial<ICar1>) => {
    return {
      ...car,
      ...carOptional,
    };
  };

  car({ model: "BMW", price: 200, color: "red" }, { color: "blue" });
};
