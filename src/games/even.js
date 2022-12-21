import cli from '../cli.js';
import gameLogic from '../index.js';

export default () => {
  const name = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameLogic(name, 'even');
};
