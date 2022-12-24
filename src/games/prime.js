import cli from '../cli.js';
import gameLogic from '../index.js';

export default () => {
  const name = cli();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  gameLogic(name, 'prime');
};
