var clone = require('git-clone');
var mkdirp = require('mkdirp');
var path = require('path');

var curPath = process.cwd();
var folderName = "framework-angular4";
var source = "https://github.com/vinodbeloshe12/angular";
var destination = path.join(curPath, folderName);
// download();

module.exports = download

function download(callback) {
  mkdirp(destination, function (err) {
    if (err) {
      console.error(err);
    }
    else {
      clone(source, destination, function (cb) {
        console.log("Directory created successfully!");
        return callback;
      });
    }
  });

}