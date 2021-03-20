import readlineSync from 'readline-sync';
import getRandomNum from './getRandomNum.js';

export default () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNum(20);
    const num2 = getRandomNum(20);
    const expression = {
      0: { msg: `Question: ${num1}+${num2}`, value: num1 + num2 },
      1: { msg: `Question: ${num1}-${num2}`, value: num1 - num2 },
      2: { msg: `Question: ${num1}*${num2}`, value: num1 * num2 },
    };
    console.log(expression[num1 % 3].msg);
    const answer = readlineSync.question('Your answer ');
    if (expression[num1 % 3].value !== parseInt(answer, 10)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expression[num1 % 3].value}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};
