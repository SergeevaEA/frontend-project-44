import randomNumber from './randomNumber.js';
import analysisGcd from './analysisGcd.js';

export default () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  console.log(`Question: ${number1} ${number2}`);
  const correctAnswer = analysisGcd(number1, number2);
  return correctAnswer;
};
