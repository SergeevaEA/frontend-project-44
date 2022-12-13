import isEven from './isEven.js';

export default (randomNumber, evenAnswer) => {
  if (((isEven(randomNumber) === true) && (evenAnswer === 'yes')) || ((isEven(randomNumber) === false) && (evenAnswer === 'no'))) {
    return true;
  }
  return false;
};
