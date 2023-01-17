import gameLogic from '../index.js';
import { getRandomNumber, getRandomSign, analysisCalc } from '../utils.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const sign = getRandomSign();
  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = analysisCalc(number1, number2, sign).toString();
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, getQuestionAndAnswer);
};
