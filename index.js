exports.printMsg = function() {
  console.log('This is a message from the demo package');
};

module.exports = function(width, height) {
  return width * height;
};
