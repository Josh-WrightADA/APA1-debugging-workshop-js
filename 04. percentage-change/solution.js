function calculatePercentageChange(original, newAmount) {
  if ( original == newAmount){
    return 0
  };
  let difference = Math.abs(newAmount - original) / original * 100;

  if (original > newAmount) {
  difference = difference - (difference *2)
 };

  return Math.ceil(difference);
}

module.exports = { calculatePercentageChange };
