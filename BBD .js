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
  
    for (let i = 0; i < toTranslate.length; i++) {
      brailleWord +=
        toTranslate[i] == toTranslate[i].toUpperCase() ? "000001" : "";
  
      switch (toTranslate[i].toLowerCase()) {
        case "a":
          brailleWord += "100000";
          break;
        case "b":
          brailleWord += "110000";
          break;
        case "c":
          brailleWord += "100100";
          break;
        case "d":
          brailleWord += "100110";
          break;
        case "e":
          brailleWord += "100010";
          break;
        case "f":
          brailleWord += "110100";
          break;
        case "g":
          brailleWord += "110110";
          break;
        case "h":
          brailleWord += "110010";
          break;
        case "i":
          brailleWord += "010100";
          break;
        case "j":
          brailleWord += "010110";
          break;
        case "k":
          brailleWord += "101000";
          break;
        case "l":
          brailleWord += "111000";
          break;
        case "m":
          brailleWord += "101100";
          break;
        case "n":
          brailleWord += "101110";
          break;
        case "o":
          brailleWord += "101010";
          break;
        case "p":
          brailleWord += "111100";
          break;
        case "q":
          brailleWord += "111110";
          break;
        case "r":
          brailleWord += "111010";
          break;
        case "s":
          brailleWord += "011100";
          break;
        case "t":
          brailleWord += "011110";
          break;
        case "u":
          brailleWord += "101001";
          break;
        case "v":
          brailleWord += "111001";
          break;
        case "w":
          brailleWord += "010111";
          break;
        case "x":
          brailleWord += "101101";
          break;
        case "y":
          brailleWord += "101111";
          break;
        case "z":
          brailleWord += "101011";
          break;
        case " ":
          brailleWord += "000000";
          break;
        default:
          brailleWord += toTranslate[i];
      }
    }
    return brailleWord;
  }
  // console.log(translateToBraille("PhI"));
  var BRAILLE = {
      'A': '⠁',
      'B': '⠃',
      'C': '⠉',
      'D': '⠙',
      'E': '⠑',
      'F': '⠋',
      'G': '⠛',
      'H': '⠓',
      'I': '⠊',
      'J': '⠚',
      'K': '⠅',
      'L': '⠇',
      'M': '⠍',
      'N': '⠝',
      'O': '⠕',
      'P': '⠏',
      'Q': '⠟',
      'R': '⠗',
      'S': '⠎',
      'T': '⠞',
      'U': '⠥',
      'V': '⠧',
      'W': '⠺',
      'X': '⠭',
      'Z': '⠵',
      'Y': '⠽'
  }
  
  //question 4 Post-order traversal
  function findParent(treeNode, labelToFind) {
    //code here
  }
  
  //questions 5 Calculator
  function Calc(value1, value2, calcOperator) {
    var v1 = parseFloat(value1);
    var v2 = parseFloat(value2);
    var returnValue = 0;
  
    switch (calcOperator) {
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
    return currentValue > valueToCheck
      ? false
      : valueToCheck == currentValue
      ? true
      : isFibo(valueToCheck, previousValue + currentValue, currentValue);
  }
  
  //question 9 String Reverse
  function reverseWords(originalString) {
    var words = originalString.split(" ");
    var newString = "";
  
    for (let word of words) {
      let spChars = "";
      for (let i = word.length; i >= 0; i--) {
        if (
          (word[i].charCodeAt(i) > 47 && word[i].charCodeAt(i) < 58) ||
          (word[i].charCodeAt(i) > 64 && word[i].charCodeAt(i) < 91) ||
          (word[i].charCodeAt(i) > 96 && word[i].charCodeAt(i) < 123)
        )
          newString = newString + word[i];
        else spChars = spChars + word[i];
      }
      newString = newString + spChars + "";
    }
  
    return newString;
  }
  
  // console.log(reverseWords('phindi is really cool'))
  