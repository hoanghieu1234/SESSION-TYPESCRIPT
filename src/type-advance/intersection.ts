// Đối với Interface
// Giống như extends
interface IStudent {
  id: number | string;
  name: string;
  className: string;
}
interface ITeacher {
  id: number;
  name: string;
  age: number;
}
interface IBusinessman {
  work: string;
}

type Human = IStudent & ITeacher & IBusinessman;

const Info: Human = {
  id: 1,
  name: "Hoàng Hiếu",
  age: 23,
  className: "JS 23-03-15",
  work: "developer",
};

// Đổi type: có kiểu dữ liệu nguyên thủy thì sẽ lấy điểm giao
type ICar = number | string;
type ISupplier = number | boolean;
type ICarSupplier = ICar & ISupplier;

const Bmw: ICarSupplier = 200;
