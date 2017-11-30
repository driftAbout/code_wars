# Insert Dashes

### Code Wars Link

https://www.codewars.com/kata/insert-dashes

### Problem Domain

Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

### White Board Partner

  Dean Murphy

### Solutions

  - #### Simple Long Hand Solution

    This solution uses simple javascript.  With a for loop, I iterate a string using charAt() and compare one number to the number after it. ( charAt(i) and charAt(i + 1)).  If the remainder value of both those characters, as integers, divided by 2 is not equal to 0, then I know both the numbers are odd.  If that is the case, I concat a '-' to the character at index i before concatenating it to a new string that gets returned by the function.


  - #### Solution Using Array Map

    This solution is similar to the solution above, but utilizes array map.  I convert the number to a string, then split the string into an array that gets processed by array.map().  I compare one number to the number after it, and if they are both odd, I concatenate the number at index i with a '-' before returning the value to the new array created by map(), finally joining it back together as a string before returning the value from the function.

  - #### Solution Using Regex and str.replace()

    By using brackets with odd digits, [13579], I can look for a single odd digit that is followed by another single odd digit, (?=([13579])).  I capture the value in parentheses so I can use it to replace that value with the same value but followed by a '-', '$1-'.
