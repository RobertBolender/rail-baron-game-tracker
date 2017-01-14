// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll2d6(){
  return getRandomIntInclusive(1,6) + getRandomIntInclusive(1,6);
}

function getOddOrEven(){
  return getRandomIntInclusive(1,2) === 1 ? 'odd' : 'even';
}

export {
  roll2d6,
  getOddOrEven
}

