const sumAll = function(int1,int2) {
    let sum = 0;
    if(int1 < 0 || int2 < 0 || int1 % 1 !== 0 || int2 % 1 !== 0 || typeof(int1) !== typeof(1) || typeof(int2) !== typeof(1)){
        return "ERROR";
    } else{
        let lowNum = 0;
        let highNum = 0;
        if(int1 > int2){
            lowNum += int2;
            highNum += int1;
        } else{
            lowNum += int1;
            highNum += int2;
        }

        for(;lowNum <= highNum;lowNum++){
            sum += lowNum;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
