// 深拷贝
function deepClone(target) {
  if (typeof target !== 'object' || target == null) return target;
  let result = Array.isArray(target) ? [] : {};
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      let value = target[key];
      // if (typeof value === 'object') {
      //   result[key] = value;
      //   deepClone(value);
      // } else {
      //   result[key] = value;
      // }
      const temp = typeof value === 'object' ? deepClone(value) : value;
      result[key] = temp;
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
console.log('clone = ', deepClone(obj));
