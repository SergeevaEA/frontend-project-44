import randomNumber from './randomNumber.js';
import analysisEven from './analysisEven.js';

export default () => {
  const random = randomNumber();
  console.log(`Question: ${random}`);
  const correctAnswer = analysisEven(random);
  return correctAnswer;
};
