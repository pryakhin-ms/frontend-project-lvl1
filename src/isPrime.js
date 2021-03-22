export default (num) => {
  if (num === 1) {
    return false;
  }
  const recursive = (number, step) => {
    if (step === 1) {
      return true;
    }
    if (number % step === 0) {
      return false;
    }
    return recursive(number, step - 1);
  };
  return recursive(num, num - 1);
};
