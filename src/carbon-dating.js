const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) return false;
  if(Number(sampleActivity) && typeof sampleActivity == 'string') {
    let time = Math.log( MODERN_ACTIVITY / sampleActivity ) / 0.0001209682;
  return Math.ceil(time);
  }
  return false;
}

module.exports = {
  dateSample
};
