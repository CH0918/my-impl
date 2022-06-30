// 深拷贝
// var result = {};
// function deepClone(obj, result = {}) {
//   if (!obj || typeof obj !== 'object') return;
//   for (var key in obj) {
//     var val = obj[key];
//     if (typeof val !== 'object') {
//       result[key] = val;
//     } else if (Array.isArray(val)) {
//       // 数组  继续遍历
//       var arrResult = [];
//       deepClone(val, arrResult);
//       result[key] = arrResult;
//     } else {
//       // 对象
//       var resultObj = {};
//       deepClone(val, resultObj);
//       result[key] = resultObj;
//     }
//   }
//   return result;
// }

function deepClone(target) {
  if (!target || typeof target !== 'object') return;
  var result = Array.isArray(target) ? [] : {};
  for (var key in target) {
    var value = target[key];
    if (typeof value === 'object') {
      // value 还是对象 继续递归
      var cloneObjVal = deepClone(value);
      result[key] = cloneObjVal;
    } else {
      // 简单值 直接赋值
      result[key] = value;
    }
  }
  return result;
}
var obj = {
  a: 1,
  arr: [1, { name: 'zhangsan' }],
  o: {
    arr: [555],
    o2: { name: 'lisi' },
  },
};

var obj2 = deepClone(obj);
console.log(obj2);
// console.log(obj === obj2); // false
// console.log(obj.o === obj2.o); // false
// console.log(obj.arr === obj2.arr); // false
// console.log(obj.o.o2 === obj2.o.o2); // false
