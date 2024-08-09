const removeFromArray = function(array,...stuffs) {
    let filteredArray= array.filter(function(item){
        for(let i = 0; i < stuffs.length; i++){
            if(item === stuffs[i]){
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
