import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomSign = () => {
  const signItems = ['+', '-', '*'];
  const randomSign = Math.floor(Math.random() * signItems.length);
  return (signItems[randomSign]);
};

const analysisCalc = (numberOne, numberTwo, operation) => {
  const num1 = Number(numberOne);
  const num2 = Number(numberTwo);
  let number;
  if (operation === '+') {
    number = num1 + num2;
  }
  if (operation === '-') {
    number = num1 - num2;
  }
  if (operation === '*') {
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
