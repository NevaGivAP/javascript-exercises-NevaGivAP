const palindromes = function (str) {
    const arr = str.toLowerCase().split("");
    const filteredArr = arr.filter(item => item !== " " && item !== "," && item !== "." && item !== "!");

    const normalStr = filteredArr.slice().join("");
    const reversedStr = filteredArr.reverse().join("");
    return normalStr === reversedStr;
};
console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;
