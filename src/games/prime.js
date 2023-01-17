import gameLogic from '../index.js';
import { getRandomNumber, analysisPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = analysisPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, getQuestionAndAnswer);
};
