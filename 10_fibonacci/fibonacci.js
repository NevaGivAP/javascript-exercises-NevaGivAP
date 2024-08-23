const fibonacci = function(num) {
    const convertedNum = +num;
    if(convertedNum === 0){
        return convertedNum;
    } else if(convertedNum < 0){
        return "OOPS";
    }
    let i = 1;
    let a = 0;
    let b = 1;
    let result;
    do{
        result = a + b;
        a = b;
        b = result;
        i++
    }while(i < convertedNum);
    return result;
};
console.log(fibonacci(3));
// Do not edit below this line
module.exports = fibonacci;
