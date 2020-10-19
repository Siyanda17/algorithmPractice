// question 2 String formatting
function formatAsCustomString(date, number) {
  return padLeft(number, 5) + "-" + formatDate(date);
}

function padLeft(str, max) {
  str = str.toString();
  return str.length < max ? padLeft("0" + str, max) : str; //changed str.length to max
}

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear().toString().slice(-2); // added .slice(-2)

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join(""); //changed .join("-") to .join("")
}
// console.log(formatAsCustomString('01-01-2021', 4))

//question 3 Braille translator
function translateToBraille(toTranslate) {
  //code here
  let brailleWord = "";
  let braille ={
    "a":"100000",
    "b":"110000",
    "c":"100100",
    "d":"100110",
    "e":"100010",
    "f":"110100",
    "g":"110110",
    "h":"110010",
    "i":"010100",
    "j":"010110",
    "k":"101000",
    "l":"111000",
    "m":"101100",
    "n":"101110",
    "o":"101010",
    "p":"111100",
    "q":"111110",
    "r":"111010",
    "s":"011100",
    "t":"011110",
    "u":"101001",
    "v":"111001",
    "w":"010111",
    "x":"101101",
    "y":"101111",
    "z":"101011",
    " ":"000000",
  }
  
  for (let i = 0; i < toTranslate.length; i++) {
    brailleWord +=
      toTranslateword == toTranslateword.toUpperCase() ? "000001"+braille[toTranslateword.toLowerCase()] : braille[toTranslateword];
  }
  return brailleWord;
}
// console.log(translateToBraille("phi"));

//question 4 Post-order traversal
function findParent(treeNode, labelToFind) {
  //code here
}

//questions 5 Calculator
function Calc(value1, value2, calcOperator) {
  var v1 = parseFloat(value1);
  var v2 = parseFloat(value2);
  var returnValue = 0;
  //Added two error messages below
  if(isNaN(v1) || isNaN(v2)){
    throw Error("Values must be numeric");
  }
  if(v2 == 0){
    throw Error('ARITHMETIC ERROR')
  }
  switch (calcOperator) {
    case "Add": //Capitalized add
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
    default: // added a default error
      throw Error('INCORRECT OPERATOR');
  }
  return returnValue; //changed result to returnValue
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
  return currentValue > valueToCheck
    ? false
    : currentValue > previousValue && valueToCheck == currentValue + previousValue // original condition was valueTocheck == currentValue
    ? true
    : isFibo(valueToCheck, currentValue, previousValue + currentValue); // switched 2nd and 3rd args
}
// console.log(isFibo(3,1,5))

//question 9 String Reverse
function reverseWords(originalString) {
  var words = originalString.split(" ");
  var newString = "";

  for (let word of words) {
    let spChars = "";
    for (let i = word.length -1; i >= 0; i--) { // added -1
      if ( // removed [i] from word[i]
        (word.charCodeAt(i) > 47 && word.charCodeAt(i) < 58) ||
        (word.charCodeAt(i) > 64 && word.charCodeAt(i) < 91) ||
        (word.charCodeAt(i) > 96 && word.charCodeAt(i) < 123)
      )
        newString = newString + word[i];
      else spChars = spChars + word[i];
    }
    newString = newString + spChars + " "; // changed from "" no space to space " "
  }
  return newString;
}
// console.log(reverseWords('phindi, is really coco'))