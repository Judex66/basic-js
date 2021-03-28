const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var mes = false;

  if (typeof(sampleActivity) === 'string') {
    var num = parseFloat(sampleActivity);

    if (num < MODERN_ACTIVITY && num > 0) {
      const ln2 = 0.693;
      const d = ln2 / HALF_LIFE_PERIOD;
      const t = Math.log(MODERN_ACTIVITY / num) / d;
      mes = Math.ceil(t);
    }
  }
  return mes;
};