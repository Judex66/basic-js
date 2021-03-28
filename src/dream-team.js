
module.exports = function createDreamTeam(members) {
  let message = false;

  if (Array.isArray(members)) {
    let teamame = members.reduce(function (  name, i) {
      if (typeof(i) === 'string') {
        name.push(i.trim()[0].toUpperCase());
      }
      return   name
    }, []);

    if (teamame !== []) {
      message = teamame.sort().join('');
    }
  }

  return message;
};