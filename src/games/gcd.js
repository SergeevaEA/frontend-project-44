import gameLogic from '../index.js';
import { getRandomNumber, analysisGcd } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = analysisGcd(number1, number2).toString();
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, getQuestionAndAnswer);
};
