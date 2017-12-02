# Alternate Capitalization

### Code Wars Link

https://www.codewars.com/kata/alternate-capitalization

### Problem Domain

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

### Solutions

  - #### Basic Solution using forEach()
    This solution is basic in its logic.  I split the string into an array, then loop through each item in the array using the forEach method.  The call back function has been refactored to a fat arrow function and the if else block has been refactored to a ternary operator.  If the index of the array item is odd, I concatenate an uppercase value to the odd string and concatenate a lowercase value to the even string. If the index of the array item is even, I concatenate an uppercase value to the even string and concatenate a lowercase value to the odd string.  The values of the even and odd strings are returned as an array.

  - #### Solution Using array.map()
    By splitting the string into an array, I can run the values through array.map() using a call back function.  There are two call back functions, one for odd numbers and one for even numbers.  Array.map() returns a new array based on evaluating the index for being an odd number.  The odd_to_uppercase call back changes the case to uppercase if the index is odd.  The even_to_upper does the opposite.

  - #### Solution Using string.replace() with Regex
    The string.replace() method is being called using a regular expression and a callback.  One call back is for creating a string where odd number indexes are capitalized and the other is for even indexes.  The pattern looks for two characters next to each other.  Each character is captured by wrapping in parenthesis and then can be referenced by p1 and p2 in the call back.  The two callbacks don't discern between odd or even, just first or second.  First is odd and second is even.  If the string is odd in length, there will not be a second value in the last pair, so p2 needs to be evaluated for a value before being returned to the replace() method to be used as the replacement string.
