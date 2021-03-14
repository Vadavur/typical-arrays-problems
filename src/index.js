
exports.min = function min (array) {
  if (array === undefined) return 0;
  if (array.length == 0) return 0;
  return array.reduce((min, current) => {return ((current < min) ? current : min)}, array[0])
}

exports.max = function max (array) {
  if (array === undefined) return 0;
  if (array.length == 0) return 0;
  return array.reduce((max, current) => {return ((current > max) ? current : max)}, array[0])
}

exports.avg = function avg (array) {
  if (array === undefined) return 0;
  if (array.length == 0) return 0;
  return (array.reduce((sum, current) => {return (sum + current)}, 0) / array.length);
}
