// 监听深层次对象
/**
 * 监听深层对象
 * @param {监听的对象} obj
 * @param {监听对象key值} key
 * @param {监听对象的value} value
 */
function observe(obj) {
  if (!obj || typeof obj !== 'object') return;
  for (let key in obj) {
    definePro(obj, key, obj[key]);
  }
}
function definePro(obj, key, value) {
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(newVal) {
      console.log('newVal setted');
      value = newVal;
    },
  });
}

// test
var info = {};
definePro(info, 'friends', { name: '张三' });
console.log(info.friends);
