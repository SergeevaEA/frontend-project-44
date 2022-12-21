export default (number1, number2, sign) => {
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
