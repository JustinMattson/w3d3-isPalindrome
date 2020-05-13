let str1 = "abba";
let str2 = "pickle";
let str3 = "abcba";

function isPalindrome(str) {
  let j = str.length - 1;
  //console.log(str);
  // what is the str length?
  //console.log(str.length);
  for (let i = 0; i < str.length / 2; i++) {
    //console.log(str[i]);
    //console.log(str[j]);
    if (str[i] == str[j]) {
      j--;
    } else {
      console.log(str + " is not a palidrome");
      return str + " is not a palidrome";
    }
    //console.log("i: " + i);
    //console.log("j: " + j);

    if (i >= j) {
      console.log(str + " is a palindrome");
    }
  }
}

isPalindrome(str1);

isPalindrome(str2);

isPalindrome(str3);
