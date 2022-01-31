function action1(r1, cb) {
  console.log("R1", r1);
  cb(r1 + 10), false;
}

function action2(r2, cb) {
  console.log("R2", r2);
  cb(r2 + 20, true);
}

function action3(r3, cb) {
  console.log("R3", r3);
  cb(r3 + 30, false);
}

action1(5, (r1, err) => {
  if (!err) {
    console.log(r1);
    action2(r1, (r2, err2) => {
      if (!err2) {
        console.log(r2);
        action3(r2, (r3, err3) => {
          if (!err3) {
            console.log(r3);
          }
        });
      }
    });
  }
});
