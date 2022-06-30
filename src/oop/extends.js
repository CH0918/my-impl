// 参考：https://juejin.cn/post/6844903696111763470
// 1.原型链继承

// 2.构造函数继承

// 3.组合式继承

// 4.寄生组合式继承

// 5.es6 extends继承
function inheritPrototype(SubType, SuperType) {
  let prototype = Object.create(SuperType.prototype);
  prototype.constructor = SubType;
  SubType.prototype = prototype;
}
function SubType(name) {
  SuperType.call(this, 21);
  this.name = name;
}
function SuperType(age) {
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayHi = function () {
  console.log('this is subType');
};

SuperType.prototype.sayHello = function () {
  console.log('this is superType');
};

var instance1 = new SubType('zhangsan');
console.log('es5 son = ', instance1);

var instance2 = new SuperType(10);
console.log('es5 father = ', instance2);

class Father {
  constructor(age) {
    this.age = age;
  }
  sayHello() {
    console.log('this is father');
  }
}
class Son extends Father {
  constructor(name) {
    super(21);
    this.name = name;
  }
  sayHi() {
    console.log('this is son');
  }
}
var instance3 = new Father(21);
console.log('es6 father ', instance3);

var instance4 = new Son('zhangsan');
console.log('es6 son = ', instance4);
