// 防抖
function debounce(callback, wait, immediate) {
  let timeout, result;
  let debounceFn = function () {
    const context = this,
      args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 没有定时器说明是首次进来，马上执行
      if (!timeout) result = callback.apply(context, args);
      timeout = setTimeout(function () {
        result = callback.apply(context, args);
        timeout = null;
      }, wait);
    } else {
      timeout = setTimeout(function () {
        result = callback.apply(context, args);
        result = null;
      }, wait);
    }
    return result;
  };
  debounceFn.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounceFn;
}
