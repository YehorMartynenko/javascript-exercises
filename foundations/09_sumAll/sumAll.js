const sumAll = function(a, b) {
    let startValue = 0;
    let endValue = 0;
    let sum = 0;

    if(!(Number.isInteger(a) && Number.isInteger(b) && a>0 && b>0)){
        return "ERROR"
    }

    if (a>b) {
        startValue = b;
        endValue = a;
    } else {
        startValue = a;
        endValue = b;
    }
    for(let i = startValue; i<=endValue; i++){
        sum+=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
