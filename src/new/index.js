function myNew(ctor, ...args) {
  var obj = new Object();
  // 指定对象的原型对象
  obj.__proto__ = ctor.prototype;
  // 执行构造函数
  var res = ctor.apply(obj, args);
  return typeof res == 'object' ? res : obj;
}
