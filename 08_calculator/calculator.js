const add = function(...nums) {
    return nums.reduce((acc, curr) => acc += curr, 0);
};

const subtract = function(...nums) {
  return nums.reduce((acc, curr) => acc -= curr);
};

const sum = function(nums) {
  return nums.reduce((acc, curr) => acc += curr, 0);
};


const multiply = function(nums) {
  return nums.reduce((acc, curr) => acc *= curr);
};

const power = function(...nums) {
  return nums.reduce((acc, curr) => acc **= curr);
};

const factorial = function(num) {
  if(num === 0 || num === 1){
    return 1;
  } else{
    let result = 1;
    for(let i = num; i > 1; i--){
      result *= i * --i;
    }
    return result;
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
