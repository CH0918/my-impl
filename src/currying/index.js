function currying(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      // 参数收集齐了，执行目标函数
      return fn.apply(this, args);
    } else {
      // 没收集齐参数，递归收集参数
      function curried2(...args2) {
        return curried.apply(this, [...args, ...args2]);
      }
      return curried2;
    }
  }
  return curried;
}

function sum(a, b, c) {
  console.log('a + b + c = ', a + b + c);
}
const currySum = currying(sum);

currySum(1)(3)(4);
