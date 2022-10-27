#!/usr/bin/env node
import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
//const greeting = greeting();

