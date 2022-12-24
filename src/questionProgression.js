import randomNumber from './randomNumber.js';
import analysisProgression from './analysisProgression.js';

export default () => {
  const countNumbers = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // от 5 до 10 символов в ряду
  const position = Math.floor(Math.random() * countNumbers);
  // от 0 до кол-ва элементов в ряду (не включительно)
  const progressionNumber = randomNumber();
  let firstNumber = randomNumber();
  const progressionArray = [];
  for (let i = 0; i < countNumbers; i += 1) {
    progressionArray[i] = firstNumber;
    firstNumber += progressionNumber;
  }
  const progressionQuestionArray = [...progressionArray];
  progressionQuestionArray[position] = '..';
  const progressionString = progressionQuestionArray.join(' ');
  console.log(`Question: ${progressionString}`);
  const correctAnswer = analysisProgression(progressionArray, position);
  return correctAnswer;
};
