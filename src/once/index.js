function onece(func) {
  let hasRun = false;
  return function () {
    const context = this,
      args = arguments;
    if (hasRun) return;
    hasRun = true;
    return func.apply(context, args);
  };
}
const fn = function () {
  console.log('hahah');
};
const oneceFn = onece(fn);
oneceFn();
oneceFn();
oneceFn();
