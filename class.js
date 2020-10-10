var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.sayHello = function () {
        console.log(this.name + ", hello!");
    };
    return Person;
}());
var koma = new Person("Koma", 1);
koma.sayHello();
console.log(koma.name);
console.log(koma.sex);
