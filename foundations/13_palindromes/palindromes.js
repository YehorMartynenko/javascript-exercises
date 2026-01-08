const palindromes = function (string) {
    let cleanString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for(let i = 0; i<cleanString.length; i++){
        if(!(cleanString.at(i) === cleanString.at(-(i+1)))){
            return false;
        }
    }
    return true;
};



// Do not edit below this line
module.exports = palindromes;
