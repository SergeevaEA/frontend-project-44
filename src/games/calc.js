import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomSign = () => {
  const signItems = ['+', '-', '*'];
  const randomSign = Math.floor(Math.random() * signItems.length);
  return (signItems[randomSign]);
};

const analysisCalc = (number1, number2, sign) => {
  const num1 = Number(number1);
  const num2 = Number(number2);
  let number;
  if (sign === '+') {
    number = num1 + num2;
  }
  if (sign === '-') {
    number = num1 - num2;
  }
  if (sign === '*') {
    number = num1 * num2;
  }
  return number;
};

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
