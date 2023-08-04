//build mot kieu du kieu ll
interface INodeLL {
  data: any;
  pointer: INodeLL | null;
}

class NodeLinkedList implements INodeLL {
  data: any;
  pointer: INodeLL | null;
  constructor(data: any) {
    this.data = data;
    this.pointer = null;
  }
}

export class LinkedListData {
  private head: INodeLL | null; // Node đầu
  private tail: INodeLL | null; // Node cuối
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //build ra nhung phuong thuc thang array minh cung co , trả về node đầu tiền trong danh sách
  getHead(): INodeLL | null {
    if (this.head == null) {
      return null;
    }
    return this.head.data;
  }
  // Trả về node cuối trong danh sách
  getTail(): INodeLL | null {
    if (this.head == null) {
      return null;
    }
    let tail = this.head;
    while (tail?.pointer != null) {
      tail = tail.pointer;
    }
    return tail.data;
  }

  //insertHead
  // Thêm node mới vào đầu danh sách.
  // Nếu danh sách trống, node mới sẽ trở thành node đầu tiên.
  // Nếu node không trống, node mới sẽ trỏ tới node đầu tiên hiện tại và trở thành node đầu tiên.
  unshift(newData: any) {
    const newNode = new NodeLinkedList(newData);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.pointer = this.head;
    this.head = newNode;
  }

  //insertTail
  // Thêm 1 node vào cuối danh sách.
  // Nếu danh sách trống, node mới sẽ thành node đầu tiên.
  // Nếu danh sách ko trống, chúng ta sẽ tìm node cuối cùng và thêm node mới vào đó.
  push(data: any) {
    if (this.head == null) {
      const newData = new NodeLinkedList(data);
      this.head = newData;
      return;
    }
    let tail = this.head; // Nếu ko rỗng gán node đầu cho tail để lọc qua tìm thằng cuối cùng
    while (tail?.pointer != null) {
      tail = tail.pointer;
      // console.log("tail", tail);
    }
    tail.pointer = new NodeLinkedList(data);
    return this.head;
  }
  print() {
    //kiểm tra xem danh sách có bị null hay không ?
    if (this.head == null) return;
    //tạo một giá trị mới để thực hiện việc hiện thị bằng việc trỏ tới các node
    //ví dụ array thì mình phải lặp qua từng phần tử
    //object thì đơn giản thì chấm tới là được
    // Hiển thị các giá trị của các node trong danh sách liên kết bằng cách duyệt qua từng node và in giá trị của chúng.
    let current = this.head;

    while (current?.pointer != null) {
      console.log("data", current.data);
      current = current.pointer;
    }
    return this.head;
  }
}
