const getRandomNumber = (min = -50, max = 50) => {
  const random = Math.floor(Math.random() * (max - min + 1) + min)
  return random
}

export default getRandomNumber
