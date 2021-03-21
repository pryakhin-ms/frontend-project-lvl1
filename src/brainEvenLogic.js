// import readlineSync from 'readline-sync';
import isEven from './isEven.js';
import getRandomNum from './getRandomNum.js';

export default (mode) => {
  if (mode === 'GENERATE_TASK') {
    return 'Answer "yes" if the number is even, otherwise answer "no".';
  }
  const num = getRandomNum();
  const isNumEven = isEven(num) ? 'yes' : 'no';
  return [num, isNumEven];

  /* console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum();
    const isNumEven = isEven(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer ');
    if (answer !== isNumEven) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isNumEven}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`); */
};
