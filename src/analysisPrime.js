export default (randomNumber) => {
  if (randomNumber > 1) {
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
  return 'no';
};
