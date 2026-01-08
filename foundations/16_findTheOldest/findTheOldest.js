const findTheOldest = function(peoples) {
    sortedByAge = peoples.sort(function(a, b) {
        if(!a.yearOfDeath){
            a.yearOfDeath = new Date().getFullYear();
        }
        if(!b.yearOfDeath){
            b.yearOfDeath = new Date().getFullYear();
        }
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    });
    return sortedByAge.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
