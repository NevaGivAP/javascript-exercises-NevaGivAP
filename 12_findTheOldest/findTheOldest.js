const findTheOldest = function(arr) {
    const fullList = arr.map(person => {
        if(person.yearOfDeath === undefined){
            const d = new Date();
            person.yearOfDeath = d.getFullYear();
        }
        return person;
    })

    fullList.sort((a,b) => {
        const lastYear = a.yearOfDeath - a.yearOfBirth;
        const nextYear = b.yearOfDeath - b.yearOfBirth;
        return lastYear > nextYear ? -1 : 1;
    });

    return fullList[0];
};

// Do not edit below this line
module.exports = findTheOldest;
