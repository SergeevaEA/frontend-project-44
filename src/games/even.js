import gameLogic from '../index.js';
import { getRandomNumber, isEvenNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, getQuestionAndAnswer);
};
