import readline from "readline";

export const exerciseOOP = () => {
  class Circle {
    private _color: string;
    private _radius: number;

    constructor(color: string, radius: number) {
      this._color = color;
      this._radius = radius;
    }

    set colorName(color: string) {
      this._color = color;
    }
    get colorName(): string {
      return this._color;
    }

    set radiusValue(radius: number) {
      this._radius = radius;
    }
    get radiusValue(): number {
      return this._radius;
    }
    chuvi(): number {
      return 2 * Math.PI * this._radius;
    }
    dientich(): number {
      return Math.PI * this._radius * this._radius;
    }
    inputData(): void {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question("Nhập bán kính: ", (radius) => {
        this._radius = parseFloat(radius);
        rl.question("Nhập màu sắc: ", (color) => {
          this._color = color;
          rl.close();
          // Sau khi nhập liệu, gọi phương thức hiển thị thông tin:
          this.displayData();
          console.log("Chu vi:", this.chuvi());
          console.log("Diện tích", this.dientich());
        });
      });
    }
    displayData(): void {
      console.log("Bán kính:", this._radius);
      console.log("Màu sắc:", this._color);
    }
  }
  const circle = new Circle("", 0);
  circle.inputData();

  // Bài 2 - Lớp QuadraticEquation
  class QuadraticEquation {
    private _a: number;
    private _b: number;
    private _c: number;

    constructor(a: number, b: number, c: number) {
      this._a = a;
      this._b = b;
      this._c = c;
    }

    get valueA(): number {
      return this._a;
    }

    get valueB(): number {
      return this._b;
    }

    get valueC(): number {
      return this._c;
    }
    setValueNumber(a: number, b: number, c: number): void {
      this._a = a;
      this._b = b;
      this._c = c;
    }

    // Phương thức tính delta
    getDiscriminant(): number {
      return this._b * this._b - 4 * this._a * this._c;
    }

    // Phương thức 1 nghiệm
    getRoot1(): number {
      const delta = this.getDiscriminant();
      console.log("delta:", delta);

      if (delta >= 0) {
        return (-this._b + Math.sqrt(delta)) / (2 * this._a);
      } else {
        return 0;
      }
    }

    // Phương thức tính nghiệm 2
    getRoot2(): number {
      const delta = this.getDiscriminant();
      if (delta >= 0) {
        return (-this._b - Math.sqrt(delta)) / (2 * this._a);
      } else {
        return 0;
      }
    }
  }
  // Ví dụ sử dụng lớp QuadraticEquation:
  const equation = new QuadraticEquation(1, -3, 2);
  const delta = equation.getDiscriminant();
  if (delta >= 0) {
    const root1 = equation.getRoot1();
    const root2 = equation.getRoot2();
    console.log("Nghiệm 1:", root1); // Output: Nghiệm 1: 2
    console.log("Nghiệm 2:", root2); // Output: Nghiệm 2: 1
  } else {
    console.log("Phương trình không có nghiệm thực.");
  }

  // Bài 3 - Thiết kế Fan to mô tả về cái quạt
  enum FanSpeed {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3,
  }
  class Fan {
    private _speed: FanSpeed;
    private _on: boolean;
    private _radius: number;
    private _color: string;

    constructor(speed: FanSpeed, on: boolean, radius: number, color: string) {
      this._speed = speed;
      this._on = on;
      this._radius = radius;
      this._color = color;
    }
    get speed(): FanSpeed {
      return this._speed;
    }
    set speed(speed: FanSpeed) {
      this._speed = speed;
    }

    get on(): boolean {
      return this._on;
    }
    set on(on: boolean) {
      this._on = on;
    }

    get radius(): number {
      return this._radius;
    }
    set radius(radius: number) {
      this._radius = radius;
    }

    get color(): string {
      return this._color;
    }
    set color(color: string) {
      this._color = color;
    }

    toString(): string {
      if (this._on) {
        return `Speed: ${FanSpeed[this._speed]}, Radius: ${
          this._radius
        }, Color: ${this._color}, Fan is on`;
      } else {
        return `Speed: ${FanSpeed[this._speed]}, Radius: ${
          this._radius
        }, Color: ${this._color}, Fan is off`;
      }
    }
  }
  const fan1 = new Fan(FanSpeed.FAST, true, 10, "white");
  console.log(fan1.toString()); // Output: Speed: FAST, Radius: 10, Color: white, Fan is on

  const fan2 = new Fan(FanSpeed.MEDIUM, false, 20, "red");
  console.log(fan2.toString()); // Output: Speed: MEDIUM, Radius: 20, Color: red, Fan is off
  // class Fan {
  //   static readonly SLOW = 1;
  //   static readonly MEDIUM = 2;
  //   static readonly FAST = 3;

  //   private _speed: number;
  //   private _on: boolean;
  //   private _radius: number;
  //   private _color: string;

  //   constructor(speed: number, on: boolean, radius: number, color: string) {
  //     this._speed = speed;
  //     this._on = on;
  //     this._radius = radius;
  //     this._color = color;
  //   }

  //   getSpeed(): number {
  //     return this._speed;
  //   }
  //   setSpeed(speed: number): void {
  //     this._speed = speed;
  //   }
  //   getOn(): boolean {
  //     return this._on;
  //   }
  //   setOn(on: boolean): void {
  //     this._on = on;
  //   }
  //   getRadius(): number {
  //     return this._radius;
  //   }
  //   setRadius(radius: number): void {
  //     this._radius = radius;
  //   }
  //   getColor(): string {
  //     return this._color;
  //   }
  //   setColor(color: string): void {
  //     this._color = color;
  //   }
  //   toString(): string {
  //     if (this._on) {
  //       return `Speed: ${this._speed}, Radius: ${this._radius}, Color: ${this._color}, Fan is on`;
  //     } else {
  //       return `Speed: ${this._speed}, Radius: ${this._radius}, Color: ${this._color}, Fan is off`;
  //     }
  //   }
  // }

  // const fan1 = new Fan(Fan.FAST, true, 10, "white");
  // console.log(fan1.toString()); // Output: Speed: 3, Radius: 10, Color: white, Fan is on

  // const fan2 = new Fan(Fan.MEDIUM, false, 20, "red");
  // console.log(fan2.toString()); // Output: Speed: 2, Radius: 20, Color: red, Fan is off

  // Bài tập 4
};
