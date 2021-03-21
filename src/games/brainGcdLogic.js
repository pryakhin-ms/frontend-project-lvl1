import getGcd from '../getGcd.js';
import getRandomNum from '../getRandomNum.js';

export default (mode) => {
  if (mode === 'GENERATE_TASK') {
    return 'Find the greatest common divisor of given numbers.';
  }
  const num1 = getRandomNum(70);
  const num2 = getRandomNum(70);
  const div = getGcd(num1, num2);
  return [`${num1} ${num2}`, div];
};
