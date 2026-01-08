const fibonacci = function(number) {
    number = parseInt(number);
    if(number === 0){
        return 0;
    }

    if(!(Number.isInteger(number) && number>0)){
        return 'OOPS';
    }
    let arr = []
    for(let i = 1; i<=number; i++){
        if(i === 1){
            arr[i-1] = 1;
        }

        if(i === 2){
            arr[i-1] = 1;
        }

        if(i>2){
            arr[i-1] = arr[i-2] + arr [i-3];
        }
    }
    console.log(arr);
    return arr.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
