# Nice Array

### Code Wars Link

https://www.codewars.com/kata/nice-array

### Problem Domain

A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

### Solution

- #### Solution using array.every()

  If the array has no length, then it is empty and therefore fails all conditions, so return false.
  Array.every() evaluates each item in the array against the condition in the callback function.  When it finds the the first instance of a falsey value, it stops iterating and returns false.  If it iterates the whole array without returning false, then it returns true.

- #### Solution using array.IndexOf()

  If the array has no length, then it is empty and therefore fails all conditions, so return false.  If not, then loop through the array and check the array for an index with a value of the current index value + 1 or current index value - 1.  If an index does not exist with that value, indexOf() returns -1.  If both instances fail then return false.



- #### Solution using basic javascript

  If the array has no length, then it is empty and therefore fails all conditions, so return false.  This is not ideal, but it works.  Create a new array by setting the index for each value the same as the value itself.  Loop the original array, and using the value at the current index + 1 or the value at the current index - 1 as the index of the new array, check to see if they both return as undefined.  If they do, then the values do not exist in the array so return false.
