module.exports = function getSeason(date) {
  var mes = 'Unable to determine the time of year!';

  if (arguments.length > 0) {
    var month = date.getUTCMonth();

    switch (month) {
      case 11:
      case 0:
      case 1:
        mes = 'winter';
        break;
      case 2:
      case 3:
      case 4:
        mes = 'spring';
        break;
      case 5:
      case 6:
      case 7:
        mes = 'summer';
        break;
      default:
        mes = 'autumn';
    };
  }

  return mes;
};