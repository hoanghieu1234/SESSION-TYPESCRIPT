// export const learnOOP = () => {
//   // Khởi tạo instance
//   // const khaBanh = new IdolGioiTre("Khá Bảnh", 30, "Ảo thật đấy");
//   // console.log(khaBanh.sayViral());

//   // const tienBip = new IdolGioiTre("Tiến Bịp", 30, "Còn Cái Nịt");
//   // console.log(tienBip.sayViral());

//   // Khuôn Mẫu
//   // Kế Thừa (inheritance)
//   // đóng gói (encapsulation) => Phạm vi truy cập => access modifiers => public/private/protected/readonly
//   // đa hình (polymorphism) => cùng phương thức, có thể làm nhiều hành động khác nhau
//   // trừu tượng (abstraction) => ẩn đi các xử lí logic bên trong  và chỉ show ra bên ngoài những cái chức năng dễ hiểu
//   // ===> thể hiện qua typescript như thế nào

//   // class cha
//   class Human {
//     readonly body: string;
//     public gender: string;
//     protected nationality: string;

//     constructor(body: string, gender: string, nationality: string) {
//       this.body = body;
//       this.gender = gender;
//       this.nationality = nationality;
//     }

//     work(str: string) {
//       return `Hiện tại đang làm việc tại ${str}`;
//     }
//     // Tính đa hình
//     findLove() {
//       if (this.gender == "male") {
//         return "Đi tìm bạn gái";
//       } else {
//         return "Đi tìm bạn trai";
//       }
//     }
//     // set nationalityName(str: string) {
//     //   this.nationality = str;
//     // }
//     // get nationalityName(): string {
//     //   return this.nationality;
//     // }
//   }
//   // Tính kế thừa
//   class IdolGioiTre extends Human {
//     name: string;
//     age: number;
//     viral: string;

//     constructor(
//       name: string,
//       age: number,
//       viral: string,
//       body: string,
//       gender: string,
//       nationality: string
//     ) {
//       super(body, gender, nationality);
//       this.name = name;
//       this.age = age;
//       this.viral = viral;
//     }

//     // Protected thì set và get tới con được
//     set nationalityName(str: string) {
//       this.nationality = str;
//     }
//     get nationalityName(): string {
//       return this.nationality;
//     }

//     sayViral() {
//       return this.viral;
//     }
//   }
//   const hieuNguyen = new IdolGioiTre(
//     "hoanghieu",
//     23,
//     "hello",
//     "tay,chan,mieng",
//     "nam",
//     "cháu"
//   );
//   // console.log((hieuNguyen.nationalityName = "Hoàng Hiếu"));
//   console.log(hieuNguyen.findLove(), "hoàng hiếu");

//   const khaBanh = new IdolGioiTre(
//     "Khá Bảnh",
//     28,
//     "Tà lằng, tà lằng",
//     "cù lẳng",
//     "nữ",
//     "con"
//   );
//   console.log("Bảnh", khaBanh.findLove());
// };

// Bài tập 2
export const gameOOP = () => {
  // class cha
  class ManagerCharacter {
    readonly name: string;
    public role: string;
    protected attackDamage: number;
    private abilityPower: number;

    constructor(
      name: string,
      role: string,
      attackDamage: number,
      abilityPower: number
    ) {
      this.name = name;
      this.role = role;
      this.attackDamage = attackDamage;
      this.abilityPower = abilityPower;
    }

    set abilityPowerName(num: number) {
      this.abilityPower = num;
    }
    get abilityPowerName(): number {
      return this.abilityPower;
    }

    // khai báo với protected
    set attackDamageValue(num: number) {
      this.attackDamage = num;
    }

    get attackDamageValue(): number {
      return this.attackDamage;
    }

    displayInfo() {
      console.log(`Tên tướng: ${this.name}`);
      console.log(`Vai trò: ${this.role}`);
      console.log(`Sát thương vật lý: ${this.attackDamage}`);
      console.log(`Sát thương phép: ${this.abilityPower}`);
    }

    attack(target: ManagerCharacter) {
      console.log(`${this.name} tấn công ${target.name}`);
      // ... Hành động tấn công ...
    }
    calculateDamage(): number {
      //  Tính đa hình: Tính toán sát thương dựa trên thông số nhân vật
      return this.attackDamage + this.abilityPower;
    }
  }

  // class con mage kế thừa từ ManagerCharacter
  class Mage extends ManagerCharacter {
    mana: number;

    constructor(
      name: string,
      attackDamage: number,
      abilityPower: number,
      mana: number
    ) {
      super(name, "Pháp sư", attackDamage, abilityPower);
      this.mana = mana;
    }

    castSpell(target: ManagerCharacter) {
      console.log(`${this.name} sử dụng kỹ năng đặc biệt `);
      // ... Hành động sử dụng kỹ năng ...
    }
    // Ghi đè phương thức calculateDamage trong lớp Mage
    calculateDamage(): number {
      // Tính toán sát thương dựa trên thông số của nhân vật, có thể thêm các xử lý riêng cho Mage
      const mageBonusDamage = 30;
      return super.calculateDamage() + mageBonusDamage;
    }
  }

  // Sử dụng lớp ManagerCharacter và lớp Mage
  const ahri = new Mage("Ahri", 50, 80, 100);
  ahri.abilityPowerName = 200; // sử dụng set và get từ private

  const garen = new ManagerCharacter("Garen", "Đấu sĩ", 80, 20);
  garen.attackDamageValue = 100;

  ahri.displayInfo();
  garen.displayInfo();
  ahri.attack(garen);
  ahri.castSpell(garen);
  // Tính chỉ số sát thương của tương ahri
  const ahriDamage = ahri.calculateDamage();
  console.log(`Chỉ số sát thương của Ahri: ${ahriDamage}`);
  const garenDamage = garen.calculateDamage();
  console.log(`Chỉ số sát thương của garen: ${garenDamage}`);
};

