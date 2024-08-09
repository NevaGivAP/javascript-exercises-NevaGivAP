const removeFromArray = function(array,...arguments) {
    let converted = arguments;
    let filteredArray= array.filter(function(item){
        for(let i = 0; i < converted.length; i++){
            if(item === converted[i]){
                return false;
            }
        }
        return true;
    })
    return filteredArray;
};
console.log(removeFromArray([1,2,3,4],3));
// Do not edit below this line
module.exports = removeFromArray;
