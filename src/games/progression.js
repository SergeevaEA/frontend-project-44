import gameLogic from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const countNumbers = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // от 5 до 10 символов в ряду
  const position = Math.floor(Math.random() * countNumbers);
  // от 0 до кол-ва элементов в ряду (не включительно)
  const progressionNumber = getRandomNumber();
  let firstNumber = getRandomNumber();
  const progressionArray = [];
  for (let i = 0; i < countNumbers; i += 1) {
    progressionArray[i] = firstNumber;
    firstNumber += progressionNumber;
  }
  const progressionQuestionArray = [...progressionArray];
  progressionQuestionArray[position] = '..';
  const progressionString = progressionQuestionArray.join(' ');
  const question = progressionString;
  const correctAnswer = progressionArray[position];
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, getQuestionAndAnswer);
};
