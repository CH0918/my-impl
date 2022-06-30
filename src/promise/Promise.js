class Promise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw TypeError(
        `TypeError: Promise resolver ${executor} is not a function`
      );
    }
    this.status = 'pedding';
    this.value = undefined;
    this.reason = undefined;
    // 成功调用数组
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this.reject(err);
    }
  }

  resolve(value) {
    if (this.status !== 'pedding') return;
    this.value = value;
    this.status = 'fulfilled';
    // 状态改变时，执行成功队列里的函数
    this.onResolvedCallbacks.forEach((cb) => cb());
  }

  reject(reason) {
    if (this.status !== 'pedding') return;
    this.reason = reason;
    this.status = 'rejected';
  }

  then(onFulfilled, onRejected) {
    if (this.status === 'fulfilled') {
      onFulfilled(this.value);
    }
    if (this.status === 'rejected') {
      onRejected(this.reason);
    }

    if (this.status === 'pedding') {
      // 将onFulfilled 回调函数放到成功队列中
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      // 将onRejected 回调函数放到失败队列中
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

module.exports = Promise;
