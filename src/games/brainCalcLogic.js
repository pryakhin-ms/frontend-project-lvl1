// import readlineSync from 'readline-sync';
import getRandomNum from '../getRandomNum.js';

export default (mode) => {
  if (mode === 'GENERATE_TASK') {
    return 'What is the result of the expression?';
  }
  const num1 = getRandomNum(20);
  const num2 = getRandomNum(20);
  const expression = [
    [`${num1} + ${num2}`, num1 + num2],
    [`${num1} - ${num2}`, num1 - num2],
    [`${num1} * ${num2}`, num1 * num2],
  ];
  return expression[num1 % 3];
};
