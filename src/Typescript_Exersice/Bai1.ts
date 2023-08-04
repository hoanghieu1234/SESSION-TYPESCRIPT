export const Bai1 = () => {
  type User = {
    name: string;
    age: number;
    occupation: string;
  };
  const users: User[] = [
    { name: "Nguyễn Hoàng Hiếu", age: 23, occupation: "Sinh Viên" },
    { name: "Hiếu Nguyễn", age: 22, occupation: "Bán cà phê" },
  ];
  function logPerson(user: User) {
    console.log(`- ${user.name} - ${user.age}`);
  }
  console.log("Users:");
  users.forEach(logPerson);
};
