const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(string, code) {
    let strLen = string.length;
    let codePosAjustment = 0;
    let codeBaseArr = this.makeNumCode (string, code);
    let result = '';
    for (let i = 0; i < strLen; i++) {
      if (string.charCodeAt(i) < 97 || string.charCodeAt(i) > 122) {
        result += string[i];
        codePosAjustment++;
        continue;
      }
      let newCyphCode = string.charCodeAt(i) + Number(codeBaseArr[i - codePosAjustment]);
      let charCyphCode = newCyphCode > 122 ? newCyphCode - 122 + 96 : newCyphCode;
      result += String.fromCharCode(charCyphCode).toUpperCase();
    }
    return result;
  }
  decrypt(string, code) {
    let strLen = string.length;
    let codePosAjustment = 0;
    let codeBaseArr = this.makeNumCode (string, code);
    let result = '';
    for (let i = 0; i < strLen; i++) {
      if (string.charCodeAt(i) < 97 || string.charCodeAt(i) > 122) {
        result += string[i];
        codePosAjustment++;
        continue;
      }
      let newCyphCode = string.charCodeAt(i) - Number(codeBaseArr[i - codePosAjustment]);
      let charCyphCode = newCyphCode < 97 ? 122 - 96 + newCyphCode : newCyphCode;
      result += String.fromCharCode(charCyphCode).toUpperCase();
    }
    return result;
  }

  makeNumCode (string, code) {
    let strLen = string.length;
    let codeLen = code.length;
    let codeBase = code.split('').map((item, index) => code.charCodeAt(index) - 97);
    let codeBaseArr = new Array(Math.ceil(strLen/codeLen));
    codeBaseArr.fill(codeBase);
    codeBaseArr = codeBaseArr.flat();
    return codeBaseArr;
  }
}


module.exports = {
  VigenereCipheringMachine
};
