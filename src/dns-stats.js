const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainLen = 0;
  let objDNS = {};
  let arr = [];
  for (domain of domains) {
    arr.push(domain.split('.').reverse());
  }
    for (item of arr) {
      if (objDNS['.' + item[0]]) {
        objDNS['.' + item[0]] += 1;
      } else {
          objDNS['.' + item[0]] = 1;
      }
      if (objDNS['.' + item[0] + '.' + item[1]]) {
            objDNS['.' + item[0] + '.' + item[1]] += 1;
      } else {
          objDNS['.' + item[0] + '.' + item[1]] = 1;
      }

      if (objDNS['.' + item[0] + '.'  + item[1] + '.' + item[2]]) {
        objDNS['.' + item[0] + '.'  + item[1] + '.' + item[2]] += 1;
      } else if (item[2] != undefined) {
        objDNS['.' + item[0] + '.'  + item[1] + '.' + item[2]] = 1; 
      }
    }
  return objDNS;
}

module.exports = {
  getDNSStats
};
