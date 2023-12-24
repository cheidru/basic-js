const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addStr = '';
  if (options.addition !== undefined) {
      if (options.additionSeparator === undefined) options.additionSeparator = '|';
      addStr = makeStr(options.addition, options.additionRepeatTimes, options.additionSeparator);}
      if (options.separator === undefined) options.separator = '+';
return makeStr(str + addStr, options.repeatTimes, options.separator);
}

function makeStr(text, repTime, textSep) {
  if(repTime === undefined) repTime = 1;
return (text + textSep).repeat(repTime).slice(0, textSep.length * -1);
}

module.exports = {
  repeater
};
