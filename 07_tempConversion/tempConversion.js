const convertToCelsius = function(fahr) {
  return Math.round(((fahr - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(celc) {
  return Math.round(((celc * 9/5) + 32) * 10) / 10;
}

console.log(Math.round(((100 - 32) * 5/9) * 10) / 10); //rounds it up 37.77 => 377.7 => 378 => 37.8

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
