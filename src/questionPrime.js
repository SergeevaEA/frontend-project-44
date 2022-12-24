import randomNumber from './randomNumber.js';
import analysisPrime from './analysisPrime.js';

export default () => {
  const random = randomNumber();
  console.log(`Question: ${random}`);
  const correctAnswer = analysisPrime(random);
  return correctAnswer;
};
