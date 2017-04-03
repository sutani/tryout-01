const fs = require('fs')
const path = require('path')

function *getFile(value) {
  yield value
}

function getDirectory (srcpath) {
  fs.readdir(srcpath, (err, files) => {
      for(let i=0; i < files.length; i++) {
          let file = getFile(files[i])
          console.log(file.next().value)
      }
  })
}

console.log(getDirectory('../../'));