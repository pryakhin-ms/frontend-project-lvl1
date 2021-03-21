export default (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  if (num2 % num1 === 0) {
    return num1;
  }
  const smallest = num1 < num2 ? num1 : num2;
  const findGcdRecursive = (first, second, div) => {
    if (first % div === 0 && second % div === 0) {
      return div;
    }
    return findGcdRecursive(first, second, div - 1);
  };
  return findGcdRecursive(num1, num2, smallest - 1);
};
