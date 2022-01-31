console.log("Line 1");
let a = cl2();
c = 1;
console.log("Line 2", a);
// cl1();
let b = cl4();
// cl3();
console.log("Line 3", b);
console.log("Line 4", a, c);
function cl1() {
  setTimeout(() => {
    console.log("****Line ****");
  }, 1000);
}
function cl3() {
  console.log("**** NorMAL FUNCT****");
}

function cl4() {
  sum = 0;
  for (let i = 1; i < 1000000000; i++) {
    sum++;
  }
  console.log("***** SUM IS ****", sum);
  return sum;
}

function cl2() {
  setTimeout(() => {
    console.log("****L 3000 ****");
    return "3sec";
  }, 1000);
}
