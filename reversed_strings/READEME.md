# Reversed Strings

### Code Wars Link

https://www.codewars.com/kata/reversed-strings

### Problem Domain

Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'

### Solutions

  - #### Solution using forEach method and string concatenation

    This solution splits the sting into an array and concatenates the values to a new string

  - #### Solution using split map and pop

    This solution splits the string into an array which is passed to array.map().  Array.map() creates a new array by pop() to remove the last item from the array of string items.  The final array is coerced to a string with join.

  - #### Solution using while loop to push values to an array

    This solution is similar to the previous one but uses a while loop.  One the array is empty and its length is 0, the loop will break.

  - #### Solution using recursive function to push values to an array

    This solution is similar to the previous one but uses a recursive function to create the loop.

  - #### Solution using the array reduce() method

    This is the shortest method using string.match() to split the string into an array and use array.reduce to concatenate the string.
