const removeFromArray = function(arr, ...args) {
    arr.slice(0).forEach(function(item){
        args.forEach(function(arg){
            if(item === arg){
                arr.splice(arr.indexOf(item), 1);
            }
        })
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
