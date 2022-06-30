var timer;
var t1 = 0;
// 节流 定时器法
function throttle1(cb, delay) {
  var timer;
  return function () {
    if (timer) return;
    // 均匀时间执行cb
    timer = setTimeout(() => {
      cb.apply(this, arguments);
      clearTimeout(timer);
      timer = null;
    }, delay);
  };
}

// 节流 时间戳法
function throttle2(cb, delay) {
  var t1 = 0;
  return function () {
    var t2 = +new Date();
    if (t2 - t1 >= delay) {
      cb.apply(this, arguments);
      t1 = t2;
    } else {
      t2 = +new Date();
    }
  };
}
