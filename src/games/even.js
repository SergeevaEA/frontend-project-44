import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const isEvenNumber = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return true;
  }
  return false;
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, getQuestionAndAnswer);
};
