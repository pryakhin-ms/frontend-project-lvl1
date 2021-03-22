import isPrime from '../isPrime.js';
import getRandomNum from '../getRandomNum.js';

export default (mode) => {
  if (mode === 'GENERATE_TASK') {
    return 'Answer "yes" if given number is prime. Otherwise answer "no".';
  }
  const num = getRandomNum(30);
  const isNumPrime = isPrime(num) ? 'yes' : 'no';
  return [num, isNumPrime];
};
