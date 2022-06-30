function fn1(value) {
  console.log('fn1 running...', value);
}
function fn2(value) {
  console.log('fn2 running...', value);
}
function fn3(value) {
  console.log('fn3 running...', value);
}

class Subscribe {
  constructor() {
    this.taskList = [];
  }
  on(callback) {
    this.taskList.push(callback);
  }
  emit(callbackName, ...args) {
    this.taskList.forEach((fn) => {
      if (fn.name === callbackName) {
        fn.apply(null, args);
      }
    });
  }
}
const sub = new Subscribe();
sub.on(fn1);
sub.on(fn2);
sub.on(fn3);
sub.emit('fn1', 1);
sub.emit('fn2', 2);
sub.emit('fn3', 3);
