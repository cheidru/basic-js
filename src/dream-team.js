const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members === null || members === undefined) return false;
  if (!Array.isArray(members) && members[Symbol.iterator] != 'function') return false;
  let teamName = '';
  for (member of members) {
    if (typeof member == 'string') {
      member = member.trim();
      teamName += member[0].toUpperCase();
    }
  }
  if (teamName.length == 0) return false;
  return teamName.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
