import cli from '../cli.js';
import gameLogic from '../index.js';

export default () => {
  const name = cli();
  console.log('What number is missing in the progression?');
  gameLogic(name, 'progression');
};
