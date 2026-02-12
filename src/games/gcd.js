import gameLogic from '../index.js'
import getRandomNumber from '../utils.js'

const analysisGcd = (numberOne, numberTwo) => {
  let num1 = Number(numberOne)
  let num2 = Number(numberTwo)
  while ((num1 !== 0) && (num2 !== 0)) {
    if (num1 > num2) {
      num1 %= num2
    } else {
      num2 %= num1
    }
  }
  return num1 + num2
}

const description = 'Find the greatest common divisor of given numbers.'

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber(1, 50)
  const number2 = getRandomNumber(1, 50)
  const question = `${number1} ${number2}`
  const correctAnswer = analysisGcd(number1, number2).toString()
  return [question, correctAnswer]
}

export default () => {
  gameLogic(description, getQuestionAndAnswer)
}
