import questionCalc from './questionCalc.js';
import questionEven from './questionEven.js';
import answer from './answer.js';

export default (name, gameName) => {
  for (let i = 0; i < 3; i += 1) {
    let isTrue = false;
    let gamerAnswer;
    let correctAnswer;
    if (gameName === 'calc') {
      correctAnswer = questionCalc();
      gamerAnswer = Number(answer());
    } else if (gameName === 'even') {
      correctAnswer = questionEven();
      gamerAnswer = answer();
    }
    if (gamerAnswer === correctAnswer) {
      isTrue = true;
    }
    if (isTrue === true) {
      console.log('Correct!');
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
