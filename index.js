var clone = require('git-clone');


module.exports = download

function download(callback) {
  clone('https://github.com/vinodbeloshe12/angular', 'test', callback);
}