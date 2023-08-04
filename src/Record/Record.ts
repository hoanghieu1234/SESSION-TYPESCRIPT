// Record<Keys,Type>
// Công dụng của nó là gì: đơn giản hiểu tập hợp các Keys truyền vào làm key của một obj mới.
// keys: tập hợp các kiểu chuỗi nào đó được viết theo union type
// Type: kiểu interface => value của obj

export const learnRecord = () => {
  interface ICar3 {
    model: string;
    color: string;
    price: number;
  }
  type Supplier = "BWM" | "Mec" | "Audi";

  class Car implements ICar3 {
    model: string;
    color: string;
    price: number;
    constructor(model: string, color: string, price: number) {
      this.model = model;
      this.color = color;
      this.price = price;
    }
    priceInfo(obj: Record<Supplier, ICar3>) {
      console.log(obj);

      return obj;
    }
  }
  const carSmall = new Car("BMW", "Red", 200);
  const carBig = new Car("BMW", "Blue", 300);
  const carRed = new Car("BMW", "Green", 400);
  carSmall.priceInfo({ BWM: carSmall, Mec: carBig, Audi: carRed });
};
