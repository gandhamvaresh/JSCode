const { resolve, reject } = require("bluebird");

function p1(value, err) {
  return new Promise((resolve, reject) => {
    if (!err) {
      resolve(value + 10);
    } else {
      reject("something wrong");
    }
  });
}

function p2(r2, err) {
  return new Promise((resolve, reject) => {
    if (err) {
      resolve(r2 + 7);
    } else {
      reject("some p2 issue");
    }
  });
}

function p3(val, err) {
  return new Promise((rs, rj) => {
    if (!err) {
      rs(val + 22);
    } else {
      rj("some p3 issue");
    }
  });
}

// p1(5, false)
//   .then(rt => {
//     console.log("re", rt);
//     return p2(rt, false);
//   })
//   .then(r => {
//     console.log("r", r);
//     return p3(r, false);
//   })
//   .then(rt1 => console.log(rt1))
//   .catch(err => console.log(err));

const prom1 = Promise.resolve("this is Promise Resolve");
const prom2 = 10;
const prom4 = Promise.reject("this reject call");
const prom3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "some new Promise of Set Timeout");
});

// Promise.all([prom1, prom4, prom2, prom3])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => console.log(err));

// Promise.race([prom3, prom1, prom2]).then(result => {
//   console.log(result);
// });

// Promise.allSettled([prom1, prom4, prom2, prom3])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => console.log(err));

Promise.any([prom4, prom2]).then(result => {
  console.log(result);
});
