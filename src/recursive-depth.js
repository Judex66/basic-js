module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var n = 1;

    arr.forEach(e => {
      if (Array.isArray(e)) {
        n= Math.max(n, 1 + this.calculateDepth(e))
      }
    });

    return n;
  }
};