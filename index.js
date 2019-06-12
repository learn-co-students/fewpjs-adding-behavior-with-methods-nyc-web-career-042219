// Your code here
class Fish {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        return `Hi my name is ${this.name}`;
    }
}
//
// class Cat {
//   //...
// }
//
// class Dog {
//   //...
// }
//
// class Bird {
//   //...
// }

class Cat {
    constructor(name, sex){
      this.name = name;
      this.sex = sex;
    }
    speak(){
      return  `${this.name} says meow!`
    }
}

class Dog {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    return  `${this.name} says woof!`
  }
}

class Bird {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    if (this.sex === "male") {return `It's me! ${this.name}, the parrot!`}
    else if (this.sex === "female") {return`${this.name} says squawk!`}
  }
}
