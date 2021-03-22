import readlineSync from 'readline-sync';
import brainCalcLogic from './games/brainCalcLogic.js';
import brainEvenLogic from './games/brainEvenLogic.js';
import brainGcdLogic from './games/brainGcdLogic.js';
import brainProgressionLogic from './games/brainProgressionLogic.js';

const gameEngine = (game) => () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(game('GENERATE_TASK'));
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer.toString() !== userAnswer) {
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
export const brainEven = gameEngine(brainEvenLogic);
export const brainGcd = gameEngine(brainGcdLogic);
export const brainProgression = gameEngine(brainProgressionLogic);
