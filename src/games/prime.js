import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const analysisPrime = (randomNumber) => {
  if (randomNumber > 1) {
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = analysisPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, getQuestionAndAnswer);
};
