var clone = require('git-clone');
var mkdirp = require('mkdirp');
var path = require('path');

console.log("Going to create directory /tmp/test");


module.exports = download

function download(callback) {
  mkdirp(path.join(process.cwd(), '/framework-angular4'), function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully!");
    clone('https://github.com/vinodbeloshe12/angular', '../../framework-angular4', callback);
  });

}