import cli from '../cli.js';
import gameLogic from '../index.js';

export default () => {
  const name = cli();
  console.log('What is the result of the expression?');
  gameLogic(name, 'calc');
};
