let str1 = "abba";
let str2 = "pickle";
let str3 = "abcba";
let str4 = "taco cat";

// need to remove the spaces first

function isPalindrome(strF) {
  let str = strF.toLowerCase().split(" ").join("");
  let j = str.length - 1;
  //console.log(str);
  //what is the str length?
  //console.log(str.length);
  for (let i = 0; i < str.length / 2; i++) {
    //  console.log(str[i]);
    //  console.log(str[j]);
    if (str[i] == str[j]) {
      j--;
    } else {
      console.log(str + " is not a palidrome");
      return false;
    }
    //console.log("i: " + i);
    //console.log("j: " + j);

    if (i >= j) {
      console.log(str + " is a palindrome");
      return true;
    }
  }
}

isPalindrome(str1);
isPalindrome(str2);
isPalindrome(str3);
isPalindrome(str4);

// return str == str.split("").reverse().join("")
// as solved by Mark Ohnsmann
function isPalindrome2(str) {
  str = str.toLowerCase().split(" ").join(""); // takes care of the space and capitalization
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    let char1 = str[i];
    let char2 = str[str1.length - 1 - i];
    if (char1 !== char2) {
      return false;
    }
    return true;
  }
}

isPalindrome2(str1);

isPalindrome2(str2);

isPalindrome2(str3);
