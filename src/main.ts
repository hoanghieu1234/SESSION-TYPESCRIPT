import { main } from "./BT-1";
import { LinkedListData } from "./BT-4";

const linkedList = new LinkedListData();
linkedList.unshift("Node 1");
linkedList.push("Node 2");
linkedList.push("Node 3");
linkedList.push("Node 4");
console.log("Head:", linkedList.getHead()); // Output: Head: Node 1
console.log("Tail:", linkedList.getTail()); // Output: Tail: Node 3
linkedList.print(); // Output: Node 1, Node 2, Node 3
