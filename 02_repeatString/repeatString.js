const repeatString = function(string, num) {
    if (num < 0) { return "ERROR"; }
    let stringProduct = "";
    for (i = 0; i < num; i++) {
        stringProduct += string;
    }
    return stringProduct;
}

// Do not edit below this line
module.exports = repeatString;
