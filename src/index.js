import readlineSync from 'readline-sync';
import brainCalcLogic from './brainCalcLogic.js';

const gameEngine = (game) => () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(game('GENERATE_TASK'));
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    if (answer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  // Запускаем игру. В игре есть цикл. Игра возвращает результат: true или false;
  console.log(`Congratulations, ${playerName}!`);
};

export const brainCalc = gameEngine(brainCalcLogic);
export const a = 5;
