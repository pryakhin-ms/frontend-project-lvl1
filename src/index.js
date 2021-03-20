import readlineSync from 'readline-sync';
import brainCalcLogic from './brainCalcLogic.js';

const gamePlot = (game) => () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  // Запускаем игру. В игре есть цикл. Игра возвращает результат: true или false;
  const result = game();
  const finalMsg = result ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`;
  console.log(finalMsg);
};

export const brainCalc = gamePlot(brainCalcLogic);
export const a = 5;
