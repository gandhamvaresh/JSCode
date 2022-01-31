function step1(val, err) {
  return new Promise((resolve, reject) => {
    if (!err) {
      resolve(val + 10);
    } else {
      reject("some wrong");
    }
  });
}

async function callme() {
  let a = step1(12, false);
  return a;
}

// console.log(callme());
callme().then(x => console.log(x));
