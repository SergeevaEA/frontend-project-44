const getRandomNumber = () => {
  const random = Math.round(Math.random() * 100);
  return random;
};

const isEvenNumber = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return true;
  }
  return false;
};

const getRandomSign = () => {
  const signItems = ['+', '-', '*'];
  const randomSign = Math.floor(Math.random() * signItems.length);
  return (signItems[randomSign]);
};

const analysisCalc = (number1, number2, sign) => {
  const num1 = Number(number1);
  const num2 = Number(number2);
  let number;
  if (sign === '+') {
    number = num1 + num2;
  }
  if (sign === '-') {
    number = num1 - num2;
  }
  if (sign === '*') {
    number = num1 * num2;
  }
  return number;
};

const analysisGcd = (number1, number2) => {
  let num1 = Number(number1);
  let num2 = Number(number2);
  while ((num1 !== 0) && (num2 !== 0)) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const gcd = num1 + num2;
  return gcd;
};

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

export {
  getRandomNumber,
  getRandomSign,
  isEvenNumber,
  analysisCalc,
  analysisGcd,
  analysisPrime,
};
