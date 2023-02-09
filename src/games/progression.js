import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const makeProgression = (firstNumber, difference, countNumbers) => {
  const progressionArray = [];
  let current = firstNumber;
  for (let i = 0; i < countNumbers; i += 1) {
    progressionArray[i] = current;
    current += difference;
  }
  return progressionArray;
};

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const countNumbers = getRandomNumber(5, 10); // от 5 до 10 символов в ряду
  const difference = getRandomNumber();
  const firstNumber = getRandomNumber();
  const progression = makeProgression(firstNumber, difference, countNumbers);
  const position = getRandomNumber(0, countNumbers - 1);
  // от 0 до кол-ва элементов в ряду (не включительно)
  const progressionQuestion = [...progression];
  progressionQuestion[position] = '..';
  const question = progressionQuestion.join(' ');
  const correctAnswer = progression[position].toString();
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, getQuestionAndAnswer);
};