// câu 4
// Lớp trừu tượng Skill
abstract class Skill {
  protected skillName: string;
  protected skillDamage: number;

  constructor(skillName: string, skillDamage: number) {
    this.skillName = skillName;
    this.skillDamage = skillDamage;
  }

  // Phương thức trừu tượng applySkill() để áp dụng kỹ năng
  abstract applySkill(caster: string, target: string): void;

  // Phương thức trừu tượng calculateSkillDamage() để tính toán sát thương của kỹ năng
  abstract calculateSkillDamage(): number;
}

// Lớp QSkill kế thừa từ lớp Skill
class QSkill extends Skill {
  constructor(skillDamage: number) {
    super("Q Skill", skillDamage);
  }

  applySkill(caster: string, target: string) {
    console.log(`${caster} thực hiện ${this.skillName} lên ${target}`);
    const damage = this.calculateSkillDamage();
    console.log(`Gây ra sát thương: ${damage}`);
  }

  calculateSkillDamage() {
    // Tính toán sát thương của QSkill
    return this.skillDamage * 1.5;
  }
}

// Lớp WSkill kế thừa từ lớp Skill
class WSkill extends Skill {
  constructor(skillDamage: number) {
    super("W Skill", skillDamage);
  }

  applySkill(caster: string, target: string) {
    console.log(`${caster} thực hiện ${this.skillName} lên ${target}`);
    const damage = this.calculateSkillDamage();
    console.log(`Gây ra sát thương: ${damage}`);
  }

  calculateSkillDamage() {
    // Tính toán sát thương của WSkill
    return this.skillDamage * 2;
  }
}

// Lớp ESkill kế thừa từ lớp Skill
class ESkill extends Skill {
  constructor(skillDamage: number) {
    super("E Skill", skillDamage);
  }

  applySkill(caster: string, target: string) {
    console.log(`${caster} thực hiện ${this.skillName} lên ${target}`);
    const damage = this.calculateSkillDamage();
    console.log(`Gây ra sát thương: ${damage}`);
  }

  calculateSkillDamage() {
    // Tính toán sát thương của ESkill
    return this.skillDamage;
  }
}

// Lớp RSkill kế thừa từ lớp Skill
class RSkill extends Skill {
  constructor(skillDamage: number) {
    super("R Skill", skillDamage);
  }

  applySkill(caster: string, target: string) {
    console.log(`${caster} thực hiện ${this.skillName} lên ${target}`);
    const damage = this.calculateSkillDamage();
    console.log(`Gây ra sát thương: ${damage}`);
  }

  calculateSkillDamage() {
    // Tính toán sát thương của RSkill
    return this.skillDamage * 3;
  }
}

// Sử dụng các kỹ năng
const ahri = "Ahri";
const garen = "Garen";

const qSkill = new QSkill(50);
const wSkill = new WSkill(70);
const eSkill = new ESkill(40);
const rSkill = new RSkill(100);

qSkill.applySkill(ahri, garen);
wSkill.applySkill(ahri, garen);
eSkill.applySkill(ahri, garen);
rSkill.applySkill(ahri, garen);

// Định nghĩa lớp cha hình học

// Định nghĩa lớp cha hình học
abstract class Shape {
  // Trường duy nhất là màu sắc
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  // Phương thức tính diện tích, cần được định nghĩa trong lớp con
  abstract getArea(): number;

  // Phương thức xuất thông tin
  displayInfo(): void {
    console.log(
      `This shape is ${this.color} and has an area of ${this.getArea()}.`
    );
  }
}

// Lớp con Circle kế thừa từ lớp Shape
class Circle extends Shape {
  // Trường bán kính
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  // Đa hình: Override phương thức getArea() cho Circle
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Reatangle extends Shape {
  private length: number;
  private width: number;

  constructor(color: string, length: number, width: number) {
    super(color);
    this.length = length;
    this.width = width;
  }

  // Đa hình
  getArea(): number {
    return this.length * this.width;
  }
}

// Chương trình thực thi
const circle = new Circle("yellow", 10);
const retangle = new Reatangle("red", 4, 5);
circle.displayInfo();
retangle.displayInfo();
