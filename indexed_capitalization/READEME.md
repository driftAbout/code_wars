# Indexed Capitalization

### Code Wars Link

https://www.codewars.com/kata/indexed-capitalization

### Problem Domain

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!

### Solution

- #### Solution Using reduce(), and forEach()

  1. Create array literal of the string and pass to reduce.  Reduce will only iterate once.

  2. Use s.split() as the accumulator starting point.

  3. Use forEach to loop through the array of indexes.  If the index exists in the accumulator, then redefine the value at that index as a capitol letter.

  4. Return the Accumulator joined on ''.

- #### Solution using split() and reduce

  1. Split the string into an array and chain to reduce.

  2. Concatenate each letter to the accumulator. If the index of the current value is in the array of indexes, then change it to upper case first.

- #### Solution using Array.from() and some()

  1. Split the string into an array with Array.from() and run map.

  2. Use some() to determine whether the index of the current value in in the array of indexes.  If it is, change the case to uppercase before adding it to the array returned by map, otherwise leave it lowercase.

  3. Join the new array on ''.

- #### Solution using Array.from() and includes()

  1. Same as above but using includes for validation against the array of indexes. 
