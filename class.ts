class Person {
  name: string;
  sex: number;  // 0:男、1:女

  constructor(name: string, sex: number) {
    this.name = name;
    this.sex = sex;
  }

  sayHello() {
    console.log(`${this.name}, hello!`);
  }
}

let koma = new Person("Koma", 1);
koma.sayHello();
console.log(koma.name);
console.log(koma.sex);