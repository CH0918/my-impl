const Promise = require('./Promise');

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  });
});
p.then((res) => {
  console.log(res);
});
