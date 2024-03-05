function isEven(num) {
  if (Number.isFinite(parseFloat(num))) {
    return num % 2 == 0
  } else
    return null;
}

module.exports = isEven
