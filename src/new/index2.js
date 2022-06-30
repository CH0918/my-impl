function myNew(Ctor, ...args) {
  // 1.创建一个空对象
  const obj = new Object();
  // 2.改变对象的继承关系,目的是为了继承Ctor的原型方法
  obj.__proto__ = Ctor.prototype;
  // 3.模拟执行构造函数    修改this指向，目的是为了取Ctor上的实力属性
  var res = Ctor.apply(obj, args);
  // 4.模拟返回一个对象或者this
  return typeof res === 'object' ? res : obj;
}
