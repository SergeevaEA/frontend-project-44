#!/usr/bin/env node
import greeting from '../src/cli.js';
import randomNumber from '../src/random-number.js';
import answer from '../src/answer.js';
import analysis from '../src/analysis.js';

console.log('Welcome to the Brain Games!');
const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const random = randomNumber();
  console.log(`Question: ${random}`);
  if (analysis(random, answer()) === true) {
    console.log('Correct!');
  } else {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
