
function average(numbers) {
  // Filtering array to remove NaN
  const NanRemoved = numbers.filter((num) => !Number.isNaN(num));

  // Computing average from updated array
  return NanRemoved.reduce((p, c)=> p + c, 0) / NanRemoved.length;
}

module.exports = {average};
