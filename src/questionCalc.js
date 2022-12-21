import randomNumber from './randomNumber.js';
import randomSign from './randomSign.js';
import analysisCalc from './analysisCalc.js';

export default () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const sign = randomSign();
  console.log(`Question: ${number1} ${sign} ${number2}`);
  const correctAnswer = analysisCalc(number1, number2, sign);
  return correctAnswer;
};
