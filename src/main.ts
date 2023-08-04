import { Main } from "./BT4";
import { MainEx5 } from "./BT5";
const student = new Main();
// student.addStudent();
// // student.displayStudents();
// // student.deleteStudent();
// student.updateStudent();

const handleButtonClick = () => {
  MainEx5.inputData();
  MainEx5.main();
};

// Khi nhấn nút, gọi hàm handleButtonClick
const buttonElement = document.querySelector("button");
if (buttonElement) {
  buttonElement.addEventListener("click", () => {
    handleButtonClick();
  });
} else {
  console.error("Button element not found!");
}
