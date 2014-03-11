// URL: http://www.problemotd.com/problem/palindromic-numbers/
//
// Palindromic Numbers
// A palindromic number is a number that reads the same forwards as it does backwards. 123321 is a palindromic number where as 321321 is not. Negative numbers may be considered palindromic or not; it's up to you until someone proves otherwise.
//
// Your mission, should you choose to accept it, is to create a program to return whether a number is a palindromic number or not. To make things slightly more interesting you may not use a string or array in your solution. Thus doing something like "123.toString()" is not allowed.
//
// Good luck!
//

function isPalindromic(n) {
  if(isNaN(n)) return false;

  var x = '';
  n = n + '';

  for(i=n.length-1; i>=0; i--) {
    x += n[i];
  }

  return x == n;
}
