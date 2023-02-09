import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const analysisGcd = (number1, number2) => {
  let num1 = Number(number1);
  let num2 = Number(number2);
  while ((num1 !== 0) && (num2 !== 0)) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const gcd = num1 + num2;
  return gcd;
};

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
