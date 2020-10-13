// question 2 String formatting 
function formatAsCustomString(date, number) {
    return padLeft(number,5) + "-" + formatDate(date);
}

function padLeft(str, max) {
    str = str.toString();
    return str.length < max ? padLeft("0" + str, str.length) : str;
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear().toString();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join("-");
}

//question 3 Braille translator 
function translateToBraille(toTranslate) {
    //code here
}

//question 4 Post-order traversal
function findParent(treeNode, labelToFind){
    //code here
}

//questions 5 Calculator
function Calc(value1, value2, calcOperator) {
    var v1 = parseFloat(value1);
    var v2 = parseFloat(value2);
    var returnValue = 0;

    switch (calcOperator)
    {
        case "add":
            returnValue = v1 + v2;
            break;
        case "Subtract":
            returnValue = v1 - v2;
            break;
        case "Multiply":
            returnValue = v1 * v2;
            break;
        case "Divide":
            returnValue = v1 / v2;
            break;
    }
    return result;
}

//question 6 Specification 
function vehicleSearch(color, price, mileage) {
    let ret = [];
    //code here

    return ret;
}

//question 7 ID number validation 
function validateCheckSum(idNumber) {
    //code here, use Luhn algorithm
}

//question 8 Fibonacci 
function isFibo(valueToCheck, previousValue, currentValue) {
    return currentValue > valueToCheck ? false : valueToCheck == currentValue ? true : isFibo(valueToCheck, previousValue + currentValue, currentValue);
}

//question 9 String Reverse
function reverseWords(originalString) {
    var words = originalString.split(" ");
    var newString = "";

    for(let word of words)
    {
        let spChars = "";
        for (let i = word.length; i >= 0; i--) {

            if ((word[i].charCodeAt(i) > 47 && word[i].charCodeAt(i) < 58) || 
                (word[i].charCodeAt(i) > 64 && word[i].charCodeAt(i) < 91) ||
                (word[i].charCodeAt(i) > 96 && word[i].charCodeAt(i) < 123))
                    newString = newString + word[i];
                else
                    spChars = spChars + word[i];
        }
        newString = newString + spChars + "";
    };

    return newString;
}

console.log(reverseWords('phindi is really cool'))