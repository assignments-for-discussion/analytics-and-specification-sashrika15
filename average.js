
function average(numbers) {
  // Filtering array to remove NaN
  const NanRemoved = numbers.filter((num) => !Number.isNaN(num));

  // Calculating number of NaNs and returning NaN if percentage of NaNs is >50
  const NoOfNaNs = numbers.length -NanRemoved.length;
  if (NoOfNaNs/numbers.length>0.5) {
    return NaN;
  } else {
  // Computing average from updated array
    return NanRemoved.reduce((p, c)=> p + c, 0) / NanRemoved.length;
  }
}

module.exports = {average};
