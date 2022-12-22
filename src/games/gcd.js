import cli from '../cli.js';
import gameLogic from '../index.js';

export default () => {
  const name = cli();
  console.log('Find the greatest common divisor of given numbers.');
  gameLogic(name, 'gcd');
};
