const path = require('path');
const fs = require('fs');
const ROOT = path.resolve(".");

const main = (filePath)=>{
    return new Promise((rs,rj)=>{
        fs.stat(filePath, (err, stats) => {
            // console.log(err)
            if(err){
                rj({message: 'Invalid Path'})
            }else{
                if(stats.isDirectory()){

                    
                }else{
                    rs([{
                        fileName: filePath.split('/').pop(),
                        filePath: filePath.replace(ROOT,''),
                        size: stats.size,
                        createdAt: dateFormat(stats.ctime.toString()),
                        isDirectory: stats.isDirectory(),
                      }])
                }
                
            }
        })
    })

}

function readJSON(filename) {
    // console.log("+++++++++++++++++++++++++++++++++", filename);
    return new Promise(function (resolve, reject) {
      fs.stat(filename, (err, stats) => {
        resolve({
          fileName: filename,
          filePath: `${ROOT}/${filename}`,
          size: stats.size,
          createdAt: dateFormat(stats.ctime.toString()),
          isDirectory: stats.isDirectory(),
        });
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

// main("C:\\Users\\539285\\Downloads\\FS\\tmp\\file.txt").then(r=> console.log(r)).catch(e=>console.log(e));
module.exports = main;
