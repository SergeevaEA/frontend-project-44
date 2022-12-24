import questionCalc from './questionCalc.js';
import questionEven from './questionEven.js';
import questionGcd from './questionGcd.js';
import questionProgression from './questionProgression.js';
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
    } else if (gameName === 'gcd') {
      correctAnswer = questionGcd();
      gamerAnswer = Number(answer());
    } else if (gameName === 'progression') {
      correctAnswer = questionProgression();
      gamerAnswer = Number(answer());
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
