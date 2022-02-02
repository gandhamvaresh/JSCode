const fs = require("fs");
const { dirname } = require("path");
const { isSharedArrayBuffer } = require("util/types");
const appDir = dirname(require.main.filename);

const main = async f => {
  console.log("+++++++++++++++++++++++++++++++++", f);
  let isVpath = await testVPath(f).catch(e => {
    console.log(e, "e");
  });
  //   console.log(isVpath, "ivp");
  let resP = [];
  if (isVpath.isDirectory) {
    let listPath = [];
    fs.readdirSync(f).map(file => {
      listPath.push(`${f}${file}`);
    });
    // let resP = [];
    for (i = 0; i < listPath.length; i++) {
      let b = await testVPath(listPath[i]);
      resP.push(b);
    }
    // console.log(resP);
    return resP;
  } else {
    let b = await testVPath(f);
    resP.push(b);
  }
  return resP;
};

function testVPath(filename) {
  return new Promise(function (resolve, reject) {
    fs.stat(filename, (err, stats) => {
      if (!err) {
        resolve({
          fileName: filename,
          filePath: `${filename}`,
          size: stats.size,
          createdAt: dateFormat(stats.ctime.toString()),
          isDirectory: stats.isDirectory(),
        });
      } else {
        reject({ msg: "Invalid path" });
      }
    });
  });
}

function dateFormat(d) {
  let date = new Date(d);
  let dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  return dateString;
}

main("//Users//prashanth//Desktop//varesh//code//node_REST//dev.sqlite")
  .then(r => console.log(r))
  .catch(e => console.log(e));
