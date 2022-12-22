export default (number1, number2) => {
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
