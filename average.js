
function average(numbers) {
  // Filtering array to remove NaN
  const nanRemoved = numbers.filter((num) => !Number.isNaN(num));

  // Calculating number of NaNs and returning NaN if percentage of NaNs is >50
  const noOfNaNs = numbers.length - nanRemoved.length;
  if (noOfNaNs/numbers.length>0.5) {
    return NaN;
  } else {
  // Computing average from updated array
    return nanRemoved.reduce((p, c)=> p + c, 0) / nanRemoved.length;
  }
}

module.exports = {average};
